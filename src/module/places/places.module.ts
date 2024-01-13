import { Module } from '@nestjs/common'
import { PlacesService } from './places.service'
import { PlacesController } from './places.controller'
import { PrismaService } from 'src/database/PrismaService'

@Module({
  controllers: [PlacesController],
  providers: [PlacesService, PrismaService],
})
export class PlacesModule {}
