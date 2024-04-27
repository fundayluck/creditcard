import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from './components/card-form/card-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardFormComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'creditcard';
}
