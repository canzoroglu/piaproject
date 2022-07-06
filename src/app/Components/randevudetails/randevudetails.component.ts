import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-randevudetails',
  templateUrl: './randevudetails.component.html',
  styleUrls: ['./randevudetails.component.css']
})
export class RandevudetailsComponent implements OnInit {

  @Input() randevuByDoctor!:any
  @Input() doctor!:string
  weekdays = ["Pzt", "Sal", "Çarş", "Perş", "Cu"];
  times = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30"]
  constructor(private dialogRef: MatDialog) { }

  openDialog() {
    this.dialogRef.open(RandevuModal)
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'randevu-modal',
  templateUrl: './randevumodal.html'
})

export class RandevuModal {
  constructor() {}
}