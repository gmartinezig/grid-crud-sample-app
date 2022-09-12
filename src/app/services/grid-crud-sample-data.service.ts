import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'https://localhost:7244';

@Injectable({
  providedIn: 'root'
})
export class GridCrudSampleDataService {
  constructor(private http: HttpClient) { }

  public getCustomer(): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/Customer`);
  }

  public addCustomer(customer: any) {
    return this.http.post(`${API_ENDPOINT}/Customer`, customer);
  }

  public updateCustomer(customer: any) {
    return this.http.put(`${API_ENDPOINT}/Customer`, customer);
  }

  public deleteCustomer(customerId: any) {
    return this.http.delete(`${API_ENDPOINT}/Customer/${customerId}`);
  }
}
