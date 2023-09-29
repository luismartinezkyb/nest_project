import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService:TasksService){}
    @Get()
    getAllTasks(){
        
        return this.tasksService.getAllTasks()
    }
    @Post()
    createTask(@Body() newTask: CreateTaskDTO){
        return this.tasksService.createTask(newTask.title,newTask.description)
    }

    @Delete(':id')
    deleteTask(@Param() id:any){
        return this.tasksService.deleteTask(id.id);
    }
    // @Put()
    // updateTask()
}
