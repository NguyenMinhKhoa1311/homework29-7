import { Injectable } from '@angular/core';
import { Firestore, doc, limitToLast, onSnapshot, orderBy, query, setDoc } from '@angular/fire/firestore';
import { collection} from '@firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { message } from 'src/models/message';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private firestore: Firestore) { }

  messages:  BehaviorSubject<message[]> = new BehaviorSubject<message[]>([]);
  listenMessages(conversationId: string){
    let messageCollection = collection(this.firestore, 'messages-'+conversationId);
    let q = query(messageCollection, orderBy('timestamp'),limitToLast(100));
    onSnapshot(q,(snapshot)=>{
      let messages = new Array<message>();
      for (let doc of snapshot.docs) {
        let message = doc.data() as message;
        messages.push(message);
      }
      this.messages.next(messages);
    });
  }
  async send(conversationId: string, message: message) {
    let messageCollection = collection(
      this.firestore,
      'messages-' + conversationId
    );
    let currentTime = Date.now();
    message.timestamp = currentTime;
    try {
      // set doc with timestamp
      await setDoc(doc(messageCollection, currentTime.toString()), message);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

}
