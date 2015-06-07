function onClickHandler(info, tab) {
	var org = "na13";
	if(localStorage["searchOrg"]){
		var storage = JSON.parse(localStorage["searchOrg"]);
		if(storage.org){
			org = storage.org;
		}
	}
	var tab = chrome.tabs.create({
		url: "https://" + org + ".salesforce.com/_ui/search/ui/UnifiedSearchResults?searchType=2&str=" + info.selectionText
	});
};
chrome.contextMenus.onClicked.addListener(onClickHandler);
chrome.runtime.onInstalled.addListener(function() {
	var contexts = ["selection"];
	for (var i = 0; i < contexts.length; i++) {
		var context = contexts[i];
		var title = "Search '%s' in Salesforce";
		var id = chrome.contextMenus.create({
			"title": title,
			"contexts": [context],
			"id": "context" + context
		});
	}
});