import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/createUser.dto';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { IUser } from './interfaces/user.interface';

@ApiUseTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) { }

    @Get('findAll')
    public async getTodos(@Response() res) {
        const users = await this.UsersService.findAll();
        return res.status(HttpStatus.OK).json(users);
    }
    /*
        @Get('find')
        public async findTodo(@Response() res, @Body() body) {
            const queryCondition = body;
            const todos = await this.todosService.findOne(queryCondition);
            return res.status(HttpStatus.OK).json(todos);
        }*/

    @Get('/:id')
    public async getUser(@Param('id') id: string, @Response() res) {
        const users = await this.UsersService.findById(id);
        return res.status(HttpStatus.OK).json(users);
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    public async createUser(@Response() res, @Body() CreateUserDto: CreateUserDto) {

        const users = await this.UsersService.create(CreateUserDto);
        return res.status(HttpStatus.OK).json(users);
    }

    @Put(':id')
    public async updateUser(@Param('id') id: string, @Response() res, @Body() body: UpdateUserDto ) {
        const users = await this.UsersService.update(id, body);
        return res.status(HttpStatus.OK).json(users);
    }
    @Delete(':id')
    async deleteUser(@Param('id') id: string, @Response() res) {
        const users = await this.UsersService.delete(id);
        return res.status(HttpStatus.OK).json(users);
    }

}
