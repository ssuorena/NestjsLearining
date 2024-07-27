import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
import * as session from 'express-session';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
  }))

  // Helmet configue
  app.use(helmet({
    xFrameOptions: { 
      action: "deny" 
    },
    referrerPolicy: {
      policy:"no-referrer-when-downgrade"
    }
  }))

  // CORS configue
  app.enableCors({
    origin:'localhost',
    methods:["POST"],
    credentials:true
  });
 
 
 // Session configue
  app.use(
    session({
      name:"Nestjs Learning Session",
      secret: 'session_secret', 
      resave: false,
      saveUninitialized: false,
      cookie:{
        maxAge:30*60*1000,
      }
    }),
  );

   // Passport configue
  app.use(passport.initialize());
  app.use(passport.session());

  // Swagge configue
  const config = new DocumentBuilder()
  .setTitle("Nestjs Learning")
  .setDescription("This is document for test APIs generated in Nestjs learning course")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs',app, document)

  await app.listen(3000);
}
bootstrap();
