

/*  
OrderFinalStep.aspx 
if (window.location.href.indexOf("OrderFinalStep.aspx") > -1) {
*/
/*jslint browser: true*/
/*global $, jQuery*/
/*jslint devel: true */

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



/*
$(document).ready(function ducID() {
    "use strict";
    var getClass = $('.Duc')[1],
        dialidset = getClass.getAttribute("dialid"),
        dialdenotation = document.createElement('div'),
        divHide = document.getElementById('ctl00_cphMainContent_pnlPropertiesConfig');
    dialdenotation.innerHTML = (dialidset);
    dialdenotation.setAttribute("id", "iNeedThisDialNumber");
    dialdenotation.style.display = 'none';
    divHide.append(dialdenotation);
});
*/