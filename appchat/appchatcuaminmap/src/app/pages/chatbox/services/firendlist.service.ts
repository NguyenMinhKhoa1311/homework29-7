import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  query,
  where,
  onSnapshot,
} from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { friendship } from 'src/models/friendship';

@Injectable({
  providedIn: 'root'
})
export class FirendlistService {

  constructor(private firestore: Firestore) { }

  friendList: BehaviorSubject<friendship | null> = new BehaviorSubject<friendship | null>(null)

  async addFriend(xEmail: string, yEmail: string): Promise<boolean> {
    let friendshipCollection = collection(this.firestore, 'friendships');
    let friendship = {
      xEmail: xEmail,
      yEmail: yEmail,
      conversationId: Date.now(),
    };
    try {
      await addDoc(friendshipCollection, friendship);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async getListFriend(myEmail: string) {
    let friendshipCollection = collection(this.firestore, 'friendships');
    let q1 = query(friendshipCollection, where('xEmail', '==', myEmail));
    onSnapshot(q1, (snapshot) => {
      snapshot.docs.map(doc => {
        let friendship = doc.data() as friendship;
        friendship.friendEmail = friendship.yEmail;
        this.friendList.next(friendship);
      });
    });
    let q2 = query(friendshipCollection, where('yEmail', '==', myEmail));
    onSnapshot(q2, (snapshot) => {
      snapshot.docs.map(doc => {
        let friendship = doc.data() as friendship;
        friendship.friendEmail = friendship.xEmail;
        this.friendList.next(friendship);
      });
    });
  }


}
