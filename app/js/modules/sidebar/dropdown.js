import { getUniqItems, generateString } from '../helpers';
import render from '../render';

const dropdown = (props) => {
	const { hotels } = props;

	// setup dropdown sidebar
	const countriesList = hotels.map(hotel => hotel.country);
	const uniqCountries = getUniqItems(countriesList);

	$('#dropdown').autocomplete({
		source: uniqCountries,
		minLength: 0,
		appendTo: "#dropdown-list",

		response: function (event, ui) {
			if (!ui.content.length) {
				const emptyResult = {
					value: '',
					label: 'Совпадений не найдено'
				}

				ui.content.push(emptyResult);
			}
		},

		select: function (event, ui) {
			const selectedValue = ui.item.value;

			if (selectedValue) {
				let req = {
					...props,
					country: selectedValue
				};
	
				const generatedStr = generateString(req);
	
				$.ajax({
					dataType: "JSON",
					method: 'GET',
					url: `http://localhost:3004/hotels?${generatedStr}`,
					success: function (res) {
						req = {
							...props,
							country: selectedValue,
							hotels: res
						}
	
						render(req);
					}
				});
			}
			
			$('#dropdown').trigger("blur");
		}
	});
};

export default dropdown;