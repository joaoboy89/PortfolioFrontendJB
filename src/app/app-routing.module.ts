import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BodyComponent } from './componentes/body/body.component';
import { Page404Component } from './componentesAdicionales/page404/page404.component';
import { PortfolioComponent } from './componentesAdicionales/portfolio/portfolio.component';
import { LoginComponent } from './componentesAdicionales/login/login.component';
import { GuardsGuard } from './servicios/guards.guard';

const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent, canActivate:[GuardsGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'page404', component: Page404Component},
  {path: 'inicio', component: HeaderComponent},
  {path: 'contacto', component: FooterComponent},
  {path: 'experiencias', component: BodyComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/page404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
