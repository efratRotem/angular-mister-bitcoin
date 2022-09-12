import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { BitcoinService } from 'src/app/services/bitcoin-service/bitcoin.service';
import { ContactService } from 'src/app/services/contact-service/contact.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user!: Contact
  btc!: number

  constructor(
    private contactService: ContactService,
    private bitcoinService: BitcoinService
    ) { }

  ngOnInit(): void {
    this.getUser()
    const btc$ = this.bitcoinService.getRate()
    btc$.subscribe((rate: number) => {
      this.btc = rate
      console.log(this.btc);
      
    })
  }

  getUser() {
    this.user = this.contactService.getUser()
    this.user.coins = 100
    console.log(this.user);

  }

}