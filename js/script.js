// turn on Notification

const NotifyOn = () =>{
    Notification.requestPermission();   
}
NotifyOn();

// show the list
const listItems = () =>{
    const items = document.querySelector('.list-items i');
    const list = document.querySelector('.box-flow');
    items.addEventListener('click', () =>{
        list.classList.toggle('block');
        items.classList.toggle('rotate');
    })
}
listItems();

// show the navbar of mobile
const mobileNavBar = (item, navbar, layout) =>{
    item.addEventListener('click', () =>{
        navbar.classList.toggle('block-navbar');
        layout.classList.toggle('block-layout');
    })
}
const navBar = () =>{
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.mobile-navbar');
    const layout = document.querySelector('.layout-black');
    const close = document.querySelector(".top-bar .fa-times");
    mobileNavBar(hamburger, navbar, layout);
    mobileNavBar(layout, navbar, layout);
    mobileNavBar(close, navbar, layout);
}
navBar();
// add picture
const addPictures = () =>{
    const swiperPer = document.querySelectorAll('.swiper-container1 .swiper-slide');
    const array = [
        '../img/apple.jpg',
        '../img/fruit.jpg',
        '../img/meat.jpg',
        '../img/chicken.jpg',
        '../img/brand_5.jpg',
        '../img/brand_6.jpg',
        '../img/brand_7.jpg',
        '../img/brand_8.jpg'
    ]
    const array1 = [
        'Rau củ quả',
        'Trái cây Việt',
        'Thịt nhập khẩu',
        'Thịt gà',
        'Phô mai, bơ',
        'Trứng, sữa',
        'Bánh mì',
        'Thực phẩm khô'
    ]
    for(let i = 0; i < array.length; i++){
        const pictures = document.createElement('img');
        pictures.src = array[i];
        swiperPer[i].appendChild(pictures);
        const p = document.createElement('p');
        p.textContent = array1[i];
        p.style.textAlign = 'center';
        swiperPer[i].appendChild(p);
    }
}
addPictures();
// show buttonTop
const scrollTop = () =>{
    const button = document.querySelector('.arrow-top');
    window.addEventListener('scroll', () =>{
        let y = window.pageYOffset;
        y > 100 ? button.classList.add('show-up-button') : button.classList.remove('show-up-button');
    })
    button.addEventListener('click', () =>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}
scrollTop();

// fixed navbar
const fixNavBar = () =>{
    const navbar = document.querySelector('.nav-bar');
    window.addEventListener('scroll', () =>{
        let y = window.pageYOffset;
        if(y > 100){
            navbar.classList.add('nav-bar-fixed');
        }
        else{
            navbar.classList.remove('nav-bar-fixed');
        }
    })
}
fixNavBar();
// count price
const countPrice = (rate, firstPrice, container) =>{
    const rateSale = Number(rate);
    const Price1 = Number(firstPrice);
    const afterPrice = Price1 - ((Price1 * rateSale) / 100);
    container.textContent = afterPrice;
}
const functionWrapper = (wrapper, array, products, price, sale, FirstPrice) =>{
    for(let i = 0; i < array.length; i++){
        const div = document.createElement('div');
        const divImg = document.createElement('div');
        divImg.className = 'img-div';

        div.className = 'swiper-slide';
        const BackgroundBlack = document.createElement('div');
        BackgroundBlack.className = 'background-black-search';
        
        const icon1 = document.createElement('i');
        const icon2 = document.createElement('i');
        icon1.className = 'fa fa-info';
        icon2.className = 'fa fa-cart-plus';
        BackgroundBlack.appendChild(icon1);
        BackgroundBlack.appendChild(icon2);
        const img = document.createElement('img');
        img.src = array[i];
        divImg.appendChild(img);
        divImg.appendChild(BackgroundBlack);
        div.appendChild(divImg);

        const nameProduct = document.createElement('a');
        nameProduct.className = 'text-products';
        nameProduct.setAttribute('href', '#');
        nameProduct.textContent = products[i];
        div.appendChild(nameProduct);

        const priceProduct = document.createElement('p');
        const firstPrice = document.createElement('p');
        const divCost = document.createElement('div');
        divCost.className = 'price-div d-flex justify-content-start align-items-center';
        firstPrice.className = 'first-price';
        const span = document.createElement('span');
        span.textContent = 'đ';
        firstPrice.textContent = `${FirstPrice[i]}.000${span.innerHTML}`;
        priceProduct.textContent = `${price[i]}${span.innerHTML}`;
        priceProduct.className = 'price';
        divCost.appendChild(priceProduct);
        divCost.appendChild(firstPrice);
        div.appendChild(divCost);

        const saleRate = document.createElement('span');
        const percent = document.createElement('span');
        percent.textContent = '%';
        saleRate.textContent = `-${sale[i]}${percent.innerHTML}`;
        saleRate.className = 'rate-sale';
        priceProduct.innerHTML = `${Math.floor(Number(FirstPrice[i]) - (Number(FirstPrice[i]) * Number(sale[i]))/100)}.000${span.innerHTML}`;
        div.appendChild(saleRate);

        wrapper.appendChild(div);
    }
}
// next wrapper
const NextWrapper = () =>{
    const wrapper = document.querySelector('.swiper-container2 .swiper-wrapper');
    const array = [
        '../img/box-1.jpg',
        '../img/dieu-1.jpg',
        '../img/hanh-nhan-1.jpg',
        '../img/hat-dieu-4.jpg',
        '../img/mo-5.jpg'
    ];
    const products = [
        'Hộp bánh Tết Bánh Hỗn Hợp Hộp Thiếc Warmly Hoàng Gia - Tặng kèm Túi Vải Không Dệt',
        '1 KG hạt điều nguyên rang tỏi ớt giòn ngon loại 1',
        '1Kg Hạnh Nhân Rang Bơ Nhập Khẩu Cao Cấp Thương Hiệu SK FOOD',
        'COMBO SIÊU TIẾT KIỆM - 2 Hũ Mơ Vàng Sấy Dẻo DK Harvest nhập khẩu chính hãng - 250g',
        '(COMBO 1KG) 2 HỘP HẠT ĐIỀU RANG MUỐI HIỆU TÂN LỘC PHÁT'
    ]
    const price = [
        '107',
        '129',
        '249',
        '180',
        '183'
    ]
    const sale = [
        '10',
        '14',
        '29',
        '10',
        '48'
    ]
    const FirstPrice = [
        '150',
        '350',
        '150',
        '150',
        '150'
    ]
    functionWrapper(wrapper, array, products, price, sale, FirstPrice);
}
NextWrapper();

// make countdown time
const CountDown = () =>{
    var countDownDate = new Date(`${new Date().getMonth() + 1} 
                                ${new Date().getDate() + 1}, ${new Date().getFullYear()} 24:00:00`)
                                .getTime();
    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="demo"
    const boxHour = document.querySelector('.box-hour');
    const boxMinutes = document.querySelector('.box-minutes');
    const boxSeconds = document.querySelector('.box-seconds');
    hours >= 10 ? boxHour.innerHTML = hours : boxHour.innerHTML = `0${hours}`;
    minutes >= 10 ? boxMinutes.innerHTML = minutes : boxMinutes.innerHTML = `0${minutes}`
    seconds >= 10 ? boxSeconds.innerHTML = seconds : boxSeconds.innerHTML = `0${seconds}`;
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        const bigBox = document.querySelector('.count-down-box');
        bigBox.innerHTML = 'Expired!';
    }
    }, 1000);
}
CountDown();

