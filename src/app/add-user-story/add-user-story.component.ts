import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserStory } from '../user-story';
import { SprintServiceService } from '../sprint-service.service';
import { SprintData } from '../sprint-data';

@Component({
  selector: 'app-add-user-story',
  templateUrl: './add-user-story.component.html',
  styleUrls: ['./add-user-story.component.scss']
})
export class AddUserStoryComponent implements OnInit {
  @Output() sendUserStory=new EventEmitter<UserStory>();
  
  public newUserStory:UserStory = new UserStory(
    "esempio title",
    "esempio description",
    "creatore");
  private sprintService:SprintServiceService;

  constructor(sprintService:SprintServiceService) {
    this.sprintService = sprintService;
  }
  
  addUserStory(){
    this.sprintService.addUserStory(this.newUserStory);
    this.newUserStory = new UserStory("","","");
  }

  ngOnInit() {
  }

}
