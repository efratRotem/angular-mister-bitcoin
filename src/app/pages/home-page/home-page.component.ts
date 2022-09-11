import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact-service/contact.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user!: Contact

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.user = this.contactService.getUser()
    this.user.coins = 100
    console.log(this.user);

  }

}
