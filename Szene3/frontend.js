	/*Erster JS Teil ursprünglich in HTML am Ende*/
$( document ).ready(function() {
	
	var touchEvent = new Hammer(document.getElementById('praesentation'));

	
	/*Wenn kein Anker gesetzt ist, dann setzte Ihn auf 1*/
		if (!gibAnkerInt()){
		location.hash = "#1";
		}
	$('.menu').click(function()
		{	
			$(".hauptnavi li").slideToggle("slow");
			$(".meta").fadeToggle("fast");
		});
		
	/*Klickweiterschaltung*/
	
	touchEvent.on("swipe", function() {
			var screenId= "#"+gibAnkerInt();
			
			ankerVor();

			if ($(""+screenId+"").hasClass("slidenext")) {

				slide();
			}
			else{
				
				if ($(""+screenId+"").hasClass("loadnext")) {
					loadScreen();
				}

			}
			});
			
		$('.screens').click(function(){

			if ($(this).hasClass("slidenext")) {
				slide();
			}
			else{
				
				if ($(this).hasClass("loadnext"))
				{
					loadScreen();
				}

			}
						ankerVor();

			});
			
			
		
	
	/*Navigation*/
		$('.navigation').click(function()
		{
		$(".screendesign").css("color", "#c8d300");
		screenZeigen(wandelAnkerInt($(this).attr("href")));
		$(".seitenstruktur").css("color", "white");
		})

	/*Zeige Screen nach Parameter an*/
		screenZeigen (gibAnkerInt());	
		
	/*Navigation*/
		$('.navigation').click(function()
		{
		$(".screendesign").css("color", "#c8d300");
		screenZeigen(wandelAnkerInt($(this).attr("href")));
		$(".seitenstruktur").css("color", "white");
		
		})
	
	/*Seitenstruktur*/
		$('.seitenstruktur').click(function()
		{	
			$(".screendesign").css("color", "white");
			$(this).css("color", "#c8d300");
			$(".ueberschrift").text($(this).text())
		})
		
		$('.screendesign').click(function()
		{	
			$(this).css("color", "#c8d300");
			
		})
		
		
	
	/*Hilfe*/
		$('.hilfe').click(function()
		{
		$('.hilfebox').fadeToggle("slow");
		})
		
		$('.hilfe-schliessen').click(function()
		{
		$('.hilfebox').fadeToggle("slow");
		})







$(document).keydown(function(e){
    if (e.keyCode == 38) { 
       $("header").addClass("open");
       return false;
    }
	if (e.keyCode == 40) { 
       $("header").removeClass("open");
       return false;
    }
	if (e.keyCode == 39) { 
 	  ankerVor();
	 }
	if (e.keyCode == 37) { 
	  ankerZurueck();
	}

	
});

function gibAnkerInt()
	{
		var stringAnker = location.hash.split('#')[1];
		ankerVar = parseInt(stringAnker);	
		return ankerVar;
	}
	
function wandelAnkerInt(kompletteurl)
	{	
		
		var stringAnker = kompletteurl.split('#')[1];
		ankerVar = parseInt(stringAnker);	
		return ankerVar;
	}


function naechsterScreenFunktion(anker){
	
	if(anker < anzahlScreens){
		// Nächser Screen 
		anker+=1;
		// Einblenden
		screenZeigen(anker)
		
	}
	else
		{	
			//Zurücksetzen
			screenZeigen(1)
			anker = 1;
			location.hash = "#1";
			
		}
}
function vorherigerScreenFunktion(anker){
	
		// Nächser Screen 
		anker-=1;
		// Einblenden
		screenZeigen(anker)
		
	
	
}

function screenZeigen(anker){
		// Screen ein / ausblenden
		$("ul .screens").css("display", "none");
		$("ul .screens:nth-child("+anker+")").css("display", "block");
		
		// Navigation aktiv / inaktiv
		$(".hauptnavi li a").css("color", "white");
		$('.navigation').removeClass("active");
		$(".hauptnavi li:nth-child("+anker+") a").css("color", "#c8d300");
		$(".seitenstruktur").css("color", "white");	
		// Überschrift ändern
		var i = $(".hauptnavi li:nth-child("+anker+") a").text();
		
		//Seitenstruktur/Screendesign Zustände
		if(i != ""){
		$(".ueberschrift").text($(".hauptnavi li:nth-child("+anker+") a").text());
		$(".screendesign").css("color", "#c8d300");	
		}
		else{
		$(".ueberschrift").text("Seitenstruktur");
		$(".screendesign").css("color", "white");	
		$(".seitenstruktur").css("color", "#c8d300");	
		}
}

function ankerVor(){
		if(gibAnkerInt() < anzahlScreens){
		naechsterScreenFunktion(gibAnkerInt());
		var neuerAnker = gibAnkerInt() + 1;
		var ankerErstellen = "#"+neuerAnker;
		location.hash = ankerErstellen;
	}
	else{
		location.hash = "#1";
		screenZeigen (gibAnkerInt());	
	}
    
}
function ankerZurueck(){
		vorherigerScreenFunktion(gibAnkerInt());
		if(gibAnkerInt() > 1){
		var neuerAnker = gibAnkerInt() -1;
		screenZeigen (neuerAnker)
		var ankerErstellen = "#"+neuerAnker;
		location.hash = ankerErstellen;
	}
	else{
		var ankerErstellen = "#"+anzahlScreens;
		location.hash = ankerErstellen;
		screenZeigen (gibAnkerInt());	
	}
    
}

function loadScreen(){
	
	$(".modal").show();
	var s = 0;
	if (s == 0){
	setTimeout(function(){
	$(".modal").fadeOut("fast");
							 }, 700);	
						}
}
function slide(){
		$(".screens").css("background-position-x","1100px");
	$(".screens").animate({
		'background-position-x': '0px'
	}, 400, 'linear');
	}

});