// third wrapper
const thirdWrapper = () =>{
    const wrapper = document.querySelector('.swiper-container3 .swiper-wrapper');
    const pictures = [
        '../img/veg-4.jpg',
        '../img/veg-5.jpg',
        '../img/veg-6.jpg',
        '../img/veg-1.jpg',
        '../img/veg-2.jpg',
        '../img/veg-3.jpg'
    ]
    const products = [
        'Bông cải xanh - 500g',
        'Su Hào 500g',
        'Hành tây 500g',
        'Khoai tây 500g',
        'Cần tây 500g',
        'Hành tây tím 500g'
    ]
    const price = [
        '107',
        '129',
        '249',
        '180',
        '183',
        '130'
    ]
    const sale = [
        '10',
        '14',
        '29',
        '10',
        '48',
        '20'
    ]
    const FirstPrice = [
        '150',
        '350',
        '150',
        '150',
        '150',
        '150'
    ]
    functionWrapper(wrapper, pictures, products, price, sale, FirstPrice);
}
thirdWrapper();

// fourth wrapper
const FourthWrapper = () =>{
    const wrapper = document.querySelector('.swiper-container4 .swiper-wrapper');
    const fruits = [
        '../img/fruit-1.jpg',
        '../img/fruit-2.jpg',
        '../img/fruit-3.png',
        '../img/fruit-4.jpg',
        '../img/fruit-5.jpg',
        '../img/fruit-6.jpg',
        '../img/fruit-7.jpg'
    ]
    const products = [
        'Táo Envy Size 70 1Kg',
        'Me Ngọt Thái Hộp 500g',
        'Chuối Unifarm Kid 1kg',
        'Táo Xanh Nhập Khẩu 500g',
        'Dưa gang trái tròn',
        'Thanh long',
        'Xoài keo'
    ]
    const price = [
        '107',
        '129',
        '249',
        '180',
        '183',
        '130',
        '130'
    ]
    const sale = [
        '10',
        '14',
        '29',
        '10',
        '48',
        '20',
        '25'
    ]
    const FirstPrice = [
        '150',
        '350',
        '150',
        '150',
        '150',
        '150',
        '150'
    ]
    functionWrapper(wrapper, fruits, products, price, sale, FirstPrice);
}
FourthWrapper();

