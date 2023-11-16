import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HelloWorld} from "./hello-world.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ToolsPanelComponent} from "./component/tools-panel/tools-panel.component";
import {TaskPanelComponent} from "./component/task-panel/task-panel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, ToolsPanelComponent, TaskPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
  message : string ="Bad message !"
  httpClient = inject(HttpClient);
  constructor() {
  }
  getHelloWorld() {
     this.httpClient.get<HelloWorld>("http://localhost:8080").subscribe({
       next : value => {
         this.message = value.helloWorld;
       }
     });
  }
}
