import { Component, OnInit, Input } from '@angular/core';
import { SprintData } from '../_model/sprint-data';
import { UserStory } from '../_model/user-story';
import { SprintServiceService } from '../_service/sprint-service.service';

@Component({
  selector: 'app-sprint-panel',
  templateUrl: './sprint-panel.component.html',
  styleUrls: ['./sprint-panel.component.scss']
})
export class SprintPanelComponent implements OnInit {
  @Input() sprint:SprintData;
  private sprintService: SprintServiceService;
  
  constructor(sprintService:SprintServiceService) { 
    this.sprintService = sprintService;
  }


  removeStory(story:UserStory){
    this.sprintService.removeUserStory(story);
  }

  ngOnInit() {
  }

}
