import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

async function startApplication() {
  try {
    await bootstrap();
    console.log('Application started successfully.');
  } catch (error) {
    console.error('Failed to start the application:', error);
  }
}

startApplication();
