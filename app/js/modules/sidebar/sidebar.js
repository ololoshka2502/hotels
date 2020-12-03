import dropdown from './dropdown';
import priceRange from './priceRange';

const sidebar = (props) => {
	$('.sidebar__item-top').on('click', function () {
		$(this).parent().toggleClass('active');
		$(this).siblings('.sidebar__item-bottom').slideToggle(200);
	});

	dropdown(props);
	priceRange(props);
}

export default sidebar;