import generateString from '../helpers/generateString';
import render from '../render';

const priceRange = (props) => {
	const { price, maxprice } = props;
	let priceMin = price[0];
	let priceMax = price[1];
	let tooltipMinValue = 0;
	let tooltipMaxValue = 0;

	const tooltip = (value) => {
		return `<div class="tooltip">
			<div class="tooltip-inner">
				${value}
			</div>
			<div class="tooltip-arrow"></div>
		</div>`
	};

	$("#price-range").slider({
		range: true,
		min: 0,
		max: maxprice,
		animate: 300,
		step: 100,
		values: [priceMin, priceMax],
		create: function (event, ui) {
			$('.ui-slider-handle:first').html(
				tooltip(priceMin)
			);

			$('.ui-slider-handle:last').html(
				tooltip(priceMax)
			);

			$(function () {
				$('.ui-slider-handle').each(function () {
					$(this).tooltip({
						show: {
							effect: "blind",
							duration: 500
						},
						track: true
					});
				});
			});
		},

		slide: function (event, ui) {
			tooltipMinValue = ui.values[0];
			$('.ui-slider-handle:first').html(tooltip(tooltipMinValue));

			tooltipMaxValue = ui.values[1];
			$('.ui-slider-handle:last').html(tooltip(tooltipMaxValue));
		}
	});

	$("#price-range").on("slidestop", function(event, ui) {
		let req = {
			...props,
			price: [tooltipMinValue, tooltipMaxValue]
		}

		const generatedStr = generateString(req);

		$.ajax({
			dataType: "JSON",
			method: 'GET',
			url: `http://localhost:3004/hotels?${generatedStr}`,
			success: function (res) {
				req = {
					...props,
					maxprice,
					price: [tooltipMinValue, tooltipMaxValue],
					hotels: res
				}

				render(req);
			}
		});
	});
}

export default priceRange;