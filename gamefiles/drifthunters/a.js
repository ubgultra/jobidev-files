/*<https://imasdk.googleapis.com/js/sdkloader/ima3.js>;rel=preload;as=script,<https://securepubads.g.doubleclick.net/tag/js/gpt.js>;rel=preload;as=script,<https://scylla.wgplayer.com/f_webp/w_800/q_90/https://afg.wgplayer.com/afg_white_bkg.jpg>;rel=preload;as=image,<https://cdn.ampproject.org/v0.js>;rel=preload;as=script,<https://cdn.ampproject.org/v0/amp-list-0.1.js>;rel=preload;as=script,<https://cdn.ampproject.org/v0/amp-mustache-0.2.js>;rel=preload;as=script,<https://wgd.wgplayer.com/wgd/gfc/universal-choices.min.js>;rel=preload;as=script,<https://wgd.wgplayer.com/wgdu/unblocked-games.s3.amazonaws.com/conf.wgd.js>;rel=preload;as=script,<https://wgd.wgplayer.com/wgdu/unblocked-games.s3.amazonaws.com/wgDesktopAds.min.js>;rel=preload;as=script,<https://st.wgplayer.com/vignette.new.js?x=true&d=unblocked-games.s3.amazonaws.com&cb=1728247376>;rel=preload;as=script,<https://afg.wgplayer.com/unblocked-games.s3.amazonaws.com/wgAds.mobile.conf.js?cb=9347543098654>;rel=preload;as=script,<https://afg.wgplayer.com/unblocked-games.s3.amazonaws.com/js/kKPJOhrDv46qbOr_qnO6ZA/87998009990/wgAds.js?cb=9347543098654>;rel=preload;as=script,<https://afg.wgplayer.com/unblocked-games.s3.amazonaws.com/ref.js>;rel=preload;as=script,<https://afg.wgplayer.com/unblocked-games.s3.amazonaws.com/js/kKPJOhrDv46qbOr_qnO6ZA/87998009990/wgAds.js?cb=9347543098654>;rel=preload;as=script*/
let checkWgseCounter = 0;
var checkWgse = setInterval(function() {
  	let wgse2 = document.querySelector('.main__content.post__inner');
  	
  	if (wgse2){        
      clearInterval(checkWgse);
      let wgse1 = document.createElement('div');
      wgse1.setAttribute('id', 'wgtop');
      wgse1.style.cssText = 'margin: 0px auto 0px ; margin-top: 30px; margin-bottom: 10px; min-height: 140px; width: 100%; display: block;';
      wgse2.insertBefore(wgse1, wgse2.firstChild);
    }
  
  	if( checkWgseCounter >= 2500 ){
      clearInterval(checkWgse);
    }
  
    checkWgseCounter = checkWgseCounter + 50;
  
}, 50);


let checkWgse1Counter = 0;
var checkWgse1 = setInterval(function() {
    
  	let wgafg1 = document.querySelector('.post__entry center');
  	
  	if( wgafg1 ){
      clearInterval(checkWgse1);
      let wgafg = document.createElement('div');
      wgafg.setAttribute('id', 'wgafg-game-container');
      wgafg.style.cssText = 'width: 100%; height: 100%; display: block;';
      
      //wgafg1.insertBefore(wgafg, wgafg1.firstChild);      
      document.querySelector('.post__iframe').appendChild(wgafg);
      let gameIframe = document.querySelector( ".post__entry iframe" );
      if( gameIframe ){
      	gameIframe.replaceWith(wgafg);
      	wgafg.appendChild( gameIframe );
      }
    }
  
  	if( checkWgse1Counter >= 2500 ){
    	clearInterval(checkWgse1);
    }
  
  	checkWgse1Counter = checkWgse1Counter + 100;

}, 100);


if( window.location.href.match(/pre.html/) ){
	window['wgGameContainerID'] = 'gameContainer'; 
}

