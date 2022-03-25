import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('mockHttpClient', ['post']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: HttpClient,
          useValue: mockHttpClient,
        },
      ],
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#login', () => {
    it('should call corr endpoint with correct body', () => {
      //Given
      //When
      service.login('test@test.com', '1234');
      //Then
      expect(mockHttpClient.post).toHaveBeenCalledWith(
        'https://reqres.in/api/login',
        { email: 'test@test.com', password: '1234' }
      );
    });
  });
});
