import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mobile-phone',
    loadChildren: () => import('./mobile-phone/mobile-phone.module').then( m => m.MobilePhonePageModule)
  },
  {
    path: 'place-ad',
    loadChildren: () => import('./place-ad/place-ad.module').then( m => m.PlaceAdPageModule)
  },
  {
    path: 'mobile-details',
    loadChildren: () => import('./mobile-details/mobile-details.module').then( m => m.MobileDetailsPageModule)
  },
  {
    path: 'tablets',
    loadChildren: () => import('./tablets-and-mobile/tablets-and-mobile.module').then( m => m.TabletsAndMobilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
