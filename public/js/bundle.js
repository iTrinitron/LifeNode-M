(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var BankActions = (function () {
  function BankActions() {
    _classCallCheck(this, BankActions);

    this.generateActions('getAllTransactionsSuccess');
  }

  _createClass(BankActions, [{
    key: 'getAllTransactions',
    value: function getAllTransactions() {
      var _this = this;

      $.ajax({
        type: 'GET',
        url: '/api/bank'
      }).done(function (data) {
        _this.actions.getAllTransactionsSuccess(data);
      }).fail(function (jqXhr) {
        //
      });
    }
  }, {
    key: 'updateTransaction',
    value: function updateTransaction(index, cat) {
      this.dispatch({ 'index': index, 'cat': cat });
    }
  }]);

  return BankActions;
})();

module.exports = _alt2['default'].createActions(BankActions);

},{"../alt":4}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var alt = require('../alt');

var ExerciseActions = (function () {
  function ExerciseActions() {
    _classCallCheck(this, ExerciseActions);

    this.generateActions('getAllExercisesSuccess'); //Creates a default this.dispatch() version
  }

  _createClass(ExerciseActions, [{
    key: 'addExercise',
    value: function addExercise(exercise) {
      this.dispatch(exercise);
    }
  }, {
    key: 'fetchExercises',
    value: function fetchExercises(str) {
      this.actions.getAllExercises();
      this.dispatch(str);
    }
  }, {
    key: 'getAllExercises',
    value: function getAllExercises() {
      var _this = this;

      $.ajax({
        type: 'GET',
        url: '/api/exercises'
      }).done(function (data) {
        _this.actions.getAllExercisesSuccess(data);
      }).fail(function (jqXhr) {
        //
      });
    }
  }]);

  return ExerciseActions;
})();

module.exports = alt.createActions(ExerciseActions);

},{"../alt":4}],3:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var alt = require('../alt');

var WorkoutActions = (function () {
  function WorkoutActions() {
    _classCallCheck(this, WorkoutActions);
  }

  _createClass(WorkoutActions, [{
    key: 'addExercise',
    value: function addExercise(exercise) {
      this.dispatch(exercise);
    }
  }, {
    key: 'addSet',
    value: function addSet(exerciseIndex, reps, weight) {
      var disObj = { exerciseIndex: exerciseIndex, reps: reps, weight: weight };
      this.dispatch(disObj);
    }
  }, {
    key: 'removeExercise',
    value: function removeExercise(exerciseIndex) {
      this.dispatch(exerciseIndex);
    }
  }]);

  return WorkoutActions;
})();

