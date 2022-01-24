import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { DisenoGraficoComponent } from './diseno-grafico/diseno-grafico.component';
import { ImpresionDigitalComponent } from './impresion-digital/impresion-digital.component';
import { CorteVinilComponent } from './corte-vinil/corte-vinil.component';
import { HerreriaComponent } from './herreria/herreria.component';
import { SerigrafiaComponent } from './serigrafia/serigrafia.component';
import { ServLaminadoComponent } from './serv-laminado/serv-laminado.component';
import { OffsetComponent } from './offset/offset.component';
import { DisplaysComponent } from './displays/displays.component';
import { InstalacionComponent } from './instalacion/instalacion.component';
import { ServDigitalesComponent } from './serv-digitales/serv-digitales.component';
import { StandsComponent } from './stands/stands.component';
import { CncComponent } from './cnc/cnc.component';
import { InmobiliarioComponent } from './inmobiliario/inmobiliario.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { AppProgressMaskComponent } from './app-progress-mask/app-progress-mask.component';
import { MapaComponent } from './mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    ContactComponent,
    NosotrosComponent,
    DisenoGraficoComponent,
    ImpresionDigitalComponent,
    CorteVinilComponent,
    HerreriaComponent,
    SerigrafiaComponent,
    ServLaminadoComponent,
    OffsetComponent,
    DisplaysComponent,
    InstalacionComponent,
    ServDigitalesComponent,
    StandsComponent,
    CncComponent,
    InmobiliarioComponent,
    GaleriaComponent,
    AppProgressMaskComponent,
    MapaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
