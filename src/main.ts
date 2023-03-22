/// <reference types="vite/client" />
const pages = import.meta.glob("../pages/**/*.html", {
  as: "url",
  eager: true,
});

const links:string[]=[]

Object.values(pages).forEach((page) => {
  links.push(`<a href="${page}">${page}</a>`);
});

document.body.innerHTML = links.join("\n");
