import HotelsService from './service/hotelsService';

const getData = async (params) => {
	const hotelService = new HotelsService();

	if (!params) {
		return await hotelService.fetchHotels();
	} else {
		return await hotelService.filterHotels(params);
	}
}

export default getData;