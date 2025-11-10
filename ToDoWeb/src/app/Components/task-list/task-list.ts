import { Component,OnInit } from '@angular/core';
import { TaskItem } from '../task-item/task-item';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService,Task } from '../../task';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule,FormsModule,TaskItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks: Task[] = [];
  newTask = '';

  constructor(private taskService: TaskService) {}
  ngOnInit() {
    this.refreshTasks();
  }
  onToggleTask(index: number) {
    this.taskService.toggleTask(index);
    this.refreshTasks();
  }

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask.trim());
      this.newTask = '';
      this.refreshTasks();
    }
  }

  refreshTasks() {
    this.tasks = this.taskService.getTasks();
  }

}
