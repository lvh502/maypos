# Starbucks POS - Hệ thống bán hàng

Ứng dụng Point-of-Sale (POS) mô phỏng hệ thống bán hàng Starbucks, được xây dựng bằng HTML, CSS và JavaScript thuần (vanilla) — không phụ thuộc vào bất kỳ framework hay thư viện ngoài nào.

> _Dự án học thuật_ · Học viện Ngân hàng

# 📸 Tính năng nổi bật

- 🔐 Màn hình đăng nhập với xác thực PIN theo nhân viên
- 🛒 POS bán hàng - thêm món, tùy chỉnh size/topping, áp dụng khuyến mãi
- 👨‍🍳 Kitchen Display System (KDS) - theo dõi trạng thái đơn hàng theo thời gian thực
- 📦 Quản lý kho\_ - hiển thị mức tồn kho, cảnh báo sắp hết hàng
- 📊 Báo cáo doanh thu - thống kê theo ca, sản phẩm bán chạy, phương thức thanh toán
- 🎖️ CRM thành viên - tra cứu và gán khách hàng thân thiết (Stars, cấp độ Gold/Platinum…)
- 💳 Thanh toán đa phương thức - tiền mặt & QR (VietQR/VNPay)

# 👥 Nhân viên & PIN đăng nhập

Việt Hoàng - Quản lý ca - `0509`
Vi Nam - Thu ngân - `2607`
Sơn Tùng - Thu ngân - `1205`
Duy Long - Barista - `1912`

# 🍵 Danh mục thực đơn

Thực đơn được chia thành 7 danh mục:

- Espresso & Coffe - Latte, Cappuccino, Americano, Macchiato…
- Frappuccino - các loại Frappuccino đá xay
- Tea & Refreshment - Trà, Pure Matcha Latte…
- Refreshers - Strawberry Açaí, Dragon Drink…
- Blended Juice - nước ép xay
- Chocolate & Classics - Hot Chocolate, Java Chip…
- Đồ ăn - Croissant, Bánh mì, Sandwich…

Mỗi đồ uống hỗ trợ chọn _size_ (Tall / Grande / Venti) và các _topping_ tùy chọn.

# 🖥️ Các màn hình chính

# 1. POS Bán hàng

Giao diện chia đôi: danh sách menu bên trái, giỏ hàng bên phải. Hỗ trợ:

- Lọc theo danh mục & tìm kiếm tên món
- Tùy chỉnh size, topping, ghi chú
- Tra cứu và gán thành viên CRM
- Nhập mã khuyến mãi
- Thanh toán tiền mặt hoặc QR (3 bước)

# 2. KDS - Kitchen Display

Màn hình dành cho barista, hiển thị các đơn đang chờ pha chế. Trạng thái đơn hàng:

- 🟡 Chờ (Pending)
- 🔵 Đang pha (Making)
- ✅ Hoàn thành (Done)

Bộ đếm thời gian tự động đổi màu cảnh báo khi đơn chờ quá lâu.

# 3. Quản lý Kho

Hiển thị danh sách nguyên liệu (cà phê, sữa, syrup, matcha…) cùng mức tồn kho dạng thanh tiến trình. Cảnh báo khi nguyên liệu sắp hết (dưới mức tối thiểu).

# 4. Báo cáo

Thống kê tổng hợp trong ca làm việc:

- Tổng doanh thu, số đơn, giá trị đơn trung bình
- Top sản phẩm bán chạy
- Biểu đồ doanh thu theo giờ
- Phân bổ phương thức thanh toán
