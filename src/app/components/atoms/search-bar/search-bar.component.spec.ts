// search-bar.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar.component';
import { By } from '@angular/platform-browser';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, SearchBarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search event when text length >= 3', () => {
    spyOn(component.search, 'emit');
    component.searchText = 'pasta';
    component.onSearch();
    expect(component.search.emit).toHaveBeenCalledWith('pasta');
  });

  it('should not emit search event when text length < 3', () => {
    spyOn(component.search, 'emit');
    component.searchText = 'pa';
    component.onSearch();
    expect(component.search.emit).not.toHaveBeenCalled();
  });

  it('should trigger search on enter key', () => {
    spyOn(component.search, 'emit');
    component.searchText = 'pasta';
    
    const input = fixture.debugElement.query(By.css('input'));
    const enterEvent = new KeyboardEvent('keyup', {
      key: 'Enter'
    });
    
    input.nativeElement.dispatchEvent(enterEvent);
    expect(component.search.emit).toHaveBeenCalledWith('pasta');
  });

  it('should trigger search on button click', () => {
    spyOn(component.search, 'emit');
    component.searchText = 'pasta';
    
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    
    expect(component.search.emit).toHaveBeenCalledWith('pasta');
  });

  it('should clear search text when input is cleared', () => {
    component.searchText = 'pasta';
    fixture.detectChanges();
    
    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = '';
    input.nativeElement.dispatchEvent(new Event('input'));
    
    expect(component.searchText).toBe('');
  });

  it('should update searchText on input change', () => {
    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = 'pasta';
    input.nativeElement.dispatchEvent(new Event('input'));
    
    expect(component.searchText).toBe('pasta');
  });
});