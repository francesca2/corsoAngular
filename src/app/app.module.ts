import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { SprintPanelComponent } from './sprint-panel/sprint-panel.component';
import { AddUserStoryComponent } from './add-user-story/add-user-story.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BottomComponent,
    InfoPanelComponent,
    SprintPanelComponent,
    AddUserStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
