
var itemsList = [];
itemsList = [
    { "itemId": 0, "itemName": "Coffee Cup", "descp": "Item 0", "price": 100, "qtyPrice":0,"qty": 0 },
    { "itemId": 1, "itemName": "Coffee Cup", "descp": "Item 1", "price": 110, "qtyPrice":0,"qty": 0 },
    { "itemId": 2, "itemName": "Coffee Cup", "descp": "Item 2", "price": 120,"qtyPrice":0, "qty": 0 },
    { "itemId": 3, "itemName": "Coffee Cup", "descp": "Item 3", "price": 130, "qtyPrice":0,"qty": 0 },
    { "itemId": 4, "itemName": "Coffee Cup", "descp": "Item 4", "price": 140, "qtyPrice":0,"qty": 0 },
    { "itemId": 5, "itemName": "Coffee Cup", "descp": "Item 5", "price": 150, "qtyPrice":0,"qty": 0 },
    { "itemId": 6, "itemName": "Coffee Cup", "descp": "Item 6", "price": 160, "qtyPrice":0,"qty": 0 },
    { "itemId": 7, "itemName": "Coffee Cup", "descp": "Item 7", "price": 170, "qtyPrice":0,"qty": 0 },
    { "itemId": 8, "itemName": "Coffee Cup", "descp": "Item 8", "price": 180, "qtyPrice":0,"qty": 0 },
    { "itemId": 9, "itemName": "Coffee Cup", "descp": "Item 9", "price": 190, "qtyPrice":0,"qty": 0 },
    { "itemId": 10, "itemName": "Coffee Cup", "descp": "Item 10", "price": 200, "qtyPrice":0,"qty": 0 },
    { "itemId": 12, "itemName": "Coffee Cup", "descp": "Item 12", "price": 220,"qtyPrice":0, "qty": 0 },
    { "itemId": 13, "itemName": "Coffee Cup", "descp": "Item 13", "price": 230,"qtyPrice":0, "qty": 0 },
    { "itemId": 14, "itemName": "Coffee Cup", "descp": "Item 14", "price": 240, "qtyPrice":0,"qty": 0 },
    { "itemId": 15, "itemName": "Coffee Cup", "descp": "Item 15", "price": 250, "qtyPrice":0,"qty": 0 },
    { "itemId": 16, "itemName": "Coffee Cup", "descp": "Item 16", "price": 260, "qtyPrice":0,"qty": 0 }
];

function CreateList(event, id, qty) {
    document.getElementById("container").innerHTML = "";
    var checkbox = event.target;
    if (checkbox.checked == true) {
        var ol = document.createElement("ol");
        ol.style.listStyleType = "number";
        for (var i = 0; i < itemsList.length; i++) {
            if (itemsList[i].itemId == id) {
                itemsList[i].qty = qty;
                itemsList[i].qtyPrice = itemsList[i].price * qty;
            }
            if (itemsList[i].qty != 0) {
                var li = document.createElement("li");
                li.append(itemsList[i].descp + "    " + itemsList[i].qtyPrice + "  " + itemsList[i].qty);
                ol.append(li);
            }
        }
        var container = document.getElementById("container");
        container.append("Ordered Items: ");
        container.appendChild(ol);
        container.appendChild(document.createElement("hr"));

    } else {
        var ol = document.createElement("ol");
        ol.style.listStyleType = "number";
        var count=0;
        for (var i = 0; i < itemsList.length; i++) {
            var tempItems=[];
            if (itemsList[i].itemId == id) {
                itemsList[i].qty = 0;
            }
            if (itemsList[i].qty != 0) {
                count++;
                var li = document.createElement("li");
                li.append(itemsList[i].descp + "    " + itemsList[i].qtyPrice + "  " + itemsList[i].qty);
                ol.append(li);
            }
        }
        if(count!=0)
        {
            var container = document.getElementById("container");
             container.append("Ordered Items: ");
            container.appendChild(ol);
        container.appendChild(document.createElement("hr"));
        }
        else
            document.getElementById("container").innerHTML = "";
    }
}

function calculateTotal() {
    var total = 0;
    for (var i = 0; i < itemsList.length; i++) {
        if (itemsList[i].qty != 0) {
            total += itemsList[i].qtyPrice;
        }
    }
    alert("Total Price: " + total)
}