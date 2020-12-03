import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'jquery-ui-dist/jquery-ui';

// Fetching
import getData from './modules/getData';
// render function
import render from './modules/render';
// templates
import multipleBtnTemplate from './modules/template/sidebar/multipleBtnTemplate';
import { generateString, getUniqItems } from './modules/helpers';


$(async function () {
	let allHotels = await getData();

	let state = {
		types: [],
		price: [500, 4000],
		maxprice: 5000,
		stars: [],
		country: 'Греция',
		hotels: allHotels
	};

	const sidebarMultiple = document.querySelector('.sidebar__item-multiple');
	const hotelTypes = await getUniqItems(allHotels, 'type');

	// First hotel render
	render(state);
	sidebarMultiple.textContent = '';
	hotelTypes.map(hotel => sidebarMultiple.insertAdjacentHTML('beforeend', multipleBtnTemplate(hotel)));


	// Filtering

	$('.sidebar__item-checkbox input').on('click', function () {
		const data = $(this).data('star');
		const starTypes = state.stars;

		if ($(this).is(":checked")) {
			if (starTypes.indexOf(data) === -1) {
				starTypes.push(data);

				const generatedStr = generateString(state);

				$.ajax({
					dataType: "JSON",
					method: 'GET',
					url: `http://localhost:3004/hotels?${generatedStr}`,
					success: function (res) {
						state = {
							...state,
							hotels: res
						}
						render(state);
					}
				});
			}
		} else if (starTypes.indexOf(data) > -1) {
			const index = starTypes.indexOf(data);
			starTypes.splice(index, 1);

			const generatedStr = generateString(state);
			$.ajax({
				dataType: "JSON",
				method: 'GET',
				url: `http://localhost:3004/hotels?${generatedStr}`,
				success: function (res) {
					state = {
						...state,
						hotels: res
					}
					render(state);
				}
			});
		}

		console.log(state);

	});

	$('.sidebar__multiple-btn').on('click', function () {
		$(this).toggleClass('active');
		const data = $(this).data('type');
		const types = state.types;

		if ($(this).hasClass('active')) {
			if (types.indexOf(data) === -1) {
				types.push(data);

				const generatedStr = generateString(state);
				$.ajax({
					dataType: "JSON",
					method: 'GET',
					url: `http://localhost:3004/hotels?${generatedStr}`,
					success: function (res) {
						state = {
							...state,
							hotels: res
						}
						render(state);
					}
				});
			}
		} else if (types.indexOf(data) > -1) {
			const index = types.indexOf(data);
			types.splice(index, 1);

			const generatedStr = generateString(state);
			$.ajax({
				dataType: "JSON",
				method: 'GET',
				url: `http://localhost:3004/hotels?${generatedStr}`,
				success: function (res) {
					state = {
						...state,
						hotels: res
					}
					render(state);
				}
			});
		}
	});
});
