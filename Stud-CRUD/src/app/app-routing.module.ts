import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full'},
  { path:'login', component:LoginComponent},
  { path:'register', component:RegisterComponent},
  { path:'dashboard', component:DashboardComponent},
  { path:'verify-email', component:VerifyEmailComponent},
  // Route de gestion des erreurs 404
  { path: '**', component: PageNotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
