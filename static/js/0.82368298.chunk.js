(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o});var a=n(0),i=n.n(a);function o(e){var t=e.episodes,n=e.toggleFavAction,a=e.favourites,o=e.store,c=o.state,r=o.dispatch;return t.map(function(e){return e.image?i.a.createElement("section",{key:e.id,className:"episodeBox"},i.a.createElement("img",{src:e.image.medium,alt:"Rick and Morty ".concat(e.name)}),i.a.createElement("div",null,e.name),i.a.createElement("section",{style:{display:"flex",justifyContent:"space-between"}},"Season: ",e.season," Number: ",e.number),i.a.createElement("button",{type:"button",onClick:function(){return n(c,r,e)}},a.includes(e)?"Unfavourite":"Favourite")):null})}}}]);
//# sourceMappingURL=0.82368298.chunk.js.map