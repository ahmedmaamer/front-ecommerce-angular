import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercltComponent } from './headerclt.component';

describe('HeadercltComponent', () => {
  let component: HeadercltComponent;
  let fixture: ComponentFixture<HeadercltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadercltComponent]
    });
    fixture = TestBed.createComponent(HeadercltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
