import { AuthController } from './5.WebAPI/controllers/auth-controller';
import { BLModule } from 'src/3.BL/BL.module';
import { PersonController } from 'src/5.WebAPI/controllers/person-controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BL_PROVIDER, SECURITY_PROVIDER } from './5.WebAPI/api.config';
import { SecurityModule } from './4.Security/security.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BLModule,
    SecurityModule
  ],
  providers: [
    BL_PROVIDER,
    SECURITY_PROVIDER
  ],
  controllers: [PersonController, AuthController]
})
export class AppModule { }
