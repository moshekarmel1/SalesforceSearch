(function(){
	function save() {
		var searchOrg = {};
		searchOrg["org"] = document.getElementById('org').value || '';
		localStorage["searchOrg"] = JSON.stringify(searchOrg);
		return false;
	}
	document.getElementById('save').addEventListener('click', save);
	if(localStorage["searchOrg"]){
		var storage = JSON.parse(localStorage["searchOrg"]);
		document.getElementById('org').value = storage["org"] || '';
	}
})();