import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeIdiomaComponent } from './cafe-idioma.component';

describe('CafeIdiomaComponent', () => {
  let component: CafeIdiomaComponent;
  let fixture: ComponentFixture<CafeIdiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeIdiomaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeIdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
