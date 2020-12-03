export default class HotelsService {
	constructor() {
        this._apiBase = 'http://localhost:3004';
	}
	
	async getResource(url) {
		const loader = `<div class="loader"></div>`;
		$('body').append(loader);

		const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
          throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}
		
		$('.loader').delay(1000).fadeOut(400);
		$('.loader').remove();

		return await res.json();
	}
	
	async fetchHotels() {
		const res = await this.getResource(`/hotels`);
        return res;
	}

	async filterHotels(params) {
		const res = await this.getResource(`/hotels?${params}`);
		return res;
	}
};