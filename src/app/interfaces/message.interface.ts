import { UserInterface } from './user.interface';
import { RoomInterface } from './room.interface';

export interface MessageInterface
{
  message:string;
  from:UserInterface;
  to:UserInterface;
  room:RoomInterface;
}