// make list vegetable
const vegList = () =>{
    const array = [
        '../img/veg-4.jpg',
        '../img/veg-5.jpg',
        '../img/veg-6.jpg',
        '../img/veg-1.jpg',
        '../img/veg-2.jpg',
        '../img/veg-3.jpg',
        '../img/veg-7.jpg',
        '../img/veg-8.jpg',
        '../img/veg-8.jpg'
    ]
    const products = [
        'Bông cải xanh - 500g',
        'Su Hào 500g',
        'Hành tây 500g',
        'Khoai tây 500g',
        'Cần tây 500g',
        'Hành tây tím 500g',
        'Hành tây tím 500g',
        'Hành tây tím 500g',
        'Hành tây tím 500g'
    ]
    const price = [
        '107',
        '129',
        '249',
        '180',
        '183',
        '130',
        '130',
        '130',
        '130'
    ]
    const sale = [
        '10',
        '14',
        '29',
        '10',
        '48',
        '20',
        '25',
        '0',
        '0'
    ]
    const FirstPrice = [
        '150',
        '350',
        '150',
        '150',
        '150',
        '150',
        '150',
        '150',
        '150'
    ]
    
    const divCol = document.querySelector('.div-col')
    const main = document.querySelector('.vegetable');
    for(let i = 0; i < array.length; i++){
        const div = document.createElement('div');
        const div1 = document.createElement('div');
        div1.className = 'img-div';
        const img = document.createElement('img');
        img.src = array[i];
        div1.appendChild(img);
        const div2 = document.createElement('div');
        div2.className = 'background-black-search';
        const i1 = document.createElement('i');
        const i2 = document.createElement('i');
        i1.className = 'fa fa-info';
        i2.className = 'fa fa-cart-plus';
        div2.appendChild(i1);
        div2.appendChild(i2);
        div1.appendChild(div2);

        div.appendChild(div1);
        const a = document.createElement('a');
        a.setAttribute('href', '#');
        a.className = 'text-products text-products-3';
        a.textContent = products[i];
        div.appendChild(a);
        const div3 = document.createElement('div');
        div3.className = 'price-div d-flex justify-content-start align-items-center';
        
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        p1.className = 'price';
        p2.className = 'first-price';
        p1.textContent = price[i];
        const VND = document.createElement('span');
        VND.textContent = 'đ';
        p2.textContent = `${FirstPrice[i]}.000${VND.innerHTML}`;
        div3.appendChild(p1);
        div3.appendChild(p2);
        div.appendChild(div3);
        const span = document.createElement('span');
        const percent = document.createElement('span');
        percent.textContent = '%';
        span.className = 'rate-sale';
        span.textContent = `-${sale[i]}${percent.innerHTML}`;
        p1.innerHTML = `${Math.floor(Number(FirstPrice[i]) - (Number(FirstPrice[i]) * Number(sale[i]))/100)}.000${VND.innerHTML}`;
        div1.appendChild(span);
        if(i < 3){
            div.className = 'col-6 col-xs-6 col-sm-6 col-md-4 col-lg-4 items-1';
            divCol.appendChild(div);
        }
        else{
            div.className = 'col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3 items-1';
            main.appendChild(div);
        }
    }
}
vegList();



