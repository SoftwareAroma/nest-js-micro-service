import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user-event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('user_created')
  async handleUserCreated(data: CreateUserEvent) {
    return this.appService.handleUserCreated(data);
  }

  @MessagePattern({ cmd: 'get_analytics' })
  async getAnalytics() {
    return this.appService.getAnalytics();
  }
}
