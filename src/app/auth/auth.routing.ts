import { ModuleWithProviders } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "@auth/auth.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

const Routes: Routes = [
   {
      path: '',
      component: AuthComponent,
      children: [
         {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
         },
         {
            path: 'login',
            component: LoginComponent,
            pathMatch: 'full'
         },
         {
            path: 'register',
            component: RegisterComponent,
            pathMatch: 'full'
         }
      ]
   }
];

export const AuthRouting: ModuleWithProviders<Route> = RouterModule.forChild( Routes );