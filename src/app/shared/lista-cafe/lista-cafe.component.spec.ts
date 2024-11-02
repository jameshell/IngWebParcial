import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCafeComponent } from './lista-cafe.component';

describe('ListaCafeComponent', () => {
  let component: ListaCafeComponent;
  let fixture: ComponentFixture<ListaCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCafeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
