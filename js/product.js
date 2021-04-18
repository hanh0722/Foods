// create checkbox 

const createCheckBox = (array) =>{
    return (
    `
        <div class = "check-box"><input type = "checkbox" name = ${array}><span>${array}</span></div>  
    `
    )
}
const checkBox = () =>{
    const arrayBrand = [
        "EGA",
        "EGA GREEN"
    ];
    const rangePrice = [
        "Giá dưới 100.000đ",
        "100.000đ - 200.000đ",
        "200.000đ - 300.000đ",
        "300.000đ - 500.000đ",
        "500.000đ - 1.000.000đ",
        "Giá trên 1.000.000đ"
    ];
    const type = [
        "Nông sản Việt",
        "Nhập khẩu",
        "Nhiệt đới",
        "Thực phẩm tươi sống",
        "Thực phẩm"
    ]
    const checkbox1 = arrayBrand.map(items =>{
        return (createCheckBox(items));
    })
    const checkbox2 = rangePrice.map(items =>{
        return(createCheckBox(items));
    })
    const checkbox3 = type.map(items =>{
        return(createCheckBox(items));
    })
    const brandbox = document.querySelector('.brand-box');
    const pricebox = document.querySelector('.price-box');
    const typebox = document.querySelector('.type-box');
    
    brandbox.innerHTML = checkbox1.join(" ");
    pricebox.innerHTML = checkbox2.join(" ");
    typebox.innerHTML = checkbox3.join(" ");

}
checkBox();
