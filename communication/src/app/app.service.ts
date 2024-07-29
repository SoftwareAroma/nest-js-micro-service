import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: any) {
    console.log(`Hanlde user created - COMMUNICATION : ${data.email}`);
    /// email user and welcome them to the service and all...
  }
}