// next Slider

const FiveWrapper = () =>{
    const wrapper = document.querySelector('.swiper-container5 .swiper-wrapper');
    const fruits = [
       '../img/banner_coll_1.jpg',
       '../img/banner_coll_2.jpg',
       '../img/banner_coll_3.jpg'
    ]
    for(let i = 0; i < fruits.length; i++){
        const wrap = document.createElement('div');
        wrap.className = 'swiper-slide';
        const img = document.createElement('img');
        img.src = fruits[i];
        wrap.appendChild(img);
        wrapper.appendChild(wrap);
    }
}
FiveWrapper();
const SixthWrapper = () =>{
    const wrapper = document.querySelector('.swiper-container6 .swiper-wrapper');
    const obj1 = [
        [
            '../img/1.png',
            '../img/2.jpg',
            '../img/3.jpg',
            '../img/4.jpg',
            '../img/5.jpg'
        ],
        [
            '../img/veg-1.jpg',
            '../img/veg-2.jpg',
            '../img/veg-3.jpg',
            '../img/veg-4.jpg',
            '../img/veg-5.jpg'
        ],
        [
            '../img/fruit-1.jpg',
            '../img/fruit-2.jpg',
            '../img/fruit-3.png',
            '../img/fruit-4.jpg',
            '../img/fruit-5.jpg'
        ],
    ]
    const obj2 = [
        [
            'Phi Lê Cá Hồi Cắt Khúc Đông Lạnh',
            'Mực Ống Phú Quốc, Hải Sản Biển Tự Nhiên Túi 500g',
            'Cá Thu Tươi Cắt Khoanh',
            'CÁ BASA PHI LÊ 400g',
            'Hàu giống Pháp tươi sống size 12 - 15 con/kg (1kg)'
        ],
        [
            'Khoai tây 500g',
            'Cần tây 500g',
            'Hành tây tím 500g',
            'Bông cải xanh 500g',
            'Su Hào 500g'
        ],
        [
            'Táo Envy size 70 1kg',
            'Me Ngọt Thái Hộp 1kg',
            'Chuối Unifarm 1kg',
            'Táo xanh nhập khẩu 1kg',
            'Dưa gang trái giòn 1kg'
        ]
    ]
    const obj3 = [

        [
            '107',
            '129',
            '249',
            '180',
            '183',
        ],
        [
            '107',
            '129',
            '249',
            '180',
        ],
        [
            '107',
            '129',
            '249',
        ]
    ]
   const obj4 = [
    [
        '10',
        '14',
        '29',
        '10',
        '50',
    ],
    [
        '10',
        '14',
        '29',
        '10',
        '22'
    ],
    [
        '10',
        '14',
        '29',
        '23',
        '20'
    ]
   ]
   const obj5 = [
    [
        '150',
        '350',
        '150',
        '150',
        '150',
    ],
    [
        '150',
        '350',
        '150',
        '150',
        '150'
    ],
    [
        '150',
        '350',
        '150',
        '350',
        '350'
    ]
   ];
//    create first slide when we go
   functionWrapper(wrapper, obj1[0], obj2[0], obj3[0], obj4[0], obj5[0]);
   const button = document.querySelectorAll('.btn-lg');
   const removeFunction = (buttons) =>{
       button.forEach(items =>{
           items.removeAttribute('disabled');
       })
       buttons.setAttribute('disabled', 'disabled');
   } 
   button.forEach((items, index) =>{
       items.addEventListener('click', () =>{
           removeFunction(items);
           const imgs = document.querySelectorAll('.swiper-container6 img');
            const textProducts = document.querySelectorAll('.swiper-container6 .text-products');
            const price = document.querySelectorAll('.swiper-container6 .price');
            const priceFirst = document.querySelectorAll('.swiper-container6 .first-price');
            const percent = document.querySelectorAll('.swiper-container6 .rate-sale');
           for(let i = 0; i < imgs.length; i++){
               imgs[i].src = obj1[index][i];
               textProducts[i].textContent = obj2[index][i];
               price[i].textContent = `${Math.floor(Number(obj5[index][i]) - (Number(obj5[index][i])* Number(obj4[index][i]))/100)}.000đ`;
               priceFirst[i].textContent = `${obj5[index][i]}.000đ`;
               percent[i].textContent = `-${obj4[index][i]}%`;
           }
       })
   })
}
SixthWrapper();

