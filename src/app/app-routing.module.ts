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
    path: 'mobile-detail/:id',
    loadChildren: () => import('./mobile-detail/mobile-detail.module').then( m => m.MobileDetailPageModule)
  },
  {
    path: 'mobile-phone',
    loadChildren: () => import('./mobile-phone/mobile-phone.module').then( m => m.MobilePhonePageModule)
  },
  {
    path: 'place-ad-form',
    loadChildren: () => import('./place-ad-form/place-ad-form.module').then( m => m.PlaceAdFormPageModule)
  },
  {
    path: 'place-ad-form-2',
    loadChildren: () => import('./place-ad-form-2/place-ad-form-2.module').then( m => m.PlaceAdForm2PageModule)
  },
  {
    path: 'tablets-and-mobile',
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
