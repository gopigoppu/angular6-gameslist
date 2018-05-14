import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesListSearchComponent } from './games-list-search.component';

describe('GamesListSearchComponent', () => {
  let component: GamesListSearchComponent;
  let fixture: ComponentFixture<GamesListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