module.exports = alt.createActions(WorkoutActions);

},{"../alt":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppNodeJs = require('./AppNode.js');

var _AppNodeJs2 = _interopRequireDefault(_AppNodeJs);

var appList = [{ name: "Workout", route: "workout" }, { name: "Bank", route: "bank" }];

var AppList = (function (_React$Component) {
  _inherits(AppList, _React$Component);

  function AppList() {
    _classCallCheck(this, AppList);

    _get(Object.getPrototypeOf(AppList.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AppList, [{
    key: 'render',
    value: function render() {
      var AppNodes = appList.map(function (app) {
        return _react2['default'].createElement(_AppNodeJs2['default'], { name: app.name, route: app.route });
      });

      return _react2['default'].createElement(
        'div',
        null,
        AppNodes
      );
    }
  }]);

  return AppList;
})(_react2['default'].Component);

exports['default'] = AppList;

/*
var React = require('react');
var AppNode = require('./AppNode.jsx');

var appList = [
  { name: "Bank", route: "bank"},
  { name: "Workout", route: "workout"},
  { name: "Clock", route:"clock"}
];

var AppList = React.createClass({
  render: function() {
  	var AppNodes = appList.map(function(app) {
		return ( <AppNode name={app.name} route={app.route} /> );
	}); 

    return (
      <div>
      	{AppNodes}
      </div>
    );
  }
});

//This is what is returned
module.exports = AppList;

*/
module.exports = exports['default'];

},{"./AppNode.js":6,"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
		value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var AppNode = (function (_React$Component) {
		_inherits(AppNode, _React$Component);

		function AppNode() {
				_classCallCheck(this, AppNode);

				_get(Object.getPrototypeOf(AppNode.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(AppNode, [{
				key: 'render',
				value: function render() {
						return _react2['default'].createElement(
								_reactRouter.Link,
								{ to: this.props.route },
								_react2['default'].createElement(
										'div',
										{ className: 'block appNode' },
										this.props.name
								)
						);
				}
		}]);

		return AppNode;
})(_react2['default'].Component);

exports['default'] = AppNode;
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
"use strict";

var React = require('react');

var Footer = React.createClass({
  displayName: "Footer",

  render: function render() {
    return React.createElement(
      "footer",
      { className: "footer" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "p",
          { className: "text-muted" },
          "Michael Chin"
        )
      )
    );
  }
});

//This is what is returned
module.exports = Footer;

},{"react":"react"}],8:[function(require,module,exports){
'use strict';

var React = require('react');

var _require = require('react-router');

var Link = _require.Link;

var Header = React.createClass({
		displayName: 'Header',

		render: function render() {
				return React.createElement(
						'nav',
						{ className: 'navbar navbar-default' },
						React.createElement(
								'div',
								{ className: 'container-fluid' },
								React.createElement(
										Link,
										{ to: 'home' },
										React.createElement(
												'div',
												{ className: 'navbar-header' },
												React.createElement(
														'a',
														{ className: 'navbar-brand', href: '#' },
														'Life App'
												)
										)
								)
						)
				);
		}
});

//This is what is returned
module.exports = Header;

},{"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

var LifeApp = (function (_React$Component) {
  _inherits(LifeApp, _React$Component);

  function LifeApp() {
    _classCallCheck(this, LifeApp);

    _get(Object.getPrototypeOf(LifeApp.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(LifeApp, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(Header, null),
        _react2['default'].createElement(_reactRouter.RouteHandler, null),
        _react2['default'].createElement('div', { className: 'clear' }),
        _react2['default'].createElement(Footer, null)
      );
    }
  }]);

  return LifeApp;
})(_react2['default'].Component);

exports['default'] = LifeApp;
module.exports = exports['default'];

},{"./Footer.jsx":7,"./Header.jsx":8,"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _altUtilsConnectToStores = require('alt/utils/connectToStores');

var _altUtilsConnectToStores2 = _interopRequireDefault(_altUtilsConnectToStores);

var _storesBankStore = require('../../stores/BankStore');

var _storesBankStore2 = _interopRequireDefault(_storesBankStore);

var _actionsBankActions = require('../../actions/BankActions');

var _actionsBankActions2 = _interopRequireDefault(_actionsBankActions);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var TransactionNode = (function (_React$Component) {
	_inherits(TransactionNode, _React$Component);

	function TransactionNode(props) {
		_classCallCheck(this, TransactionNode);

		_get(Object.getPrototypeOf(TransactionNode.prototype), 'constructor', this).call(this, props);

		this.evalCategory = this.evalCategory.bind(this);
	}

	_createClass(TransactionNode, [{
		key: 'evalCategory',
		value: function evalCategory() {
			switch (this.props.cat) {
				case "3":
					return 'blue';
				default:
					return 'sky';
			}
		}
	}, {
		key: 'handleClick',
		value: function handleClick(num) {
			this.props.handleClick(this.props.index, num);
		}
	}, {
		key: 'render',
		value: function render() {
			var dyClass = this.evalCategory(); //dynamic class
			var classes = (0, _classnames2['default'])(dyClass, {
				'transactionNode': true,
				white: this.props.index % 2 == 0
			});

			return _react2['default'].createElement(
				'div',
				{ className: classes },
				_react2['default'].createElement(
					'span',
					{ className: 'date' },
					this.props.date
				),
				_react2['default'].createElement(
					'span',
					{ className: 'name' },
					this.props.name,
					' ',
					this.props.cat
				),
				_react2['default'].createElement(
					'span',
					{ className: 'amount' },
					this.props.amount
				),
				_react2['default'].createElement(
					'span',
					{ className: 'buttons' },
					_react2['default'].createElement(
						'button',
						{ type: 'button', onClick: this.handleClick.bind(this, 3) },
						'Food'
					),
					_react2['default'].createElement(
						'button',
						{ type: 'button' },
						'Product'
					),
					_react2['default'].createElement(
						'button',
						{ type: 'button' },
						'Expense'
					),
					_react2['default'].createElement(
						'button',
						{ type: 'button' },
						'Income'
					)
				),
				_react2['default'].createElement('div', { className: 'clear' })
			);
		}
	}]);

	return TransactionNode;
})(_react2['default'].Component);

var BankList = (function (_React$Component2) {
	_inherits(BankList, _React$Component2);

	function BankList(props) {
		_classCallCheck(this, BankList);

		_get(Object.getPrototypeOf(BankList.prototype), 'constructor', this).call(this, props);

		this.state = { sum: 0 };
		this.handleClick = this.handleClick.bind(this);
	}

	_createClass(BankList, [{
		key: 'handleClick',
		value: function handleClick(index, cat) {
			_actionsBankActions2['default'].updateTransaction(index, cat);
			console.log(this.props.transactions);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;

			return _react2['default'].createElement(
				'div',
				{ className: 'transactionList' },
				this.props.transactions.map(function (t, i) {
					return _react2['default'].createElement(TransactionNode, { handleClick: _this.handleClick, index: i, cat: t[5], date: t[0], ref: t[1], name: t[2], location: t[3], amount: t[4] });
				})
			);
		}
	}]);

	return BankList;
})(_react2['default'].Component);

var BankApp = (function (_React$Component3) {
	_inherits(BankApp, _React$Component3);

	function BankApp(props) {
		_classCallCheck(this, _BankApp);

		_get(Object.getPrototypeOf(_BankApp.prototype), 'constructor', this).call(this, props);
		this.handleClick = this.handleClick.bind(this);
	}

	_createClass(BankApp, [{
		key: 'handleClick',
		value: function handleClick() {
			_actionsBankActions2['default'].getAllTransactions();
			console.log(this.props);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(
					'button',
					{ onClick: this.handleClick, type: 'button' },
					'Button'
				),
				_react2['default'].createElement(BankList, this.props),
				_react2['default'].createElement(
					'form',
					null,
					_react2['default'].createElement('input', { type: 'file' })
				),
				_react2['default'].createElement(_reactRouter.RouteHandler, null)
			);
		}
	}], [{
		key: 'getStores',
		value: function getStores() {
			return [_storesBankStore2['default']];
		}
	}, {
		key: 'getPropsFromStores',
		value: function getPropsFromStores() {
			return _storesBankStore2['default'].getState();
		}
	}]);

	var _BankApp = BankApp;
	BankApp = (0, _altUtilsConnectToStores2['default'])(BankApp) || BankApp;
	return BankApp;
})(_react2['default'].Component);

;

exports['default'] = BankApp;
module.exports = exports['default'];

},{"../../actions/BankActions":1,"../../stores/BankStore":17,"alt/utils/connectToStores":21,"classnames":23,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _storesExerciseStore = require('../../stores/ExerciseStore');

var _storesExerciseStore2 = _interopRequireDefault(_storesExerciseStore);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _altUtilsConnectToStores = require('alt/utils/connectToStores');

var _altUtilsConnectToStores2 = _interopRequireDefault(_altUtilsConnectToStores);

var _actionsExerciseActions = require('../../actions/ExerciseActions');

var _actionsExerciseActions2 = _interopRequireDefault(_actionsExerciseActions);

var SearchBox = _react2['default'].createClass({
	displayName: 'SearchBox',

	handleChange: function handleChange() {
		var input = this.refs.text.getDOMNode().value;
		this.props.handleChange(input);
	},
	render: function render() {
		return _react2['default'].createElement(
			'div',
			null,
			_react2['default'].createElement('input', { ref: 'text', onChange: this.handleChange, type: 'text' })
		);
	}
});

var ExerciseList = _react2['default'].createClass({
	displayName: 'ExerciseList',

	render: function render() {
		return _react2['default'].createElement(
			'div',
			null,
			this.props.searchExercises.map(function (exercise, i) {
				return _react2['default'].createElement(
					'div',
					null,
					exercise.name
				);
			})
		);
	}
});

var AddExercise = _react2['default'].createClass({
	displayName: 'AddExercise',

	render: function render() {
		return _react2['default'].createElement(
			'div',
			{ className: this.props.visible ? '' : 'hidden' },
			'Add "',
			this.props.name,
			'" as a new exercise?'
		);
	}
});

var ExerciseSearch = (function (_React$Component) {
	_inherits(ExerciseSearch, _React$Component);

	function ExerciseSearch(props) {
		_classCallCheck(this, _ExerciseSearch);

		_get(Object.getPrototypeOf(_ExerciseSearch.prototype), 'constructor', this).call(this, props);
		this.state = { showAddExercise: false, search: "" };

		//Pull down all of the exercises
		//ExerciseActions.getAllExercises();

		this.search = this.search.bind(this);
	}

	_createClass(ExerciseSearch, [{
		key: 'search',
		value: function search(input) {
			this.setState({ showAddExercise: false });
			if (input != "") {
				this.setState({ showAddExercise: true });
			}
			this.setState({ search: input });
			_actionsExerciseActions2['default'].fetchExercises(input);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(SearchBox, { handleChange: this.search }),
				_react2['default'].createElement(AddExercise, { name: this.state.search, visible: this.state.showAddExercise }),
				_react2['default'].createElement(ExerciseList, this.props)
			);
		}
	}], [{
		key: 'getStores',
		value: function getStores() {
			return [_storesExerciseStore2['default']];
		}
	}, {
		key: 'getPropsFromStores',
		value: function getPropsFromStores() {
			return _storesExerciseStore2['default'].getState();
		}
	}]);

	var _ExerciseSearch = ExerciseSearch;
	ExerciseSearch = (0, _altUtilsConnectToStores2['default'])(ExerciseSearch) || ExerciseSearch;
	return ExerciseSearch;
})(_react2['default'].Component);

exports['default'] = ExerciseSearch;
module.exports = exports['default'];

},{"../../actions/ExerciseActions":2,"../../stores/ExerciseStore":18,"alt/utils/connectToStores":21,"react":"react"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _storesWorkoutStore = require('../../stores/WorkoutStore');

var _storesWorkoutStore2 = _interopRequireDefault(_storesWorkoutStore);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _altUtilsConnectToStores = require('alt/utils/connectToStores');

var _altUtilsConnectToStores2 = _interopRequireDefault(_altUtilsConnectToStores);

var _actionsWorkoutActions = require('../../actions/WorkoutActions');

var _actionsWorkoutActions2 = _interopRequireDefault(_actionsWorkoutActions);

var _reactRouter = require('react-router');

var AddSetForm = (function (_React$Component) {
  _inherits(AddSetForm, _React$Component);

  function AddSetForm(props) {
    _classCallCheck(this, AddSetForm);

    _get(Object.getPrototypeOf(AddSetForm.prototype), 'constructor', this).call(this, props);
    this.handleClick = this.handleClick.bind(this);
  }

  _createClass(AddSetForm, [{
    key: 'handleClick',
    value: function handleClick() {
      var reps = this.refs.reps.getDOMNode().value;
      var weight = this.refs.weight.getDOMNode().value;
      this.props.onSetSubmit(reps, weight);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: this.props.visible ? '' : 'hidden' },
        _react2['default'].createElement(
          'form',
          null,
          _react2['default'].createElement(
            'label',
            null,
            'Weight'
          ),
          _react2['default'].createElement('input', { ref: 'weight', type: 'number' }),
          _react2['default'].createElement(
            'label',
            null,
            'Reps'
          ),
          _react2['default'].createElement('input', { ref: 'reps', type: 'number' }),
          _react2['default'].createElement(
            'button',
            { type: 'button', onClick: this.handleClick },
            'Add'
          )
        )
      );
    }
  }]);

  return AddSetForm;
})(_react2['default'].Component);

