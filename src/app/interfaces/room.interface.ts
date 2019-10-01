import { UserInterface } from './user.interface';

export interface RoomInterface
{
  roomUUID:string;
  roomId:number;
  members:Array<UserInterface>
}
