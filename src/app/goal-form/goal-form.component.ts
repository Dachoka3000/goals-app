import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Newgoal} from '../newgoal'

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {
  newGoal= new Newgoal(0,"","", new Date());
  @Output() addGoal = new EventEmitter<Newgoal>();

  submitGoal(){
    this.addGoal.emit(this.newGoal);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
