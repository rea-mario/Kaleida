import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import{ GaleriaComponent} from './galeria/galeria.component';
import{ ContactComponent} from '../app/contact/contact.component';
import{ DisplaysComponent} from '../app/displays/displays.component';
import{CorteVinilComponent } from '../app/corte-vinil/corte-vinil.component';
import{HerreriaComponent } from '../app/herreria/herreria.component';
import{ImpresionDigitalComponent } from '../app/impresion-digital/impresion-digital.component';
import{InstalacionComponent } from '../app/instalacion/instalacion.component';
import{InmobiliarioComponent } from '../app/inmobiliario/inmobiliario.component';

const routes: Routes = [

  { path: 'galeria', component: GaleriaComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'displays', component: DisplaysComponent },
  { path: 'corte', component: CorteVinilComponent },
  { path: 'herreria', component: HerreriaComponent },
  { path: 'impresion-digital', component: ImpresionDigitalComponent },
  { path: 'inmobilario', component: InmobiliarioComponent },
  { path: 'instalacion', component: InstalacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
