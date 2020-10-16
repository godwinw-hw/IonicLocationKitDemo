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
    path: "analytics",
    loadChildren: () =>
      import("./analytics/analytics.module").then((m) => m.AnalyticsPageModule),
  },
  {
    path: "site",
    loadChildren: () =>
      import("./site/site.module").then((m) => m.SitePageModule),
  },
  {
    path: 'ads',
    loadChildren: () => import('./ads/ads.module').then( m => m.AdsPageModule)
  },
  {
    path: "location",
    loadChildren: () =>
      import("./location/location.module").then((m) => m.LocationPageModule),
  },
  
  {
    path: "push",
    loadChildren: () =>
      import("./push/push.module").then((m) => m.PushPageModule),
  },
  {
    path: "acount",
    loadChildren: () =>
      import("./acount/acount.module").then((m) => m.AcountPageModule),
  },
  {
    path: "location",
    loadChildren: () =>
      import("./location/location.module").then((m) => m.LocationPageModule),
  },
  {
    path: "push",
    loadChildren: () =>
      import("./push/push.module").then((m) => m.PushPageModule),
  },
  {
    path: "acount",
    loadChildren: () =>
      import("./acount/acount.module").then((m) => m.AcountPageModule),
  },
  {
    path: "analytics",
    loadChildren: () =>
      import("./analytics/analytics.module").then((m) => m.AnalyticsPageModule),
  },
  {
    path: "maps",
    loadChildren: () =>
      import("./maps/maps.module").then((m) => m.MapsPageModule),
  },
  {
    path: "site",
    loadChildren: () =>
      import("./site/site.module").then((m) => m.SitePageModule),
  },
  {
    path: 'ads',
    loadChildren: () => import('./ads/ads.module').then( m => m.AdsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
