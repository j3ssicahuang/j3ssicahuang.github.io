/**
 * Makes lightbox overlay visible, and shows the lightbox pop-up corresponding to the id
 *
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */
function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(lightboxID).classList.remove('hidden');
}


/*Functions for each pasta*/
function unhideLightbox1() {
	unhideLightbox('pasta1');
}
document.getElementById('picture-1').onclick = unhideLightbox1;

function unhideLightbox2() {
	unhideLightbox('pasta2');
}
document.getElementById('picture-2').onclick = unhideLightbox2;

function unhideLightbox3() {
	unhideLightbox('pasta3');
}
document.getElementById('picture-3').onclick = unhideLightbox3;

function unhideLightbox4() {
	unhideLightbox('pasta4');
}
document.getElementById('picture-4').onclick = unhideLightbox4;

function unhideLightbox5() {
	unhideLightbox('pasta5');
}
document.getElementById('picture-5').onclick = unhideLightbox5;

function unhideLightbox6() {
	unhideLightbox('pasta6');
}
document.getElementById('picture-6').onclick = unhideLightbox6;

function unhideLightbox7() {
	unhideLightbox('pasta7');
}
document.getElementById('picture-7').onclick = unhideLightbox7;

function unhideLightbox8() {
	unhideLightbox('pasta8');
}
document.getElementById('picture-8').onclick = unhideLightbox8;

function unhideLightbox9() {
	unhideLightbox('pasta9');
}
document.getElementById('picture-9').onclick = unhideLightbox9;


/*close*/
function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');
	document.getElementById(lightboxID).classList.add('hidden');
}

function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');

	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}

document.getElementById('lightbox-overlay').onclick = closeAllLightboxes;