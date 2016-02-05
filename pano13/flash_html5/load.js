function loading(uri){
var _bi=window.navigator.userAgent.toLowerCase();
var _eq="";
var _br="";
var _vr="";
var _hd=document.getElementsByTagName("HEAD");
if(_bi.indexOf("applewebkit")>0){
if(_bi.indexOf("chrome")>0){
_br="chrome";
_eq="pc";
_vr=_bi.split("chrome/")[1].split(".")[0];
}else{
_br="safari";
if(_bi.indexOf("ipad")>0){
_eq="ipad";
}else if(_bi.indexOf("iphone")>0 || _bi.indexOf("ipod")>0){
_eq="iphone";
}else{
_eq="pc";
}
}
}else if(_bi.indexOf("firefox")>0){
_eq="pc";
_br="firefox"
}else if(_bi.indexOf("msie")>0){
_eq="pc";
_br="ie";
}else{
}
var _=document.createElement("link");
var _flag=false;
if(_br=="safari"){
_flag=true;
}if(_flag){
var _div=document.createElement("div");
_div.id="container";
_div.style.overflow="hidden";
_div.style.position="relative";
document.body.appendChild(_div);
_.type="text/css";
_.rel="stylesheet";
_.charset="utf-8";
_.href="style/pwvr.css";
_hd.item(0).appendChild(_);
var __=document.createElement("script");
__.type="text/javascript";
__.src="pwvr-min.js";
_hd.item(0).appendChild(__);
__.addEventListener("load",function(){loadHTML(uri);},false);
}else{
var _div=document.createElement("div");
_div.id="flashcontent";
document.body.appendChild(_div);
var __=document.createElement("script");
__.type="text/javascript";
__.src="swfobject.js";
_hd.item(0).appendChild(__);
if(_br!="ie"){
__.addEventListener("load",function(){loadFlash(false,_div)},false);
}else{
__.attachEvent("onreadystatechange",function(){loadFlash(true,_div)});
}
}
}
function loadHTML(uri){
var _=new pwvrPlayer("container");
_.readXML(uri);
}
function loadFlash(ta,info){
info.innerHTML="To view virtual tour properly, Flash Player 9.0.28 or later version is needed. Please download the latest version of <a href=\"http://www.adobe.com/go/getflashplayer\" target=\"_blank\">Flash Player</a> and install it on your computer.";
initFlash();
}
function initFlash(){
var so = new SWFObject("PWViewer.swf", "sotester", "640", "480", "9.0.0", "#FFFFFF"); 
 so.addParam("allowNetworking", "all"); 
 so.addParam("allowScriptAccess", "always"); 
 so.addParam("allowFullScreen", "true"); 
 so.addParam("scale", "noscale"); 
 so.addVariable("configFileSize", "1.453"); 
 so.addVariable("zipResSize", "0.000"); 
 so.addVariable("sceneFilesSize", "1135.558"); 
 so.addVariable("base", "pano13/");
 so.addVariable("lwBgColor", "255,255,255,255"); 
 so.addVariable("lwBarBgColor", "255,45,91,141"); 
 so.addVariable("lwBarColor", "255,130,170,215"); 
 so.addVariable("lwBarBounds", "220,236,200,8"); 
 so.addVariable("lwShowLoadingPercent", "true"); 
 so.addVariable("iniFile", "config_pano13.bin"); 
 so.addVariable("progressType", "0"); 
 so.addVariable("swfFile", ""); 
 so.addVariable("href", location.href); 
 so.write("flashcontent"); 
 }
