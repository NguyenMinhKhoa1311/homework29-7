import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserIn4Service } from '../../services/user-in4.service';
import { friendship } from 'src/models/friendship';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent {
  friendship: friendship | null = null;

  constructor(public userIn4Service: UserIn4Service, public router: Router){

    this.userIn4Service.userInfo.subscribe((user) => {
      if (user == null) {
        this.router.navigate(['/login']);
      }
    });
  }
  selectedFriend($event: friendship) {
    console.log($event);
    this.friendship = $event;
  }
}
