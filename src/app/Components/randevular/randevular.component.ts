import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randevular',
  templateUrl: './randevular.component.html',
  styleUrls: ['./randevular.component.css'],
})
export class RandevularComponent implements OnInit {
  firstName = history.state.data.firstName;
  constructor() {}

  ngOnInit(): void {}
}
