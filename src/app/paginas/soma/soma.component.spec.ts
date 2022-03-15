import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomaComponent } from './soma.component';

fdescribe('SomaComponent', () => {
  let component: SomaComponent;
  let fixture: ComponentFixture<SomaComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SomaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomaComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a login form', () => {
    expect(template.querySelector('button[data-test="mudar"]')).toBeTruthy;
    expect(template.querySelector('button[data-test="somar"]')).toBeTruthy;
    expect(template.querySelector('button[data-test="limpar"]')).toBeTruthy;
    expect(template.querySelector('input[data-test="firstValue"]')).toBeTruthy;
    expect(template.querySelector('input[data-test="secondValue"]')).toBeTruthy;
    expect(template.querySelector('input[data-test="result"]')).toBeTruthy;
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
