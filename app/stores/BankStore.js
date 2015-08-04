import alt from '../alt';

import BankActions from '../actions/BankActions';

class BankStore {
	constructor() {
		this.transactions = [];

		this.bindListeners({
			getAllTransactions: BankActions.GET_ALL_TRANSACTIONS_SUCCESS,
			updateTransaction: BankActions.UPDATE_TRANSACTION
		});
	}

	updateTransaction(transaction) {
		this.transactions[transaction.index].cat = transaction.cat;
	}

	getAllTransactions(transactions) {
		this.transactions = transactions;
	}
}

module.exports = alt.createStore(BankStore, 'BankStore');