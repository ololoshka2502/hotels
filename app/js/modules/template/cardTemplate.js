import empty from './comments/empty';
import fill from './comments/fill';

const cardTemplate = (img, address, name, stars, description, type, rating, reviews_amount, last_review, min_price) => {

	// Insert stars count in template

	let starWord = '';
	const starArr = [];

	for (let star = 0; star < stars; star++) {
		starArr.push(`<div class="hotel__star"></div>`);
	}

	const starsToStr = starArr.join('');

	// word ending depending on the number
	if (stars === 1) {
		starWord = '1 звезда'
	} else if (stars === 2) {
		starWord = '2 звезды'
	} else if (stars === 3) {
		starWord = '3 звезды'
	} else if (stars === 4) {
		starWord = '4 звезды'
	} else if (stars === 5) {
		starWord = '5 звезд'
	}

	// Reviews
	const emptyComment = empty();
	const fillComment = fill(rating, reviews_amount, last_review, min_price);

	// Round min price
	const price = Math.round(min_price / 10) * 10;
	





	return `
		<div class="hotel">

			<div class="hotel__left">
				<img src="${img}" class="hotel__image" alt="">
			</div>

			<div class="hotel__center">
				<p class="hotel__location">${address}</p>

				<h2 class="hotel__title">${name}</h2>
				
				<div class="hotel__info">
					<div class="hotel__stars-wrap">
						<div class="hotel__stars">
							${starsToStr}
						</div> 

						<p class="hotel__stars-text">${starWord}</p>
					</div>

					<div class="hotel__type">${type}</div>
				</div> 

				<p class="hotel__description">
					${description}
				</p> 
			</div> 


			<div class="hotel__right">
				<div class="hotel__comments">
					${last_review ? fillComment : emptyComment}
				</div> 

				<div class="hotel__actions">
					<p class="hotel__price">от ${price} ₽</p>
					<button class="hotel__button">Забронировать</button>
				</div> 
			</div> 
		</div>
	`
}

export default cardTemplate;