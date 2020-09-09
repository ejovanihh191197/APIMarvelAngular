import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaComicsComponent } from './tarjeta-comics.component';

describe('TarjetaComicsComponent', () => {
  let component: TarjetaComicsComponent;
  let fixture: ComponentFixture<TarjetaComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaComicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
