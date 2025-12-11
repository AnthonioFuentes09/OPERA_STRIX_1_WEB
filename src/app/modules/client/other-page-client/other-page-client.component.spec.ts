import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPageClientComponent } from './other-page-client.component';

describe('OtherPageClientComponent', () => {
  let component: OtherPageClientComponent;
  let fixture: ComponentFixture<OtherPageClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherPageClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherPageClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
