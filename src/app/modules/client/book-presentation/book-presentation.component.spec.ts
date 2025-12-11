import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPresentationComponent } from './book-presentation.component';

describe('BookPresentationComponent', () => {
  let component: BookPresentationComponent;
  let fixture: ComponentFixture<BookPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookPresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
