import { Component, Input } from '@angular/core';
import { friendship } from 'src/models/friendship';
import { UserIn4Service } from '../../services/user-in4.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-chatmessage',
  templateUrl: './chatmessage.component.html',
  styleUrls: ['./chatmessage.component.scss']
})
export class ChatmessageComponent {
  constructor(private userIn4Service: UserIn4Service , public messageService: MessageService){
    this.userIn4Service.userInfo.subscribe(user =>{
      this.myEmail = user?.email??'';
    })
  }
  friendship: friendship | null = null;
  @Input() set _friendship(friendship: friendship | null){
    this.friendship = friendship;
    this.messageService.listenMessages(friendship?.conversationId ?? '');
    console.log(friendship);
  }
  myEmail = '';
  

}
