const header = () =>{
    return (`
    <nav class="nav-bar">
    <div class="hamburger">
        <div class="line1"></div>
        <div class="line"></div>
        <div class="line3"></div>
    </div>
    <div class="logo">
        <a href="../html/index.html"><img src="../img/logo.png" alt="logo"></a>
    </div>
    <div class="search-bar">
        <input class="form-control form-ground" type="text" placeholder="Tìm kiếm sản phẩm">
        <i class="fa fa-search" aria-hidden="true"></i>
    </div>
    <div class="right-bar">
        <div class="support">
            <div class="left-support">
                <i class="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div class="right-support shadow p-3 mb-5 bg-body rounded">
                <p>Hỗ trợ khách hàng</p>
                <p><a href="tel:">0123.456.789</a></p>
            </div>
        </div>
        <div class="sign-in">
            <div class="left-sign-in">
                <i class="fa fa-sign-in" aria-hidden="true"></i>
            </div>
            <div class="right-sign-in shadow p-3 mb-5 bg-body rounded">
                <p><a href="">Đăng nhập</a></p>
                <p><a href="#">Đăng ký</a></p>
            </div>
        </div>
        <div class="cart">
            <div class="left-cart">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
            <div class="right-cart">
                <p><a href="">Giỏ hàng</a></p>
                <p class="quantity">0</p>
            </div>
        </div>
    </div>
</nav>
<div class="mobile-search-bar">
    <input type="text" class="form-control" placeholder="Tìm kiếm sản phẩm...">
    <i class="fa fa-search" aria-hidden="true"></i>
</div>
<ul class="desktop-navbar">
    <li><a href="../html/index.html">Trang chủ</a></li>
    <li class="product-li">
        <a href="">Sản phẩm</a>
        <div class="items-inside">
            <ul class="list-products-1 list-1">
                <li><a href="">Trái cây nhập</a></li>
                <li><a href="">Trái cây Việt</a></li>
                <li><a href="">Giỏ quả trái cây</a></li>
                <li><a href="">Trái cây đông lạnh</a></li>
                <li><a href="">Trái cây sấy</a></li>
                <li><a href="">Muối chấm</a></li>
            </ul>
            <ul class="list-product-1 meats">
                <li><a href="">Thịt, Hải Sản</a></li>
                <li><a href="">Thịt heo</a></li>
                <li><a href="">Thịt bò</a></li>
                <li><a href="">Hải sản</a></li>
                <li><a href="">Gà vịt trứng</a></li>
                <li><a href="">Thực phẩm đóng hộp</a></li>
                <li><a href="">Thực phẩm chế biến</a></li>
            </ul>
            <ul class="list-product-1 foods-done">
                <li><a href="">Thực phẩm chế biến</a></li>
                <li><a href="">Lạp xưởng, xúc xích</a></li>
                <li><a href="">Thực phẩm đông lạnh</a></li>
                <li><a href="">Thực phẩm đóng hộp</a></li>
                <li><a href="">Lẩu các loại</a></li>
                <li><a href="">Thịt khô, xông khói</a></li>
                <li><a href="">Chà bông</a></li>
            </ul>
            <ul class="list-product-1 dry-foods">
                <li><a href="">Gạo, nếp</a></li>
                <li><a href="">Bột làm bánh, bột chiên</a></li>
                <li><a href="">Đậu, mè</a></li>
                <li><a href="">Hạt các loại</a></li>
                <li><a href="">Ngũ cốc dinh dưỡng</a></li>
                <li><a href="">Mứt, mật ong</a></li>
            </ul>
            <ul class="list-product-1 butter">
                <li><a href="">Bơ sữa</a></li>
                <li><a href="">Sữa động vật</a></li>
                <li><a href="">Sữa hạt</a></li>
                <li><a href="">Sữa chua, kem</a></li>
                <li><a href="">Bơ, phô mai</a></li>
            </ul>
            <ul class="list-product-1 drinks">
                <li><a href="">Đồ uống</a></li>
                <li><a href="">Nước ép trái cây</a></li>
                <li><a href="">Nước ngọt, nước suối</a></li>
                <li><a href="">Trà, cà phê</a></li>
                <li><a href="">Siro, bột rau củ</a></li>
                <li><a href="">Thạch sâm, rau câu</a></li>
                <li><a href="">Mứt, mật ong</a></li>
            </ul>
        </div>
    </li>
    <li><a href="">Tin tức</a></li>
    <li><a href="">Giới thiệu</a></li>
    <li><a href="">Liên hệ</a></li>
</ul>
<div class="mobile-navbar">
            <div class="top-bar">
                <div class="first-top-bar">
                    <i class="fa fa-user" aria-hidden="true"></i>
                </div>
                <div class="right-top-bar">
                    <p><a href="">Đăng nhập</a></p>
                    <p><a href="">Đăng ký</a></p>
                </div>
                <i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <ul class="next-bar">
                <li><a href="">Trang chủ</a></li>
                <li class="list-items">
                    <a href="">Sản phẩm</a>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </li>
                <div class="box-flow">
                    <ul class="list-product fruits">
                        <li><a href="">Trái cây nhập</a></li>
                        <li><a href="">Trái cây Việt</a></li>
                        <li><a href="">Giỏ quả trái cây</a></li>
                        <li><a href="">Trái cây đông lạnh</a></li>
                        <li><a href="">Trái cây sấy</a></li>
                        <li><a href="">Muối chấm</a></li>
                    </ul>
                    <ul class="list-product meats">
                        <li><a href="">Thịt, Hải Sản</a></li>
                        <li><a href="">Thịt heo</a></li>
                        <li><a href="">Thịt bò</a></li>
                        <li><a href="">Hải sản</a></li>
                        <li><a href="">Gà vịt trứng</a></li>
                        <li><a href="">Thực phẩm đóng hộp</a></li>
                        <li><a href="">Thực phẩm chế biến</a></li>
                    </ul>
                    <ul class="list-product foods-done">
                        <li><a href="">Thực phẩm chế biến</a></li>
                        <li><a href="">Lạp xưởng, xúc xích</a></li>
                        <li><a href="">Thực phẩm đông lạnh</a></li>
                        <li><a href="">Thực phẩm đóng hộp</a></li>
                        <li><a href="">Lẩu các loại</a></li>
                        <li><a href="">Thịt khô, xông khói</a></li>
                        <li><a href="">Chà bông</a></li>
                    </ul>
                    <ul class="list-product dry-foods">
                        <li><a href="">Gạo, nếp</a></li>
                        <li><a href="">Bột làm bánh, bột chiên</a></li>
                        <li><a href="">Đậu, mè</a></li>
                        <li><a href="">Hạt các loại</a></li>
                        <li><a href="">Ngũ cốc dinh dưỡng</a></li>
                        <li><a href="">Mứt, mật ong</a></li>
                    </ul>
                    <ul class="list-product butter">
                        <li><a href="">Bơ sữa</a></li>
                        <li><a href="">Sữa động vật</a></li>
                        <li><a href="">Sữa hạt</a></li>
                        <li><a href="">Sữa chua, kem</a></li>
                        <li><a href="">Bơ, phô mai</a></li>
                    </ul>
                    <ul class="list-product drinks">
                        <li><a href="">Đồ uống</a></li>
                        <li><a href="">Nước ép trái cây</a></li>
                        <li><a href="">Nước ngọt, nước suối</a></li>
                        <li><a href="">Trà, cà phê</a></li>
                        <li><a href="">Siro, bột rau củ</a></li>
                        <li><a href="">Thạch sâm, rau câu</a></li>
                        <li><a href="">Mứt, mật ong</a></li>
                    </ul>
                </div>
                    <li><a href="">Tin tức</a></li>
                    <li><a href="">Giới thiệu</a></li>
                    <li><a href="">Liên hệ</a></li>
            </ul>
        </div>
    `)
}

const Header = document.querySelector('#header');
Header.innerHTML = header();