(()=>{"use strict";document.querySelectorAll(".header ul>li>a").forEach((e=>{e.addEventListener("click",(t=>{var o;t.preventDefault(),o=e.getAttribute("href"),document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}))})),(()=>{const e=document.querySelector("body"),t=e.querySelector(".modal-callback"),o=e.querySelector(".modal-overlay");e.addEventListener("click",(e=>{(e.target.closest(".header .callback-btn")||e.target.classList.contains("button-services"))&&(e.preventDefault(),t.style.display="block",o.style.display="block",(({timing:e,draw:t,duration:o})=>{let l=performance.now();requestAnimationFrame((function n(r){let c=(r-l)/o;c>1&&(c=1);let a=e(c);t(a),c<1&&requestAnimationFrame(n)}))})({duration:500,timing:e=>e,draw(e){t.style.opacity=e,o.style.opacity=e}})),(e.target.classList.contains("modal-overlay")||e.target.closest(".modal-close"))&&(e.preventDefault(),t.style.display="none",o.style.display="none")}))})(),(()=>{const e=document.querySelector(".accordeon"),t=()=>{const t=e.querySelectorAll(".element"),o=e.querySelectorAll(".element-content");t.forEach((e=>{e.classList.remove("active")})),o.forEach((e=>{e.style.display="none"}))};e.addEventListener("click",(e=>{const o=e.target.closest(".element");o.classList.contains("active")?t():(t(),o.classList.add("active"),o.lastElementChild.style.display="block")}))})(),(()=>{const e=document.createElement("div");try{const t=document.getElementById("callback-form");if(!t)throw new Error("Верните форму на место, пожалуйста!");t.addEventListener("submit",(o=>{o.preventDefault(),(t=>{const o=t.querySelectorAll(".form-control"),l=new FormData(t),n={};var r;e.textContent="Идет отправка",t.append(e),l.forEach(((e,t)=>{n[t]=e})),(e=>{let t=!0;return(/[^\d\+]/g.test(e.querySelector("input[name=tel]").value)||""===e.querySelector("input[name=tel]").value||/[^а-я]/gi.test(e.querySelector("input[name=fio]").value))&&(t=!1),t})(t)?(r=n,fetch("server.php",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{e.textContent="Отправлено",o.forEach((e=>{e.value=""}))})).catch((t=>{e.textContent="Ошибка"})):(alert("Введите корректные данные"),e.textContent="")})(t)}))}catch(e){console.log(e.message)}})(),(()=>{const e=document.querySelector(".up"),t=document.getElementById("services"),o=document.querySelector(".header-wrapper");let l,n;const r=e=>{e.style.display="none"},c=()=>{l>0?(window.scrollTo(0,l),l-=100,n=requestAnimationFrame(c)):(cancelAnimationFrame(n),window.scrollTo(0,0))};r(e),window.addEventListener("scroll",(()=>{window.scrollY>=t.offsetTop-o.clientHeight?e.style.display="block":r(e)})),e.addEventListener("click",(()=>{l=window.scrollY,c()}))})()})();