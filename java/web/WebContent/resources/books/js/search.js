function initializeSearch(){
	var s = document.getElementById("search");
	s.addEventListener("click", onSearchClick);
	s.addEventListener("keydown", onSearchKeyDown);
	s.focus();
	s.select();
	
	var p = document.getElementById("prev");
	p.addEventListener("click", onPrevClick);
	
	var n = document.getElementById("next");
	n.addEventListener("click", onNextClick);
	
}

function onSearchClick(/*Event*/e){
	var s = document.getElementById("search");
	s.focus();
	s.select();
}

function onSearchKeyDown(/*Event*/e){
	if( /*Enter key*/13 == e.keyCode ){ 
		setPage(0);
		redirect(); 
	}
}

function getPage(){
	return parseInt(document.getElementById("page").value);
}

function setPage(/*int*/ page){
	document.getElementById("page").value = page;
}

function getTitleOrAuthor(){
	return document.getElementById("titleOrAuthor").value;
}

function getSize(){
	return parseInt(document.getElementById("size").value);
}

var searchStatus = "";
function redirect(){
	var wr = document.getElementById("webRoot");
	var s = document.getElementById("search");
	var sv = encodeURI(s.value);
	searchStatus = "REDIRECTING";
	window.location = wr.value + "/books/search/" + ((""==sv)?"Search for a book":sv) + "/" + getPage();
}

function onPrevClick(/*Event*/e){
	if(""==searchStatus){
		if(0<getPage()) { setPage(getPage()-1); }
		redirect();
	}
}

function onNextClick(/*Event*/e){
	if(""==searchStatus){
		if(0<getSize()) { setPage(getPage()+1); }
		redirect();
	}
}
