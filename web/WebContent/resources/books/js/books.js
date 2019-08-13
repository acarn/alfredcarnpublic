function onWindowLoad(){
	try{ initializeSearch(); } catch(e) { /* Do nothing. */ }
	try{ initializeMenu(); } catch(e) { /* Do nothing. */ }
	document.getElementById("contactAlfred").addEventListener("click", onAboutClick);
}

window.onload = onWindowLoad;