var SetList = (function (_React$Component2) {
  _inherits(SetList, _React$Component2);

  function SetList() {
    _classCallCheck(this, SetList);

    _get(Object.getPrototypeOf(SetList.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SetList, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'workout-list' },
        this.props.sets.map(function (set, i) {
          return _react2['default'].createElement(
            'div',
            { className: 'element' },
            _react2['default'].createElement(
              'span',
              { className: 'attr' },
              set.reps,
              'x'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'attr' },
              ':'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'attr' },
              set.weight,
              'lbs'
            )
          );
        }),
        _react2['default'].createElement('div', { className: 'clear' })
      );
    }
  }]);

  return SetList;
})(_react2['default'].Component);

var ExerciseNode = (function (_React$Component3) {
  _inherits(ExerciseNode, _React$Component3);

  function ExerciseNode(props) {
    _classCallCheck(this, ExerciseNode);

    _get(Object.getPrototypeOf(ExerciseNode.prototype), 'constructor', this).call(this, props);
    this.state = { showAddSet: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeExercise = this.removeExercise.bind(this);
  }

  _createClass(ExerciseNode, [{
    key: 'removeExercise',
    value: function removeExercise(event) {
      _actionsWorkoutActions2['default'].removeExercise(this.props.test);
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.setState({ showAddSet: !this.state.showAddSet });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(reps, weight) {
      _actionsWorkoutActions2['default'].addSet(this.props.test, reps, weight);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'block' },
          this.props.name,
          _react2['default'].createElement(
            'span',
            { onClick: this.handleClick },
            'Add Set ',
            _react2['default'].createElement('i', { className: 'fa fa-plus fa-2x' })
          ),
          _react2['default'].createElement(
            'span',
            { onClick: this.removeExercise },
            _react2['default'].createElement('i', { className: 'fa fa-close fa-2x' })
          )
        ),
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(SetList, { sets: this.props.sets }),
          _react2['default'].createElement(AddSetForm, { visible: this.state.showAddSet, onSetSubmit: this.handleSubmit })
        )
      );
    }
  }]);

  return ExerciseNode;
})(_react2['default'].Component);