// news swiper

const swiperNews = () =>{
    const container = document.querySelector('.swiper-container7 .swiper-wrapper');
    const array = [
        '../img/swiper-cube-1.jpg',
        '../img/swiper-cube-2.png'
    ]
    const content = [
        '4 công thức sinh tố cải kale ngon miệng, tốt dáng, đẹp da',
        'Cách làm tàu hũ ky khìa nước dừa thơm ngon đậm vị',
    ]
    const textBelow = [
        'Text 1',
        'Text 2'
    ]
    const contents = array.map((items, index) =>{
        return `
            <div class = "swiper-slide">
                <div class = "container-cube">
                    <div class = "img-slide-cube">
                        <img src = ""> 
                    </div>
                    <div class = "text-slide-cube">
                        <div class = "text-above"><a href="#">${content[index]}</a></div>
                        <div class = "text-below">${textBelow[index]}</div>
                        <button class = "btn btn-success"><a href = "#">Xem chi tiết</a></button>
                    </div>
                </div>
            </div>
        `
    })
    const valueHTML = contents.join(','); // join only receive another variable
    container.innerHTML = valueHTML;

    const imgs = document.querySelectorAll('.swiper-container7 img');
    imgs.forEach((items, index) =>{
        items.src = array[index];
    })
}
swiperNews();

// wrap ul
const showFooter = () =>{
    const wrapUL = document.querySelectorAll('.wrap-ul');
    const arrow = document.querySelectorAll('footer .fa-angle-down');
    arrow.forEach((items, index) =>{
        items.addEventListener('click', () =>{
            wrapUL[index].classList.toggle('block-ul');
        })
    })
}
showFooter();

// count elements we choose
const removeAll = (form, background, button, body) =>{
    button.addEventListener('click', () =>{
        form.classList.remove('showUp-form');
        background.classList.remove('showUp-All');
        body.style.overflow = 'scroll';
    })
}
// optimize code
const optimizeForm = (button, desktop, formData, background, body, imgs, nameProduct, Price, numberCart) =>{
    button.forEach((items) =>{
        items.addEventListener('click', () =>{
            desktop.textContent = Number(desktop.innerText) + 1;
            desktop.style.display = 'flex';
            formData.classList.add('showUp-form');
            background.classList.add('showUp-All');
            // get parent
            const parent = items.parentElement.parentNode;
            // get picture
            const img = parent.querySelector('img');
            // up source
            imgs.src = img.src;
            const parentOfParent = parent.parentNode;
            const text = parentOfParent.querySelector('.text-products');
            nameProduct.textContent = text.innerText;
            const price = parentOfParent.querySelector('.price');
            Price.textContent = price.innerText;
            numberCart.textContent = Number(desktop.innerText);
            body.style.overflow = 'hidden';
        })
    });
}
const countElements = () =>{
    const button = document.querySelectorAll('.fa-cart-plus');
    const desktop = document.querySelector('.quantity');
    const formData = document.querySelector('.form-products');
    const background = document.querySelector('.background-black');
    const closeButton = document.querySelector('.fa-close-button');
    const imgs = formData.querySelector('img');
    const nameProduct = formData.querySelector('.name-products');
    const Price = formData.querySelector('.price-products');
    const numberCart = formData.querySelector('.quantity-pd');
    const body = document.querySelector('body');
    // update value
    optimizeForm(button, desktop, formData, background, body,imgs, nameProduct, Price, numberCart);
    removeAll(formData, background, closeButton, body);
}
countElements();

