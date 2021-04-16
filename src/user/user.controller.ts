import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto, ReadUserDto } from './dtos'
import { UserService } from './user.service';
import { ApiResponse, ApiParam } from '@nestjs/swagger';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}
    @ApiResponse({ type: ReadUserDto, status: 201 })
    @Post()
    async create(@Body() user: CreateUserDto): Promise<CreateUserDto> {
        return await this.userService.create(user);
    }

    @ApiResponse({ type: [ReadUserDto], status: 200 })
    @Get()
    async findAll(): Promise<ReadUserDto[]>{
        return await this.userService.findAll();;
    }

    @ApiParam({
        name: 'Id',
        description: 'The numerical ID of the user you want to fetch',
        type: Number
    })
    @ApiResponse({ type: ReadUserDto, status: 200 })
    @Get(':id')
    async find(@Param() params): Promise<ReadUserDto> {
        return await this.userService.findById(params.id);
    }
}   