var ExerciseList = (function (_React$Component4) {
  _inherits(ExerciseList, _React$Component4);

  function ExerciseList() {
    _classCallCheck(this, ExerciseList);

    _get(Object.getPrototypeOf(ExerciseList.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ExerciseList, [{
    key: 'render',
    value: function render() {
      console.log(this.props);
      return _react2['default'].createElement(
        'div',
        null,
        this.props.exercises.map(function (exercise, i) {
          return _react2['default'].createElement(ExerciseNode, { key: i, test: i, sets: exercise.sets, name: exercise.name });
        })
      );
    }
  }]);

  return ExerciseList;
})(_react2['default'].Component);

var Title = (function (_React$Component5) {
  _inherits(Title, _React$Component5);

  function Title() {
    _classCallCheck(this, Title);

    _get(Object.getPrototypeOf(Title.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Title, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'block head full' },
        'Workout 1 - ',
        this.props.startDate.toTimeString()
      );
    }
  }]);

  return Title;
})(_react2['default'].Component);

var Workout = (function (_React$Component6) {
  _inherits(Workout, _React$Component6);

  function Workout(props) {
    _classCallCheck(this, _Workout);

    _get(Object.getPrototypeOf(_Workout.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Workout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //LocationStore.fetchLocations();
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      _actionsWorkoutActions2['default'].addExercise("Push ups");
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.state);
      console.log(this.props);
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(Title, this.props),
        _react2['default'].createElement(ExerciseList, this.props),
        _react2['default'].createElement(
          'div',
          { className: 'block', onClick: this.handleClick },
          'Add Exercise ',
          _react2['default'].createElement('i', { className: 'fa fa-plus fa-2x' })
        ),
        _react2['default'].createElement(
          _reactRouter.Link,
          { to: 'exerciseSearch' },
          _react2['default'].createElement(
            'div',
            { className: 'block' },
            'Add Exercise '
          )
        )
      );
    }
  }], [{
    key: 'getStores',
    value: function getStores() {
      return [_storesWorkoutStore2['default']];
    }
  }, {
    key: 'getPropsFromStores',
    value: function getPropsFromStores() {
      return _storesWorkoutStore2['default'].getState();
    }
  }]);

  var _Workout = Workout;
  Workout = (0, _altUtilsConnectToStores2['default'])(Workout) || Workout;
  return Workout;
})(_react2['default'].Component);

