import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PortfolioListComponent } from './portfolio/portfolio-list/portfolio-list.component';

const routes: Routes = [
	{ path: 'portfolios', component:  PortfolioListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
