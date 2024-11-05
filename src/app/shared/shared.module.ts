import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Swiper
import { SlickCarouselModule } from 'ngx-slick-carousel';

// Counter
import { CountUpModule } from 'ngx-countup';

// bootstrap component
import { ModalModule } from 'ngx-bootstrap/modal';

//Component
import { FeaturesComponent } from './features/features.component';
import { ProcessComponent } from './process/process.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { SommesComponent } from './sommes/sommes.component';



@NgModule({
  declarations: [
    FeaturesComponent,
    ProcessComponent,
    ClientsComponent,
    SommesComponent,
    ContactComponent
    

  ],
  imports: [
    CommonModule,
    ModalModule,
    SlickCarouselModule,
    CountUpModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports:[
    FeaturesComponent,
    ProcessComponent,
    ClientsComponent,
    SommesComponent,
    ContactComponent
    
  ]

})
export class SharedModule { }
