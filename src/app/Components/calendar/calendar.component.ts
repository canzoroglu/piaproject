import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Randevu } from 'src/app/Models/randevu';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnChanges {

  @Input() randevular!: Randevu[];
  @Input() klinik!: string;
  randevuByDoctor!: any;
  doctors!:string[];  
  
  // isDetailsClicked = false;
  selectedDoctor = "";
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.randevuByDoctor = this.randevular.reduce((acc:any, randevu) => {
      if (!(randevu.doctor in acc))
        acc[randevu.doctor] = [];
      return acc;
    }, {});
    console.log(this.randevuByDoctor);
    this.doctors = Object.keys(this.randevuByDoctor);
  }

  toggleDetails(doctor:string):void {
    this.selectedDoctor = doctor;
    // this.isDetailsClicked = !this.isDetailsClicked;
  }

  ngOnInit(): void {
    console.log("calendar", this.randevular);
    // console.log("days arr", daysArr);
    // console.log("calendar", this.klinik);
    this.randevular.forEach(randevu => {
      this.randevuByDoctor[randevu.doctor].push(randevu.date);
    })
  }

}
