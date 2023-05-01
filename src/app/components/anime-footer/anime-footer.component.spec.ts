import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeFooterComponent } from './anime-footer.component';

describe('AnimeFooterComponent', () => {
  let component: AnimeFooterComponent;
  let fixture: ComponentFixture<AnimeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
