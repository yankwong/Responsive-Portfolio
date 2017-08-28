(function($) {

	var openModal = function($modal){
			$modal.addClass('shown');
		},
		closeModal = function($modal) {
			$modal.removeClass('shown');
		},
		setupContactModal = function($modal) {

			$modal.on('click', function(e) {
				closeModal($modal);
			});

			$('.submit-btn', '#contact-me').on('click', function(e) {
				e.preventDefault();
				openModal($modal);
			});
		},
		setupPortfolioModal = function($modal) {
			$modal.on('click', function(e) {
				closeModal($modal);
			});

			$('a', '.port-block').on('click', function(e) {
				e.preventDefault();
				openModal($modal);
			});
		};


	$(function(){
		var $contactModal = $('.contact-me-modal'),
			$portModal = $('.portfolio-modal');

		setupContactModal($contactModal);

		setupPortfolioModal($portModal);
	});

})(jQuery);