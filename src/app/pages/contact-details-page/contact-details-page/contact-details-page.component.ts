import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact-service/contact.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
  }

}
