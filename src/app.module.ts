import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { UserModule } from './module/user/user.module'
import { PlacesModule } from './module/places/places.module'

@Module({
  imports: [UserModule, PlacesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
