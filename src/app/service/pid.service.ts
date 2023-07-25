import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PidService {

  constructor() { 


  }

  private _pId: number = 0;

  get pId(): number {
    return this._pId;
  }

  incrementPId(): void {
    this._pId++;
  }
}
