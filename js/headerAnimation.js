window.onscroll = function(){
 var html = document.documentElement, body = document.body;
 var BlkStyle = document.getElementById('header').style;
 var shapk = document.getElementById('shapka').style;
 if(html.scrollTop>49||body.scrollTop>49) {
    BlkStyle.opacity="0.7";  
	BlkStyle.transition="all 0.6s";
	shapk.width="0px";
	shapk.height="0px";
	shapk.transition="all 0.6s";
	BlkStyle.height="50px";
 } else {
	BlkStyle.opacity="1";
	BlkStyle.height="160px";
	shapk.height="125px";
	shapk.width="auto";
 }
};