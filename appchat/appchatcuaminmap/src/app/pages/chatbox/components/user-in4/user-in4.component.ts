import { Component, Input, OnInit } from '@angular/core';
import { userIn4 } from 'src/models/userIn4';
import { UserIn4Service } from '../../services/user-in4.service';
import { friendship } from 'src/models/friendship';
import { FirendlistService } from '../../services/firendlist.service';
import { FormControl, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-user-in4',
  templateUrl: './user-in4.component.html',
  styleUrls: ['./user-in4.component.scss']
})
export class UserIn4Component implements OnInit {
  @Input() userIn4: userIn4 | null = {
    id: '1311',
    name: 'maploveNauan',
    email: 'maplovenauan@gmail.com',
    imgUrl: 'https://www.cet.edu.vn/wp-content/uploads/2018/05/nghe-nau-an-la-gi.jpg'
  }
  emailFromGroup!: FormGroup
  ngOnInit(): void {
    this.emailFromGroup = new FormGroup({
      email: new FormControl<string>('', [Validators.required])
    });
  }

  constructor(public userIn4Service: UserIn4Service, public friendshipService: FirendlistService) { }
  async addFriend(value: string) {
    let yEmail = value;
    if (yEmail) {
      if (this.userIn4 == null) {
        return;
      }
      let result = await this.friendshipService.addFriend(this.userIn4!.email, yEmail);
      if (result) {
        alert('Add friend success');
      } else {
        alert('Add friend failed');
      }
    }
  }
}
