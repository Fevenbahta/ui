import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shared-nav',
  templateUrl: './shared-nav.component.html',
  styleUrls: ['./shared-nav.component.scss']
})
export class SharedNavComponent implements OnInit {
  @Input() buttons: any[] = [];
 
  
  constructor() { }

  ngOnInit(): void {
   
  }
  

}
