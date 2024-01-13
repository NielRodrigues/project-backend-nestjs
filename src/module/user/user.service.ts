import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { UserDTO } from './user.dto'
import { PrismaService } from 'src/database/PrismaService'
// eslint-disable-next-line prettier/prettier
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async index() {
    const users = await this.prisma.user.findMany()

    return users
  }

  async show(id: number) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    })

    if (!userExists) {
      throw new NotFoundException('User does not exist')
    }

    return userExists
  }

  async create(data: UserDTO) {
    if (data.password_hash) {
      const newData: UserDTO = {
        ...data,
        password_hash: await bcrypt.hash(data.password_hash, 8),
      }

      const user = await this.prisma.user.create({
        data: newData,
      })

      return user
    } else {
      throw new BadRequestException('Password not provider')
    }
  }
}
