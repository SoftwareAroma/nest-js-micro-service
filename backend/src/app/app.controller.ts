import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createUser(@Body() createUserDto: { email: string, password: string }): string {
    return this.appService.createUser(createUserDto);
  }

  @Get('analytics')
  getAnalytics() {
    return this.appService.getAnalytics();
  }
}
