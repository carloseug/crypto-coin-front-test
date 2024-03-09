import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinGroupComponent } from './coin-group.component';

describe('CoinGroupComponent', () => {
  let component: CoinGroupComponent;
  let fixture: ComponentFixture<CoinGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoinGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
