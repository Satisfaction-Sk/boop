
$('#filters li').click(function(){

	// on recupère la valeur du filtre
	value = $(this).data('filter');
	// on enlève la classe active de l'ancien élément
	$('.filter li').removeClass('active');
	// on ajoute la classe active sur l'élément cliqué
	$(this).addClass('active');
    
	// pour chaque div 
	$('.box').each(function(){
        el = $(this);
		
		// on montre tout
		el.show();
		// on teste si l'élément n'a pas la classe du filtre ou que l'utilisateur ne souhaite pas tout affiché
		if(!el.hasClass(value))
			el.hide(); // on cache les éléments qu'on ne souhaite pas voir
        
	});
});



$('#filters li').click( function() {
	$('.home').css('display', 'none');
} );




// ------------------ slider ------------------

var slideIndex = [1, 1, 1, 1, 1, 1, 1, ];
var slideId = ["mySlides1", "mySlides2","mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7" ]
showDivs(1, 0);
showDivs(1, 1);
showDivs(1, 2);
showDivs(1, 3);
showDivs(1, 4);
showDivs(1, 5);
showDivs(1, 6);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1
  }
  if (n < 1) {
    slideIndex[no] = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
} 