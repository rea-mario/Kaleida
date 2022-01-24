import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-progress-mask',
  templateUrl: './app-progress-mask.component.html',
  styleUrls: ['./app-progress-mask.component.scss']
})
export class AppProgressMaskComponent implements OnInit {
  @Input() showProgress:boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
