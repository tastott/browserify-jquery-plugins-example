import $ = require('jquery')
require('bootstrap-select')
var highcharts = require('highcharts-browserify')

$(document).ready(() => {
	(<any>$('select')).selectpicker();
	new highcharts.Chart({
		chart:{
			renderTo: $('#chart')[0]
		}
	})
});