exports['default'] = Workout;
module.exports = exports['default'];

},{"../../actions/WorkoutActions":3,"../../stores/WorkoutStore":20,"alt/utils/connectToStores":21,"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesWorkoutAppStore = require('../../stores/WorkoutAppStore');

var _storesWorkoutAppStore2 = _interopRequireDefault(_storesWorkoutAppStore);

var WorkoutApp = (function (_React$Component) {
  _inherits(WorkoutApp, _React$Component);

  function WorkoutApp() {
    _classCallCheck(this, WorkoutApp);

    _get(Object.getPrototypeOf(WorkoutApp.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(WorkoutApp, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_reactRouter.RouteHandler, null)
      );
    }
  }]);

  return WorkoutApp;
})(_react2['default'].Component);

;

exports['default'] = WorkoutApp;
module.exports = exports['default'];

},{"../../stores/WorkoutAppStore":19,"react":"react","react-router":"react-router"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

/*
class Workout extends React.Component {
  render() {
    return (
      <Link to="currentWorkout"><div className="panel">Start Workout</div></Link>
    );
  }
} */

var Workout = (function (_React$Component) {
  _inherits(Workout, _React$Component);

  function Workout() {
    _classCallCheck(this, Workout);

    _get(Object.getPrototypeOf(Workout.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Workout, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactRouter.Link,
        { to: 'currentWorkout' },
        _react2['default'].createElement(
          'div',
          { className: 'panel' },
          'Start Workout'
        )
      );
    }
  }]);

  return Workout;
})(_react2['default'].Component);

