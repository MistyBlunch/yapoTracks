import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFavoritesTracksComponent } from './list-favorites-tracks.component';

describe('ListFavoritesTracksComponent', () => {
  let component: ListFavoritesTracksComponent;
  let fixture: ComponentFixture<ListFavoritesTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFavoritesTracksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFavoritesTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
