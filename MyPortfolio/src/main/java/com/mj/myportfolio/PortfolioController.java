package com.mj.myportfolio;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.mj.myportfolio.model.Portfolio;

@RestController
@RequestMapping(value = "/api/portfolios")
public class PortfolioController {
	private List<Portfolio> portfolios = new ArrayList<Portfolio>();

	PortfolioController() {
		this.portfolios = buildPortfolios();
	}

	@RequestMapping(method = RequestMethod.GET)
	public List<Portfolio> getPortfolios() {
		return this.portfolios;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Portfolio getPortfolio(@PathVariable("id") Long id) {
		return this.portfolios.stream().filter(pf -> pf.getId() == id).findFirst().orElse(null);
	}

	@RequestMapping(method = RequestMethod.POST)
	public List<Portfolio> savePortfolio(@RequestBody Portfolio pf) {
		Long nextId = 0L;
		if (this.portfolios.size() != 0) {
			Portfolio lastPf = this.portfolios.stream().skip(this.portfolios.size() - 1).findFirst().orElse(null);
			nextId = lastPf.getId() + 1;
		}
		pf.setId(nextId);
		this.portfolios.add(pf);
		return this.portfolios;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public List<Portfolio> deletePortfolio(@PathVariable Long id) {
		for (Iterator<Portfolio> itr = this.portfolios.iterator(); itr.hasNext();) {
			Portfolio pf = itr.next();
			Long inId = pf.getId();
			if (inId == (id)) {
				itr.remove();
			}
		}
		return this.portfolios;
	}

	List<Portfolio> buildPortfolios() {
		List<Portfolio> pfs = new ArrayList<>();
		Portfolio pf1 = buildPortfolio(1L, "Microsoft", 101L, 105L);
		Portfolio pf2 = buildPortfolio(2L, "Apple", 175L, 215L);
		pfs.add(pf1);
		pfs.add(pf2);
		return pfs;
	}

	Portfolio buildPortfolio(Long id, String stockName, Long costPrice, Long marketPrice) {
		Portfolio emp = new Portfolio(id, stockName, costPrice, marketPrice);
		return emp;
	}
}
