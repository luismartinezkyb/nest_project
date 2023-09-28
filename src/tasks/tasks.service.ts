import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    getAllTasks(){
        return [
            {
                id:1,
                name:'Hola',
                description:'None'
            }
        ]
    }
    createtTask(){


    }
    updateTask(){

    }
    deleteTask(){

    }
}
