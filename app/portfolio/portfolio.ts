export class Portfolio {
id: number;
stockName: string;
costPrice: number;
marketPrice: number;
constructor(id: number, stockName: string, costPrice: number, marketPrice: number) {
this.id = id;
this.stockName = stockName;
this.costPrice = costPrice;
this.marketPrice = marketPrice;
}
}