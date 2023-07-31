import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatboxRoutingModule } from './chatbox-routing.module';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { UserIn4Component } from './components/user-in4/user-in4.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FriendlistComponent } from './components/friendlist/friendlist.component';
import { ChatmessageComponent } from './components/chatmessage/chatmessage.component';
import { InputMessageComponent } from './components/input-message/input-message.component';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    ChatboxComponent,
    UserIn4Component,
    FriendlistComponent,
    ChatmessageComponent,
    InputMessageComponent,


  ],
  imports: [
    CommonModule,
    ChatboxRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule


  ]
})
export class ChatboxModule { }
