'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Thumb = exports.PraiseButton = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
//父类，可以无限次点击

require('./index.js');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = exports.PraiseButton = function () {
	function PraiseButton() {
		var ele = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('#PraiseButton');
		var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		_classCallCheck(this, PraiseButton);

		this.ele = ele;
		this.num = num;
		this.tId = 0;
	}

	_createClass(PraiseButton, [{
		key: 'click',
		value: function click() {
			var _this = this;

			this.ele.on('click', function () {
				_this.throttle(_this.handleClick.bind(_this));
			}.bind(this));
		}
	}, {
		key: 'handleClick',
		value: function handleClick() {
			clearTimeout(this.tId);
			this.num = add(this.num);
			this.pop();
			axios.get('/index/update').then(function (response) {
				console.log(response);
			}).catch(function (error) {
				console.log(error);
			});
			console.log('\u7236\u7C7B\u88AB\u70B9\u4E86' + this.num + ' \u6B21\uFF01\u53EF\u65E0\u9650\u70B9\u7236\u7C7B\uFF0C\u4E0D\u7F6E\u7070\u8272\uFF01\uFF01');
			console.log('快速点击多次会被稀释成一次！');
		}
	}, {
		key: 'throttle',
		value: function throttle(method, context) {
			clearTimeout(this.tId);
			this.tId = setTimeout(function () {
				method.call(context);
			}, 500);
		}
	}, {
		key: 'pop',
		value: function pop() {
			$('#animation').addClass('num');
			setTimeout(function () {
				$('#animation').removeClass('num');
			}, 800);
		}
	}]);

	return PraiseButton;
}();

//子类，点击十次置灰；再点击从1开始


var Thumb = exports.Thumb = function (_PraiseButton) {
	_inherits(Thumb, _PraiseButton);

	function Thumb() {
		var ele = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('#Thumb');
		var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		_classCallCheck(this, Thumb);

		return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, ele, num));
	}

	_createClass(Thumb, [{
		key: 'click',
		value: function click() {
			var _this3 = this;

			this.ele.on('click', function () {
				_get(Thumb.prototype.__proto__ || Object.getPrototypeOf(Thumb.prototype), 'throttle', _this3).call(_this3, _this3.handleClick.bind(_this3));
			}.bind(this));
		}
	}, {
		key: 'handleClick',
		value: function handleClick() {
			if (this.num < 9) {
				this.num = add(this.num);
				_get(Thumb.prototype.__proto__ || Object.getPrototypeOf(Thumb.prototype), 'pop', this).call(this);
			} else if (this.num === 9) {
				$('#PraiseButton').css('-webkit-filter', 'grayscale(1)');
				$('#Thumb').css('-webkit-filter', 'grayscale(1)');
				this.num = add(this.num);
				_get(Thumb.prototype.__proto__ || Object.getPrototypeOf(Thumb.prototype), 'pop', this).call(this);
			} else {
				this.num = 1;
				$('#PraiseButton').css('-webkit-filter', 'grayscale(0)');
				$('#Thumb').css('-webkit-filter', 'grayscale(0)');
				_get(Thumb.prototype.__proto__ || Object.getPrototypeOf(Thumb.prototype), 'pop', this).call(this);
			}
			axios.get('/index/update').then(function (response) {
				console.log(response);
			}).catch(function (error) {
				console.log(error);
			});
			console.log('\u5B50\u7C7B\u88AB\u70B9\u4E86' + this.num + ' \u6B21\uFF01\u7B2C10\u6B21\u53D8\u7070\u8272\uFF0C\u7136\u540E\u4ECE\u5934\u8BA1\u6570\uFF01\uFF01');
			console.log('快速点击多次会被稀释成一次！');
		}
	}]);

	return Thumb;
}(PraiseButton);
