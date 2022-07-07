// Bu komponent hastanın tüm randevularını listelemek için
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randevularim',
  templateUrl: './randevularim.component.html',
  styleUrls: ['./randevularim.component.css'],
})
export class RandevularimComponent implements OnInit {
  // doctor = history.state.data.doctor;
  // date = history.state.data.date;
  // time = history.state.data.time;
  data = history.state.data;
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
