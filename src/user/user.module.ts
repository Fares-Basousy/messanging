import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { UserSchema, User } from 'src/Schema/UserSchema';
import { RoomSchema, Room } from 'src/Schema/Room.schema';
import { MessageSchema, Message} from 'src/Schema/Message.Schema'
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

 @Module({
  imports:[MongooseModule.forFeature([
    {name: User.name, schema: UserSchema },
    {name: Message.name, schema: MessageSchema }, 
    {name:Room.name, schema: RoomSchema }]),
    JwtModule.register({}),],
  providers: [UserService]
})
export class UserModule {}
