import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioRoutingModule } from './portfolio-routing.module'
import { PortfolioService } from './portfolio.service';
@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  declarations: [PortfolioListComponent],
  providers: [PortfolioService]
})
export class PortfolioModule { }
