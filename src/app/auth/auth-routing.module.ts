import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './main/main.component';



const routes: Routes = [
  
  {
    path : '',
    component: MainComponent,
    children: [
      {path: 'home', component: HomeComponent },
      {path: 'login', component: LoginComponent },
      {path: 'register', component: RegisterComponent },
      {path: '',pathMatch: 'full', redirectTo: 'home' },
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
