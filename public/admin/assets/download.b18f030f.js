function s(o,a={}){const e=document.createElement("a"),n=localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")).token:void 0,c="https://kumacms.com/api".replace("/api",o),t=new URL(c),r=new URLSearchParams({token:n,...a});t.search=r.toString(),e.href=t.href,document.body.appendChild(e),e.click(),document.body.removeChild(e)}export{s as d};