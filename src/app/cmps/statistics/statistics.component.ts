import { Component, OnInit, OnDestroy } from '@angular/core'
import { Chart, registerables } from 'chart.js'
import { Observable, Subscription } from 'rxjs'
import { BitcoinService } from 'src/app/services/bitcoin-service/bitcoin.service'

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, OnDestroy {

  subscribe!: Subscription
  marketPrice!: Array<{ x: number, y: number }>

  constructor(private bitcoinService: BitcoinService) {
    Chart.register(...registerables)
  }

  ngOnInit(): void {
    // this.marketPrice = this.bitcoinService.getMarketPrice()

    this.subscribe = this.bitcoinService.getMarketPrice().subscribe((res: any) => {
      this.marketPrice = res.values
      this.getMarketPrice()
    })
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }

  getMarketPrice() {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement
    const ctx = canvas?.getContext('2d')

    const myChart = new Chart(ctx!, {
      type: 'line',
      data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: this.marketPrice.map(item => new Date(item.x * 1000).toLocaleDateString()),
        datasets: [{
          label: 'The average USD market price across major bitcoin exchanges.',
          // data: [12, 19, 3, 5, 2, 3],
          data: this.marketPrice.map(item => item.y),
          backgroundColor: [
            'rgb(254, 202, 30)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 0.1,
          pointBorderWidth: 0.01,
          fill: 'origin'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        elements: {
          point: {
            pointStyle: 'line'
          },
          line: {
            borderColor: 'rgb(254, 202, 30)'
          }
        }
      }
    })
  }

}
