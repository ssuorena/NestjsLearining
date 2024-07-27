// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import * as mongoose from 'mongoose';

// //export type national_teamDocument = Document{

// export const UserSchema = new mongoose.Schema({
//     _id:String,
//     id: Number,
//     //inner_id: String,
//     name: String,
//     //slug: String,
//     shortName: String,
//     nameCode: String,
//     persian_name: String,
//     flag: String,
//     class:String
// })

// export interface User extends mongoose.Document {
//     _id:string
//     //id: number;
//     //inner_id: string;
//     name: string;
//     //slug: string;
//     shortName: string;
//     nameCode: string;
//     persian_name: string;
//     flag: string;
//     class:string;
//   }
//   export const UserModel = mongoose.model<User>('User', UserSchema);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({ collection: 'users' })
export class User extends Document {
  @Prop()
  id: number;

  @Prop()
  email: string;

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  age: string;

  @Prop()
  password: string;

  @Prop()
  roles: string;

}

export const UserSchema = SchemaFactory.createForClass(User);

export const UserModel = mongoose.model<User>('User', UserSchema);