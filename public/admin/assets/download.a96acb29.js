function s(t,a={}){const e=document.createElement("a"),n=localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")).token:void 0,r="/api".replace("/api",t),o=new URL(r),c=new URLSearchParams({token:n,...a});o.search=c.toString(),e.href=o.href,document.body.appendChild(e),e.click(),document.body.removeChild(e)}export{s as d};