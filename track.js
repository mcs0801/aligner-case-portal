/* Visit tracking (GoatCounter). Paste your site code below, e.g. 'waheed' for waheed.goatcounter.com */
(function(){
  var CODE='';
  if(!CODE)return;
  var b=(new URLSearchParams(location.search).get('brand')||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  window.goatcounter={path:function(p){p=p.split('?')[0];return b?p.replace(/\/$/,'')+'/'+b:p}};
  var s=document.createElement('script');s.async=true;
  s.setAttribute('data-goatcounter','https://'+CODE+'.goatcounter.com/count');
  s.src='https://gc.zgo.at/count.js';document.head.appendChild(s);
})();
