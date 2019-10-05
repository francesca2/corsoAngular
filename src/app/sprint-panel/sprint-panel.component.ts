import { Component, OnInit } from '@angular/core';
import { SprintData } from '../sprint-data';
import { UserStory } from '../user-story';
import { SprintServiceService } from '../sprint-service.service';

@Component({
  selector: 'app-sprint-panel',
  templateUrl: './sprint-panel.component.html',
  styleUrls: ['./sprint-panel.component.scss']
})
export class SprintPanelComponent implements OnInit {
  public sprintData:SprintData;
  private sprintService: SprintServiceService;
  
  constructor(sprintService:SprintServiceService) { 
    this.sprintService = sprintService;
    this.sprintData = sprintService.getSprintData();//new SprintData();
  }


  removeStory(story:UserStory){
    this.sprintService.removeUserStory(story);
  }

  ngOnInit() {
  }

}
