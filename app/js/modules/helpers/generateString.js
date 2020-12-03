const generateString = (obj) => {
	let string = ``;

	const { types, price, stars, country } = obj;

	const generateTypesFromArr = (arr, arg) => {
		return arr.reduce((sum, type) => {
			if (arr.indexOf(type) === 0) {
				return sum + `&${arg}=${type}`;
			} else if (arr.indexOf(type) > 0) {
				return sum + `&${arg}=${type}`;
			} else {
				return sum + `&${arg}=''`;
			}
		}, '');
	}
	

	const typesPart = generateTypesFromArr(types, 'type');
	const pricePart = `&min_price_gte=${price[0]}&min_price_lte=${price[1]}`;
	const starsPart = generateTypesFromArr(stars, 'stars');
	const countryPart = `&country=${country}`;

	string = `${typesPart}${pricePart}${starsPart}${countryPart}`;

	return string;
}

export default generateString;