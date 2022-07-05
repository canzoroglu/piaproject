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

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    tc: ['', [Validators.required, Validators.pattern(/\d{5}/)]],
    klinik: ['', Validators.required],
  });
  klinikler = Object.keys(klinikler);
  selectedKlinik = "";
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  handleChange(event:EventTarget)
  {
    this.selectedKlinik = (event as HTMLSelectElement).value;
  }

  onSubmit(): void {
    console.warn("loginform", this.profileForm.value);
    this.router.navigate(['/randevular'], {
      state: { data: this.profileForm.value, klinik: this.selectedKlinik},
    });
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Can',
      lastName: 'Zoroğlu',
      tc: '12345',
    });
  }
}
