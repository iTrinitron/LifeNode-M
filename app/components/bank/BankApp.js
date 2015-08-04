import React from 'react';
import { RouteHandler, Link } from 'react-router';

import connectToStores from 'alt/utils/connectToStores';

import BankStore from '../../stores/BankStore';
import BankActions from '../../actions/BankActions';

import classNames from 'classnames';


class TransactionNode extends React.Component {
	constructor(props) {
		super(props);

		this.evalCategory = this.evalCategory.bind(this);
	}

	evalCategory() {
		switch(this.props.cat) {
			case "3":
				return 'blue';
			default: 
				return 'sky';
		}
	}

	handleClick(num) {
		this.props.handleClick(this.props.index, num);
	}

	render() {
		var dyClass = this.evalCategory(); //dynamic class
		var classes = classNames(dyClass, {
			'transactionNode': true,
			white: (this.props.index%2 == 0)
		})

		return (
			<div className={classes}>
            	<span className="date">{this.props.date}</span>
            	<span className="name">{this.props.name} {this.props.cat}</span>
            	<span className="amount">{this.props.amount}</span>
            	<span className="buttons">
            		<button type="button" onClick={this.handleClick.bind(this, 3)}>Food</button>
            		<button type="button">Product</button>
            		<button type="button">Expense</button>
            		<button type="button">Income</button>
            	</span>
            	<div className="clear"></div>
            </div>
		)
	}
}

class BankList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {sum: 0};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(index, cat) {
		BankActions.updateTransaction(index, cat);
		console.log(this.props.transactions);
	}

	render() {
		return (
			<div className="transactionList">
				{this.props.transactions.map((t, i) => {
		          return (
		            <TransactionNode handleClick={this.handleClick} index={i} cat={t[5]} date={t[0]} ref={t[1]} name={t[2]} location={t[3]} amount={t[4]} />
		          );
		        })}
		        
			</div>
		)
	}

}

@connectToStores
class BankApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	static getStores() {
		return [BankStore];
	}

	static getPropsFromStores() {
		return BankStore.getState();
	}

	handleClick() {
		BankActions.getAllTransactions();
		console.log(this.props);
	}
  render() {
    return (
    	<div>
    		<button onClick={this.handleClick} type="button">Button</button>
    		<BankList {...this.props} />
    		<form>
    			<input type="file" />
    		</form>
      		<RouteHandler />
      	</div>
    );
  }
}; 

export default BankApp;
