import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Component
import { LayoutComponent } from './layout/layout.component';
import { Index3Component } from './pages/index3/index3.component';

const routes: Routes = [
  { path: '',component:LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }, 

  {
    path:'',
    component:Index3Component,
  },
  {
    path:'index3',
    component:Index3Component,
    pathMatch:'full'
    
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
