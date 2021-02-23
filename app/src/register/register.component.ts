import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  confirmpassword = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,

  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required,]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.confirmpassword = false;
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    alert("Record Save to DataBase...")
    this.router.navigate(['/login']);
    this.loading = false;
  }

}
