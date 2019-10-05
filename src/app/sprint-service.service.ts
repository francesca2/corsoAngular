import { Injectable } from '@angular/core';
import { SprintData } from './sprint-data';
import { UserStory } from './user-story';

@Injectable({
  providedIn: 'root'
})
export class SprintServiceService {
  private sprintData:SprintData = new SprintData();
  constructor() { }

  public getSprintData(){
    return this.sprintData;
  }
  public addUserStory(userStory:UserStory){
    this.sprintData.userStories.push(userStory);
  }
  public removeUserStory(userStory:UserStory){
    let index = this.sprintData.userStories.indexOf(userStory);
    this.sprintData.userStories.splice(index,1);
  }
}
