import { Component, OnInit, Input } from '@angular/core';
import { Randevu } from 'src/app/Models/randevu';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Input() randevular!: Randevu[];
  constructor() { }

  ngOnInit(): void {
  }

}
