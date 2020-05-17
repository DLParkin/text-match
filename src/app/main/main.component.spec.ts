import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should check input fields are not empty', () => {
    component.inputText = '1';
    component.inputSubText = '1';

    expect(component.inputText).toBeGreaterThan(0);
    expect(component.inputSubText).toBeGreaterThan(0);
  });

  it('should check that onSubmit works', () => {
    component.inputText = 'apple';
    component.inputSubText = 'apple';

    const spy = spyOn(component, 'onSubmit').and.callThrough();
    expect(spy).not.toHaveBeenCalled();

    component.onSubmit();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should do nothing if inputs are empty', () => {
    component.inputText = '';
    component.inputSubText = '';

    const spy = spyOn(component, 'onSubmit').and.callThrough();
    expect(spy).not.toHaveBeenCalled();

    component.onSubmit();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should find a match', () => {
    component.inputText = 'apple';
    component.inputSubText = 'apple';

    const spy = spyOn(component, 'onSubmit').and.callThrough();
    expect(spy).not.toHaveBeenCalled();

    component.onSubmit();

    expect(spy).toHaveBeenCalledTimes(1);

    expect(component.indexArray.length).toBe(1);
  });

  it('should find multiple matches', () => {
    component.inputText = 'apple pie';
    component.inputSubText = 'apple, pie';

    const spy = spyOn(component, 'onSubmit').and.callThrough();
    expect(spy).not.toHaveBeenCalled();

    component.onSubmit();

    expect(spy).toHaveBeenCalledTimes(1);

    expect(component.indexArray.length).toBe(2);
  });

  it('should find a match for same word', () => {
    component.inputText = 'apple';
    component.inputSubText = 'apple, apple';

    const spy = spyOn(component, 'onSubmit').and.callThrough();
    expect(spy).not.toHaveBeenCalled();

    component.onSubmit();

    expect(spy).toHaveBeenCalledTimes(1);

    expect(component.indexArray.length).toBe(2);
  });

  it('should not find a match', () => {
    component.inputText = 'apple pie';
    component.inputSubText = 'oranges';

    const spy = spyOn(component, 'onSubmit').and.callThrough();
    expect(spy).not.toHaveBeenCalled();

    component.onSubmit();

    expect(spy).toHaveBeenCalledTimes(1);

    expect(component.indexArray.length).toBe(0);
  });

  it('should ignore casing', () => {
    component.inputText = 'APPLE';
    component.inputSubText = 'apple';

    const spy = spyOn(component, 'onSubmit').and.callThrough();
    expect(spy).not.toHaveBeenCalled();

    component.onSubmit();

    expect(spy).toHaveBeenCalledTimes(1);

    expect(component.indexArray.length).toBe(1);
  });

  it('should find a number in the string', () => {
    component.inputText = '01234';
    component.inputSubText = '2';

    const spy = spyOn(component, 'onSubmit').and.callThrough();
    expect(spy).not.toHaveBeenCalled();

    component.onSubmit();

    expect(spy).toHaveBeenCalledTimes(1);

    expect(component.indexArray.length).toBe(1);
  });

  it('should not fail if substring is longer than string', () => {
    component.inputText = 'apple';
    component.inputSubText = 'a really big apple pie';

    const spy = spyOn(component, 'onSubmit').and.callThrough();
    expect(spy).not.toHaveBeenCalled();

    component.onSubmit();

    expect(spy).toHaveBeenCalledTimes(1);

    expect(component.indexArray.length).toBe(0);
  });
});
