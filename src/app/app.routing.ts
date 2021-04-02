import { ModuleWithProviders } from "@angular/core";
import { PreloadAllModules, Route, RouterModule, Routes } from "@angular/router";

const Routes: Routes = [
   {
      path: '',
      redirectTo: 'auth',
      pathMatch: 'full'
   },
   {
      path: 'auth',
      loadChildren: () => import('@auth/auth.module').then( m => m.AuthModule )
   }
];

export const AppRouting: ModuleWithProviders<Route> = RouterModule.forRoot( Routes, {
   preloadingStrategy: PreloadAllModules,
   useHash: true
});