/*/unblocked-games.s3.amazonaws.comundefinedundefined*/
/*m4*/
var wgNetworkId='/1002212,21867159828/';
var wgAudioAd=1;
((h,d)=>{function f(c,e,b){window.dataLayer.push(arguments)}window.dataLayer=window.g||[];let a,r=document.cookie.split(";").filter(c=>0===c.trim().indexOf("FCCDCF"));a={ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied"};let l=d.localStorage.getItem("wgConsentMode_1");0<r.length&&l&&(a=JSON.parse(l),f("consent","default",{...a}));let m=()=>{d.localStorage.setItem("wgConsentMode_1",JSON.stringify(a));f("consent","default",{...a});f("set","ads_data_redaction",
    !0);var c=h.querySelector(".fc-preferences-container"),e=h.createElement("div");e.setAttribute("new-options","");e.innerHTML='\n        <div class="fc-preference-divider">\n        \n            <p>Analytics cookie preferences</p>\n            \x3c!--\n            <button class="fc-help-tip" data-title="Analytics cookie preferences" data-full-info="Analytics cookie preferences" role="tooltip" aria-label="Analytics cookie preferences" tabindex="0">\n                <i class="material-icons" data-title="Analytics cookie preferences" data-full-info="Analytics cookie preferences" translate="no">help_outline</i>\n            </button>\n            --\x3e\n        </div> \n        \n              \n        <div class="fc-preference-container">\n            <div class="fc-preference-title">\n                <h2>Analytics storage</h2>\n            </div>\n            <div class="fc-preference-description">\n                <p class="fc-purpose-feature-description fc-truncated-3-line">\n                    Enables storage (such as cookies) related to analytics e.g. visit duration.\n                </p>                \n            </div>\n            <label class="fc-preference-slider-container fc-consent-preference-container">\n                <span class="fc-preference-slider-label">Store analytics data</span>\n                <span class="fc-preference-slider">\n                    <input type="checkbox" purpose="wg_gdpr_analytics_storage" key="analytics_storage" role="button" aria-label="Enables storage (such as cookies) related to analytics e.g. visit duration." aria-pressed="false" tabindex="0" class="fc-preference-consent purpose" data-id="1">\n                    <span class="fc-slider-el"></span>\n                </span>\n            </label>\n        </div>\n\n        \n        <div class="fc-preference-container">\n            <div class="fc-preference-title">\n                <h2>Ad storage</h2>\n            </div>\n            <div class="fc-preference-description">\n                <p class="fc-purpose-feature-description fc-truncated-3-line">\n                    Enables storage (such as cookies) related to advertising.\n                </p>\n            </div>\n            <label class="fc-preference-slider-container fc-consent-preference-container">\n                <span class="fc-preference-slider-label">Store ad data</span>\n                <span class="fc-preference-slider">\n                    <input type="checkbox" purpose="wg_gdpr_ad_storage" key="ad_storage" role="button" aria-label="Store ad data" aria-pressed="false" tabindex="1" class="fc-preference-consent purpose" data-id="2">\n                    <span class="fc-slider-el"></span>\n                </span>\n            </label>\n        </div>\n\n        <div class="fc-preference-container">\n            <div class="fc-preference-title">\n                <h2>Ad personalization</h2>\n            </div>\n            <div class="fc-preference-description">\n                <p class="fc-purpose-feature-description fc-truncated-3-line">\n                    Sets consent for personalized advertising.\n                </p>                \n            </div>\n            <label class="fc-preference-slider-container fc-consent-preference-container">\n                <span class="fc-preference-slider-label">Store analytics data</span>\n                <span class="fc-preference-slider">\n                    <input type="checkbox" purpose="wg_gdpr_ad_personalization" key="ad_personalization" role="button" aria-label="Sets consent for personalized advertising." aria-pressed="false" tabindex="2" class="fc-preference-consent purpose" data-id="3">\n                    <span class="fc-slider-el"></span>\n                </span>\n            </label>\n        </div>\n\n        \n        <div class="fc-preference-container">\n            <div class="fc-preference-title">\n                <h2>Ad user data</h2>\n            </div>\n            <div class="fc-preference-description">\n                <p class="fc-purpose-feature-description fc-truncated-3-line">\n                    Sets consent for sending user data related to advertising to Google.\n                </p>\n            </div>\n            <label class="fc-preference-slider-container fc-consent-preference-container">\n                <span class="fc-preference-slider-label">Store ad data</span>\n                <span class="fc-preference-slider">\n                    <input type="checkbox" purpose="wg_gdpr_ad_user_data" key="ad_user_data" role="button" aria-label="Sets consent for sending user data related to advertising to Google." aria-pressed="false" tabindex="3" class="fc-preference-consent purpose" data-id="4">\n                    <span class="fc-slider-el"></span>\n                </span>\n            </label>\n        </div>\n\n    ';
    e=Array.from(e.querySelectorAll("[new-options] > div")).reverse();for(let k of e)c.insertBefore(k,c.firstChild);c=c.querySelectorAll('[purpose*="wg_gdpr_"]');for(var b of c)b.addEventListener("click",k=>{a[k.target.getAttribute("key")]=k.target.checked?"granted":"denied";d.localStorage.setItem("wgConsentMode_1",JSON.stringify(a))});(b=h.querySelector(".fc-button.fc-cta-consent.fc-primary-button"))&&!b.getAttribute("listener")&&(b.addEventListener("click",()=>{a={ad_storage:"granted",ad_user_data:"granted",
        ad_personalization:"granted",analytics_storage:"granted"};d.localStorage.setItem("wgConsentMode_1",JSON.stringify(a));f("consent","update",{...a})}),b.setAttribute("listener",!0));(b=h.querySelector(".fc-button.fc-data-preferences-accept-all.fc-secondary-button"))&&!b.getAttribute("listener")&&(b.addEventListener("click",()=>{a={ad_storage:"granted",ad_user_data:"granted",ad_personalization:"granted",analytics_storage:"granted"};d.localStorage.setItem("wgConsentMode_1",JSON.stringify(a));f("consent",
        "update",{...a})}),b.setAttribute("listener",!0));(b=h.querySelector(".fc-button.fc-confirm-choices.fc-primary-button"))&&!b.getAttribute("listener")&&(b.addEventListener("click",()=>{let k=d.localStorage.getItem("wgConsentMode_1");k&&(a=JSON.parse(k));d.localStorage.setItem("wgConsentMode_1",JSON.stringify(a));f("consent","update",{...a})}),b.setAttribute("listener",!0));(b=h.querySelector(".fc-button.fc-cta-do-not-consent.fc-secondary-button"))&&!b.getAttribute("listener")&&(b.addEventListener("click",
        ()=>{a={ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied"};d.localStorage.setItem("wgConsentMode_1",JSON.stringify(a));f("consent","update",{...a})}),b.setAttribute("listener",!0))},n=()=>{h.querySelector(".fc-consent-root")?m():(new MutationObserver(function(c){for(let e of c)for(let b of e.addedNodes)b.tagName&&b.classList.contains("fc-consent-root")&&(this.disconnect(),m())})).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0})};
    n();h.addEventListener("DOMContentLoaded",()=>{let c=document.querySelector("[recall-consent]");c&&c.addEventListener("click",e=>{e.preventDefault();(window.googlefc=window.googlefc||{}).showRevocationMessage();n();a={ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied"};d.localStorage.setItem("wgConsentMode_1",JSON.stringify(a));f("consent","update",{...a})})});let p=-1,q=()=>{window.__tcfapi?window.__tcfapi("addEventListener",2,c=>{clearTimeout(p);!0!==
    c.gdprApplies&&(a={ad_storage:"granted",ad_user_data:"granted",ad_personalization:"granted",analytics_storage:"granted"},d.localStorage.setItem("wgConsentMode_1",JSON.stringify(a)),f("consent","update",{...a}))}):p=setTimeout(q,100)};q()})(document,window);
//# sourceURL=/_/wgdpr/
var wgGlobalUniversal={"wgNetworkId":"","wgPageType":"","wgIPrerollInt":"","wgIPageInt":"1,30,30","wgiName":"unb0k36g2m34","wgipName":"","weeGooLazy":"","weeGooCB":"XwH8PoGJwiXyuPRj2HdUDUx0MSdEZGFU"};
/*window['wgGlobalUniversal']['weeGooLazy'] = true;*/
window['wgplayground_content'] = false;
var wgPageType='';
try{
  document.querySelector(".post__entry .wp-block-column:first-of-type").classList.add("wg_middle")
}catch(e){}

 /*var wgClsOpt = [{
    "id": "page_top",
   	"ad_sizes":[[970, 90],[728,90],'fluid'],
    "desktop_sizes": [[970, 90], [728, 90]],
    "mobile_sizes": [[336, 280], [300, 250]],
    "mappings": [
        [[1900, 0], [['parentWidth', 200], ['parentWidth', 150], ['parentWidth', 120], ['parentWidth', 100], [970, 200], [970, 90], [728, 90], 'fluid']],
        [[1571, 0], [['parentWidth', 120], ['parentWidth', 100], [970, 90], [728, 90], 'fluid']],
        [[1000, 0], [['parentWidth', 100], ['parentWidth', 90], [970, 90], [728, 90], 'fluid']],
        [[730, 0], [['parentWidth', 100], ['parentWidth', 90], [728, 90], 'fluid']],
        [[0, 0], []]],
    "env_switch": 768,
    "att": "afterbegin",
    "rule": "#wgtop",
    "match": "1",
    "display": true,
    "disableInitialLoad": true,
    "refresh": true,
    "ad_unit": "WGAFC/Unblocked-games.s3.amazonaws.com/Top",
    "label": "Advertisement",
    styles: {
        textAlign: "center",
        margin: "0 auto",
        marginTop: "20px",
        marginBottom: "20px",
        display: "block",
        width: "100%",
        float: "left",

        label: {
            fontSize: "11px",
            color: "#000",
            margin: "0px 0px 0px 0px",
            padding: "0px 5px 0px 5px",
        }
    }
}
] */
/* wgDesktopAds ATF 2024-02-09 */
var scr_added=!1,googletag=googletag||{},wgatfslots=[];googletag.cmd=googletag.cmd||[],Array.prototype.some||(Array.prototype.some=function(a,b){"use strict";if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof a)throw new TypeError;for(var c=Object(this),d=c.length>>>0,e=0;e<d;e++)if(e in c&&a.call(b,c[e],e,c))return!0;return!1}),addScr=function(){var a=document.createElement("script");a.src="//securepubads.g.doubleclick.net/tag/js/gpt.js",document.head.appendChild(a)},createAdsenseCLSPlacement=function(a,b,c,d){if(!(!0===c.only_desktop&&window.innerWidth<c.env_switch||!0===c.only_mobile&&window.innerWidth>c.env_switch)){var e;!0===c.display&&(e="wgAd-loaded");var f=c.styles||"",g="";if(f)for(var h in f)"label"==h&&(g=f[h],delete f[h]);const i=function(a){return Object.keys(a).reduce(function(b,c){return b+c.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+a[c]+";"},"")};window.wgATFAdPlacements=[],g&&(g=i(g)),f&&(f=i(f));var j=c.label||"",k="margin: 10px auto 20px; min-height: 200px; width: 100%; float: left; display: block;",l="margin: 0px auto; display: block; font-size: 12px; color: rgb(0, 0, 0); text-align: center;";g&&(l=g),f&&(k=f);var m=void 0!==c.mappings?c.mappings:{},n=(btoa(JSON.stringify(m)),c.id,a);if("number"!=typeof a){var o=a.split("_");o.splice(-1),n=o.join("_"),c.id}try{d.style.display="none"}catch(a){}try{b.insertAdjacentHTML(c.att,'<div class="atf_adWrapper '+e+'" style="'+k+'"><div style="'+l+'">'+j+'</div><div class="atf_wgAd"  id="wgAdPlacement_C_'+a+'" data-wgt-name="'+c.id+'" data-wgt-pos="'+n+'" data-wgt-placement="'+c.id+'"  style="margin: auto; width: 100%;">'+c.cascade+"</div></div>"),setTimeout(function(){(adsbygoogle=window.adsbygoogle||[]).push({})},50)}catch(a){}}},createBannerCLSPlacement=function(it,elemS,object,parentSlot){if(!(!0===object.only_desktop&&window.innerWidth<object.env_switch||!0===object.only_mobile&&window.innerWidth>object.env_switch)){var addCls;!0===object.display&&(addCls="wgAd-loaded");var styles=object.styles||"",label="";if(styles)for(var prop in styles)"label"==prop&&(label=styles[prop],delete styles[prop]);const styleToString=function(a){return Object.keys(a).reduce(function(b,c){return b+c.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+a[c]+";"},"")};window.wgATFAdPlacements=[],label&&(label=styleToString(label)),styles&&(styles=styleToString(styles));var label_text=object.label||"",default_style="margin: 10px auto 20px; min-height: 200px; width: 100%; float: left; display: block;",default_label_style="margin: 0px auto; display: block; font-size: 12px; color: rgb(0, 0, 0); text-align: center;";label&&(default_label_style=label),styles&&(default_style=styles);var mappings=void 0!==object.mappings?object.mappings:{},obj_mappings=btoa(JSON.stringify(mappings)),data_wgt_placement=object.id,itx=it;if("number"!=typeof it){var x=it.split("_");x.splice(-1),itx=x.join("_"),data_wgt_placement=object.id}try{parentSlot.style.display="none"}catch(a){}var cscde="";if(cscde=ipFallback(),!0!==object.only_desktop&&!0!==object.only_mobile||"object"==typeof object.mappings)if("object"==typeof object.mappings){var cMappings;cMappings=parentSlot.getAttribute("data-wgt-mappings");var currentSizes=reverseMappings(cMappings);try{if("object"==typeof currentSizes[0])var wgd_wh=currentSizes[0][0],wgd_h=currentSizes[0][1];else var wgd_wh=currentSizes[0],wgd_h=currentSizes[1];try{wgd_wh=Math.round(eval(wgd_wh.replace("parentWidth",elemS.offsetWidth))),wgd_h=Math.round(eval(wgd_h.replace("parentHeight",elemS.offsetHeight)))}catch(a){}cscde=cscde.replaceAll("wgd_wh",wgd_wh),cscde=cscde.replaceAll("wgd_h",wgd_h)}catch(a){}}else cscde=cscde.replaceAll("wgd_wh",object.ad_sizes[0][0]),cscde=cscde.replaceAll("wgd_h",object.ad_sizes[0][1]);else!0===object.only_desktop?(cscde=cscde.replaceAll("wgd_wh",object.desktop_sizes[0][0]),cscde=cscde.replaceAll("wgd_h",object.desktop_sizes[0][1])):!0===object.only_mobile&&(cscde=cscde.replaceAll("wgd_wh",object.mobile_sizes[0][0]),cscde=cscde.replaceAll("wgd_h",object.mobile_sizes[0][1]));try{elemS.insertAdjacentHTML(object.att,'<div class="atf_adWrapper '+addCls+'" style="'+default_style+'"><div style="'+default_label_style+'">'+label_text+'</div><div class="atf_wgAd"  id="wgAdPlacement_C_'+it+'" data-wgt-name="'+object.id+'" data-wgt-mappings="'+obj_mappings+'" data-wgt-pos="'+itx+'" data-wgt-placement="'+object.id+'"  style="margin: auto; width: 100%;">'+cscde+"</div></div>")}catch(a){}}},reverseMappings=function(a){var b={};if(null!=a)for(var c=JSON.parse(atob(a)),d=window.innerWidth,e=0;e<c.length;e++){var f=c[e][0][0];b[f]=c[e][1]}var g=null;for(var h in b)d>=parseInt(h)&&(g=h);if(null!=g)return b[g]},ipFallback=function(){function a(a,b){return Math.floor(Math.random()*(b-a+1)+a)}var b="",c=window.location.hostname;try{var d=new URL(document.querySelector('script[src*="universal"]').getAttribute("src"));c=d.searchParams.get("lh")}catch(a){c=c.split(".").slice(-2).join(".")}if(void 0===window.ipBanners||0==window.ipBanners.length){const e=new XMLHttpRequest;var f="https://ip.wgplayer.com/assets/games/jsons/"+c+"/index.json";if(!0===window.wgcrossbanners)var f="https://ip.wgplayer.com/assets/games/jsons/"+c+"/c_index.json";e.open("GET",f,!1),e.onload=function(){if(!0===window.wgcrossbanners){var a=JSON.parse(e.responseText);delete a[c],a=Object.values(a);var b=a.reduce(function(a,b){return a.concat(b)});window.ipBanners=b}else window.ipBanners=JSON.parse(e.responseText)};try{e.send(null)}catch(a){}}var g;if(window.ipBanners.length>0){var h=a(0,window.ipBanners.length-1);b=window.ipBanners[h],!0===window.wgcrossbanners?!0===window.wgbannersV2?(b.file=b.file.replace(".json",".html"),g='<iframe src="https://ip.wgplayer.com/assets/games/jsons/'+c+"/"+b.file+'?w=wgd_wh&h=wgd_h" width="wgd_wh" height="wgd_h" border="0" scrolling="no" style="border:0px !important;border-radius: 10px;"></iframe>'):g='<iframe src="https://ip.wgplayer.com/?id=assets/games/jsons/'+b.file+'" width="wgd_wh" height="wgd_h" border="0" style="border:0px !important"></iframe>':!0===window.wgbanners&&(!0===window.wgbannersV2?(b.file=b.file.replace(".json",".html"),g='<iframe src="https://ip.wgplayer.com/assets/games/jsons/'+c+"/"+b.file+'?w=wgd_wh&h=wgd_h" width="wgd_wh" height="wgd_h" border="0" scrolling="no" style="border:0px !important;border-radius: 10px;"></iframe>'):1==window.wgbanners&&(g='<iframe src="https://ip.wgplayer.com/?id=assets/games/jsons/'+c+"/"+b.file+'" width="wgd_wh" height="wgd_h" border="0" style="border:0px !important"></iframe>'))}return g},createCLSPlacement=function(it,elem,object){if(!(!0===object.only_desktop&&window.innerWidth<object.env_switch||!0===object.only_mobile&&window.innerWidth>object.env_switch)){var addCls;!0===object.display&&(addCls="wgAd-loaded"),-1==object.ad_unit.indexOf("WGAFC2")&&("undefined"!=typeof wgNetworkId&&""!==wgNetworkId?object.ad_unit=wgNetworkId+object.ad_unit:-1==object.ad_unit.indexOf("1002212")&&(object.ad_unit="/1002212/"+object.ad_unit));var styles=object.styles||"",label="";if(styles)for(var prop in styles)"label"==prop&&(label=styles[prop],delete styles[prop]);const styleToString=function(a){return Object.keys(a).reduce(function(b,c){return b+c.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+a[c]+";"},"")};window.wgATFAdPlacements=[],label&&(label=styleToString(label)),styles&&(styles=styleToString(styles));var label_text=object.label||"",default_style="margin: 10px auto 20px; min-height: 200px; width: 100%; float: left; display: block;",default_label_style="margin: 0px auto; display: block; font-size: 12px; color: rgb(0, 0, 0); text-align: center;";label&&(default_label_style=label),styles&&(default_style=styles);var mappings=void 0!==object.mappings?object.mappings:{},obj_mappings=btoa(JSON.stringify(mappings)),cascade=object.cascade||!1,cascade_refresh=null==object.cascade_refresh||object.cascade_refresh;"string"==typeof cascade&&(cascade=btoa(cascade));var data_wgt_placement=object.id,itx=it;if("number"!=typeof it){var x=it.split("_");x.splice(-1),itx=x.join("_"),data_wgt_placement=object.id}if(object.ad_unit.indexOf("WGAFC2")>0)try{elem.parentElement.insertAdjacentHTML(object.att,'<div class="atf_adWrapper '+addCls+'" style="'+default_style+'"><div style="'+default_label_style+'">'+label_text+'</div><div class="atf_wgAd" data-cascade-refresh="'+cascade_refresh+'" data-cascade="'+cascade+'" id="wgAdPlacement_C_'+it+'" data-sibling="" data-related_to="" data-wgt-name="'+object.id+'" data-wgt-pos="'+itx+'" data-wgt-placement="'+object.id+'" data-wgt-bound="true" data-wgt-ad-unit="'+object.ad_unit+'" data-self-aware="false" data-wgt-dfp="true" data-wgt-refresh="-1" data-wgt-rf-trigger="-1" data-wgt-lz="400" data-wgt-collapse="true" data-wgt-mappings="'+obj_mappings+'" data-wgt-callback="undefined" style="margin: auto; width: 100%;"></div></div>')}catch(a){}else elem.insertAdjacentHTML(object.att,'<div class="atf_adWrapper '+addCls+'" style="'+default_style+'"><div style="'+default_label_style+'">'+label_text+'</div><div class="atf_wgAd" data-cascade-refresh="'+cascade_refresh+'" data-cascade="'+cascade+'" id="wgAdPlacement_C_'+it+'" data-sibling="" data-related_to="" data-wgt-name="'+object.id+'" data-wgt-pos="'+itx+'" data-wgt-placement="'+object.id+'" data-wgt-bound="true" data-wgt-ad-unit="'+object.ad_unit+'" data-self-aware="false" data-wgt-dfp="true" data-wgt-refresh="-1" data-wgt-rf-trigger="-1" data-wgt-lz="400" data-wgt-collapse="true" data-wgt-mappings="'+obj_mappings+'" data-wgt-callback="undefined" style="margin: auto; width: 100%;"></div></div>');if(1==object.display){var slot_hpp1;googletag.cmd.push(function(){slot_hpp1=window.innerWidth<object.env_switch?googletag.defineSlot(object.ad_unit,object.mobile_sizes,"wgAdPlacement_C_"+it).addService(googletag.pubads()):googletag.defineSlot(object.ad_unit,object.desktop_sizes,"wgAdPlacement_C_"+it).addService(googletag.pubads()),wgatfslots[itx]=slot_hpp1,googletag.pubads().collapseEmptyDivs(),googletag.pubads().setCentering(!0),!0===object.enableSingleRequest&&googletag.pubads().enableSingleRequest(),!0===object.disableInitialLoad&&googletag.pubads().disableInitialLoad(),googletag.pubads().enableLazyLoad({fetchMarginPercent:100,renderMarginPercent:100,mobileScaling:1}),googletag.pubads().enableVideoAds(),googletag.enableServices(),object.refresh;try{if(mappings instanceof Array){for(var mapping=googletag.sizeMapping(),i=0;i<mappings.length;i++){var itm=mappings[i];if("string"!=typeof itm){for(var o_w=itm[0],o_h=itm[1],a=0;a<o_h.length;a++){var c_size=o_h[a];if("string"!=typeof c_size){var oo_w=c_size[0],oo_h=c_size[1];"string"==typeof oo_w&&(oo_w=Math.round(eval(oo_w.replace("parentWidth",elem.offsetWidth)))),"string"==typeof oo_h&&(oo_h=Math.round(eval(oo_h.replace("parentHeight",elem.offsetHeight)))),o_h[a][0]=oo_w,o_h[a][1]=oo_h}}mapping=mapping.addSize(o_w,o_h)}}mapping=mapping.build(),slot_hpp1.defineSizeMapping(mapping)}}catch(a){}slot_hpp1&&(slot_hpp1.addService(googletag.pubads()),googletag.display(slot_hpp1),!0===object.disableInitialLoad&&googletag.pubads().refresh([slot_hpp1]))})}var placements=document.querySelectorAll(".atf_adWrapper");placements&&(placements=Array.prototype.slice.call(placements),placements.some(function(a){var b=a.getBoundingClientRect();b.elm=a,window.wgATFAdPlacements.push(b)})),!1===scr_added&&(addScr(),scr_added=!0)}},wgProcessSelectors=function(a){var b=[];return a.forEach(function(a){var c="",d=a.match;if("string"==typeof d){if("all"==d)c="";else if("odd"==d)c=":nth-child(odd)";else if("even"==d)c=":nth-child(even)";else if(d.indexOf(":")>=0){var e=d.split(":"),f=parseInt(e[1]);f>0&&(c=":nth-of-type("+f+"n+0)")}else if("first"==d)c=":first-of-type";else if("last"==d)c=":last-of-type";else if("middle"==d){var g=document.querySelectorAll(a.value),h=g.length,i=Math.ceil(h/2);c=":nth-of-type("+i+")"}}else if(d instanceof Array){var j=[];d.forEach(function(b){j.push(a.value+":nth-of-type("+b+")")}),a.value=j.join(","),c=""}else"number"==typeof d&&(c=":nth-of-type("+d+")");var k=a;k.value=k.value+c,b.push(k)}),document.querySelectorAll(b[0].value)[0]},logUndefinedSlot=function(a){try{var b={};b.message="Slot not found, giving up",b.slot=a.id,b.screenWidth=window.innerWidth;var c=new XMLHttpRequest;c.open("POST","https://collect.wgplayer.com/gic",!0),c.setRequestHeader("Content-type","application/x-www-form-urlencoded"),c.send("p="+JSON.stringify(b)+"&g=atferr")}catch(a){}},findCLS=function(a,b,c){var d;if(void 0!==a){if("object"==typeof a.att_rules)try{d=wgProcessSelectors([a.att_rules])}catch(a){}else d=document.querySelector(a.rule);null!=d&&"object"==typeof d?(createCLSPlacement(b,d,a),clearInterval(window.wgrAtfIntervals[b])):window.wgrAtfRetries[b]>=2e3&&(clearInterval(window.wgrAtfIntervals[b]),void 0!==a.logging&&!0===a.logging&&logUndefinedSlot(a))}},createOrRefreshFallbackUnit=function(a,b,c){for(var d={},e=0;e<window.wgClsOpt.length;e++){var f=window.wgClsOpt[e];f.id!=a||(d=f)}if(null!=d&&void 0!==d)if(void 0!==d.cascade&&"boolean"!=typeof d.cascade&&d.cascade.indexOf("adsbygoogle")>-1)createAdsenseFallbackSlot(a,d,b,c);else if("boolean"!=typeof d.cascade&&d.cascade.indexOf("banners")>-1){var g=document.querySelector('[data-wgt-pos="'+a+'_cascade"]');g?refreshBannerFallbackSlot(g):createBannerFallbackSlot(a,d,b,c)}else{var g=document.querySelector('[data-wgt-pos="'+a+'_cascade"]');g?refreshFallbackSlot(g):createFallbackSlot(a,d,b,c)}},createBannerFallbackSlot=function(a,b,c,d){delete b.cascade,a+="_cascade",b.ad_unit=getFallbackAdUnit(b.ad_unit),b.refreshFC=!1,delete b.refresh,a=a+"_"+Math.floor(1e5+9e5*Math.random());var e=createBannerCLSPlacement(a,c,b,d),f=a.split("_");if(f.splice(-1),a=f.join("_"),e=document.querySelector("[data-wgt-pos*='"+a+"']")){e.removeAttribute("data-wgt-rf-trigger"),e.removeAttribute("data-refresh-intervals"),e.removeAttribute("data-refresh-fc");try{e.setAttribute("data-cascade-for",c.querySelector(".atf_wgAd").getAttribute("id"))}catch(a){}var g=e.getAttribute("data-wgt-name");if(g)try{for(var h=document.querySelectorAll('[data-wgt-name="'+g+'"]'),i=0;i<h.length;i++){h[i].getAttribute("data-cascade")}}catch(a){}}},refreshFallbackSlot=function(a){googletag.cmd.push(function(){googletag.pubads().refresh([wgatfslots[a.getAttribute("data-wgt-pos")]])}),a.parentElement.style.display="block"},createAdsenseFallbackSlot=function(a,b,c,d){a+="_cascade",delete b.refresh,a=a+"_"+Math.floor(1e5+9e5*Math.random());var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",document.head.appendChild(e);var f=a.split("_");f.splice(-1),a=f.join("_");var g=createAdsenseCLSPlacement(a,c,b,d);if(g=document.querySelector("[data-wgt-pos*='"+a+"']")){g.removeAttribute("data-wgt-rf-trigger"),g.removeAttribute("data-refresh-intervals"),g.removeAttribute("data-refresh-fc");try{g.setAttribute("data-cascade-for",c.querySelector(".atf_wgAd").getAttribute("id"))}catch(a){}var h=g.getAttribute("data-wgt-name");if(h)try{for(var i=document.querySelectorAll('[data-wgt-name="'+h+'"]'),j=0;j<i.length;j++){var k=i[j];"false"==k.getAttribute("data-cascade")||(k.parentElement.style.display="none")}}catch(a){}}},createFallbackSlot=function(a,b,c,d){delete b.cascade,a+="_cascade",b.ad_unit=getFallbackAdUnit(b.ad_unit),b.refreshFC=!1,b.att="afterend",c=d,delete b.refresh,a=a+"_"+Math.floor(1e5+9e5*Math.random());var e=createCLSPlacement(a,c,b),f=a.split("_");if(f.splice(-1),a=f.join("_"),e=document.querySelector("[data-wgt-pos*='"+a+"']")){e.removeAttribute("data-wgt-rf-trigger"),e.removeAttribute("data-refresh-intervals"),e.removeAttribute("data-refresh-fc");try{e.setAttribute("data-cascade-for",c.querySelector(".atf_wgAd").getAttribute("id"))}catch(a){}var g=e.getAttribute("data-wgt-name");if(g)try{for(var h=document.querySelectorAll('[data-wgt-name="'+g+'"]'),i=0;i<h.length;i++){var j=h[i];"false"==j.getAttribute("data-cascade")||(j.parentElement.style.display="none")}}catch(a){}}},destroyFallbackSlot=function(a){var b=a.parentNode,c=b.querySelector(".atf_wgAd").getAttribute("data-wgt-name");try{b.parentElement.removeChild(b.parentElement.querySelector('[data-wgt-pos="'+c+'_cascade"]').parentElement)}catch(a){}},getFallbackAdUnit=function(a){return a=a.replace("/WGAFC/","/WGAFC2/"),a=a.replace("/WGAFCC/","/WGAFC2/"),a=a.replace("/WGAFCDEMO/","/WGAFC2/"),a=a.replace("/WGAFCSTICKY/","/WGAFC2/")},googletag.cmd.push(function(){googletag.pubads().addEventListener("slotVisibilityChanged",function(a){a.slot.visibility=a.inViewPercentage}),googletag.pubads().addEventListener("impressionViewable",function(a){var b=a.slot;try{if(document.querySelector("#"+b.getSlotElementId()).classList.contains("wgAd"))return!1}catch(a){}var c=null;try{c=document.querySelector("#"+b.getSlotElementId()).getAttribute("data-cascade-for")}catch(a){}null===c&&(void 0===b.intervals&&(b.intervals=[15e3,15e3,25e3,25e3,3e4,3e4,45e3,45e3,6e4,6e4,6e4,6e4,6e4]),null!=b.intervals&&b.intervals.length&&setTimeout(function(){b.visibility>51?(googletag.cmd.push(function(){googletag.pubads().refresh([b])}),b.intervals.length&&b.intervals.shift()):b.refreshInterval||(b.refreshInterval=setInterval(function(){clearInterval(b.refreshInterval),googletag.cmd.push(function(){googletag.pubads().refresh([b])})},100))},b.intervals[0]))}),googletag.pubads().addEventListener("slotRenderEnded",function(a){var b=a.slot;try{if(document.querySelector("#"+b.getSlotElementId()).classList.contains("wgAd"))return!1;if(document.querySelector("#"+b.getSlotElementId()).classList.contains("imut_wgAd"))return!1}catch(a){}var c=a.slot.getSlotId(),d=document.getElementById(c.getDomId());if(a.isEmpty){var e="",f="";try{if(f=d.getAttribute("data-cascade"),e=d.getAttribute("data-cascade-for"),("true"==f||"false"!=f)&&null!=f){"true"!=f&&(f=atob(f));var g=d.getAttribute("data-wgt-name"),h=document.querySelector("#"+b.getSlotElementId()).parentElement.parentElement;createOrRefreshFallbackUnit(g,h,d)}}catch(a){}if(void 0!==e&&null!=e&&""!=e)return;if(void 0===b.intervals&&(b.intervals=[15e3,15e3,25e3,25e3,3e4,3e4,45e3,45e3,6e4,6e4,6e4,6e4,6e4]),null!=b.intervals&&b.intervals.length){if("string"==typeof f&&f.indexOf("adsbygoogle")>-1){if("false"===d.getAttribute("data-cascade-refresh"))return}setTimeout(function(){b.visibility>51||void 0===b.visibility||0==b.visibility?(googletag.cmd.push(function(){googletag.pubads().refresh([b])}),b.intervals.length&&b.intervals.shift()):b.refreshInterval||(b.refreshInterval=setInterval(function(){clearInterval(b.refreshInterval),googletag.cmd.push(function(){googletag.pubads().refresh([b])})},100))},b.intervals[0])}}else try{d.getAttribute("data-cascade-for")||-1!=d.getAttribute("data-wgt-ad-unit").indexOf("WGAFC2")||destroyFallbackSlot(d),d.parentElement.style.display="block"}catch(a){}})}),window.wgrAtfIntervals=[],window.wgrAtfRetries=[],"undefined"!=typeof wgClsOpt&&(window.wgrAtfRetries.length=wgClsOpt.length),createAdPlacement=function(a,b){var c=0,d=setInterval(function(){c++,findCLS(a,b),window.wgrAtfRetries[b]=c},1);window.wgrAtfIntervals.push(d)};try{wgClsOpt.some(createAdPlacement)}catch(a){}
var head = document.head || document.getElementsByTagName('head')[0];var style = document.createElement('style');style.type = 'text/css';var css = ".banner--before-post{min-height:250px!important}.imut_wg_advertisement{text-align:center}@media only screen and (max-width:1400px) and (max-height:850px){.post__iframe{width:100%!important;height:85vh!important;margin:20px auto!important}}.header.is-visible{position:absolute!important}.main{margin-top:5rem!important}.post header{overflow:hidden}.post__entry center{margin-bottom:20px}";style.appendChild(document.createTextNode(css));head.appendChild(style);


window.WGPlayerUnified = ( window.WGPlayerUnified || [] );
window.WGPlayerUnified.push(
    [{"desktop":{"gfc":"https://wgd.wgplayer.com/wgd/gfc/universal-choices.min.js","vignette_extra_g":"https://st.wgplayer.com/vignette.new.js?x=true&d=unblocked-games.s3.amazonaws.com&cb=1728247376","wgdy_2":"https://afg.wgplayer.com/unblocked-games.s3.amazonaws.com/ref.js","wgdconf":"https://wgd.wgplayer.com/wgdu/unblocked-games.s3.amazonaws.com/conf.wgd.js","wgdlib":"https://wgd.wgplayer.com/wgdu/unblocked-games.s3.amazonaws.com/wgDesktopAds.min.js","wgdy_4":"https://afg.wgplayer.com/unblocked-games.s3.amazonaws.com/wgAds.desktop.conf.js?cb=9347543098654","wgdy_5":"https://afg.wgplayer.com/unblocked-games.s3.amazonaws.com/js/kKPJOhrDv46qbOr_qnO6ZA/87998009990/wgAds.js?cb=9347543098654"},"mobile":{"gfc":"https://wgd.wgplayer.com/wgd/gfc/universal-choices.min.js","wgdconf":"https://wgd.wgplayer.com/wgdu/unblocked-games.s3.amazonaws.com/conf.wgd.js","wgdlib":"https://wgd.wgplayer.com/wgdu/unblocked-games.s3.amazonaws.com/wgDesktopAds.min.js","vignette_extra_g":"https://st.wgplayer.com/vignette.new.js?x=true&d=unblocked-games.s3.amazonaws.com&cb=1728247376","wgdy_3":"https://afg.wgplayer.com/unblocked-games.s3.amazonaws.com/wgAds.mobile.conf.js?cb=9347543098654","wgdy_4":"https://afg.wgplayer.com/unblocked-games.s3.amazonaws.com/js/kKPJOhrDv46qbOr_qnO6ZA/87998009990/wgAds.js?cb=9347543098654"}}]
);
var wgUniversalDeviceDetector = function(){var b=navigator.userAgent.toLowerCase(),a=function(a){void 0!==a&&(b=a.toLowerCase());return/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(b)?"tablet":/(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(b)?"phone":"desktop"};return{device:a(),detect:a,isMobile:"desktop"!=a()?!0:!1,userAgent:b}}();


var wgBotPattern = "(Chrome-Lighthouse)";
var wgRe = new RegExp(wgBotPattern, 'i');
var wgUserAgent = navigator.userAgent;
if (wgRe.test(wgUserAgent)) {
    var wgUniversalExclusions = [ "gfc", "vignette_extra_g" ];
}else{
    (function () {
    window['googlefc'] = window['googlefc'] || {};
    window['googlefc']['ccpa'] = window['googlefc']['ccpa'] || {}
    window['googlefc']['callbackQueue'] = window['googlefc']['callbackQueue'] || [];

    // Queue the callback on the callbackQueue.
    window['googlefc']['callbackQueue'].push(
        {
            'CONSENT_DATA_READY':() => {
                window['__tcfapi']('getTCData', 2, (tcData, success) => {
                    var wgUAscript = document.createElement( 'script' );
                    document.head.appendChild( wgUAscript );

                    window.dataLayer = window.dataLayer || [];
                    function wgTag(){dataLayer.push(arguments);}
                    wgUAscript.addEventListener( 'load', function(e){
                        wgTag('js', new Date());
                        wgTag('config', 'UA-194372668-18');
                    });
                    wgUAscript.src= "https://www.googletagmanager.com/gtag/js?id=UA-194372668-18";
                    function wgUTriggerPageView(){
                        var wgU = setInterval(function(){
                            if ( typeof wgTag == 'function' ){
                                clearInterval( wgU );
                                wgTag('config', 'UA-194372668-18' , { 'page_path':window.location.pathname });
                            }
                        },10);

                    }
                    }
                )
            },
            'INITIAL_CCPA_DATA_READY':() => {
                window['__tcfapi']('getTCData', 2, (tcData, success) => {
                    var wgUAscript = document.createElement( 'script' );
                    document.head.appendChild( wgUAscript );

                    window.dataLayer = window.dataLayer || [];
                    function wgTag(){dataLayer.push(arguments);}
                    wgUAscript.addEventListener( 'load', function(e){
                        wgTag('js', new Date());
                        wgTag('config', 'UA-194372668-18');
                    });
                    wgUAscript.src= "https://www.googletagmanager.com/gtag/js?id=UA-194372668-18";
                    function wgUTriggerPageView(){
                        var wgU = setInterval(function(){
                            if ( typeof wgTag == 'function' ){
                                clearInterval( wgU );
                                wgTag('config', 'UA-194372668-18' , { 'page_path':window.location.pathname });
                            }
                        },10);

                    }
                    }
                )
            }
        }
    );
})();
}
var wgClassList = {"both":{},"desktop":{"f6526acb":1},"mobile":{"8fea24f6":1}};
var wgcnts = 0;
var wgObjCls = {};
var wgctx = setInterval(function(){
    if ( wgcnts<= 10 ){
        wgcnts++;
        if ( typeof document.body == 'object' && typeof wgClassList == 'object' ){
            clearInterval(wgctx);

            try{
                if ( typeof wgUniversalDeviceDetector != 'undefined' && typeof wgUniversalDeviceDetector.device != 'undefined' ){
                    if ( typeof wgUniversalDeviceDetector.device != 'undefined'){
                        if ( wgUniversalDeviceDetector.device == 'desktop' ){
                            wgObjCls = wgClassList.desktop;
                        }else{
                            wgObjCls = wgClassList.mobile;
                        }
                    }
                }else{
                    wgObjCls = wgClassList.both;
                }
                Object.entries(wgObjCls).forEach(([key, value]) => {
                    document.body.classList.add("wg_" + key);
                });
            }catch(e){

            }
        }
    }else{
        clearInterval(wgctx);
    }
},10);
function wuni$a(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function wuni$(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:wuni$a(a)}}function wuni$b(a){if(!(a instanceof Array)){a=wuni$(a);for(var b,d=[];!(b=a.next()).done;)d.push(b.value);a=d}return a}var wuni$c="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(a==Array.prototype||a==Object.prototype)return a;a[b]=d.value;return a};
function wuni$d(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var d=a[b];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");}var wuni$e=wuni$d(this);
function wuni$f(a,b){if(b)a:{for(var d=wuni$e,f=a.split("."),k=0;k<f.length-1;k++){var r=f[k];if(!(r in d))break a;d=d[r]}f=f[f.length-1];k=d[f];r=b(k);r!=k&&null!=r&&wuni$c(d,f,{configurable:!0,writable:!0,value:r})}}function wuni$g(){this.i=!1;this.g=null;this.m=void 0;this.j=1;this.o=0;this.h=null}function wuni$h(a){if(a.i)throw new TypeError("Generator is already running");a.i=!0}wuni$g.prototype.l=function(a){this.m=a};function wuni$i(a,b){a.h={F:b,G:!0};a.j=a.o}
wuni$g.prototype["return"]=function(a){this.h={"return":a};this.j=this.o};function wuni$j(a){this.g=new wuni$g;this.h=a}function wuni$k(a,b){wuni$h(a.g);var d=a.g.g;if(d)return wuni$l(a,"return"in d?d["return"]:function(f){return{value:f,done:!0}},b,a.g["return"]);a.g["return"](b);return wuni$m(a)}
function wuni$l(a,b,d,f){try{var k=b.call(a.g.g,d);if(!(k instanceof Object))throw new TypeError("Iterator result "+k+" is not an object");if(!k.done)return a.g.i=!1,k;var r=k.value}catch(c){return a.g.g=null,wuni$i(a.g,c),wuni$m(a)}a.g.g=null;f.call(a.g,r);return wuni$m(a)}
function wuni$m(a){for(;a.g.j;)try{var b=a.h(a.g);if(b)return a.g.i=!1,{value:b.value,done:!1}}catch(d){a.g.m=void 0,wuni$i(a.g,d)}a.g.i=!1;if(a.g.h){b=a.g.h;a.g.h=null;if(b.G)throw b.F;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function wuni$n(a){this.next=function(b){wuni$h(a.g);a.g.g?b=wuni$l(a,a.g.g.next,b,a.g.l):(a.g.l(b),b=wuni$m(a));return b};this["throw"]=function(b){wuni$h(a.g);a.g.g?b=wuni$l(a,a.g.g["throw"],b,a.g.l):(wuni$i(a.g,b),b=wuni$m(a));return b};this["return"]=function(b){return wuni$k(a,b)};this[Symbol.iterator]=function(){return this}}
function wuni$o(a){function b(f){return a.next(f)}function d(f){return a["throw"](f)}return new Promise(function(f,k){function r(c){c.done?f(c.value):Promise.resolve(c.value).then(b,d).then(r,k)}r(a.next())})}
wuni$f("Symbol",function(a){function b(k){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new d("jscomp_symbol_"+(k||"")+"_"+f++,k)}function d(k,r){this.g=k;wuni$c(this,"description",{configurable:!0,writable:!0,value:r})}if(a)return a;d.prototype.toString=function(){return this.g};var f=0;return b});
wuni$f("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),d=0;d<b.length;d++){var f=wuni$e[b[d]];"function"===typeof f&&"function"!=typeof f.prototype[a]&&wuni$c(f.prototype,a,{configurable:!0,writable:!0,value:function(){return wuni$p(wuni$a(this))}})}return a});
function wuni$p(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
wuni$f("Promise",function(a){function b(c){this.h=0;this.i=void 0;this.g=[];this.o=!1;var e=this.j();try{c(e.resolve,e.reject)}catch(h){e.reject(h)}}function d(){this.g=null}function f(c){return c instanceof b?c:new b(function(e){e(c)})}if(a)return a;d.prototype.h=function(c){if(null==this.g){this.g=[];var e=this;this.i(function(){e.l()})}this.g.push(c)};var k=wuni$e.setTimeout;d.prototype.i=function(c){k(c,0)};d.prototype.l=function(){for(;this.g&&this.g.length;){var c=this.g;this.g=[];for(var e=
0;e<c.length;++e){var h=c[e];c[e]=null;try{h()}catch(p){this.j(p)}}}this.g=null};d.prototype.j=function(c){this.i(function(){throw c;})};b.prototype.j=function(){function c(p){return function(t){h||(h=!0,p.call(e,t))}}var e=this,h=!1;return{resolve:c(this.A),reject:c(this.l)}};b.prototype.A=function(c){if(c===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(c instanceof b)this.C(c);else{a:switch(typeof c){case "object":var e=null!=c;break a;case "function":e=!0;break a;default:e=
!1}e?this.v(c):this.m(c)}};b.prototype.v=function(c){var e=void 0;try{e=c.then}catch(h){this.l(h);return}"function"==typeof e?this.D(e,c):this.m(c)};b.prototype.l=function(c){this.u(2,c)};b.prototype.m=function(c){this.u(1,c)};b.prototype.u=function(c,e){if(0!=this.h)throw Error("Cannot settle("+c+", "+e+"): Promise already settled in state"+this.h);this.h=c;this.i=e;2===this.h&&this.B();this.H()};b.prototype.B=function(){var c=this;k(function(){if(c.I()){var e=wuni$e.console;"undefined"!==typeof e&&
e.error(c.i)}},1)};b.prototype.I=function(){if(this.o)return!1;var c=wuni$e.CustomEvent,e=wuni$e.Event,h=wuni$e.dispatchEvent;if("undefined"===typeof h)return!0;"function"===typeof c?c=new c("unhandledrejection",{cancelable:!0}):"function"===typeof e?c=new e("unhandledrejection",{cancelable:!0}):(c=wuni$e.document.createEvent("CustomEvent"),c.initCustomEvent("unhandledrejection",!1,!0,c));c.promise=this;c.reason=this.i;return h(c)};b.prototype.H=function(){if(null!=this.g){for(var c=0;c<this.g.length;++c)r.h(this.g[c]);
this.g=null}};var r=new d;b.prototype.C=function(c){var e=this.j();c.s(e.resolve,e.reject)};b.prototype.D=function(c,e){var h=this.j();try{c.call(e,h.resolve,h.reject)}catch(p){h.reject(p)}};b.prototype.then=function(c,e){function h(v,w){return"function"==typeof v?function(y){try{p(v(y))}catch(x){t(x)}}:w}var p,t,u=new b(function(v,w){p=v;t=w});this.s(h(c,p),h(e,t));return u};b.prototype["catch"]=function(c){return this.then(void 0,c)};b.prototype.s=function(c,e){function h(){switch(p.h){case 1:c(p.i);
break;case 2:e(p.i);break;default:throw Error("Unexpected state: "+p.h);}}var p=this;null==this.g?r.h(h):this.g.push(h);this.o=!0};b.resolve=f;b.reject=function(c){return new b(function(e,h){h(c)})};b.race=function(c){return new b(function(e,h){for(var p=wuni$(c),t=p.next();!t.done;t=p.next())f(t.value).s(e,h)})};b.all=function(c){var e=wuni$(c),h=e.next();return h.done?f([]):new b(function(p,t){function u(y){return function(x){v[y]=x;w--;0==w&&p(v)}}var v=[],w=0;do v.push(void 0),w++,f(h.value).s(u(v.length-
1),t),h=e.next();while(!h.done)})};return b});wuni$f("Object.entries",function(a){return a?a:function(b){var d=[],f;for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&d.push([f,b[f]]);return d}});function wuni$q(a,b){a instanceof String&&(a+="");var d=0,f=!1,k={next:function(){if(!f&&d<a.length){var r=d++;return{value:b(r,a[r]),done:!1}}f=!0;return{done:!0,value:void 0}}};k[Symbol.iterator]=function(){return k};return k}
wuni$f("Array.prototype.keys",function(a){return a?a:function(){return wuni$q(this,function(b){return b})}});
(function(a,b,d,f,k){function r(g){u.log(["Handle "+w+" request for non SPA, has single conf (both): "+g]);a&&0<a.length&&a.map(function(m){m=wuni$(Object.entries(m[0][g?"both":w]));for(var q=m.next();!q.done;q=m.next()){var l=wuni$(q.value);q=l.next().value;l=l.next().value;-1===v.indexOf(q)?t.g({src:l}):u.log(q+" excluded by rule.")}})}function c(g,m){g=void 0===g?"":g;m=void 0===m?{}:m;var q;return wuni$o(new wuni$n(new wuni$j(function(l){if(1==l.j){var n=fetch(g,{method:"POST",mode:"cors",cache:"no-cache",
credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},redirect:"follow",referrerPolicy:"no-referrer",body:"p="+btoa(JSON.stringify(m))});l.j=2;return{value:n}}q=l.m;return l["return"](q.json())})))}function e(g){u.log(["Handle "+w+" request for SPA, has single conf (both): "+g]);a.map(function(m){m[0][g?"both":w].pattern.map(function(q){q=wuni$(Object.entries(q));for(var l=q.next();!l.done;l=q.next()){var n=wuni$(l.value);l=n.next().value;n=n.next().value;var C=d.location.href;
if(C.match(new RegExp(l.substring(l.indexOf("/")+1,l.lastIndexOf("/"))))){u.i(["Scripts for location: ",l,C]);l=JSON.parse(n);l=wuni$(Object.entries(l));for(n=l.next();!n.done;n=l.next())n=wuni$(n.value),n.next(),n=n.next().value,Object.entries(n).map(function(A){-1===v.indexOf(A[0])?t.g({src:A[1]}):u.log(A[0]+" excluded by rule.")});u.h()}}})});"function"===typeof d.wgUTriggerPageView&&d.wgUTriggerPageView()}function h(){this.h=[]}function p(){}if(!0===d.WgUniversalInited)return!1;d.WgUniversalInited=
!0;p.prototype.log=function(g){if(!this.g())return!1;g=["WGPU:"].concat(wuni$b(g));console.log.apply(console,wuni$b(g))};p.prototype.i=function(g){this.g()&&(g=["WGPU:"].concat(wuni$b(g)),console.groupCollapsed.apply(console,wuni$b(g)))};p.prototype.h=function(){this.g()&&console.groupEnd()};p.prototype.g=function(){for(var g=f.cookie.split(";"),m=0;m<g.length;m++){for(var q=g[m];" "==q.charAt(0);)q=q.substring(1,q.length);if(0==q.indexOf("gapi="))return q.substring(5,q.length)}return null};h.prototype.g=
function(g){-1<this.h.indexOf(g.src)?u.log(["This script is already loaded, skipping: ",g.src]):(u.log(["Loading script: ",g.src]),this.i(g))};h.prototype.i=function(g){var m=document.createElement("script");m.setAttribute("defer","");g.id&&(m.id=g.id);"function"===typeof g.onLoad&&(m.onload=function(){g.onLoad()});this.h.push(g.src);document.head.appendChild(m);m.src=g.src};var t=new h,u=new p,v=[].concat(wuni$b("undefined"!==typeof wgUniversalExclusions?wgUniversalExclusions:[])),w="phone"===b?
"mobile":"tablet"===b?"mobile":"desktop",y=a&&0<a.length?"both"===Object.keys(a[0][0])[0]||!1:!1;b=!1;if(b=y?"pattern"===Object.keys(a[0][0].both).toString():a&&0<a.length?"pattern"===Object.keys(a[0][0].desktop).toString():!1)e(y);else try{r(y)}catch(g){}if(!0===k.collect){var x={};k.queries.forEach(function(g){for(var m in g)for(var q=wuni$(g[m]),l=q.next();!l.done;l=q.next()){var n=l.value;if("undefined"===typeof x[m]||null===x[m]){l=x;var C=m,A=encodeURIComponent;var z=n.property;var B=n.limit;
n=document.querySelectorAll(n.query);if(0<n.length)if(-1===B){B=[];n=wuni$(n);for(var D=n.next();!D.done;D=n.next())B.push(D.value[z]);z=B.join("*")}else z=n[B][z];else z=null;l[C]=A(z)}}});x=Object.assign({},x,{url:window.location.href,domain:(new URL(window.location.href)).host.split(".").slice(Math.max((new URL(window.location.href)).host.split(".").length-(k.suffix.match(/\./g)||[]).length,0)-1).join(".")});c(k.endpoint,x).then(function(){})["catch"](function(){})}var F=history.pushState;history.pushState=
function(){F.apply(history,arguments);d.dispatchEvent(new Event("locationchange"))};var E=d.location.href;d.addEventListener("locationchange",function(){E.split("#")[0]!==d.location.href.split("#")[0]?(E=d.location.href,e(y)):u.log(["Location changed, but nothing to do."])});u.log("WGU: 1.0.0.5")}).call(this,window.WGPlayerUnified?window.WGPlayerUnified:null,window.wgUniversalDeviceDetector.device,window,document,window.wgGlobalUniversal?window.wgGlobalUniversal:null);





if ( wgUniversalDeviceDetector.device == 'desktop'){ 
	 
}  
if ( wgUniversalDeviceDetector.device != 'desktop'){ 
	 
} 