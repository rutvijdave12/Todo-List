/*1. .click() method will only add event listeners for the current elements and not future elements
  2. .on("click") will also do the same unless you select the whole parent element where the future
      elements are going to get added and then give another argument which is the element to be added
      in the future
*/

$("ul").on("click", "li", function(){
	//Select the whole ul but only listen to the event when an li inside it is clicked
	$(this).toggleClass("clicked");
});


$("ul").on("click","span", function(event){
	//$(this).remove(); //this will only remove the span element and not the whole li

	//$(this) in the below statement means that particular "span" which was clicked
	$(this).parent().fadeOut(500,function(){
		/*$(this) in the below line means the whole li since in the above line $(this).parent() makes it an li
			since the parent of span is li so that particular li will get removed
		*/
		$(this).remove();
	});

	/*
	1.When the span is clicked its event gets triggered and after that the li's event gets triggered
	and so on the events of all the higher layers if present gets triggered.
	2.The events get triggered from the inner most layer to the outer most.
	eg. when the span is clicked first its event gets triggered i.e. alert appears after that the next layer 
	i.e. lis event gets triggered which is the grey color of the font with a strike through after that the next
	layer is ul and similarly it gets propagated to #container then body then html
	3.To stop this jQuery has a method called stopPropagation() which is used on the object we pass inside
	the parantheses of the anonymous function of the click method
	*/

	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	if(event.which === 13 && $(this).val().trim() !== ""){
		var todoText = $(this).val().trim();
		$(this).val("");
		//create a new li by appending to the ul
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>");
		// $("ul").fadeIn(500,function(){
		// 	$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>");
		// })
	}
});

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
})

