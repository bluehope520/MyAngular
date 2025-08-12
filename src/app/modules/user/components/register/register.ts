import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  // registerForm = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(6),
  //   ]),
  // });

  private formBuilder = inject(FormBuilder);

  registerForm = this.formBuilder.group({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  ngOnInit() {
    this.registerForm.valueChanges.subscribe((value) => {
      console.log('Register:', value);
    });
    this.registerForm.statusChanges.subscribe((status) => {
      console.log('Status:', status);
    });
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    console.log('Submit:', this.registerForm.getRawValue());
  }
}
