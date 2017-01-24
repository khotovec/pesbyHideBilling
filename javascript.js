/*jslint browser: true*/
/*global $, jQuery*/
/*jslint devel: true */

$(document).ready(function hideBilling() {
    "use strict";
    if (window.location.href.indexOf("CheckoutFinal.aspx") > -1) {
        var billingDiv = document.getElementById('ctl00_cphMainContent_trBillingAddress'),
            addAddressLink = document.getElementById('ctl00_cphMainContent_ShippingAddress_lnkAddAddress'),
            useBillingRadio = document.getElementById('radAsBilling'),
            editAddressLink = document.getElementById('ctl00_cphMainContent_ShippingAddress_lnkEditAddress');
        billingDiv.style.display = 'none';
        addAddressLink.style.display = 'none';
        useBillingRadio.style.display = 'none';
        editAddressLink.style.display = 'none';
    }
});