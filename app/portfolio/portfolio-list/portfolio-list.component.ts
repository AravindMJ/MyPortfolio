import { Component, OnInit } from '@angular/core';
import { Portfolio } from "../portfolio";
import { PortfolioService } from "../portfolio.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {
private portfolios: Portfolio[];
constructor(private router: Router,
 private portfolioService: PortfolioService) { }
ngOnInit() {
 this.getAllPortfolios();
 }
  getAllPortfolios() {
 this.portfolioService.findAll().then(
 portfolios => {
 this.portfolios = portfolios;
 },
 err => {
 console.log(err);
 }
);
 }
  createPortfolio() {
 let stockName = (<HTMLInputElement>document.getElementById('stockName')).value;
 let costPrice = (<HTMLInputElement>document.getElementById('costPrice')).value;
 let marketPrice = (<HTMLInputElement>document.getElementById('marketPrice')).value;
 let portfolio = new Portfolio(0, stockName, Number(costPrice), Number(marketPrice));
 this.portfolioService.createPortfolio(portfolio).then(
 portfolios => {
 this.portfolios = portfolios;
 },
 err => {
 console.log(err);
 }
 );
 }
  deletePortfolio(portfolio: Portfolio) {
 this.portfolioService.deletePortfolioById(portfolio.id).then(
 portfolios => {
 this.portfolios = portfolios;
 },
 err => {
 console.log(err);
 }
 );
 }
}
