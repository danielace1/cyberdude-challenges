import"./style-ZXlAmUhd.js";const r="userId",b=localStorage.getItem(r),f=b?JSON.parse(b):[];console.log("userData",f);function E(){const t=document.querySelector("#userDataTable");t.innerHTML="";const a=localStorage.getItem(r);a&&JSON.parse(a).forEach((e,s)=>{const o=document.createElement("tr"),c=document.createElement("td"),l=document.createElement("td"),m=document.createElement("td"),i=document.createElement("td"),p=document.createElement("td"),u=document.createElement("td"),g=document.createElement("td"),x=document.createElement("button");c.classList.add("px-3","py-2","border","break-words"),c.textContent=s+1,l.classList.add("px-3","py-2","border","break-words"),l.textContent=e.firstname+" "+e.lastname,m.classList.add("px-3","py-2","border","break-words"),m.textContent=e.username;const n=document.createElement("p");n.textContent=`Welcome, ${e.username}! Your registration details are displayed below.`,n.classList.add("text-green-600","font-semibold","mt-2","text-center","text-md","md:text-lg","lg:text-xl"),document.body.insertBefore(n,document.body.firstChild),document.querySelector("#welcomeMessage").append(n),document.addEventListener("DOMContentLoaded",()=>{alert(`Welcome ${e.username}`)}),i.classList.add("px-3","py-2","border","break-words"),i.textContent=e.email,p.classList.add("px-3","py-2","border","break-words"),p.textContent=e.ipAddress,u.classList.add("px-3","py-2","border","break-words"),u.textContent=e.dateAndTime;const w=`<svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          class="fill-current text-blue-600 hover:cursor-pointer hover:text-blue-700 mt-1 w-6 h-6 lg:w-7 lg:h-7"
        >
          <path
            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
          />
        </svg>`;x.innerHTML=w,x.addEventListener("click",()=>{h(e)}),g.classList.add("px-3","py-2","border","break-words"),g.append(x),o.append(c,l,m,i,p,u,g),t.append(o)})}E();function h(t){if(confirm(`Do you want to delete '${t.username}' registration?`)){const d=localStorage.getItem(r);if(d){const s=JSON.parse(d).filter(o=>o.id!==t.id);localStorage.setItem(r,JSON.stringify(s)),E()}}}
