import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaSuperheroeComponent } from './tarjeta-superheroe.component';

describe('TarjetaSuperheroeComponent', () => {
  let component: TarjetaSuperheroeComponent;
  let fixture: ComponentFixture<TarjetaSuperheroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaSuperheroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaSuperheroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
