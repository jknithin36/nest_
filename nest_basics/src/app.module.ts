import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
// import z from 'zod';

@Module({
  imports: [
    HelloModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      // validationSchema: z.object({
      //   APP_NAME: z.string().default('defaultAPP'),
      // }),
      load: [appConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
