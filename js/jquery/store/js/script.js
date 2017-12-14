
var products = [];
var toProduct = 20;
var fromData = 0;
$(window).scroll(function (e) {
    if (parseInt($(document).height() - ($(window).height())) == parseInt($(window).scrollTop())) {
        loadMore();
    }
})

$.ajax({
    url: 'http://wpwith.us/experis/cart-products-ajax.php',
    type: 'POST',
    dataType: 'json',
    crossDomain: true,
    cache: false,
    data: { from: 1, to: toProduct },
    success: function (data) {
        var product = {};
        product.selector = "#Products";
        product.items = data;
        products.push(product);
        shop(products, '#cartTable');
    }
});
function loadMore() {
    toProduct += 8;
    $.ajax({
        url: 'http://wpwith.us/experis/cart-products-ajax.php',
        type: 'POST',
        dataType: 'json',
        crossDomain: true,
        cache: false,
        data: { from: fromData, to: toProduct },
        success: function (data) {
            if (toProduct - fromData < data.length && toProduct > fromData - 1) {
                var product = {};
                product.selector = "#Products";
                product.items = data;
                products.push(product);
                shop(products);
            }
        }
    });
    fromData += 8;
}
$(window).scroll(function (e) {
    var $el = $('#cartTable');
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 200 && !isPositionFixed) {
        $('#cartTable').css({ 'position': 'fixed', 'top': '0px', right: '0px' });
    }
    if ($(this).scrollTop() < 200 && isPositionFixed) {
        $('#cartTable').css({ 'position': 'static', 'top': '0px' });
    }
})


function shop(products, cartSelector) {
    var cart = (function (selector) {
        var cartTable = $("<table id='cartTable'>");
        cartTable.append("<h2>Cart</h2>");
        cartTable.append("<tr id=''title-row><th></th><th>Products</th><th>Qty</th><th>Price</th><th>Total</th></tr>");
        cartTable.append("<tr id='total-row'><td>Total</td><td></td><td id='totalQty'></td><td></td><td id='totalBill'></td></tr>");
        $(selector).append(cartTable);
        return { addItem: addItem };
    })(cartSelector);
    var parentContainer = $('#productContainer');
    for (var i = 0; i < products.length; ++i) {
        var prod = products[i];
        //In order to avoid 2 # on the ID 
        if(products.length == 1) {
            var productId = prod.selector.substring(1);
            var container = $('<div>');
            container.attr('id', productId);
            var selctor = $('<h2>').text(productId.toUpperCase());
            parentContainer.append(selctor);
            container.attr('class', 'eachSelectors')
            parentContainer.append(container);
        }
        new ProductList(prod.items, prod.selector, cart);
    }
}
function ProductList(items, selector, cart) {
    var container = $(selector);
    items.forEach(function (element, i) {
        // create the product div
        var name = $('<h3>').html(element.name).css({ "background-color": "#89da59" });
        var price = $('<p>').html("$" + element.price);
        var image = '<img src="' + element.image + '">';
        var cont = $('<div>');
        cont.attr("class", 'eachProduct');
        element.sku = selector + i;
        var btn = $('<button>').text('Add to Cart');
        btn.data('prod', {
            sku: element.sku,
            name: element.name,
            price: element.price,
        });
        btn.click(function () {
            cart.addItem($(this).data('prod'));
        });
        $(cont).append(name, price, image, btn);
        $(selector).append(cont);
    });
}
function addItem(sku, name, price, eventType) {
    if (typeof sku === 'object' && arguments.length === 1) {
        name = sku.name;
        price = sku.price;
        sku = sku.sku.substring(1);
        quantity = sku.quantity;
    }
    var productQty = $('#' + sku + " :input");
    var prodTotal = $('#' + sku).children("#total");
    //if the product is exist
    if (productQty.length > 0) {


        var val = productQty.val();

        if(eventType != "inputEvent") {
            val++;
            productQty.val(val);
        }
        var valTotal = parseFloat(val * price).toFixed(4);
        prodTotal.text(valTotal);
    }
    else {
        var row = $("<tr>", { 'id': sku });
        var spanX = $('<td class="deleteRow">').append("<span>X</span>");
        var tdProducts = $('<td class="name">').text(name);
        var tdInput = $('<td>').append('<input type="number" class="qtyInput" id="quantity"  maxlength="3" size="3" value="1"/>');

         tdInput.on("input", function(){
            addItem(sku,name,price,"inputEvent");
        }); 

        var tdPrice = $('<td>').text(price);
        var total = $('<td id="total" class="total">').text(price);
        row.append(spanX, tdProducts, tdInput, tdPrice, total);
        row.insertBefore("#total-row");
    }
    updateSum("cartTable");
    $('input').on("input", ".qtyInput", function (e) {
    var currentId = $(this).attr("id");
    var val = productQty.val();
    var valTotal = parseFloat(val * price).toFixed(4);
    prodTotal.text(valTotal);
    updateSum("cartTable");
});
}
$('table').on('click', '.deleteRow', function (e) {
    $(this).closest('tr').remove()
    updateSum("cartTable");
})
function updateSum(cartSelector) {
    var qty = 0;
    var ttl = 0;
    var totalTd = $(".total");
    var quantityTD = $("input:not([type=hidden])");
    totalTd.each(function () {
        //add only if the value is number
        var totalVal = $(this).text();
        if (!isNaN(totalVal) && totalVal.length != 0) {
            ttl += parseFloat(totalVal);
        }
    });
    ttl = parseFloat(ttl).toFixed(4);
    quantityTD.each(function () {
        var quantVal = $(this).val();
        if (!isNaN(quantVal) && quantVal.length != 0) {
            qty += parseFloat(quantVal);
        }
    });
    $("#totalBill").html(ttl);
    $("#totalQty").html(qty);
}

$("#paypal").click(function () {
    updateToPayPal();
});

function updateToPayPal() {
           var formChildren = $("#payPalInputs");
           var itemsInTable = $("#cartTable").find('tr');
           var j = 1;
           for (var i = 0; i < itemsInTable.length; i++) {

               var tr = itemsInTable[i];

            var qty = $(tr).find('.qtyInput').val();
            if(qty === undefined)
                continue;
               var price = $(tr).find('.total').text();
               var name = $(tr).find('.name').text();

               var itemName = $('<input type="hidden" name="item_name_' + j + '" value="' + name + '">');
               var itemPrice = $('<input type="hidden" name="amount_' + j + '" value="' + parseInt(price) + '">');
               var itemQty = $('<input type="hidden" name="quantity_' + j + '" value="' + qty + '">');
               j++;
               $(formChildren).append(itemName).append(itemPrice).append(itemQty);
           }
       }


       