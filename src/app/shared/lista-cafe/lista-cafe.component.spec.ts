import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaCafeComponent } from './lista-cafe.component';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CafeService } from '../../services/cafe.service';
import { Cafe } from '../../models/Cafe.model';
import { TipoCafe } from '../../models/TipoCafe';

describe('ListaCafeComponent', () => {
  let component: ListaCafeComponent;
  let fixture: ComponentFixture<ListaCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ListaCafeComponent], // Add ListaCafeComponent to imports
      providers: [CafeService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListaCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 3 rows of cafe items plus the header', () => {
    // Mock data
    const mockCafes: Cafe[] = [
      { id: 1, nombre: 'Cafe 1', tipo: TipoCafe.Blend, region: 'Region 1' },
      { id: 2, nombre: 'Cafe 2', tipo: TipoCafe.Blend, region: 'Region 2' },
      { id: 3, nombre: 'Cafe 3', tipo: TipoCafe.CafeDeOrigen, region: 'Region 3' }
    ];

    // Set the mock data
    component.cafes = mockCafes;
    fixture.detectChanges();

    // Query the DOM for table rows
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    const header = fixture.debugElement.queryAll(By.css('thead tr'));

    // Expect 3 rows plus the header
    expect(rows.length).toBe(3);
    expect(header.length).toBe(1);
  });
});
