import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MessageRoomComponent } from './views/message-room/message-room.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { ContainerComponent } from './components/container/container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MessageRoomComponent,
    ChatBoxComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule
{
}
