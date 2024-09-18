import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { RegisterService } from '../../Service/register.service';
import { response } from 'express';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup | any;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient,private registerService:RegisterService) { }

  ngOnInit(): void {
    // this.registerForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', Validators.required],
    //   image: [null]
    // });
  }

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const formData = new FormData();
      formData.append('name', this.registerForm.get('name')?.value);
      formData.append('email', this.registerForm.get('email')?.value);
      formData.append('password', this.registerForm.get('password')?.value);
      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }

      // this.registerService.register(this.registerForm.value).subscribe(()=>{
      //   console.log('Registration successful', response);
      //   alert("Register successfully")
      // })

      // this.http.post('http://localhost:8080/UserProfile/save', formData)
      //   .subscribe(response => {
      //     console.log('Registration successful', response);
      //   }, error => {
      //     console.error('Registration error', error);
      //   });
      
    }
  }






}