exports['default'] = Workout;
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}],15:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
  _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
});

},{"./routes":16,"react":"react","react-router":"react-router"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsLifeApp = require('./components/LifeApp');

var _componentsLifeApp2 = _interopRequireDefault(_componentsLifeApp);

var _componentsAppList = require('./components/AppList');

var _componentsAppList2 = _interopRequireDefault(_componentsAppList);

var _componentsWorkoutWorkoutAppJs = require('./components/workout/WorkoutApp.js');

var _componentsWorkoutWorkoutAppJs2 = _interopRequireDefault(_componentsWorkoutWorkoutAppJs);

var _componentsWorkoutWorkoutHomeJs = require('./components/workout/WorkoutHome.js');

var _componentsWorkoutWorkoutHomeJs2 = _interopRequireDefault(_componentsWorkoutWorkoutHomeJs);

var _componentsWorkoutWorkoutJs = require('./components/workout/Workout.js');

var _componentsWorkoutWorkoutJs2 = _interopRequireDefault(_componentsWorkoutWorkoutJs);

var _componentsExerciseExerciseSearchJs = require('./components/exercise/ExerciseSearch.js');

var _componentsExerciseExerciseSearchJs2 = _interopRequireDefault(_componentsExerciseExerciseSearchJs);

var _componentsBankBankApp = require('./components/bank/BankApp');

var _componentsBankBankApp2 = _interopRequireDefault(_componentsBankBankApp);

var COMPONENTS_PATH = './components';

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { name: 'home', path: '/', handler: _componentsLifeApp2['default'] },
  _react2['default'].createElement(_reactRouter.DefaultRoute, { handler: _componentsAppList2['default'] }),
  _react2['default'].createElement(
    _reactRouter.Route,
    { name: 'workout', path: 'workout-app', handler: _componentsWorkoutWorkoutAppJs2['default'] },
    _react2['default'].createElement(_reactRouter.DefaultRoute, { name: 'workoutHome', handler: _componentsWorkoutWorkoutHomeJs2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { name: 'currentWorkout', path: 'workout', handler: _componentsWorkoutWorkoutJs2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { name: 'exerciseSearch', handler: _componentsExerciseExerciseSearchJs2['default'] })
  ),
  _react2['default'].createElement(_reactRouter.Route, { name: 'bank', path: 'bank-app', handler: _componentsBankBankApp2['default'] })
);
module.exports = exports['default'];

},{"./components/AppList":5,"./components/LifeApp":9,"./components/bank/BankApp":10,"./components/exercise/ExerciseSearch.js":11,"./components/workout/Workout.js":12,"./components/workout/WorkoutApp.js":13,"./components/workout/WorkoutHome.js":14,"react":"react","react-router":"react-router"}],17:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsBankActions = require('../actions/BankActions');

var _actionsBankActions2 = _interopRequireDefault(_actionsBankActions);

