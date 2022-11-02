define([
    'jquery'
], function ($) {

    $(document).ready(function () {

        $(document).on("click", ".shopping-basket-items__qty .minus", function () {
            $(this).next(".control.qty").find("input[name$='[qty]']").val(function (i, oldval) {
                return --oldval;
            });
            $(this).next(".control.qty").find("input[name$='[qty]']").trigger('change');
        });

        $(document).on("click", ".shopping-basket-items__qty .plus", function () {
            $(this).prev(".control.qty").find("input[name$='[qty]']").val(function (i, oldval) {
                return ++oldval;
            });
            $(this).prev(".control.qty").find("input[name$='[qty]']").trigger('change');
        });

    });
});