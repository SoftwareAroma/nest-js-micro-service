import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly users = [];

  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
    @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy,
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserDto: { email: string, password: string }): string {
    this.users.push(createUserDto);
    this.communicationClient.emit('user_created', new CreateUserEvent(createUserDto.email));
    this.analyticsClient.emit('user_created', new CreateUserEvent(createUserDto.email));
    return 'User created';
  }

  getAnalytics() {
    return this.analyticsClient.send({ cmd: 'get_analytics' }, {});
  }
}
