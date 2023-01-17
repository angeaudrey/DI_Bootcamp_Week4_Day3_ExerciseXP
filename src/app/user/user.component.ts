import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UtilisateursService } from '../utilisateurs.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users!: User[];

  constructor(private userService: UtilisateursService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => this.users = data );
  }

}
