import{a as f,i as n,S as h}from"./assets/vendor-DtRopbQG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",g=i=>f.get(y,{params:{key:"49409853-9b66959f7621caabc2c0e0f94",q:i.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>{throw console.log(r),n.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3}),r}),p=document.querySelector(".gallery"),b=i=>{const r=i.map(({largeImageURL:s,webformatURL:o,tags:e,likes:t,views:a,comments:m,downloads:d})=>`
  <li class="gallery-item">
    <a class="gallery-item" href="${s}">
      <div class="photo-card">
        <img src="${o}" alt="${e}" />
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${a}</p>
          <p><b>Comments:</b> ${m}</p>
          <p><b>Downloads:</b> ${d}</p>
        </div>
      </div>
    </a>
  </li>`).join("");p.innerHTML=r,v.refresh()},v=new h(".gallery a");function L(){p.innerHTML=""}const c=document.querySelector(".form"),l=document.querySelector(".loader"),u=document.querySelector(".input");c.addEventListener("submit",i=>{if(i.preventDefault(),u.value.trim()===""){n.warning({title:"Please type what you want to find",position:"topRight",timeout:5e3});return}L(),r(),g(u.value).then(o=>{if(s(),o.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.reset();return}b(o)}).catch(o=>{console.log(o),s(),n.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3})});function r(){l.classList.add("active")}function s(){l.classList.remove("active")}});
//# sourceMappingURL=index.js.map
