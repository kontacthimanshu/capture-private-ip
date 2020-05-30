import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturePrivateIpComponent } from './capture-private-ip.component';

describe('CapturePrivateIpComponent', () => {
  let component: CapturePrivateIpComponent;
  let fixture: ComponentFixture<CapturePrivateIpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturePrivateIpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturePrivateIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