var BankStore = (function () {
	function BankStore() {
		_classCallCheck(this, BankStore);

		this.transactions = [];

		this.bindListeners({
			getAllTransactions: _actionsBankActions2['default'].GET_ALL_TRANSACTIONS_SUCCESS,
			updateTransaction: _actionsBankActions2['default'].UPDATE_TRANSACTION
		});
	}

	_createClass(BankStore, [{
		key: 'updateTransaction',
		value: function updateTransaction(transaction) {
			this.transactions[transaction.index].cat = transaction.cat;
		}
	}, {
		key: 'getAllTransactions',
		value: function getAllTransactions(transactions) {
			this.transactions = transactions;
		}
	}]);

	return BankStore;
})();

module.exports = _alt2['default'].createStore(BankStore, 'BankStore');

},{"../actions/BankActions":1,"../alt":4}],18:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var alt = require('../alt');

var ExerciseActions = require('../actions/ExerciseActions');

var ExerciseStore = (function () {
  function ExerciseStore() {
    _classCallCheck(this, ExerciseStore);

    this.exercises = [];
    this.searchExercises = [];

    this.counter = 0;

    this.bindListeners({
      addExercise: ExerciseActions.ADD_EXERCISE,
      fetchExercises: ExerciseActions.FETCH_EXERCISES,
      getAllExercises: ExerciseActions.GET_ALL_EXERCISES_SUCCESS
    });
    /*
        this.exportPublicMethods({
          getLocation: this.getLocation
        });
    
        this.exportAsync(LocationSource);*/
  }

  _createClass(ExerciseStore, [{
    key: 'addExercise',
    value: function addExercise(exercise) {
      this.exercises[this.counter++] = { name: exercise };
    }
  }, {
    key: 'getAllExercises',
    value: function getAllExercises(exercises) {
      this.exercises = exercises;
    }
  }, {
    key: 'fetchExercises',
    value: function fetchExercises(str) {
      var length = this.exercises.length;
      this.searchExercises = [];
      for (var i = 0; i < length; ++i) {
        console.log("Searching");
        if (~this.exercises[i].name.toLowerCase().indexOf(str.toLowerCase())) {
          this.searchExercises[i] = this.exercises[i];
        }
      }
    }
  }]);

  return ExerciseStore;
})();

module.exports = alt.createStore(ExerciseStore, 'ExerciseStore');

},{"../actions/ExerciseActions":2,"../alt":4}],19:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var alt = require('../alt');

var WorkoutAppStore = function WorkoutAppStore() {
  _classCallCheck(this, WorkoutAppStore);

  this.workoutInProgress = false;
}
/*
    this.bindListeners({
      handleUpdateLocations: LocationActions.UPDATE_LOCATIONS,
      handleFetchLocations: LocationActions.FETCH_LOCATIONS,
      handleLocationsFailed: LocationActions.LOCATIONS_FAILED,
      setFavorites: LocationActions.FAVORITE_LOCATION,
      addLocation: LocationActions.ADD_LOCATION
    });

    this.exportPublicMethods({
      getLocation: this.getLocation
    });

    this.exportAsync(LocationSource);
  }

  addLocation(location) {
    this.locations.push({key: 3, name: location});
  }
*/
;

module.exports = alt.createStore(WorkoutAppStore, 'WorkoutAppStore');

},{"../alt":4}],20:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var alt = require('../alt');

var WorkoutActions = require('../actions/WorkoutActions');

var WorkoutStore = (function () {
  function WorkoutStore() {
    _classCallCheck(this, WorkoutStore);

    this.exercises = [];
    this.startDate = new Date();
    this.counter = 0;

    this.bindListeners({
      addExercise: WorkoutActions.ADD_EXERCISE,
      removeExercise: WorkoutActions.REMOVE_EXERCISE,
      addSet: WorkoutActions.ADD_SET
    });
  }

  _createClass(WorkoutStore, [{
    key: 'addSet',
    value: function addSet(disObj) {
      console.log(this.exercises[disObj.exerciseIndex]);
      console.log(this.exercises);
      console.log(disObj.exerciseIndex);
      this.exercises[disObj.exerciseIndex].sets.push({ reps: disObj.reps, weight: disObj.weight });
    }
  }, {
    key: 'addExercise',
    value: function addExercise(exercise) {
      this.exercises[this.counter++] = { name: exercise, sets: [] };
    }
  }, {
    key: 'removeExercise',
    value: function removeExercise(exerciseIndex) {
      this.exercises.splice(exerciseIndex, 1);
    }
  }]);

  return WorkoutStore;
})();

