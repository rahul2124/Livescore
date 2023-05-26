import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KabaadiComponent } from './kabaadi.component';

describe('KabaadiComponent', () => {
  let component: KabaadiComponent;
  let fixture: ComponentFixture<KabaadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KabaadiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KabaadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
