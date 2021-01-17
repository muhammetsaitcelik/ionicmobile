import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RealdataPage } from './realdata.page';

describe('RealdataPage', () => {
  let component: RealdataPage;
  let fixture: ComponentFixture<RealdataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealdataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealdataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
