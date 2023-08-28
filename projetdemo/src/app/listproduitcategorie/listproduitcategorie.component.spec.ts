import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproduitcategorieComponent } from './listproduitcategorie.component';

describe('ListproduitcategorieComponent', () => {
  let component: ListproduitcategorieComponent;
  let fixture: ComponentFixture<ListproduitcategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListproduitcategorieComponent]
    });
    fixture = TestBed.createComponent(ListproduitcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
