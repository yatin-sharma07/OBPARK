import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './prisma/prisma.module'
import { NewsletterModule } from './newsletter/newsletter.module'
import { AppController } from './app.controller'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    NewsletterModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}