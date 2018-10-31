import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
private apiUrl = '/api/portfolios';

  constructor(private http: Http) { }
  
  findAll(): Promise<Array<Portfolio>> {
  return this.http.get(this.apiUrl)
  .toPromise()
  .then(response => response.json() as Portfolio[])
  .catch(this.handleError);
  }
  
  createPortfolio(portfolio: Portfolio): Promise<Array<Portfolio>> {
 let pfHeaders = new Headers({ 'Content-Type': 'application/json' });
 return this.http.post(this.apiUrl, JSON.stringify(portfolio), { headers: pfHeaders })
 .toPromise()
 .then(response => response.json() as Portfolio[])
 .catch(this.handleError);
 }
  
  deletePortfolioById(id: number): Promise<Array<Portfolio>> {
 const url = `${this.apiUrl}/${id}`;
 return this.http.delete(url)
 .toPromise()
 .then(response => response.json() as Portfolio[])
 .catch(this.handleError);
 }
  
  private handleError(error: any): Promise<Array<any>> {
  console.error('An error occurred ', error);
  return Promise.reject(error.message || error);
  }
}
