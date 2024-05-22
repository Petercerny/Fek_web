var setProjects = function () {

	var actSlideItem = undefined;
	var oldSlideItem = undefined;


	$(".projects .group.document-item div.document-button").on('click', function (event) { 
		var projPar = $(this).parents(".element.article-item.projects .item");
		var slideElement = $(actSlideItem).find(".table.invisible");

		actSlideItem = projPar;

		/// zavri vse otevrene
		if (oldSlideItem != undefined) {
			if (oldSlideItem.attr("class") != actSlideItem.attr("class")) {
				$(".element.article-item.projects .item.opened").each(function (index) {
					var itemsToClose = $(this).find(".table.invisible");
					$(itemsToClose).stop().slideUp();
					$(this).removeClass("opened");
				});
			}
		}

		if (oldSlideItem != undefined) {
			if (oldSlideItem.attr("class") == actSlideItem.attr("class")) {
				var projParOpened = $(this).parents(".element.article-item.projects .item");
				var slideElementOpened = $(projParOpened).find(".table.invisible");
				$(slideElementOpened).stop().slideToggle();
				$(projParOpened).toggleClass("opened");
			} else {
				projPar.addClass("opened");
				slideElement = $(projPar).find(".table.invisible");
				$(slideElement).stop().slideDown();
			}
		}
		if (oldSlideItem == undefined) {
			projPar.addClass("opened");
			slideElement = $(projPar).find(".table.invisible");
			$(slideElement).stop().slideDown();
		}

		oldSlideItem = actSlideItem;


	});

}