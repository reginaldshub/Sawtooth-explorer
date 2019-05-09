import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { 

  }

  transactions() {
    return this.http.get("http://localhost:8008/transactions");
  }

  state() {
    return this.http.get("http://localhost:8008/state");
  }

  blocks() {
    return this.http.get("http://localhost:8008/blocks");
  }

  batches() {
    return this.http.get("http://localhost:8008/batches");
  }
}