import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  @Input() task!:Task;
  @Input() index!:number;
  @Output() toggle = new EventEmitter<number>(); 

  toggleTask() {
    this.toggle.emit(this.index);
  }

  


}
