import { Component } from '@angular/core';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css'],
})
export class SomaComponent {
  first: number | undefined;
  second: number | undefined;

  total: number | undefined;

  public isActive: boolean = false;

  soma(): void {
    if (this.first === undefined || this.second === undefined) {
      return;
    }

    this.total = this.first + this.second;
  }

  limpar(): void {
    this.first = undefined;
    this.second = undefined;
    this.total = undefined;
  }

  mudar(): void {
    this.isActive = !this.isActive;
  }
}
