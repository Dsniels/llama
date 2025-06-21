import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb"
import {NzIconModule} from "ng-zorro-antd/icon"
import {NzLayoutModule} from "ng-zorro-antd/layout"
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzIconModule, NzBreadCrumbModule, NzLayoutModule, NzMenuModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'llama';
}
