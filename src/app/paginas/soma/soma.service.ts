import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SomaService {
  emitirSoma = new EventEmitter();

  constructor() {}
}
