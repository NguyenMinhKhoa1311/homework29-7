import { Injectable } from '@angular/core';
import { Auth , onAuthStateChanged,signOut } from '@angular/fire/auth';
import {BehaviorSubject} from 'rxjs'
import { userIn4 } from 'src/models/userIn4';

@Injectable({
  providedIn: 'root'
})
export class UserIn4Service {

  userInfo: BehaviorSubject<userIn4 | null> ;
  constructor(private auth:Auth) {
    this.userInfo = new BehaviorSubject<userIn4 | null>({
      id: 'id-001',
      name: 'Mập đẹp trai',
      email: 'map@gmail.com',
      imgUrl:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    } as userIn4);
    onAuthStateChanged(this.auth,(user)=>{
      if(user){
        console.log(user);
        this.userInfo.next({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          imgUrl: user.photoURL
        } as userIn4)
      } else{
        this.userInfo.next(null);
      }
    },
    (error)=>{
      console.log(error);
    })
   }
   async logout() {
    await signOut(this.auth);
  }
}
