import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import { config } from 'dotenv';
import * as rateLimit from 'express-rate-limit';
import { AppModule } from './app.module';
import { sessionMiddleware } from './config/sessionmiddleware';
import { RedisIoAdapter } from './config/redis.adapter';
import { redis } from './config/redis';
import { join } from 'path';

const RedisStore = require('rate-limit-redis');

config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useWebSocketAdapter(new RedisIoAdapter(app));
  app.useStaticAssets(join(__dirname, '..', 'static'), { prefix: '/ws' });
  app.setGlobalPrefix('api');
  app.set('trust proxy', 1);
  app.use(helmet());
  app.use(morgan('tiny'));
  app.enableCors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  });

  app.use(sessionMiddleware);
  app.use(
    rateLimit({
      store: new RedisStore({
        client: redis,
      }),
      windowMs: 60 * 1000,
      max: 5000,
    }),
  );

  const options = new DocumentBuilder()
    .setTitle('Docs')
    .setDescription('Xonia REST API')
    .setLicense('AGPL v3', 'https://github.com/xoniaapp/app/LICENSE')
    .setVersion('2.3.0')
    .addCookieAuth("xa" )
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/', app, document);
  await app.listen(process.env.PORT || 8080);
  // logout it
  await console.log(`Server started on http://localhost:${process.env.PORT}`);
}

bootstrap();
