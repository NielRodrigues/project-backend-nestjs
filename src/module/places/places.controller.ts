import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { PlacesService } from './places.service'
import { PlaceDTO } from './places.dto'

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  async index(
    @Query('name') name?: string,
    @Query('state') state?: string,
    @Query('city') city?: string,
  ) {
    return this.placesService.index(name, city, state)
  }

  @Get(':id')
  async show(@Param('id') id: number) {
    return this.placesService.show(id)
  }

  @Post()
  async create(@Body() data: PlaceDTO) {
    return this.placesService.create(data)
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: PlaceDTO) {
    return this.placesService.update(id, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.placesService.delete(id)
  }
}
