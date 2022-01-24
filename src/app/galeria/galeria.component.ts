import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openNewTab() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/example'])
    );
  
    window.open(url, '_blank');
  }
}
