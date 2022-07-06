import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnChanges {

  @Input() doctors!: string[];
  @Input() klinik!: string;
  selectedDoctor = "";
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  toggleDetails(doctor:string):void {
    this.selectedDoctor = doctor;
  }

  ngOnInit(): void {
  
  }

}
