import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecategorieComponent } from './updatecategorie.component';

describe('UpdatecategorieComponent', () => {
  let component: UpdatecategorieComponent;
  let fixture: ComponentFixture<UpdatecategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatecategorieComponent]
    });
    fixture = TestBed.createComponent(UpdatecategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
