$(document).ready(function () {

    if ($(window).width() < 1201) {
        mobileMenu();
    }

    $(window).on("orientationchange", function (event) {
        callFunction();
    });

    $(window).resize(function () {
        callFunction();
    });

    function callFunction() {
        if ($("#offcanvas").length) {
            $("#offcanvas").remove();
        }
        if ($(window).width() < 1201) {
            mobileMenu();
        }
    }


    function mobileMenu() {
        /* skryj podmenu*/
        $(".navigation-primary-submenu").addClass("hidden");
        /* 2 ruzna menu - 2. nema podmenu*/
        var menu1;
        var menu2;

        /* uloz prvni blok menu*/
        if ($("nav.primary-nav").length) {
            menu1 = $("nav.primary-nav").html();
        }

        /* uloz druhy blok menu - 2. ul */
        if ($("nav.secondary-nav").length) {
            menu2 = $("nav.secondary-nav .navigation-secondary").get(0).outerHTML;
        }
        /* vytvor div offcanvas a overlay na skryti menu */

        var contentCanvass = '<div id="offcanvas">' + menu1 + menu2 + ' </div>';
        /* vloz jej za footer */


        if ($("#overlay").length == 0) {
            contentCanvass += '<div id="overlay"></div>';
        }

        $(contentCanvass).insertAfter("footer");


        /* nastav overlay*/
        $("#overlay").click(function () {
            /* zmizeni menu*/
            $("#offcanvas").removeClass("show");
            /* zmizeni overlay*/
            $("#overlay").removeClass("show");
            /* vyresetovani menu*/
            $("#offcanvas .navigation-primary").removeClass("hidden");
            $("#offcanvas .navigation-secondary").removeClass("hidden");
            setHiddenSubmenu();
        });


        /* kliknuti na tlacitko mobilniho menu*/
        $(".item.mobile-menu").click(function () {
            /* vyvola menu a overlay*/
            $("#offcanvas").addClass("show");
            $("#overlay").addClass("show");
        });

        setChildren();

        function setChildren() {
            var submenuItemsHtml = "";

            /* vytvoreni samostatneho bloku pro podmenu = vytrzeni z puvodni struktury menu polozek a jejich podmenu*/
            $("#offcanvas ul li.item.parent").each(function (index) {
                /// jestli ma rodicovska polozka potomky///
                var isSubmenu = $(this).find(".navigation-primary-submenu");
                if (isSubmenu.length) {
                    /* ke kazde polozce ktera ma podmenu vloz sipku*/
                    $(this).prepend('<div class="arrow"></div>');
                    /* pridej teto sipce unikatni identifikator = bude shodny s identifikatorem prislusneho podmenu  */
                    var actArrow = $(this).find(".arrow").addClass("item" + index);
                    /* vloz stejnou tridu rodicovske polozce */
                    $(this).addClass("item" + index);
                    /*stejnou tridu vloz prislusnemu podmenu = kvuli sparovani*/
                    var actSubmenu = $(this).find(".navigation-primary-submenu").addClass("item" + index);
                    /* do kazdeho podmenu vloz sipku zpet*/
                    $(actSubmenu).find("li:nth-child(1)").before('<li class="arrow-back"></li>');

                    /* cele podmenu uloz */
                    var actSubmenuHtml = $(actSubmenu).get(0).outerHTML;
                    /* vymaz z puvodni struktury menu*/
                    $(actSubmenu).remove();
                    /* vytvor strukturu noveho bloku se vsemi podmenu*/
                    submenuItemsHtml = submenuItemsHtml + actSubmenuHtml;
                    /* v kazdem cyklu nastav sipky*/
                    setArrows(".arrow" + ".item" + index);

                }

            });
            /* po ukonceni cyklu vloz novy blok mobile-submenu se vsemi podmenu za druhe menu*/
            $("#offcanvas ul.navigation-secondary").after('<div id="mobile-submenu">' + submenuItemsHtml + '</div>');

        }

        function setArrows(actArrow) {
            /* sipka, ktera otevira podnabidku */
            $(actArrow).click(function () {
                /* zjisti prislusnou tridu sipky*/
                var actClass = $(this).attr('class').split(' ').pop();
                /* stejna trida je na podmenu = toto podmenu se zobrazi = odstrani se trida hidden*/
                $("#mobile-submenu .navigation-primary-submenu." + actClass).removeClass("hidden");
                /* obe hlavni menu se skryjí*/
                $("#offcanvas .navigation-primary").addClass("hidden");
                $("#offcanvas .navigation-secondary").addClass("hidden");
            });
        }


        setArrowBack();
        function setArrowBack() {
            /* sipka v podmenu - zpet na hlavni uroven menu*/
            $("li.arrow-back").click(function () {
                /* zjisti rodice sipky*/
                var par = $(this).parent();
                /* zjisti posledni tridu elementu*/
                var actClass = $(par).attr('class').split(' ').pop();
                /* tu smaz*/
                $(par).removeClass(actClass);
                /* pridej tridu hidden*/
                $(par).addClass("hidden");
                /* vrat zpet puvodni tridu nakonec*/
                $(par).addClass(actClass);
                /* zrus skryti rodicovského menu*/
                $("#offcanvas .navigation-primary").removeClass("hidden");
                $("#offcanvas .navigation-secondary").removeClass("hidden");
            });
        }

        /* pokud podmenu nema nastavenou tridu hidden*/
        function setHiddenSubmenu() {
            $("#offcanvas .navigation-primary-submenu").each(function (index) {
                if ($(this).hasClass("hidden")) {
                } else {
                    /* precti posledni tridu v elementu*/
                    var actItemClass = ($(this).attr('class').split(' ')[1]);
                    /* tu smaz*/
                    $(this).removeClass(actItemClass);
                    /* pridej tridu hidden*/
                    $(this).addClass("hidden");
                    /* vrat zpet puvodni tridu, ale az nakonec*/
                    $(this).addClass(actItemClass);
                }
            });
        }
    }

});