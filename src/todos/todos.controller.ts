import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete, Put } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto, UpdateTodoDto } from './dto/createTodo.dto';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { ITodo } from './interfaces';

@ApiUseTags('todos')
@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) { }

    @Get('findAll')
    public async getTodos(@Response() res) {
        const todos = await this.todosService.findAll();
        return res.status(HttpStatus.OK).json(todos);
    }
    /*
        @Get('find')
        public async findTodo(@Response() res, @Body() body) {
            const queryCondition = body;
            const todos = await this.todosService.findOne(queryCondition);
            return res.status(HttpStatus.OK).json(todos);
        }*/

    @Get('/:id')
    public async getTodo(@Param('id') id: string, @Response() res) {
        const todos = await this.todosService.findById(id);
        return res.status(HttpStatus.OK).json(todos);
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    public async createTodo(@Response() res, @Body() createTodoDTO: CreateTodoDto) {

        const todo = await this.todosService.create(createTodoDTO);
        return res.status(HttpStatus.OK).json(todo);
    }

    @Put(':id')
    public async updateTodo(@Param('id') id: string, @Response() res, @Body() body: UpdateTodoDto ) {
        const todo = await this.todosService.update(id, body);
        return res.status(HttpStatus.OK).json(todo);
    }
    @Delete(':id')
    async deleteTodo(@Param('id') id: string, @Response() res) {
        const todo = await this.todosService.delete(id);
        return res.status(HttpStatus.OK).json(todo);
    }

}
