import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ValibotModule } from 'nestjs-valibot';
import { configurationFactory } from '@/app/config';
import { HealthModule } from '@/app/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurationFactory],
    }),
    ValibotModule.forRoot({}),
    HealthModule,
  ],
})
export class AppModule { }
