const fill = (rating, reviews, text) => {
	let wordRating = '';

	if (rating <= 3) {
		wordRating = 'Плохо'
	} else if (rating > 3 && rating < 4.7) {
		wordRating = 'Хорошо'
	} else if (rating > 4.7) {
		wordRating = 'Отлично'
	}

	const declOfNum = (number, txt) => {
		let cases = [2, 0, 1, 1, 1, 2];
		return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
	}

	let textAmount = declOfNum(reviews, ["отзыв", "отзыва", "отзывов"]);



	return `<div class="hotel__comment">
				<div class="hotel__comment-header">
					<div class="hotel__comment-star">
						<svg width="13" height="12" class="hotel__comment-star-icon" viewBox="0 0 13 12" fill="#FF4641" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0926 11.9997C10.0247 11.9997 9.95818 11.9834 9.89546 11.9519L6.39976 10.1462L2.90406 11.9519C2.76198 12.0261 2.5879 12.0135 2.45734 11.9205C2.32678 11.8262 2.2615 11.669 2.28838 11.5118L2.95526 7.68921L0.127723 4.9807C0.0125225 4.87005 -0.0297177 4.70406 0.0214826 4.55317C0.0714029 4.40228 0.203244 4.29163 0.363245 4.26899L4.27239 3.71195L6.0196 0.232625C6.09128 0.0905353 6.23848 0 6.39976 0C6.56232 0 6.70952 0.0905353 6.7812 0.232625L8.52842 3.71195L12.4363 4.26899C12.5963 4.29163 12.7294 4.40228 12.7793 4.55317C12.8292 4.70406 12.787 4.87005 12.6718 4.9807L9.84426 7.68921L10.5111 11.5118C10.5393 11.669 10.4727 11.8262 10.3422 11.9205C10.2692 11.9733 10.1809 11.9997 10.0926 11.9997Z" fill="#FF4641"/>
						</svg>

						<span class="hotel__comment-star-text">${rating}</span>										
					</div> 

					<p class="hotel__grade">
						<span class="hotel__dot"></span>
						${wordRating} 
						<span class="hotel__dot"></span>
					</p> 

					<p class="hotel__reviews-amount">
						<span>${reviews}</span> ${textAmount}
					</p> 
				</div> 

				<div class="hotel__comment-body">
					<p class="hotel__comment-text">
						${text}
					</p>
				</div> 
			</div>`;
};

export default fill;