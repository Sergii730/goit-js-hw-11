import{a as d,S as f,i as m}from"./assets/vendor-BjRz3xa9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="49730830-c57beb55a0f893ff92d6370c6";async function y(t){return d.get("https://pixabay.com/api/",{params:{key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const n=document.querySelector(".gallery"),l=document.querySelector(".loader");let g=new f(".gallery a");function h(t){const o=t.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:a,comments:c,downloads:u})=>`<li class="gallery-item">
        <a href="${i}" class="gallery-link"><img class="gallery-img" src="${s}" alt="${e}"/>
        <div class="rectangle">
        <p class="card-value"><b>Likes</b>${r}</p>
        <p class="card-value"><b>Views</b>${a}</p>
        <p class="card-value"><b>Comments</b>${c}</p>
        <p class="card-value"><b>Downloads</b>${u}</p>       
        </div>
        </a>
        </li>`).join("");n.innerHTML=o,g.refresh()}function b(){n.innerHTML=""}function L(){l.classList.remove("is-hidden")}function v(){l.classList.add("is-hidden")}const S=document.querySelector(".form");S.addEventListener("submit",q);function q(t){t.preventDefault();const o=t.target.elements["search-text"].value.trim();o!==""&&(L(),b(),y(o).then(({data:{hits:s}})=>{s.length===0&&m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}),h(s)}).catch(s=>console.log(s)).finally(()=>v()),t.target.reset())}
//# sourceMappingURL=index.js.map
