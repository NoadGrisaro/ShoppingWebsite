import { Injectable } from '@angular/core';

export interface Task {
  description: string;
  done: boolean;
}


@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasks: Task[] = [];
    getTasks(): Task[] {
        return this.tasks;
    }
    addTask(desc: string): void {
        this.tasks.push({
            description:desc,
            done:false
        });
    }
    toggleTask(index: number): void {
       this.tasks[index].done = !this.tasks[index].done;
    }
}