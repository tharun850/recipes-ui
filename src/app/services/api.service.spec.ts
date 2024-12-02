// api.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { provideHttpClient } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [ApiService, provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all recipes', () => {
    const mockRecipes = [
      { id: 1, name: 'Recipe 1' },
      { id: 2, name: 'Recipe 2' }
    ];

    service.getAllRecipes().subscribe(recipes => {
      expect(recipes).toEqual(mockRecipes);
    });

    const req = httpMock.expectOne('/assets/sample.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockRecipes);
  });

  // it('should search recipes', () => {
  //   const mockRecipes = [
  //     { id: 1, name: 'Pasta' }
  //   ];

  //   service.searchRecipes('pasta').subscribe(recipes => {
  //     expect(recipes).toEqual(mockRecipes);
  //   });

  //   const req = httpMock.expectOne('assets/sample.json');
  //   expect(req.request.method).toBe('GET');
  //   req.flush(mockRecipes);
  // });

});