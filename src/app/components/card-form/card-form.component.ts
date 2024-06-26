import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../shared/input/input.component';
import { DateFormControl } from '../../shared/dateFormControl/date-form-control';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    ReactiveFormsModule,
    JsonPipe,
    InputComponent,
  ],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css',
})
export class CardFormComponent {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[1-9])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });

  onSubmit() {
    console.log('form was submitted', this.cardForm.value);
  }
  onResetClick() {
    this.cardForm.reset();
  }
}
