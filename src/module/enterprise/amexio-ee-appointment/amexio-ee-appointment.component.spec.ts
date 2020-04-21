import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmexioWeekDayAvailiblityComponent } from './amexio-ee-appointment.component';
import { LifeCycleBaseComponent } from '../../base/lifecycle.base.component';
describe('DropDownMenu', () => {
  let comp1: AmexioWeekDayAvailiblityComponent;
  let fixture1: ComponentFixture<AmexioWeekDayAvailiblityComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmexioWeekDayAvailiblityComponent],
      providers: [
    ],

    });
    fixture1 = TestBed.createComponent(AmexioWeekDayAvailiblityComponent);
    comp1 = fixture1.componentInstance;    
  });

  it('constructor call ()', () => {
    expect(comp1.setRoundEdge).toBeTruthy();
  });

  it('initComponent', () => {
    comp1.currentDate = new Date();

    comp1.initComponent();
    comp1.currentDate = new Date();
    expect(comp1.currentDate).toBeDefined();
    comp1.viewData = [];
    comp1.randomid = window.crypto.getRandomValues(new Uint32Array(1))[0];
    expect(comp1.randomid).toBeDefined();
  });

  it('initComponent undefined case', () => {
    comp1.currentDate = undefined;
    comp1.initComponent();
    expect(comp1.currentDate).toBeUndefined();
  });

  it('initComponent null case', () => {
    comp1.currentDate = null;
    comp1.initComponent();
    expect(comp1.currentDate).toBeNull();
  });
});