import alt from '../alt';

class BankActions {
	constructor() {
		this.generateActions('getAllTransactionsSuccess');
	}
	getAllTransactions() {
		$.ajax({ 
  			type: 'GET',
  			url: '/api/bank' 
  		})
      .done(data => {
        this.actions.getAllTransactionsSuccess(data);
      })
      .fail(jqXhr => {
        //
      });
	}

	updateTransaction(index, cat) {
		this.dispatch({'index': index, 'cat': cat});
	}

}

module.exports = alt.createActions(BankActions);