const validateEmail = () =>{
    const email = document.querySelector('.width-control');
    const submitBtn = document.querySelector('.submit');
    email.addEventListener('input', (event) =>{
        let valueOfInput = event.target.value;
        !valueOfInput ? submitBtn.setAttribute('disabled', 'disabled') : submitBtn.removeAttribute('disabled');
    })
}
validateEmail();

// show up information of products
const informationProducts = () =>{
    const Box = document.querySelector('.information-products');
    const inforButton = document.querySelectorAll('.fa-info');
    const background = document.querySelector('.background-black');
    const body = document.querySelector('body');
    const imgs = document.querySelector('.information-products img');
    const button = document.querySelector('.close-contents');
    const priceInfor1 = document.querySelector('.priceInfor');
    const firstPrice1 = document.querySelector('.second-price');
    inforButton.forEach((items, index) =>{
        items.addEventListener('click', () =>{
            Box.classList.add('showUp-form');
            background.classList.add('showUp-All');
            body.style.overflow = 'hidden';
            const parent = items.parentElement.parentNode;
            const img = parent.querySelector('img');
            imgs.src = img.src;
            const nameProducts = document.querySelector('.products-name');
            const parentN = parent.parentNode;
            const links = parentN.querySelector('.text-products').innerText;
            nameProducts.textContent = links;
            priceInfor1.textContent = parentN.querySelector('.price').innerText;
            firstPrice1.textContent = parentN.querySelector('.first-price').innerText;
        })
    })
    removeAll(Box, background, button, body);
}
informationProducts();

// function button incre and decre
const quantityButton = () =>{
    const increase = document.querySelector('.btn-incre');
    const decrease = document.querySelector('.btn-decre');
    const quantityValue = document.querySelector('.number-quantity');
    let i = 1;
    increase.addEventListener('click', () =>{
        i++;
        quantityValue.textContent = i;
    })
    decrease.addEventListener('click', () =>{
        i--;
        if(i > 0){
            quantityValue.textContent = i;
        }
        else{
            quantityValue.textContent = '1';
            i = 1;
        }
    })
}
quantityButton();

// update button top
const updateButtonCart = () =>{
    const button = document.querySelector('.btn-top');
    const input = document.querySelector('.number-quantity');
    let quantity1 = document.querySelector('.quantity');
    button.addEventListener('click', () =>{
        let quantityNumber = Number(input.innerText);
        quantity1.textContent = Number(quantity1.innerText) + quantityNumber;
        const form = document.querySelector('.form-products');
        const imgs = form.querySelector('img');
        const parent = button.parentElement.parentElement;
        const imgParent = parent.querySelector('img');
        imgs.src = imgParent.src;
        form.classList.add('showUp-form');
        parent.classList.remove('showUp-form');
        document.querySelector('.quantity-pd').textContent = quantity1.textContent;
        const contentPD = parent.querySelector('.products-name');
        document.querySelector('.name-products').textContent = contentPD.textContent;
        const pricePD = parent.querySelector('.priceInfor');
        document.querySelector('.price-products').textContent = pricePD.textContent;
    })
}
updateButtonCart();