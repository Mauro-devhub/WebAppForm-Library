import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { registroPage } from './registro.page';

describe('registroPage', () => {
  let component: registroPage;
  let fixture: ComponentFixture<registroPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [registroPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(registroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
