import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Component

import { Index3Component } from './index3/index3.component';




const routes: Routes = [
  {
    path:'',
    component:Index3Component
  },
 
  {
    path:'index3',
    component:Index3Component,
    pathMatch:'full'
    
  },

  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
