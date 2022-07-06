/*
Bu komponent hastanın seçtiği klinikteki uygun randevuları gösteren ve hastanın bunlardan birini seçip
randevu almasına olanak tanımaktadır.
*/
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-randevular',
  templateUrl: './randevular.component.html',
  styleUrls: ['./randevular.component.css'],
})
export class RandevularComponent implements OnInit {
  profileForm = this.fb.group({
    date: ['', Validators.required],
    time: ['', Validators.required],
    doctor: ['', Validators.required],
  });

  // history.state.data.klinik ve doctors buraya loginform.component.ts'den geliyor
  klinik = history.state.klinik;
  doctors = history.state.doctors;
  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit(): void {
    console.warn("randevular", this.profileForm.value);
    this.router.navigate(['/randevularim'], {
      state: { data: this.profileForm.value },
    });
  }

  ngOnInit(): void {
  }
}

