function initializeMenu(){
	// Menu items.
	hookupById("purpose", "click", onPurposeClick);
	hookupById("structure", "click", onStructureClick);
	hookupById("code", "click", onCodeClick);
	hookupById("about", "click", onAboutClick);
	
	// Back and close buttons.
	hookupById("explanationBack", "click", onExplanationBackClick);
	hookupById("explanationClose", "click", onExplanationCloseClick);
	
	// General document click.
	hookupByObject(document, "click", onExplanationDocumentClick);
	
	// Structure specific.
	hookupById("structureEnvironmentLabel", "click", onStructureEnvironmentLabelClick);
	hookupById("structureWebServerContainer", "click", onStructureWebServerContainerClick);
	hookupById("structureDatabaseServerContainer", "click", onStructureDatabaseServerContainerClick);
	
	// Web specific.
	hookupById("webWebProject", "click", onWebWebProjectClick);
	hookupById("webRestProject", "click", onWebRestProjectClick);
	hookupById("webJotProject", "click", onWebJotProjectClick);
	
	// Source specific.
	
	// About specific.
	hookupById("aboutLinkedIn", "click", onAboutLinkedInClick);
	hookupById("aboutGitHub", "click", onAboutGitHubClick);
}

function hookupById(/*string*/id, /*string event*/e, /*function*/f){
	hookupByObject(document.getElementById(id), e, f);
}

function hookupByName(/*string*/name, /*string event*/e, /*function*/f){
	var l = document.getElemenstByName(name);
	for( var x=0; x<l.length; x++ ){
		hookupByObject(l[x], e, f);
	}
}

function hookupByObject(/*DOM object*/o, /*string event*/e, /*function*/f){
	o.addEventListener(e, f);
}

function onPurposeClick(/*event*/e){
	showExplanation("PURPOSE");
}

function onStructureClick(/*event*/e){
	showExplanation("STRUCTURE");
}

function onCodeClick(/*event*/e){
	showExplanation("CODE");
}

function onAboutClick(/*event*/e){
	showExplanation("ABOUT");
}

function onExplanationBackClick(/*event*/e){
	var curr = document.getElementById("explanationCurrent").innerHTML;
	if( ""!=curr ){
		var back = document.getElementById(curr.toLowerCase() + "Back").innerHTML;
		if( ""!=back ){
			showExplanation(back);
		}
	}
}

function onExplanationCloseClick(/*event*/e){
	hideExplanation();
}

function hideExplanation(){
	try{
		var current = document.getElementById("explanationCurrent").innerHTML;
		current = current.toLowerCase();
		document.getElementById(current + "ForegroundContent").appendChild(
			document.getElementById(current + "Foreground"));
		
		document.getElementById(current + "ForegroundContent").appendChild(
			document.getElementById(current + "Text"));
	}
	catch(/*exception*/e){ /*Do nothing*/}
	
	document.getElementById("explanation").style.display = "none";
	document.getElementById("explanationCurrent").innerHTML = "";
}

function showExplanation(/*string*/menuItem){
	hideExplanation();
	showExplanationImp(menuItem);
}

function showExplanationImp(/*string*/menuItem){
	document.getElementById("explanation").style.display = "block";
	var foregroundDestination = "explanationForeground";
	var foregroundSource = menuItem.toLowerCase() + "Foreground";
	
	var textDestination = "explanationText";
	var textSource = menuItem.toLowerCase() + "Text";
	
	var backDestination = "explanationBack";
	var backSource = menuItem.toLowerCase() + "Back";
	
	var currentDestination = "explanationCurrent";
	var currentSource = menuItem;
	
	try {

		document.getElementById(foregroundDestination).appendChild( 
			document.getElementById(foregroundSource) );

		document.getElementById(textDestination).appendChild( 
			document.getElementById(textSource) );
		
		document.getElementById(backDestination).style.display = ( 
				""==document.getElementById(backSource).innerHTML ? "none" : "block" );
		
		document.getElementById(currentDestination).innerHTML = currentSource;
	}
	catch( /*Exception*/ e ){
		document.getElementById(foregroundDestination).innerHTML = "";
		document.getElementById(textDestination).innerHTML = "";
		document.getElementById(backDestination).style.display = "none";
		document.getElementById(currentDestination).innerHTML = "";
	}
}

function onExplanationDocumentClick(/*event*/e){
	var contactAlfred = document.getElementById("contactAlfred");
	var menu = document.getElementById("menu");
	var explanationContainer = document.getElementById("explanationContainer");
	var target = e.target;
	var inside = false;
	for(var x=0; x<20; x++){
		if( null!=target ){
			if( target == explanationContainer || target == menu || target == contactAlfred ){
				inside = true;
				break;
			}
			target = target.parentNode;			
		}
		else { break; }
	}
	if( !inside ){ hideExplanation(); }
}

// Structure specific.

function onStructureEnvironmentLabelClick(/*even*/e){
	showExplanation("ENVIRONMENT");
}

function onStructureWebServerContainerClick(/*event*/e){
	e.stopPropagation();
	showExplanation("WEB");
}

function onStructureDatabaseServerContainerClick(/*event*/e){
	e.stopPropagation();
	showExplanation("WEB");
}

function onWebWebProjectClick(/*event*/e){
	showExplanation("WEBPROJ")
}

function onWebRestProjectClick(/*event*/e){
	showExplanation("RESTPROJ")
}

function onWebJotProjectClick(/*event*/e){
	showExplanation("JOTPROJ")
}

function onAboutLinkedInClick(){
	window.open("https://www.linkedin.com/in/alfred-carn-99ab353", "_blank");
}

function onAboutGitHubClick(){
	window.open("https://github.com/acarn/alfredcarnpublic", "_blank");
}