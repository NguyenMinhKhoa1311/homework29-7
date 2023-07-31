import { Component,  EventEmitter, Output } from '@angular/core';
import { UserIn4Service } from '../../services/user-in4.service';
import { FirendlistService } from '../../services/firendlist.service';
import { friendship } from 'src/models/friendship';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.scss']
})
export class FriendlistComponent {
  
  @Output() selectedFriend: EventEmitter<friendship> = new EventEmitter();
  friendList: Array<friendship> = []
  constructor(
    public userIn4Service: UserIn4Service,
     public friendListService: FirendlistService
     ){
      this.userIn4Service.userInfo.subscribe((user) => {
        if (user == null) {
          return;
        }
        this.friendListService.getListFriend(user?.email ?? '');
      });
      this.friendListService.friendList.subscribe((friendship) => {
        if (friendship == null) {
          return;
        }
        if (
          !this.friendList
            .map((f) => f.friendEmail)
            .includes(friendship.friendEmail)
        ) {
          this.friendList.push(friendship);
          console.log(friendship)
          
        }
      });
     }

     chatWith(friendship: friendship) {
      console.log(friendship);
      this.selectedFriend.emit(friendship);
     }

}
