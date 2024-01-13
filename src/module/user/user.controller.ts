import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { UserDTO } from './user.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: UserDTO) {
    return this.userService.create(data)
  }

  @Get()
  async index() {
    return this.userService.index()
  }

  @Get(':id')
  async show(@Param('id') id: number) {
    return this.userService.show(id)
  }
}
