import { otelSDK } from './telemetry/tracing';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { readFileSync } from 'fs';
import { join } from 'path';

async function bootstrap() {
  await otelSDK.start();
  const httpsOptions = {
    key: readFileSync(join(__dirname, '..', 'https', '2023-eyc.com.key')),
    cert: readFileSync(join(__dirname, '..', 'https', '2023-eyc.com.cert')),
    allowHTTP1: true,
  };
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    //new FastifyAdapter({ http2: true, https: httpsOptions }),
    new FastifyAdapter(),
  );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Documentation PoC Backend SCDI')
    .setDescription('Documentation PoC Backend SCDI')
    .setVersion('1.0')
    .addTag('SCDI')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //const port = process.env.PORT || 443;
  await app.listen(443, '0.0.0.0');
  Logger.log("i'm up and running");
  // Logger.log(`GraphiQL: https://FR-SahliMA.EYC.COM:443/graphiql`);
  // Logger.log(`🚀 Application is running on: http://localhost:${port}`);
  Logger.log(`GraphiQL: http://localhost:443/graphiql`);
  Logger.log(`Documentation Swagger: http://localhost:443/api`);


}
bootstrap();
