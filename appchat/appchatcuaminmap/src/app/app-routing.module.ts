import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren:()=> import('./pages/login/login.module').then(m => m.LoginModule),
    pathMatch: 'full'
  },
  {
    path: 'chat',
    loadChildren:()=>import('./pages/chatbox/chatbox.module').then(m=> m.ChatboxModule),
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
