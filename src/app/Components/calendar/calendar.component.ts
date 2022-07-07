import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnChanges {

  @Input() doctors!: any[];
  @Input() klinik!: string;
  @Input() tc!: string;
  selectedDoctor = "";
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  toggleDetails(doctor:string):void {
    this.selectedDoctor = doctor;
  }

  ngOnInit(): void {
    console.log(this.doctors);
  }

}
