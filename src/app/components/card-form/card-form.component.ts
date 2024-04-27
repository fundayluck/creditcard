import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css',
})
export class CardFormComponent {
  cardForm = new FormGroup({
    name: new FormControl(''),
    number: new FormControl(''),
    exp: new FormControl(''),
    cvc: new FormControl(''),
  });
}
