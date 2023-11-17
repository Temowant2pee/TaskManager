import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface HelloWorld{
  helloWorld : string;
  id : number;
}

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {
  httpClient = inject(HttpClient);

  constructor() { }

  public helloWorld() {
    return this.httpClient.get<HelloWorld>("http://localhost:8080");
  }
}
