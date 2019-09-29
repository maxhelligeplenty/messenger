import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MessageRoomComponent } from './views/message-room/message-room.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { LoopbackComponent } from './chat-box.loop-back.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageRoomComponent,
    ChatBoxComponent,
    LoopbackComponent
  ],
  imports:      [
    BrowserModule
  ],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule
{
}
