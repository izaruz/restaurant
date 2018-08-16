import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private copyDate : any;
  private copyYear : any;
  constructor() { }

  ngOnInit() {
    this.copyDate = new Date();
    this.copyYear = this.copyDate.getFullYear();
  }

}
