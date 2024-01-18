import"./style-ZXlAmUhd.js";import{J as n}from"./just-validate.es-oWIsisIf.js";const t=document.getElementById("loginForm"),r=new n(t,{validateBeforeSubmitting:!0}),u="userId",o=localStorage.getItem(u),d=o?JSON.parse(o):[];console.log("userData",d);r.addField("#email",[{rule:"required",errorMessage:"Email is required"},{rule:"customRegexp",value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,errorMessage:"Enter a valid email address"}],{errorLabelCssClass:["form-error"]});r.addField("#password",[{rule:"required",errorMessage:"Password is required"},{rule:"customRegexp",value:/[!@#$%^&*(),.?":{}|<>]/,errorMessage:"Password must contain at least one special character"},{rule:"minLength",value:8,errorMessage:"Password must be at least 8 characters long"}],{errorLabelCssClass:["form-error"]});const l=document.querySelector("#password"),e=document.querySelector("#showPassword"),s=document.querySelector("#hidePassword");e.addEventListener("click",()=>{s.classList.remove("hidden"),l.type="text",e.classList.add("hidden")});s.addEventListener("click",()=>{e.classList.remove("hidden"),l.type="password",s.classList.add("hidden")});r.onSuccess(()=>{const c=document.querySelector("#email"),i=document.querySelector("#password");d.find(a=>a.email===c.value&&a.confirmPassword===i.value)?window.location.href="./userData.html":(alert("Invalid Email or Password"),t.reset())});
