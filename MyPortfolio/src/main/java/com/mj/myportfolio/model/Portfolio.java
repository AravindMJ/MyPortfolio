package com.mj.myportfolio.model;

public class Portfolio {
	private Long id;
	private String stockName;
	private Long costPrice;
	private Long marketPrice;
	public Portfolio(Long id, String stockName, Long costPrice, Long marketPrice) {
		super();
		this.id = id;
		this.stockName = stockName;
		this.costPrice = costPrice;
		this.marketPrice = marketPrice;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getStockName() {
		return stockName;
	}
	public void setStockName(String stockName) {
		this.stockName = stockName;
	}
	public Long getCostPrice() {
		return costPrice;
	}
	public void setCostPrice(Long costPrice) {
		this.costPrice = costPrice;
	}
	public Long getMarketPrice() {
		return marketPrice;
	}
	public void setMarketPrice(Long marketPrice) {
		this.marketPrice = marketPrice;
	}
}
