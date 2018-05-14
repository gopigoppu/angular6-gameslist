import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesListPaginationComponent } from './games-list-pagination.component';

describe('GamesListPaginationComponent', () => {
  let component: GamesListPaginationComponent;
  let fixture: ComponentFixture<GamesListPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesListPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
