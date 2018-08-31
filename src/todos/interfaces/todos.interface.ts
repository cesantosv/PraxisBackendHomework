import { Document } from 'mongoose';

export interface ITodo extends Document {
     text: string;
     complete: boolean;
}