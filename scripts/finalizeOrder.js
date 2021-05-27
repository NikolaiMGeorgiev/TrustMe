function loadParameters() {
	var myStorage = window.localStorage;
	
	var takeАddress = myStorage.getItem('take_address');
    document.getElementById("take_address").value = takeАddress;
	
    var deliveryAddress = myStorage.getItem('delivery_address');
	document.getElementById("delivery_address").value = deliveryAddress;
	
    var shipmentInfo = myStorage.getItem('shipment_info');
	document.getElementById("shipment_info").value = shipmentInfo;
	
	var deliveryType = myStorage.getItem('deliveryType');
	
	var radios = document.getElementsByName('deliveryType');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].value == deliveryType) {
			radios[i].checked = "checked";
		}
	}
	
    var firstName = myStorage.getItem('first_name_unr_info');
	document.getElementById("first_name").value = firstName;
	
    var lastName = myStorage.getItem('last_name_unr_info');
	document.getElementById("last_name").value = lastName;
	
    var email = myStorage.getItem('email_unr_info');
	document.getElementById("email").value = email;
	
    var phone = myStorage.getItem('phone_unr_info');
	document.getElementById("phone").value = phone;		
}

function ShowHideCardPayementDataDiv() {
	var cashOnDelivery = document.getElementById("cashOnDelivery");
	var cardPayementDataBlock = document.getElementById("cardPayementData");
	cardPayementDataBlock.style.display = cashOnDelivery.checked ? "none" : "block";
}

document.getElementById("btn_edit").addEventListener('click', () => {
    let elements = document.getElementsByClassName("editable");

    for (let input of elements) {
        input.removeAttribute("disabled");
    }
})

document.getElementById("btn_finalize").addEventListener('click', () => {
    window.location.href = window.location.href.replace("finalizeOrder", "OrderSuccessful");
})


