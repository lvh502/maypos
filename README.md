# Starbucks POS — Hệ thống bán hàng

Ứng dụng Point-of-Sale (POS) mô phỏng hệ thống bán hàng Starbucks, được xây dựng bằng HTML, CSS và JavaScript thuần (vanilla) — không phụ thuộc vào bất kỳ framework hay thư viện ngoài nào.

> _Dự án học thuật_ · Học viện Ngân hàng

# 📸 Tính năng nổi bật

- 🔐 _Màn hình đăng nhập_ với xác thực PIN theo nhân viên
- 🛒 _POS bán hàng_ - thêm món, tùy chỉnh size/topping, áp dụng khuyến mãi
- 👨‍🍳 _Kitchen Display System (KDS)_ - theo dõi trạng thái đơn hàng theo thời gian thực
- 📦 _Quản lý kho_ - hiển thị mức tồn kho, cảnh báo sắp hết hàng
- 📊 _Báo cáo doanh thu_ - thống kê theo ca, sản phẩm bán chạy, phương thức thanh toán
- 🎖️ _CRM thành viên_ - tra cứu và gán khách hàng thân thiết (Stars, cấp độ Gold/Platinum…)
- 💳 _Thanh toán đa phương thức_ - tiền mặt & QR (VietQR/VNPay)

# 🗂️ Cấu trúc dự án

may pos/
├── pos.html # Toàn bộ giao diện HTML
├── pos.css # Stylesheet
├── pos.js # Logic ứng dụng (data + functions)
└── images/ # Ảnh nhân viên & logo thương hiệu
├── starbucks-logo.png
├── viet-hoang.jpg
├── vi-nam.jpg
├── son-tung.jpg
└── duy-long.jpg

# 👥 Nhân viên & PIN đăng nhập

Việt Hoàng - Quản lý ca - `0509`
Vi Nam - Thu ngân - `2607`
Sơn Tùng - Thu ngân - `1205`
Duy Long - Barista - `1912`

# 🍵 Danh mục thực đơn

Thực đơn được chia thành 7 danh mục:

- _Espresso & Coffee_ — Latte, Cappuccino, Americano, Macchiato…
- _Frappuccino_ — các loại Frappuccino đá xay
- _Tea & Refreshment_ — Trà, Pure Matcha Latte…
- _Refreshers_ — Strawberry Açaí, Dragon Drink…
- _Blended Juice_ — nước ép xay
- _Chocolate & Classics_ — Hot Chocolate, Java Chip…
- _Đồ ăn_ — Croissant, Bánh mì, Sandwich…

Mỗi đồ uống hỗ trợ chọn _size_ (Tall / Grande / Venti) và các _topping_ tùy chọn.

## 🖥️ Các màn hình chính

### 1. POS Bán hàng

Giao diện chia đôi: danh sách menu bên trái, giỏ hàng bên phải. Hỗ trợ:

- Lọc theo danh mục & tìm kiếm tên món
- Tùy chỉnh size, topping, ghi chú
- Tra cứu và gán thành viên CRM
- Nhập mã khuyến mãi
- Thanh toán tiền mặt hoặc QR (3 bước)

### 2. KDS - Kitchen Display

Màn hình dành cho barista, hiển thị các đơn đang chờ pha chế. Trạng thái đơn hàng:

- 🟡 _Chờ_ (Pending)
- 🔵 _Đang pha_ (Making)
- ✅ _Hoàn thành_ (Done)

Bộ đếm thời gian tự động đổi màu cảnh báo khi đơn chờ quá lâu.

# 3. Quản lý Kho

Hiển thị danh sách nguyên liệu (cà phê, sữa, syrup, matcha…) cùng mức tồn kho dạng thanh tiến trình. Cảnh báo khi nguyên liệu sắp hết (dưới mức tối thiểu).

# 4. Báo cáo

Thống kê tổng hợp trong ca làm việc:

- Tổng doanh thu, số đơn, giá trị đơn trung bình
- Top sản phẩm bán chạy
- Biểu đồ doanh thu theo giờ
- Phân bổ phương thức thanh toán
