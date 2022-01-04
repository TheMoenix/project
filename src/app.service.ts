import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>Hello, This page created by NestJs.</h1>' +
        '<h1><a href="./tab1">click here to visit react pages</a></h1>';
  }
}
