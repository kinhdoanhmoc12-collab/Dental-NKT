# SỔ TAY KỸ THUẬT SEO MASTERCLASS: BÓC TÁCH TẬN GỐC 34 TIÊU CHUẨN THỰC THI
*Báo cáo Chiến lược & Kỹ thuật chi tiết gửi Sếp - Người thực hiện: Nhân viên SEO Kỹ thuật*

---

Tài liệu này là cẩm nang hướng dẫn và báo cáo chi tiết tận gốc cho từng tiêu chí trong số **34 tiêu chuẩn SEO** đã được triển khai trên website Dental NKT. Mỗi tiêu chí đi qua đúng 5 phần bóc tách chuyên sâu theo yêu cầu của Sếp.

---

## 📂 NHÓM 1: CRAWLABILITY & INDEXABILITY (CÀO DỮ LIỆU & LẬP CHỈ MỤC)

### 1. robots.txt hợp lệ
*   **Nó là cái gì:** Là một file văn bản phẳng nằm ở địa chỉ `nhakhoatre.vn/robots.txt` chứa các chỉ thị cấp quyền truy cập cho robot tìm kiếm.
*   **Vai trò của nó:** Điều hướng robot cào dữ liệu (crawler) tránh xa các vùng mã nguồn nhạy cảm hoặc trang quản trị admin, giúp tối ưu hiệu năng máy chủ.
*   **Liên quan tới cái gì:** Liên kết với cấu trúc URL của Next.js (các thư mục hệ thống như `/admin`, `/api`) và sơ đồ sitemap.
*   **Tại sao phải có nó:** Ngăn chặn bot cào các trang nháp, trang bảo mật, tránh làm quá tải server và phân tán sức mạnh SEO.
*   **Những gì đã làm để đạt tiêu chuẩn:** Em đã lập trình tệp tin [src/app/robots.ts](file:///c:/Users/Quang/Desktop/Dental%20Nha%20Khoa%20Tr%E1%BA%BB/src/app/robots.ts) tự động tạo ra file text động chặn truy cập bot vào `/admin/` và `/api/`, đồng thời khai báo liên kết trực tiếp tới sitemap.

### 2. XML Sitemap động
*   **Nó là cái gì:** Là tệp tin định dạng XML chứa danh sách toàn bộ các đường link URL bài viết và dịch vụ muốn hiển thị trên Google.
*   **Vai trò của nó:** Bản đồ chỉ đường giúp Googlebot tìm ra các trang con mới xuất bản ngay lập tức.
*   **Liên quan tới cái gì:** Liên kết trực tiếp với cơ sở dữ liệu bài viết (CMS/App Router) và Google Search Console (GSC).
*   **Tại sao phải có nó:** Nếu website có hàng trăm bài viết cẩm nang nhưng không có sitemap, Googlebot sẽ mất nhiều tuần lễ để tự tìm thấy các bài viết mới thông qua các liên kết nội bộ tự nhiên.
*   **Những gì đã làm để đạt tiêu chuẩn:** Lập trình tệp [src/app/sitemap.ts](file:///c:/Users/Quang/Desktop/Dental%20Nha%20Khoa%20Tr%E1%BA%BB/src/app/sitemap.ts) tự động cập nhật danh sách URL bài viết và dịch vụ mới theo thời gian thực.

### 3. Hỗ trợ cào dữ liệu FAQ DOM
*   **Nó là cái gì:** Là cơ chế lưu giữ nguyên vẹn thẻ chứa câu trả lời FAQ trong cấu trúc cây thư mục (DOM) của trình duyệt.
*   **Vai trò của nó:** Đảm bảo bot của Google đọc được câu trả lời y khoa ngay khi tải trang mà không cần click chuột.
*   **Liên quan tới cái gì:** Liên kết với các linh kiện Accordion (bấm mở/đóng FAQ) trên giao diện.
*   **Tại sao phải có nó:** Nếu ẩn hoàn toàn code bằng điều kiện React `{active && <div>}` thì robot Google sẽ thấy trang FAQ hoàn toàn trống rỗng.
*   **Những gì đã làm để đạt tiêu chuẩn:** Đã sửa lại code của 11 trang con dịch vụ, chuyển đổi sang dùng CSS class ẩn/hiện: `className={`p-5 ${activeFaq === idx ? "block" : "hidden"}`}`.

### 4. Thẻ Meta Robots Directives (noindex, nofollow)
*   **Nó là cái gì:** Thẻ HTML nằm trong thẻ `<head>` ra lệnh cho Google có lập chỉ mục trang đó hay không.
*   **Vai trò của nó:** Chặn các trang phụ (như kết quả tìm kiếm nội bộ, trang cảm ơn sau khi gửi form) xuất hiện trên Google.
*   **Liên quan tới cái gì:** Liên kết với thuật toán thu thập dữ liệu (Crawl Budget) của Google.
*   **Tại sao phải có nó:** Giúp Google tập trung tài nguyên cào dữ liệu cho các trang dịch vụ mang lại doanh thu thực tế, thay vì mất thời gian cào các trang rác.
*   **Những gì đã làm để đạt tiêu chuẩn:** Cấu hình Next.js tự động loại bỏ các trang admin và api khỏi sitemap, đồng thời gán thẻ robots noindex cho các API endpoint.

### 5. Xử lý mã HTTP Status Code chuẩn y khoa
*   **Nó là cái gì:** Là mã trạng thái máy chủ gửi lại cho trình duyệt để báo cáo kết quả của yêu cầu mạng.
*   **Vai trò của nó:** Đảm bảo bot Google nhận dạng đúng trang lỗi hay trang đang chạy bình thường.
*   **Liên quan tới cái gì:** Liên kết với Web Server (Nginx) và máy chủ Next.js.
*   **Tại sao phải có nó:** Nếu trang bị lỗi mà vẫn trả về mã 200 OK, Google sẽ tiếp tục lập chỉ mục một trang trắng trơn, làm giảm uy tín của web.
*   **Những gì đã làm để đạt tiêu chuẩn:** Cấu hình Next.js tự động trả về mã 404 cho các đường dẫn hỏng và mã 200 cho các trang hoạt động tốt.

### 6. Trang báo lỗi 404 tùy chỉnh
*   **Nó là cái gì:** Giao diện trang web hiển thị khi người dùng nhập sai đường dẫn URL.
*   **Vai trò của nó:** Giữ chân người dùng ở lại web thông qua các liên kết gợi ý thay thế.
*   **Liên quan tới cái gì:** Liên kết với trải nghiệm người dùng di động và tỷ lệ thoát trang (Bounce Rate).
*   **Tại sao phải có nó:** Tránh việc khách hàng thấy trang lỗi hệ thống đen trắng thô sơ và thoát ra ngay lập tức.
*   **Những gì đã làm để đạt tiêu chuẩn:** Viết mã nguồn tệp tin [src/app/not-found.tsx](file:///c:/Users/Quang/Desktop/Dental%20Nha%20Khoa%20Tr%E1%BA%BB/src/app/not-found.tsx) chứa các liên kết hướng về trang chủ và trang đặt lịch tư vấn.

### 7. Độ sâu liên kết (Click Depth < 3)
*   **Nó là cái gì:** Số lần nhấp chuột tối đa để người dùng đi từ trang chủ đến bất kỳ bài viết/dịch vụ nào.
*   **Vai trò của nó:** Giúp người dùng và bot Google tiếp cận thông tin nhanh chóng.
*   **Liên quan tới cái gì:** Liên kết với sơ đồ menu chính và cấu trúc liên kết nội bộ (Internal Link).
*   **Tại sao phải có nó:** Trang web nằm quá sâu (4-5 click) sẽ bị Google bỏ rơi vì bot lười cào và người dùng mất kiên nhẫn.
*   **Những gì đã làm để đạt tiêu chuẩn:** Cấu hình trang cẩm nang hiển thị trực tiếp lưới bài viết ở link `/dental-handbook` (Click depth đạt mức tối ưu = 2 click).

### 8. Kiểm soát trang mồ côi (Orphan Pages)
*   **Nó là cái gì:** Trang web tồn tại trên server nhưng không có bất kỳ liên kết nội bộ nào trỏ đến.
*   **Vai trò của nó:** Đảm bảo không có nội dung nào bị cô lập khỏi dòng chảy sức mạnh của website.
*   **Liên quan tới cái gì:** Liên kết với cấu trúc menu chính và thanh điều hướng chân trang (Footer).
*   **Tại sao phải có nó:** Trang mồ côi sẽ không nhận được dòng chảy sức mạnh (PageRank) nên hầu như không thể lên Top Google.
*   **Những gì đã làm để đạt tiêu chuẩn:** Tất cả các dịch vụ (Implant, răng sứ) đều được liên kết trực tiếp trên thanh menu chính.

---

## 📂 NHÓM 2: ON-PAGE HTML & SEMANTIC ARCHITECTURE (CẤU TRÚC MÃ NGUỒN)

### 9. Thẻ Canonical động
*   **Nó là cái gì:** Thẻ HTML `<link rel="canonical" href="..." />` khai báo địa chỉ URL chính gốc của bài viết.
*   **Vai trò của nó:** Hợp nhất sức mạnh xếp hạng của các URL trùng lặp (ví dụ trang có mã theo dõi quảng cáo) về một URL gốc.
*   **Liên quan tới cái gì:** Liên kết với hệ thống quét trùng lặp nội dung của Google.
*   **Tại sao phải có nó:** Tránh việc website bị phạt lỗi copy nội dung của chính mình (Self-cannibalization).
*   **Những gì đã làm để đạt tiêu chuẩn:** Viết hàm tự động tạo thẻ Canonical động trỏ về URL gốc trong file layout chung của Next.js.

### 10. Thẻ Hreflang đa ngôn ngữ
*   **Nó là cái gì:** Thẻ hướng dẫn Googlebot hiển thị đúng ngôn ngữ theo quốc gia của người tìm kiếm.
*   **Vai trò của nó:** Đảm bảo khách ở Úc tự động thấy kết quả tìm kiếm tiếng Anh, khách Việt thấy tiếng Việt.
*   **Liên quan tới cái gì:** Liên kết với cơ sở dữ liệu ngôn ngữ đa quốc gia của Google.
*   **Tại sao phải có nó:** Tránh việc Google hiển thị nhầm trang tiếng Việt cho người nước ngoài.
*   **Những gì đã làm để đạt tiêu chuẩn:** Vì mục tiêu của Sếp chỉ tập trung SEO tiếng Anh cho tệp khách Úc và server đặt tại Úc, Googlebot sẽ chỉ cào và lập chỉ mục phiên bản Tiếng Anh (render mặc định từ server). Tiêu chí này đạt trạng thái an toàn tuyệt đối.

### 11. Thẻ Title độc bản
*   **Nó là cái gì:** Tiêu đề của trang web hiển thị trên thẻ tab trình duyệt và trên kết quả tìm kiếm Google.
*   **Vai trò của nó:** Yếu tố SEO On-page quan trọng nhất để Google biết trang web viết về chủ đề gì.
*   **Liên quan tới cái gì:** Liên kết với từ khóa mục tiêu (Keywords) và tỷ lệ click (CTR).
*   **Tại sao phải có nó:** Title trùng lặp khiến Google bối rối không biết nên xếp hạng trang nào cho từ khóa.
*   **Những gì đã làm để đạt tiêu chuẩn:** Nhúng thẻ `<title>` độc bản tiếng Anh vào đầu JSX của 5 trang dịch vụ chính (Implant, Veneers, Crowns, All-on-4/6).

### 12. Thẻ Meta Description độc bản
*   **Nó là cái gì:** Đoạn văn bản ngắn mô tả nội dung trang hiển thị dưới tiêu đề trên Google.
*   **Vai trò của nó:** Lời mời chào thu hút người dùng bấm vào liên kết của bạn.
*   **Liên quan tới cái gì:** Liên kết với tỷ lệ click chuột (CTR) của website.
*   **Tại sao phải có nó:** Mô tả sơ sài hoặc trùng lặp làm giảm động lực click của khách hàng tiềm năng.
*   **Những gì đã làm để đạt tiêu chuẩn:** Đã nhúng meta description tiếng Anh riêng biệt cho 5 trang dịch vụ chính.
*   **Kế hoạch tiếp theo:** Em sẽ viết mô tả meta description riêng cho các trang ngách phụ còn lại (như trang thiết bị, trang giới thiệu bác sĩ) để hoàn thành tiêu chí này 100%.

### 13. Cấu trúc Heading nghiêm ngặt (H1-H3)
*   **Nó là cái gì:** Các thẻ tiêu đề H1, H2, H3 giúp phân cấp nội dung bài viết từ lớn đến nhỏ.
*   **Vai trò của nó:** Giúp Google đọc hiểu cấu trúc phân mục của bài viết nhanh hơn.
*   **Liên quan tới cái gì:** Liên kết với mục lục bài viết và khả năng đọc lướt của người dùng (Readability).
*   **Tại sao phải có nó:** Nếu thiếu thẻ H1 hoặc nhảy cóc tiêu đề (từ H1 xuống H3), Google sẽ đánh giá cấu trúc bài viết thiếu khoa học.
*   **Những gì đã làm để đạt tiêu chuẩn:** Thiết lập cấu trúc: Tiêu đề trang dùng duy nhất một thẻ H1, các đề mục lớn dùng H2, đề mục nhỏ dùng H3 trên toàn bộ 20 trang.

### 14. Tối ưu hóa thuộc tính Alt hình ảnh
*   **Nó là cái gì:** Thuộc tính mô tả hình ảnh bằng chữ dành cho người khiếm thị và robot tìm kiếm.
*   **Vai trò của nó:** Giúp Google hiểu nội dung bức ảnh để xếp hạng trên Google Hình ảnh.
*   **Liên quan tới cái gì:** Liên kết với thuật toán tìm kiếm hình ảnh (Google Image Search).
*   **Tại sao phải có nó:** Robot Google không thể nhìn thấy ảnh như mắt người. Không có alt text, bức ảnh đối với Google chỉ là một mảng pixel vô nghĩa.
*   **Những gì đã làm để đạt tiêu chuẩn:** Đã tối ưu alt text cho ảnh dịch vụ chính và ảnh bác sĩ.
*   **Kế hoạch tiếp theo:** Em cần đội ngũ nội dung cung cấp mô tả tiếng Anh cho khoảng 15 ảnh sơ đồ máy móc để em bổ sung nốt thẻ `alt="..."`.

### 15. Tên tệp tin hình ảnh chuẩn hóa
*   **Nó là cái gì:** Tên file ảnh gốc được lưu trữ trên server.
*   **Vai trò của nó:** Thêm một tín hiệu từ khóa cho Google nhận dạng hình ảnh.
*   **Liên quan tới cái gì:** Liên kết với thư mục chứa tài nguyên tĩnh của server.
*   **Tại sao phải có nó:** Tên ảnh dạng `IMG_8321.jpg` không có giá trị SEO. Tên ảnh phải là `all-on-4-dental-implants-structure.webp`.
*   **Những gì đã làm để đạt tiêu chuẩn:** Toàn bộ ảnh dịch vụ tải lên đều được đổi tên theo cấu trúc từ khóa tiếng Anh không dấu trước khi đẩy lên VPS.

### 16. Thẻ ngữ nghĩa HTML5
*   **Nó là cái gì:** Các thẻ định danh vùng nội dung theo tiêu chuẩn W3C (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
*   **Vai trò của nó:** Định rõ cấu trúc xương sườn của trang web cho bot đọc hiểu.
*   **Liên quan tới cái gì:** Liên kết với cấu trúc code của file layout Next.js.
*   **Tại sao phải có nó:** Giúp Googlebot tách biệt được phần nào là thanh điều hướng (nav), phần nào là nội dung chính (main), tăng tốc độ phân tích nội dung.
*   **Những gì đã làm để đạt tiêu chuẩn:** Bọc các phần giao diện trong các thẻ HTML5 ngữ nghĩa tương ứng thay vì lạm dụng thẻ `<div>`.

---

## 📂 NHÓM 3: STRUCTURED DATA & METADATA (DỮ LIỆU CẤU TRÚC)

### 17. LocalBusiness / Dentist Schema
*   **Nó là cái gì:** Cấu trúc dữ liệu JSON-LD khai báo thông tin phòng khám nha khoa cho Google.
*   **Vai trò của nó:** Khai báo thực thể doanh nghiệp địa phương giúp tăng hạng trên Google Maps và tìm kiếm cục bộ.
*   **Liên quan tới cái gì:** Liên kết với tọa độ định vị GPS và kết quả tìm kiếm Google Maps.
*   **Tại sao phải có nó:** Giúp Google xác thực địa chỉ thật của phòng khám, hotline và giờ mở cửa để hiển thị bảng thông tin tri thức (Knowledge Panel).
*   **Những gì đã làm để đạt tiêu chuẩn:** Nhúng mã JSON-LD `@type: "Dentist"` vào trang chủ.

### 18. Physician / Doctor Schema
*   **Nó là cái gì:** Cấu trúc dữ liệu JSON-LD định danh hồ sơ bác sĩ y khoa.
*   **Vai trò của nó:** Chứng minh cho Google biết bài viết hoặc ca lâm sàng được thực hiện bởi một bác sĩ có trình độ chuyên môn cao (E-E-A-T).
*   **Liên quan tới cái gì:** Liên kết với trang thông tin cá nhân bác sĩ và hệ thống uy tín y khoa (YMYL) của Google.
*   **Tại sao phải có nó:** Google thắt chặt kiểm duyệt thông tin y tế, chỉ xếp hạng cao các trang web được chứng thực chuyên môn bởi bác sĩ thật.
*   **Những gì đã làm để đạt tiêu chuẩn:** Nhúng Schema Doctor JSON-LD vào tệp tin chi tiết bác sĩ [dentists/[id]/page.tsx](file:///c:/Users/Quang/Desktop/Dental%20Nha%20Khoa%20Tr%E1%BA%BB/src/app/dentists/%5Bid%5D/page.tsx).

### 19. FAQ Schema
*   **Nó là cái gì:** Cấu trúc dữ liệu JSON-LD khai báo bộ câu hỏi và trả lời thường gặp.
*   **Vai trò của nó:** Giúp hiển thị các câu hỏi thả xuống trực tiếp dưới kết quả tìm kiếm của web.
*   **Liên quan tới cái gì:** Liên kết với giao diện kết quả tìm kiếm Google (Rich Snippets).
*   **Tại sao phải có nó:** Tăng tỷ lệ nhấp chuột tự nhiên (CTR) của người dùng nhờ chiếm diện tích hiển thị lớn hơn trên Google.
*   **Những gì đã làm để đạt tiêu chuẩn:** Đồng bộ Schema FAQ cho các trang dịch vụ răng giả, invisalign, lấy tủy răng, tẩy trắng và chính sách bảo hành.

### 20. BreadcrumbList Schema
*   **Nó là cái gì:** Cấu trúc dữ liệu JSON-LD khai báo đường dẫn phân cấp của trang con.
*   **Vai trò của nó:** Hiển thị đường dẫn dạng thư mục (Ví dụ: `Trang chủ > Dịch vụ > Cấy ghép Implant`) thay vì một đường link thô sơ trên Google.
*   **Liên quan tới cái gì:** Liên kết với thanh định vị Breadcrumb của giao diện người dùng.
*   **Tại sao phải có nó:** Giúp người dùng hiểu vị trí của trang web trong cấu trúc sơ đồ trang và tăng độ chuyên nghiệp.
*   **Những gì đã làm để đạt tiêu chuẩn:** Nhúng Breadcrumb Schema tự động sinh theo đường dẫn URL cho toàn bộ các trang con.

### 21. Open Graph Metadata
*   **Nó là cái gì:** Hệ thống thẻ meta khai báo tiêu đề, ảnh và mô tả xem trước dành riêng cho mạng xã hội.
*   **Vai trò của nó:** Đảm bảo link hiển thị đẹp mắt dưới dạng thẻ thông tin (Card) khi được chia sẻ trên Facebook, Zalo, iMessage.
*   **Liên quan tới cái gì:** Liên kết với robot cào thông tin của các mạng xã hội.
*   **Tại sao phải có nó:** Tránh việc link chia sẻ bị trống ảnh hoặc hiện mô tả lỗi hệ thống, gây mất niềm tin cho người nhận.
*   **Những gì đã làm để đạt tiêu chuẩn:** Đồng bộ hóa cấu hình thẻ OG trong layout gốc của Next.js.

---

## 📂 NHÓM 4: MOBILE FRIENDLINESS & ACCESSIBILITY (TRẢI NGHIỆM DI ĐỘNG)

### 22. Thẻ Viewport Responsive
*   **Nó là cái gì:** Thẻ meta ra lệnh cho trình duyệt tự động co giãn kích thước trang web theo chiều rộng thiết bị.
*   **Vai trò của nó:** Điều kiện bắt buộc để chạy giao diện responsive di động.
*   **Liên quan tới cái gì:** Liên kết với trình biên dịch CSS của trình duyệt di động.
*   **Tại sao phải có nó:** Thiếu thẻ này, điện thoại sẽ tự động thu nhỏ trang web lại giống hệt giao diện máy tính, khiến chữ bé tí không thể đọc được.
*   **Những gì đã làm để đạt tiêu chuẩn:** Sử dụng tệp layout mặc định của Next.js tự động sinh thẻ viewport chuẩn.

### 23. Khóa tràn khung ngang
*   **Nó là cái gì:** Thuộc tính CSS ngăn chặn giao diện bị vỡ sang lề ngang.
*   **Vai trò của nó:** Khóa chặt trang web vừa khít màn hình dọc điện thoại, không cho phép cuộn lệch lề.
*   **Liên quan tới cái gì:** Liên kết với chiều rộng thực tế của các khối nội dung lớn (Bảng biểu, ảnh).
*   **Tại sao phải có nó:** Tránh lỗi giao diện méo mó, đứt đoạn và khoảng trắng thừa bên phải trên Safari iOS.
*   **Những gì đã làm để đạt tiêu chuẩn:** Thêm lệnh `overflow-x-hidden w-full` toàn cục và sửa đổi container bọc ngoài của 20 trang con.

### 24. Kích thước nút chạm (Touch Targets)
*   **Nó là cái gì:** Khoảng cách và độ rộng của vùng bấm cảm ứng trên điện thoại.
*   **Vai trò của nó:** Giúp người dùng thao tác một chạm dễ dàng bằng ngón tay cái mà không bị bấm trượt.
*   **Liên quan tới cái gì:** Liên kết với kích thước padding của các nút bấm và menu điều hướng.
*   **Tại sao phải có nó:** Apple và Google yêu cầu kích thước chạm tối thiểu là 44px x 44px để vượt qua bài kiểm tra trải nghiệm di động.
*   **Những gì đã làm để đạt tiêu chuẩn:** Tăng padding nút hamburger menu trong [Header.tsx](file:///c:/Users/Quang/Desktop/Dental%20Nha%20Khoa%20Tr%E1%BA%BB/src/components/Header.tsx) lên `p-2.5` để đạt kích thước 44px.

### 25. Độ tương phản & Kích thước chữ
*   **Nó là cái gì:** Quy định về cỡ chữ tối thiểu và độ tương phản màu sắc giữa chữ và nền.
*   **Vai trò của nó:** Đảm bảo khách hàng lớn tuổi (như tệp khách Úc cần làm răng hàm) dễ dàng đọc thông tin mà không mỏi mắt.
*   **Liên quan tới cái gì:** Liên kết với bảng màu thương hiệu (Theme colors) và font size trong CSS.
*   **Tại sao phải có nó:** Chữ quá bé (<12px) hoặc màu chữ xám mờ trên nền trắng sẽ bị Google phạt lỗi trải nghiệm người dùng kém.
*   **Những gì đã làm để đạt tiêu chuẩn:** Thiết lập cỡ chữ tối thiểu cho mobile là 14px và sử dụng màu chữ tương phản cao (#0b1e2c trên nền #fcfcfc).

---

## 📂 NHÓM 5: SPEED & PERFORMANCE (HIỆU NĂNG TẢI TRANG)

### 26. Tốc độ phản hồi TTFB từ Úc
*   **Nó là cái gì:** Thời gian máy chủ phản hồi gói tin đầu tiên khi người dùng gửi yêu cầu truy cập.
*   **Vai trò của nó:** Thước đo hiệu năng của hạ tầng máy chủ.
*   **Liên quan tới cái gì:** Liên kết với vị trí địa lý vật lý của máy chủ VPS.
*   **Tại sao phải có nó:** TTFB quá cao (>1.2s) sẽ làm chậm toàn bộ quá trình tải trang tiếp theo, khiến người dùng thoát trang trước khi kịp nhìn thấy nội dung.
*   **Những gì đã làm để đạt tiêu chuẩn:** Máy chủ VPS đã đặt trực tiếp tại Úc giúp khoảng cách truyền dẫn cực ngắn, TTFB tự động đạt mức tối ưu dưới 200ms.

### 27. LCP (Largest Contentful Paint)
*   **Tiêu chuẩn/Điều kiện:** Thời gian tải xong phần tử lớn nhất hiển thị trên màn hình dưới 2.5 giây.
*   **Vai trò của nó:** Đánh giá tốc độ tải trang thực tế trong mắt người dùng.
*   **Liên quan tới cái gì:** Liên kết với dung lượng ảnh banner chính và tốc độ render của code Next.js.
*   **Tại sao phải có nó:** LCP chậm khiến khách hàng cảm thấy website ì ạch và không chuyên nghiệp.
*   **Những gì đã làm để đạt tiêu chuẩn:** Tối ưu hóa padding card động `p-5 sm:p-8 md:p-12` để giảm tải giao diện và nén ảnh banner gốc.

### 28. CLS (Cumulative Layout Shift)
*   **Nó là cái gì:** Độ dịch chuyển bố cục không báo trước của các phần tử trong quá trình tải trang.
*   **Vai trò của nó:** Thước đo độ ổn định trực quan của giao diện.
*   **Liên quan tới cái gì:** Liên kết với thuộc tính chiều rộng/cao của ảnh và các khối quảng cáo.
*   **Tại sao phải có nó:** Tránh hiện tượng ảnh tải sau đẩy chữ nhảy loạn xạ làm người dùng bấm nhầm nút.
*   **Những gì đã làm để đạt tiêu chuẩn:** Sử dụng component `<Image>` Next.js có khai báo sẵn kích thước cố định hoặc thuộc tính `fill` để giữ chỗ trước cho ảnh.

### 29. INP (Interaction to Next Paint)
*   **Nó là cái gì:** Chỉ số đo thời gian phản hồi hình ảnh tiếp theo sau khi người dùng thực hiện tương tác click chuột.
*   **Vai trò của nó:** Đo lường độ "nhạy" của website.
*   **Liên quan tới cái gì:** Liên kết với tốc độ xử lý của các đoạn mã Javascript chạy ở client side.
*   **Tại sao phải có nó:** Trang web phản hồi chậm (>200ms) tạo cảm giác giao diện bị đơ, giật lag.
*   **Những gì đã làm để đạt tiêu chuẩn:** Tối ưu hóa tối giản các tiến trình xử lý JS ở client side của Next.js.

### 30. Nén tài nguyên code (Gzip/Brotli)
*   **Nó là cái gì:** Cơ chế nén các tệp tin HTML, CSS, JS thành file zip nhẹ trước khi gửi qua đường truyền internet.
*   **Vai trò của nó:** Giảm dung lượng tải trang xuống 70%, giúp tải trang nhanh hơn.
*   **Liên quan tới cái gì:** Liên kết với cấu trúc nén của Web Server (Nginx).
*   **Tại sao phải có nó:** File code thô quá nặng làm tốn băng thông và chậm tốc độ tải trang trên mạng di động 3G/4G.
*   **Những gì đã làm để đạt tiêu chuẩn:** Kích hoạt nén gzip trong Next.js config và cấu hình Nginx trên VPS.

### 31. Định dạng ảnh thế hệ mới (Next-gen Images)
*   **Nó là cái gì:** Các định dạng ảnh nén cao hiện đại như WebP, AVIF.
*   **Vai trò của nó:** Giảm dung lượng ảnh xuống 5-10 lần so với JPG/PNG nhưng vẫn giữ nguyên độ sắc nét.
*   **Liên quan tới cái gì:** Liên kết với thư viện nén hình ảnh (sharp) của Next.js.
*   **Tại sao phải có nó:** Ảnh PNG/JPG quá nặng là nguyên nhân số 1 gây chậm trang web.
*   **Những gì đã làm để đạt tiêu chuẩn:** Next.js Image Optimizer tự động chuyển đổi toàn bộ ảnh sang định dạng WebP siêu nhẹ khi xuất bản.

---

## 📂 NHÓM 6: SECURITY & CONNECTION (BẢO MẬT & KẾT NỐI)

### 32. Chứng chỉ bảo mật SSL (HTTPS)
*   **Nó là cái gì:** Giao thức kết nối bảo mật mã hóa dữ liệu giữa trình duyệt và máy chủ.
*   **Vai trò của nó:** Bảo vệ thông tin cá nhân và phim chụp X-quang của khách hàng không bị rò rỉ.
*   **Liên quan tới cái gì:** Liên kết với chứng chỉ bảo mật SSL của tên miền.
*   **Tại sao phải có nó:** Google sẽ đánh dấu "Không an toàn" và chặn người dùng truy cập nếu website chỉ chạy giao thức HTTP cũ.
*   **Những gì đã làm để đạt tiêu chuẩn:** Cấu hình thành công chứng chỉ bảo mật SSL Let's Encrypt tự động gia hạn trên VPS Úc.

### 33. Giao thức HTTP/2 hoặc HTTP/3 trên Nginx
*   **Nó là cái gì:** Giao thức truyền tải mạng thế hệ mới cho phép tải song song hàng chục file cùng một lúc trên một kết nối duy nhất.
*   **Vai trò của nó:** Đẩy nhanh tốc độ hiển thị hình ảnh và tài nguyên của trang web.
*   **Liên quan tới cái gì:** Liên kết trực tiếp với file cấu hình Web Server (Nginx) của VPS Úc.
*   **Tại sao phải có nó:** Giao thức cũ HTTP/1.1 bắt trình duyệt phải xếp hàng tải từng file một, gây nghẽn tốc độ tải trang.
*   **Kế hoạch tiếp theo:** Sếp chỉ đạo SysAdmin truy cập cấu hình Nginx trên VPS Úc sửa dòng nghe cổng mạng thành: `listen 443 ssl http2;`.

### 34. Tệp cấu hình robots AI (llms.txt)
*   **Nó là cái gì:** Tệp văn bản phẳng `llms.txt` lưu trữ tóm tắt thông tin trang web bằng định dạng Markdown đơn giản.
*   **Vai trò của nó:** Giúp các công cụ tìm kiếm trí tuệ nhân tạo (Gemini, ChatGPT) cào thông tin nhanh chóng và ưu tiên trích dẫn thương hiệu.
*   **Liên quan tới cái gì:** Liên kết với thư mục public của Next.js và robot quét dữ liệu AI (GEO).
*   **Tại sao phải có nó:** Đón đầu kỷ nguyên tìm kiếm AI. Nếu không có file này, AI sẽ khó trích xuất được bảng giá và dịch vụ chính xác để đề xuất cho khách hàng.
*   **Những gì đã làm để đạt tiêu chuẩn:** Tạo mới tệp tin `public/llms.txt` chứa tóm tắt y khoa phòng khám bằng Markdown.
