import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { busquedaPage } from './busqueda.page';

describe('busquedaPage', () => {
  let component: busquedaPage;
  let fixture: ComponentFixture<busquedaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [busquedaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(busquedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
