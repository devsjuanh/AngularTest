import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofeeListComponent } from './cofee-list.component';

describe('CofeeListComponent', () => {
  let component: CofeeListComponent;
  let fixture: ComponentFixture<CofeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CofeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CofeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
