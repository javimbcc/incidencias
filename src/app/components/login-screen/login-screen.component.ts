import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  @Output() formData: EventEmitter<{
    email: string;
    password: string;
  }> = new EventEmitter();
  constructor(private service: CrudService,private fb: FormBuilder) {}



}
