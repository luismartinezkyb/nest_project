import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';

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
    updateTask(){

    }
    deleteTask(id:string){
        console.log("id:",id)
        // const data= this.tasks.filter(task => task.id === id);
        
        // if(data.length === 0){
        //     return 'Task not found'
        // }
        this.tasks=this.tasks.filter(task => task.id !== id);

        return 'Task deleted successfully'
    }
}
