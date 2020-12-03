// Sidebar
import sidebar from '../sidebar/sidebar';
import cardTemplate from '../template/cardTemplate';

const render = (props) => {
	$('.right-content').html('');

	const { hotels } = props;

	if (hotels.length === 0) {
		return $('.right-content').html('<p class="empty">Записей не найдено</p>');
	}

	if (hotels) {
		// Wrappers
		const rightContent = document.querySelector('.right-content');
		rightContent.textContent = '';

		// Generate hotels card  template
		hotels.map(hotel => {
			rightContent.insertAdjacentHTML('beforeend',
				cardTemplate(
					hotel.img,
					hotel.address,
					hotel.name,
					hotel.stars,
					hotel.description,
					hotel.type,
					hotel.rating,
					hotel.reviews_amount,
					hotel.last_review,
					hotel.min_price
				)
			);
		});
	}

	// Init
	sidebar(props);
};

export default render;