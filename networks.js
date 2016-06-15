var networks = ["Please select a Network Zone."];
//var networkZone = [];
//var datacenterLocation = [];


function sydneyNetworks(networkZone) {
"use strict";
	if (networkZone) {
	 	switch(networkZone) {
 			case "Web": return ["VLAN103 - Web Dev","VLAN104 - Web Prod"];
 			case "Application": return ["VLAN105 - App Dev","VLAN106 - App Prod"];
 			case "Database": return ["VLAN107 - DB Dev","VLAN108 - DB Prod"];
		}
	} else {
		return ["Please select a Network Zone."];
	}
}


function melbourneNetworks(networkZone) {
"use strict";
	if (networkZone) {
 		switch(networkZone) {
 			case "Web":  return ["VLAN203 - Web Dev","VLAN204 - Web Prod"];
 			case "Application": return ["VLAN205 - App Dev","VLAN206 - App Prod"];
 			case "Database": return ["VLAN207 - DB Dev","VLAN208 - DB Prod"];	
		}
	} else {
		return ["Please select a Network Zone."];
	}
}

function networksForLocation(datacenterLocation) {
"use strict";
	if (datacenterLocation) {
		switch (datacenterLocation) {
			case "Sydney": return sydneyNetworks();
			case "Melbourne": return melbourneNetworks();
		}	
	} else {
		return ["Please select a Network Zone."];
	}
}