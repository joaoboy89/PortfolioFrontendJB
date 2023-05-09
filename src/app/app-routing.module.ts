import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BodyComponent } from './componentes/body/body.component';
import { Page404Component } from './componentesAdicionales/page404/page404.component';
import { PortfolioComponent } from './componentesAdicionales/portfolio/portfolio.component';
import { LoginComponent } from './componentesAdicionales/login/login.component';
import { GuardsGuard } from './servicios/guards.guard';
import { RegisterComponent } from './componentesAdicionales/register/register.component';
import { Login2Component } from './componentesAdicionales/login2/login2.component';

const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent, /*canActivate:[GuardsGuard]*/},
  {path: 'login2', component: Login2Component},
  {path: 'register', component: RegisterComponent},
  {path: 'page404', component: Page404Component},
  {path: 'inicio', component: HeaderComponent},
  {path: 'contacto', component: FooterComponent},
  {path: 'experiencias', component: BodyComponent},
  {path: '', redirectTo: '/login2', pathMatch: 'full'},
  {path: '**', redirectTo: '/page404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
