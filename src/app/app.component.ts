import { MessageService } from './message.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExerciseXP';
  message =" ";
constructor(private MessageService:MessageService)
{
  this.message = MessageService.getMessage();
}
}
