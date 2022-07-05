import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-randevudetails',
  templateUrl: './randevudetails.component.html',
  styleUrls: ['./randevudetails.component.css']
})
export class RandevudetailsComponent implements OnInit {

  @Input() randevuByDoctor!:any
  @Input() doctor!:string
  constructor() { }

  ngOnInit(): void {
  }

}
