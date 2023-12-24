(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=n(s);fetch(s.href,t)}})();const a=document.forms["registration-form"],l=a.elements.username,f=a.elements.gender,d=a.elements.email,c=a.elements.password,m=a.elements.phone,g=a.elements.terms;a.querySelector("#submit-btn");let u=[];function p(){h(),M(),L(),v(),b()}function h(){const e=a.querySelector("#errMsgName");l.value==""?(l.classList.add("border-red-500"),e.innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Username is required',e.classList.add("errorMessage")):l.value.length>3&&l.value.length<20?e.innerHTML="":alert("Enter your Proper Name")}function M(){const e=a.querySelector("#errMsgGender");for(let r=0;r<f.length;r++){if(f[r].checked){e.innerHTML="";break}e.innerHTML="Please select a gender",e.classList.add("errorMessage")}}function L(){const e=a.querySelector("#errMsgEmail");let r=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;d.value==""?(d.classList.add("border-red-500"),e.innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Email is required',e.classList.add("errorMessage")):r.test(d.value)?e.innerHTML="":(e.innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Invalid email address',e.classList.add("errorMessage"))}function v(){const e=a.querySelector("#errMsgPassword");let r=/[!@#$%^&*(),.?":{}|<>]/;c.value==""?(c.classList.add("border-red-500"),e.innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Password is required',e.classList.add("errorMessage")):r.test(c.value)?c.value.length<8?(e.innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Password must be at least 8 characters long',e.classList.add("errorMessage")):e.innerHTML="":(e.innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Password must contain at least one special character',e.classList.add("errorMessage"))}function b(){const e=a.querySelector("#errMsgPhone");m.value.length>10?(m.classList.add("border-red-500"),e.innerHTML='<i class="fa-solid fa-circle-exclamation"></i> It should not exceed more than 10 digits',e.classList.add("errorMessage")):e.innerHTML=""}const x=e=>{e.preventDefault();const r=new FormData(a),n=Object.fromEntries(r.entries());if(!g.checked){alert("Please agree to the terms and conditions");return}if(Object.values(n).some(s=>s==="")){alert("Please fill in all required fields");return}const i=JSON.parse(localStorage.getItem("userRegistration"))||[];i.push(n),localStorage.setItem("userRegistration",JSON.stringify(i)),p(),y()};function y(){const e=localStorage.getItem("userRegistration"),r=JSON.parse(e),n=document.getElementById("Registration-Data"),i=r.filter(s=>!E(s));if(i){n.classList.remove("hidden");const s=i.map(t=>`
    <div>
    <div class="flex space-x-2 items-center">
      <h4 class="font-bold">Username:</h4>
      <span>${t.username}</span>
    </div>
    <div class="flex space-x-2 items-center">
      <h4 class="font-bold">Email:</h4>
      <span>${t.email}</span>
    </div>
    <div class="flex space-x-2 items-center">
      <h4 class="font-bold">Phone:</h4>
      <span>${t.phone}</span>
    </div>
    <div class="flex space-x-2 items-center">
      <h4 class="font-bold">Address:</h4>
      <span>${t.address}</span>
    </div>
    <div class="thankMessage">Thank you for registering!</div>
  </div>
    `).join(" ");n.innerHTML+=s}u=[...u,...i]}function E(e){return u.some(r=>r.username===e.username&&r.email===e.email&&r.phone===e.phone&&r.address===e.address)}a.addEventListener("submit",x);
