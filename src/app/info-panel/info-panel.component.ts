import { Component, OnInit } from '@angular/core';
import { SprintData } from '../_model/sprint-data';
import { SprintServiceService } from '../_service/sprint-service.service';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent implements OnInit {

  public sprintData:SprintData[];
  private sprintService: SprintServiceService;
  
  constructor(sprintService:SprintServiceService) { 
    this.sprintService = sprintService;

    sprintService.getAllSprintData().subscribe(
      data => this.sprintData = data
    );
  }

  ngOnInit() {
  }

}
