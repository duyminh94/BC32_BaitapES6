const str = dom(".heading").innerHTML;
const chars = [...str];
let html = "";
/* Sử dụng vòng lặp for để kiểm tra chuỗi array */
for (let i = 0; i < chars.length; i++) {
  html += `
        <span>${chars[i]}</span>
    `;
}
dom(".heading").innerHTML = html;
console.log('spear Operator', html)

function dom(id){
    return document.querySelector(id)
}