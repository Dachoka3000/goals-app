import { Component, OnInit } from '@angular/core';
import {Newgoal} from '../newgoal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Newgoal[] = [
    new Newgoal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,10,14)),
    new Newgoal(2,'Buy Cookies','I have to buy cookies for the parrot', new Date(2021,6,9)),
    new Newgoal(3,'Get new Phone Case','Diana has her birthday coming up soon', new Date(2021,8,7)),
    new Newgoal(4,'Get Dog Food','Pupper likes expensive snacks', new Date(2020,11,5)),
    new Newgoal(5,'Solve math homework','Damn Math',new Date(2020,9,23)),
    new Newgoal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2020,12,12)),
  ];

  toggleDetails(index){
    this.goals[index].showDescription= !this.goals[index].showDescription;
  }

  deleteGoal(isComplete, index){
    if(isComplete){
      let toDelete= confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
    
      if(toDelete){
        this.goals.splice(index,1)
      }
    }
  }

  addNewGoal(goal){
    let goalLength= this.goals.length;
    goal.id= goalLength+1
    goal.completeDate= new Date(goal.completeDate)
    this.goals.push(goal)
  }
  constructor() { }

  ngOnInit() {
  }

}
