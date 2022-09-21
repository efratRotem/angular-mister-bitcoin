import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user';
import { BitcoinService } from 'src/app/services/bitcoin-service/bitcoin.service';
import { ContactService } from 'src/app/services/contact-service/contact.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user!: User
  btc!: number
  dollar!: number

  constructor(
    private contactService: ContactService,
    private bitcoinService: BitcoinService,
    private userService: UserService,

  ) { }

  ngOnInit(): void {
    console.log('\n*@*@*@*@*@*@*@*@*@*@*@*@*@*@ \nThank you for watching my first project in Angulra.\nThe project is still in developing stage.\n*@*@*@*@*@*@*@*@*@*@*@*@*@*@')
    
    this.getUser()
    const btc$ = this.bitcoinService.getRate()
    btc$.subscribe((rate: number) => {
      this.btc = rate
      this.dollar = this.user.coins ? this.user.coins / rate : 0
    })
  }

  getUser() {
    this.user = this.userService.getUser()
    this.user.coins = 100
  }

}
