// Bu komponent hasta bilgilerini alıp, ilgili klinik için randevu alma sayfasına yönlendirecek
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { klinikler } from 'src/app/Models/randevu';
import { allConstants } from 'src/app/constants';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthdate: ['', Validators.required],
    tc: ['', [Validators.required, Validators.pattern(/\d{11}/)]],
    klinik: ['', Validators.required],
  });
  // klinikler : string[] = [];
  klinikler : string[] = Object.keys(klinikler);
  selectedKlinik = "";
  isValidPerson = false;
  doctorsInKlinik = [];
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    // fetch(`${allConstants.BASE_URL}/klinikler`)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.klinikler = json;
    //     console.log(this.klinikler);
    //   });
  }

  handleChange(event:EventTarget)
  {
    this.selectedKlinik = (event as HTMLSelectElement).value;
  }

  // handleTextInputKeyDown(event: Event)
  // {
  //   console.log((event.target! as HTMLInputElement).value);
  //   return /[a-z]/i.test((event.target! as HTMLInputElement).value)
  // }

  onSubmit(): void {
    console.log("loginform", this.profileForm.value);
    // fetch(`${allConstants.BASE_URL}/validateperson`, {
    //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //   mode: 'no-cors', // no-cors, *cors, same-origin
    //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: 'same-origin', // include, *same-origin, omit
    //   headers: {
    //     'Content-Type': 'application/json'
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   redirect: 'follow', // manual, *follow, error
    //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //   body: JSON.stringify(this.profileForm.value) // body data type must match "Content-Type" header
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.isValidPerson = json;
    //     console.log(this.isValidPerson);
    //     if(this.isValidPerson)
    //     {
    //       this.router.navigate(['/randevular'], {
    //         state: { data: this.profileForm.value, klinik: this.selectedKlinik},
    //       });
    //     }
    //   });
    fetch(`${allConstants.BASE_URL}/doctor/doctorBranch?branch=${this.selectedKlinik}`)
      .then((response) => response.json())
      .then((json) => {
        this.doctorsInKlinik = json;
        console.log(this.doctorsInKlinik);
      });

      this.router.navigate(['/randevular'], {
        state: { data: this.profileForm.value, klinik: this.selectedKlinik, doctors:this.doctorsInKlinik},
      });
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Can',
      lastName: 'Zoroğlu',
      birthdate: '1990',
      tc: '12345678910',
    });
  }
}
