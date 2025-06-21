import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base-component',
  imports: [CommonModule],
  templateUrl: './base-component.html',
  styleUrl: './base-component.css',
})
export class BaseComponent implements OnDestroy {
   $Destroy = new Subject<void>();

  ngOnDestroy(): void {
    this.$Destroy.next();
    this.$Destroy.complete();
  }
}
