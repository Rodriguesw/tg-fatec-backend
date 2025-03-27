import { Controller, Get } from '@nestjs/common';

@Controller('example')
export class ExampleController {
  @Get()
  getExample(): object {
    return { message: 'Esta é uma rota de exemplo!' };
  }
}