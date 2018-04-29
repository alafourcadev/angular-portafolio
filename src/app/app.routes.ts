import {Routes, RouterModule} from '@angular/router';

import {AboutComponent, ProductoComponent, PortafolioComponent} from './components/index.paginas';

const routes: Routes = [
  {path: 'home', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'producto/:id', component: ProductoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];


export const app_routing = RouterModule.forRoot(routes, {useHash: true});
