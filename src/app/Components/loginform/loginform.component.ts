import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

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
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.warn(this.profileForm.value);
    this.router.navigate(['/randevular'], {
      state: { data: this.profileForm.value },
    });
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Can',
      lastName: 'Zoroğlu',
    });
  }
}
