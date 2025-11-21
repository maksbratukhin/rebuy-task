import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataAccessOffers } from './data-access-offers';

describe('DataAccessOffers', () => {
  let component: DataAccessOffers;
  let fixture: ComponentFixture<DataAccessOffers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAccessOffers],
    }).compileComponents();

    fixture = TestBed.createComponent(DataAccessOffers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
