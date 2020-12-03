const getUniqItems = (data, type) => {
	let result = [];

	if (type) {
		for (let item of data) {
			if (!result.includes(item[type])) {
				result.push(item[type]);
			}
		}
	} else {
		for (let item of data) {
			if (!result.includes(item)) {
				result.push(item);
			}
		}
	}

	return result;
};

export default getUniqItems;