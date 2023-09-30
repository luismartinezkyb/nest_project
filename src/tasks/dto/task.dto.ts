import { TaskStatus } from "../tasks.entity"
import {IsIn, IsNotEmpty, IsString, Min, MinLength} from 'class-validator'

export class CreateTaskDTO{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title:string
    description:string
}

export class UpdateTaskDTO{
    title?:string
    description?:string
    @IsIn([TaskStatus.PENDING, TaskStatus.DONE,TaskStatus.IN_PROGRESS])
    status?:TaskStatus
}