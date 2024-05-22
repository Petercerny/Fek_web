jQuery(function ($) {
    $(".element.filtr-oboru .reset-filter.btn-primary-small").on('click', function (event) {
        $('input[type="checkbox"]').prop("checked",false);
        $("option:selected").prop("selected", false);
    });

    $(".text-edit.detail-filter.btn-primary-small").on('click', function (event) {
        $("ul.element.filtr-oboru").toggleClass("visible");
    });
});