function dom(id){
    return document.querySelector(id)
}

const tinhTB = (...num)=>{
    console.log(num)
    let nums = 0;
    return (num.map((num)=>{
        nums += parseFloat(num)
    }),
    (nums / num.length).toFixed(2))
}


/* Khối 1 */
dom('#btnKhoi1').addEventListener('click', ()=>{
    const pointMath = dom('#inpToan').value;
    const pointPhysical = dom('#inpLy').value;
    const pointChemistry = dom('#inpHoa').value;
    dom('#tbKhoi1').innerHTML = tinhTB(pointMath, pointPhysical, pointChemistry)
})

/* Khối 2 */

dom('#btnKhoi2').addEventListener('click', ()=>{
    const pointLite = dom('#inpVan').value;
    const pointHistory = dom('#inpSu').value;
    const pointGeography = dom('#inpDia').value;
    const pointEnglish = dom('#inpEnglish').value;
    dom('#tbKhoi2').innerHTML = tinhTB(pointLite, pointHistory, pointGeography, pointEnglish)
})