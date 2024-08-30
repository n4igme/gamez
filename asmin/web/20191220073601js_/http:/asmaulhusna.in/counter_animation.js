var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

//Counter Animation
$(document).ready(function(){
						   
countanim = 0;
totalanim = $("#startcounter").text();
$("#startcounter").text('');
countanim = totalanim-300;
//alert(totalanim);

function countstarted() {
    if(countanim<totalanim){
	countanim++;
	$("#startcounter").text(countanim);
	}else{
	clearInterval(counteranim_interval);
	}
}
counteranim_interval = setInterval(countstarted, 5);

});


}
/*
     FILE ARCHIVED ON 18:56:33 Jun 07, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:01:32 Aug 30, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.519
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.014
  cdx.remote: 34.244
  LoadShardBlock: 469.52 (3)
  PetaboxLoader3.datanode: 261.068 (5)
  PetaboxLoader3.resolve: 144.104 (3)
  load_resource: 464.993 (2)
*/