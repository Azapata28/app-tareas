import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../models/task.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  constructor(public taskService: TaskService) { }

  ngOnInit() {
     this.taskService.getTasks().subscribe(tasks =>{
       this.tasks = tasks;
     });
  }


}
