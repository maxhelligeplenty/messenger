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

  public sendMessage(message) {
    return message;
  }

}


