import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { MainComponent } from './pages/main/main.component';
import { PagarComponent } from './pages/contacto/contacto.component';
//import { AppModule } from './app.module';

const routes: Routes = [
  {path: 'producto', component: ProductoComponent},
  {path:'main', component: MainComponent  },
  {path: 'contacto', component: PagarComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