module.exports = alt.createStore(WorkoutStore, 'WorkoutStore');

},{"../actions/WorkoutActions":3,"../alt":4}],21:[function(require,module,exports){
/**
 * 'Higher Order Component' that controls the props of a wrapped
 * component via stores.
 *
 * Expects the Component to have two static methods:
 *   - getStores(): Should return an array of stores.
 *   - getPropsFromStores(props): Should return the props from the stores.
 *
 * Example using old React.createClass() style:
 *
 *    const MyComponent = React.createClass({
 *      statics: {
 *        getStores(props) {
 *          return [myStore]
 *        },
 *        getPropsFromStores(props) {
 *          return myStore.getState()
 *        }
 *      },
 *      render() {
 *        // Use this.props like normal ...
 *      }
 *    })
 *    MyComponent = connectToStores(MyComponent)
 *
 *
 * Example using ES6 Class:
 *
 *    class MyComponent extends React.Component {
 *      static getStores(props) {
 *        return [myStore]
 *      }
 *      static getPropsFromStores(props) {
 *        return myStore.getState()
 *      }
 *      render() {
 *        // Use this.props like normal ...
 *      }
 *    }
 *    MyComponent = connectToStores(MyComponent)
 *
 * A great explanation of the merits of higher order components can be found at
 * http://bit.ly/1abPkrP
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _functions = require('./functions');

function connectToStores(Spec) {
  var Component = arguments[1] === undefined ? Spec : arguments[1];
  return (function () {
    // Check for required static methods.
    if (!(0, _functions.isFunction)(Spec.getStores)) {
      throw new Error('connectToStores() expects the wrapped component to have a static getStores() method');
    }
    if (!(0, _functions.isFunction)(Spec.getPropsFromStores)) {
      throw new Error('connectToStores() expects the wrapped component to have a static getPropsFromStores() method');
    }

    var StoreConnection = _react2['default'].createClass({
      displayName: 'StoreConnection',

      getInitialState: function getInitialState() {
        return Spec.getPropsFromStores(this.props, this.context);
      },

      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState(Spec.getPropsFromStores(nextProps, this.context));
      },

      componentDidMount: function componentDidMount() {
        var _this = this;

        var stores = Spec.getStores(this.props, this.context);
        this.storeListeners = stores.map(function (store) {
          return store.listen(_this.onChange);
        });
        if (Spec.componentDidConnect) {
          Spec.componentDidConnect(this.props, this.context);
        }
      },

      componentWillUnmount: function componentWillUnmount() {
        this.storeListeners.forEach(function (unlisten) {
          return unlisten();
        });
      },

      onChange: function onChange() {
        this.setState(Spec.getPropsFromStores(this.props, this.context));
      },

      render: function render() {
        return _react2['default'].createElement(Component, (0, _functions.assign)({}, this.props, this.state));
      }
    });

    return StoreConnection;
  })();
}

exports['default'] = connectToStores;
module.exports = exports['default'];
},{"./functions":22,"react":"react"}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.isPromise = isPromise;
exports.eachObject = eachObject;
exports.assign = assign;
var isFunction = function isFunction(x) {
  return typeof x === 'function';
};

exports.isFunction = isFunction;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function eachObject(f, o) {
  o.forEach(function (from) {
    Object.keys(Object(from)).forEach(function (key) {
      f(key, from[key]);
    });
  });
}

function assign(target) {
  for (var _len = arguments.length, source = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    source[_key - 1] = arguments[_key];
  }

  eachObject(function (key, value) {
    return target[key] = value;
  }, source);
  return target;
}
},{}],23:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function () {
	'use strict';

	function classNames () {

		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if ('string' === argType || 'number' === argType) {
				classes += ' ' + arg;

			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);

			} else if ('object' === argType) {
				for (var key in arg) {
					if (arg.hasOwnProperty(key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd){
		// AMD. Register as an anonymous module.
		define(function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}

}());

},{}]},{},[15]);
