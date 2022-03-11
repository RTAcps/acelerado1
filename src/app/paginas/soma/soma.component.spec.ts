import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomaComponent } from './soma.component';

fdescribe('SomaComponent', () => {
  let component: SomaComponent;
  let fixture: ComponentFixture<SomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SomaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#soma', () => {
    it('should add first and second', () => {
      //Given
      component.first = 1;
      component.second = 2;
      //When
      component.soma();
      //Then
      expect(component.total).toEqual(3);
    });
  });

  describe('#limpar', () => {
    it('should undefined first, second and total', () => {
      //Given
      component.first = undefined;
      component.second = undefined;
      //When
      component.limpar();
      //Then
      expect(component.total).toEqual(undefined);
    });
  });

  describe('#mudar', () => {
    it('should change mudar', () => {
      //Given
      component.isActive = false;
      //When
      component.mudar();
      //Then
      expect(component.total).toBeTrue;
    });
  });
});
