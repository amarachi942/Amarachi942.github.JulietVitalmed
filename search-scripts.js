var searchIcon =
document.getElementById('searchIcon');
var searchForm =
document.getElementById('search-form');
searchIcon.addEventListener('click',function() {
	if (searchForm.style.display==='block') {
		searchForm.style.display='none';
	} else{
		searchForm.style.display='block';
	}
});
function performsearch() {
	var query =
	document.querySelector('#search-form input').value;
	alert('searching for: ' + query);
}