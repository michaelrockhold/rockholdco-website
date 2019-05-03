// Created by iWeb 3.0.3 local-build-20110616

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,278),url:'About_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'About_files/stroke_1.png'},{rect:new IWRect(5,-5,402,10),url:'About_files/stroke_2.png'},{rect:new IWRect(407,-5,10,10),url:'About_files/stroke_3.png'},{rect:new IWRect(407,5,10,278),url:'About_files/stroke_4.png'},{rect:new IWRect(407,283,10,11),url:'About_files/stroke_5.png'},{rect:new IWRect(5,283,402,11),url:'About_files/stroke_6.png'},{rect:new IWRect(-5,283,10,11),url:'About_files/stroke_7.png'}],new IWSize(412,288))});registry.applyEffects();}
function hostedOnDM()
{return true;}
function onPageLoad()
{loadMozillaCSS('About_files/AboutMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
