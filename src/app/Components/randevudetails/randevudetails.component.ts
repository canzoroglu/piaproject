import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { allConstants } from 'src/app/constants';


@Component({
  selector: 'app-randevudetails',
  templateUrl: './randevudetails.component.html',
  styleUrls: ['./randevudetails.component.css']
})
export class RandevudetailsComponent implements OnInit {

  @Input() doctor!:any
  @Input() tc!:string
  dates: string[] = [];
  times = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30"];
  randevuDate: string = "";
  constructor(private dialogRef: MatDialog, private router: Router) { }
  padTo2Digits(num:number) {
    return num.toString().padStart(2, '0');
  }
  
  formatDate(date:Date) {
    return (
      [
        date.getFullYear(),
        this.padTo2Digits(date.getMonth() + 1),
        this.padTo2Digits(date.getDate()),
        
      ].join('-') +
      ' ' +
      [
        this.padTo2Digits(date.getHours()),
        this.padTo2Digits(date.getMinutes())
      ].join(':')
    );
  }
  
  // 👇️ 10/24/2021 16:51:53 (mm/dd/yyyy hh:mm:ss)
  handleTimeButtonClick(event:Event)
  {
    let randevuDay = (event.composedPath()[1] as HTMLElement).innerText.split("\n")[0];
    let hour = ((event.target as HTMLButtonElement).innerText);
    this.randevuDate = this.formatDate(new Date(`${randevuDay} ${hour}`));
    fetch(`${allConstants.BASE_URL}/appointment/save`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({doctorId: this.doctor.id, dateTime: this.randevuDate, patientId:this.tc}) // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((json) => {
        this.router.navigate(['/randevularim'], {
          state: { data: {doctorId: this.doctor.id, randevuDate: this.randevuDate, tc:this.tc}},
        });
      });
  }
  openDialog() {
    this.dialogRef.open(RandevuModal)
  }

  ngOnInit(): void {
    let dates = []
    let today = new Date();
    while (dates.length < 5)
    {
      let day = today.getDay();
      if(day > 0 && day < 6)
      {
        dates.push(today.toLocaleDateString());
      }
      today.setDate(today.getDate() + 1);
    }
   this.dates = [...dates];
  }

}

@Component({
  selector: 'randevu-modal',
  templateUrl: './randevumodal.html'
})

export class RandevuModal {
  constructor() {}
}