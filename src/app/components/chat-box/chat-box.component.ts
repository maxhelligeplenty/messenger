import { Component } from '@angular/core';

@Component({
  selector:    'chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls:   ['./chat-box.component.scss']
})
export class ChatBoxComponent
{
  protected message:string;
  protected messages:Array<string> = [];

  protected message2:string;
  protected messages2:Array<string> = [];

  public sendMessage(message:string):void {
    if(message === undefined || message === null || this.messages === null || this.messages === undefined){
        return;
    }
    this.messages.push(message);
  }

  public sendMessage2(message2:string):void {
    if(message2 === undefined || message2 === null || this.messages2 === null || this.messages2 === undefined){
        return;
    }
    this.messages2.push(message2);
  }

}