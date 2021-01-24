export function display(errorMessage) {
	
	let swl = require("admin-lte/plugins/sweetalert2/sweetalert2.all");
	
	swl.fire("" + errorMessage.errorCode, errorMessage.errorMessage, 'error');
	
}

export function displayAjaxError(req, textStatus, errorThrown) {
	
	display({errorCode: req.status, errorMessage: "Error on jquery ajax function: " + textStatus + " - " + errorThrown});
	
}
