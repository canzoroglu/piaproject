import { Component, OnInit } from '@angular/core';
import { Post } from '../../Models/post';
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
  firstName = history.state.data.firstName;
  posts: Post[] = [];
  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit(): void {
    console.warn(this.profileForm.value);
    this.router.navigate(['/randevularim'], {
      state: { data: this.profileForm.value },
    });
  }

  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => (this.posts = json));
  }
}

/*
API'den uygun randevuları çek. Kullanıcı view'den randevu gün, saatini ve doktoru seçecek ve 
randevu oluşturucak 
*/
