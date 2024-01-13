import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/database/PrismaService'
import { PlaceDTO } from './places.dto'

@Injectable()
export class PlacesService {
  constructor(private prisma: PrismaService) {}

  async index(name?: string, city?: string, state?: string) {
    let where = {}

    if (state) {
      where = {
        ...where,
        state,
      }
    }

    if (name) {
      where = {
        ...where,
        name: { contains: name },
      }
    }

    if (city) {
      where = {
        ...where,
        city: { contains: city },
      }
    }

    const places = await this.prisma.place.findMany({
      where,
    })

    return places
  }

  async show(id: number) {
    const place = await this.prisma.place.findUnique({
      where: {
        id: Number(id),
      },
    })

    if (!place) {
      throw new NotFoundException('Place does not exist')
    }

    return place
  }

  async create(data: PlaceDTO) {
    const place = await this.prisma.place.create({
      data,
    })

    return place
  }

  async update(id: number, data: PlaceDTO) {
    const PlaceExist = await this.prisma.place.findUnique({
      where: {
        id: Number(id),
      },
    })

    if (!PlaceExist) {
      throw new NotFoundException('Place does not exist')
    }

    const place = await this.prisma.place.update({
      data,
      where: {
        id: Number(id),
      },
    })

    return place
  }

  async delete(id: number) {
    const PlaceExist = await this.prisma.place.findUnique({
      where: {
        id: Number(id),
      },
    })

    if (!PlaceExist) {
      throw new NotFoundException('Place does not exist')
    }

    await this.prisma.place.delete({
      where: {
        id: Number(id),
      },
    })

    return PlaceExist
  }
}
