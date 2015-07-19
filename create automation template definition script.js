var automation = CDS.automation.AutomationData.automation;

var uidef = automation.Definition;
var series = automation.Series;

var template = {definition: uidef, series: series};
var string = JSON.stringify(template);

template;


// fix for bug - we took too much of the series apparently.

for (var key in series) {
  if (series.hasOwnProperty(key)) {
  	var seriesObj = series[key];

	var nodeDataArray = seriesObj.nodeDataArray;

	for (var i = nodeDataArray.length - 1; i >= 0; i--) {

		if (nodeDataArray[i].ListCategories) nodeDataArray[i].ListCategories = [];
		if (nodeDataArray[i].ListOwners) nodeDataArray[i].ListOwners = [];

	};

  }
}
// fix for all current automations


var data = ko.dataFor($0);
var templates = data.automationTemplates();

for (var i = templates.length - 1; i >= 0; i--) {
	var definitionJson = templates[i].AutomationUiDefinitionsJson;

	var definition = JSON.parse(definitionJson);

	var series = definition.series;

	for (var key in series) {
	  if (series.hasOwnProperty(key)) {
	  	var seriesObj = series[key];

		var nodeDataArray = seriesObj.nodeDataArray;

		for (var j = nodeDataArray.length - 1; j >= 0; j--) {

			if (nodeDataArray[j].ListCategories) nodeDataArray[j].ListCategories = [];
			if (nodeDataArray[j].ListOwners) nodeDataArray[j].ListOwners = [];

		};

	  }
	}

	templates[i].AutomationUiDefinitionsJson = JSON.stringify(definition);

};




// fix for bug - create new GUIDs for nodeIds

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

