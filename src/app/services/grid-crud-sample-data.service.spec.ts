import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GridCrudSampleDataService } from './grid-crud-sample-data.service';

describe('GridCrudSampleDataService', () => {
  let service: GridCrudSampleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GridCrudSampleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
