jQuery(document).ready(function ($) {
    var testLoad = false;
	$(".test-loading").click(function () {
		if (testLoad == false) {
			if ($(".loading-message").length == 0) {
				testLoad = true;
				setTimeout(loadingMessage, 100);
				function loadingMessage() {
					$(".element.article-item:nth-child(1)").addClass("loading");
					var loadingMessage = '<div class="loading-message"><div class="lds-dual-ring"></div>Obsah se načítá...</div>';
					$(loadingMessage).insertBefore(".element.article-item");


					setTimeout(showLoadingMessage, 300);
					//$(".article.block").find(".loading-message").css("display", "none");


					function showLoadingMessage() {
						//$(".loading-message").slideToggle("slow", function () {
							testLoad = false;
							setTimeout(showContent, 1000);

							function showContent() {
								$(".element.article-item").removeClass("loading");
								$(".loading-message").remove();
							}
						//});

					}

				}
			} else {
				$(".element.article-item:nth-child(1)").removeClass("loading");
				$(".loading-message").remove();

			}
		}
	});

	var testError = false;
	$(".test-loading-error").click(function () {
		if (testError == false) {			
			if ($(".loading-message").length == 0) {
				testError = true;
				setTimeout(loadingMessage, 100);
				function loadingMessage() {
					$(".element.article-item:nth-child(1)").addClass("loading");
					var loadingMessage = '<div class="loading-message"><div class="lds-dual-ring"></div>Obsah se načítá...</div>';					
					$(loadingMessage).insertBefore(".element.article-item");

					setTimeout(showLoadingMessage, 1000);
					//$(".article.block").find(".loading-message").css("display", "none");


					function showLoadingMessage() {
						//$(".loading-message").slideToggle("slow", function () {
							testError = false;
							setTimeout(showContent, 2000);

							function showContent() {
								$(".article.block").find(".loading-message").remove();
								var loadingMessageError = '<div class="loading-message">Obsah se nepodařilo načíst...</div>';		
								$(loadingMessageError).insertBefore(".element.article-item");								
							}
						//});

					}

				}
			} else {
				$(".element.article-item").removeClass("loading");
				$(".loading-message").remove();

			}
		}
	});


});