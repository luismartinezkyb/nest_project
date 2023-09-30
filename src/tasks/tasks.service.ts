import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { UpdateTaskDTO } from './dto/task.dto';

@Injectable()
export class TasksService {
    private tasks:Task[]= [
        {
            id:'1',
            title:'Hola',
            description:'None',
            status:TaskStatus.PENDING
        }
    ] 
    getAllTasks(){
        return this.tasks
    }
    createTask(title:string, description:string){
        const task:Task = {
            id: new  Date().toISOString(),
            title,
            description,
            status:TaskStatus.PENDING
            
        }
        this.tasks.push(task)

        return task

    }
    updateTask(id:string, updatedFields:UpdateTaskDTO){
        const data = this.getTaskById(id);
        if(!data){
            return 'Task not found'
        }
        
        const newTask = Object.assign(data, updatedFields)
        this.tasks = this.tasks.map(task=> task.id===id ? newTask:task)
        return newTask
    }
    deleteTask(id:string){
        this.tasks=this.tasks.filter(task => task.id !== id);

        return 'Task deleted successfully'
    }

    getTaskById(id:string){
        return this.tasks.find(task=>task.id === id);
    }
}
