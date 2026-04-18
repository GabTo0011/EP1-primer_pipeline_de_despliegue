import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {}

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {}

  @Post()
  create(@Body() createUserDto: any) {}

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: any,
  ) {}

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {}
}
