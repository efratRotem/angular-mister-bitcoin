import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user!: Contact

  constructor() { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    console.log('Getting user')

  }

}
