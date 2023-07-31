import { Component, Input } from '@angular/core';
import { friendship } from 'src/models/friendship';
import { UserIn4Service } from '../../services/user-in4.service';
import { MessageService } from '../../services/message.service';
import { message } from 'src/models/message';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.scss']
})
export class InputMessageComponent {
  message = '';
  @Input() friendship: friendship | null = null;
  myEmail = '';
  constructor(private userIn4Service: UserIn4Service, private messageService: MessageService) {
    this.userIn4Service.userInfo.subscribe(user => {
      this.myEmail = user?.email ?? '';
    });
  }
  async send() {
    if (this.message == '') {
      return;
    }
    if (this.myEmail == '') {
      return;
    }
    await this.messageService.send(this.friendship?.conversationId ?? '', <message>{
      senderEmail: this.myEmail,
      content: this.message,
      timestamp: 0,
      receiverEmail: this.friendship?.friendEmail ?? '',
    });
  }

}
