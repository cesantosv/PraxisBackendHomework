import { Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:admin123@ds237832.mlab.com:37832/nest'),
    TodosModule,
    UsersModule],
   controllers: [],
  providers: [],
})
export class AppModule {}
