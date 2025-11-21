import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureOffers } from './feature-offers';

describe('FeatureOffers', () => {
  let component: FeatureOffers;
  let fixture: ComponentFixture<FeatureOffers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureOffers],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureOffers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
