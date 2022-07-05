/*
Bu komponent hastanın seçtiği klinikteki uygun randevuları gösteren ve hastanın bunlardan birini seçip
randevu almasına olanak tanımaktadır.
*/
import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../Models/post';
import { Randevu, randevular } from '../../Models/randevu';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
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
  // firstName = history.state.data.firstName;
  // posts: Post[] = [];

  // history.state.data.klinik buraya loginform.component.ts'den geliyor
  klinik = history.state.klinik;
  filteredRandevular: Randevu[] = randevular.filter(randevu => randevu.klinik === this.klinik);
  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit(): void {
    console.warn("randevular", this.profileForm.value);
    this.router.navigate(['/randevularim'], {
      state: { data: this.profileForm.value },
    });
  }

  ngOnInit(): void {
    // console.log(this.klinik)
    // console.log("randevular",this.filteredRandevular);
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((json) => (this.posts = json));
  }
}

