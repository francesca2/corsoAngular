import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintPanelComponent } from './sprint-panel.component';

describe('SprintPanelComponent', () => {
  let component: SprintPanelComponent;
  let fixture: ComponentFixture<SprintPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
