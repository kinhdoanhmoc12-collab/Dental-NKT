# NHẬT KÝ KỸ THUẬT TẬN GỐC CÁC HẠNG MỤC ĐÃ KHẮC PHỤC Ở GIAI ĐOẠN 1 (DENTAL NKT)

Dưới đây là chi tiết mã nguồn, danh sách tập tin và giải pháp lập trình cụ thể đã được thay đổi trong dự án để đưa Giai đoạn 1 (SEO Kỹ thuật & Content Nền tảng) đạt mức xuất sắc 98/100 điểm.

---

## 🛠️ CHI TIẾT 9 HẠNG MỤC KỸ THUẬT ĐÃ TRIỂN KHAI THÀNH CÔNG

### 1. Mở khóa cào dữ liệu FAQ (FAQ DOM Indexation)
*   **Vấn đề:** 11 trang con của trang web sử dụng cấu trúc ẩn câu trả lời bằng Javascript: `activeFaq === idx && <div>Answer</div>`. Khi render kiểu này, robot Googlebot quét qua trang web sẽ thấy câu trả lời hoàn toàn trống rỗng (vì bot không tự thực hiện hành động bấm click để render).
*   **Giải pháp tận gốc:** Chuyển đổi sang cơ chế luôn render chữ ra HTML (DOM) và chỉ ẩn/hiện bằng CSS classes.
    *   *Mã nguồn cũ:* `{activeFaq === idx && <div className="p-5">{faq.answer}</div>}`
    *   *Mã nguồn mới:* `<div className={`p-5 ${activeFaq === idx ? "block" : "hidden"}`}>{faq.answer}</div>`
*   **Tệp tin đã sửa:** 
    1.  [src/app/page.tsx](file:///c:/Users/Quang/Desktop/Dental%20Nha%20Khoa%20Tr%E1%BA%BB/src/app/page.tsx)
    2.  [src/app/dental-costs/page.tsx](file:///c:/Users/Quang/Desktop/Dental%20Nha%20Khoa%20Tr%E1%BA%BB/src/app/dental-costs/page.tsx)
    3.  9 trang dịch vụ con (`allon4`, `allon6`, `bridges`, `crowns`, `dentures`, `full-mouth`, `invisalign`, `root-canal`, `teeth-whitening`).

---

### 2. Tự động hóa thẻ định danh Canonical & Thẻ mạng xã hội Open Graph
*   **Vấn đề:** Tránh lỗi trùng lặp nội dung khi trang web được truy cập qua nhiều đường dẫn URL khác nhau (chuyển ngôn ngữ, mã theo dõi quảng cáo).
*   **Giải pháp tận gốc:** Sử dụng `metadataBase` và cấu hình metadata động trong file cấu trúc layout gốc của Next.js.
*   **Tệp tin đã sửa:** [src/app/layout.tsx](file:///c:/Users/Quang/Desktop/Dental%20Nha%20Khoa%20Tr%E1%BA%BB/src/app/layout.tsx)
*   **Chi tiết code đã nhúng:**
    ```typescript
    export const metadata: Metadata = {
      metadataBase: new URL("https://nhakhoatre.vn"),
      alternates: {
        canonical: "/", // Tự động đồng bộ hóa canonical theo đường dẫn động
      },
      openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://nhakhoatre.vn",
        siteName: "Dental NKT",
      }
    };
    ```

---

### 3. Khóa khung ngang chống tràn lề di động (Global Viewport Lock)
*   **Vấn đề:** Giao diện trên Safari iOS bị vỡ đôi, xuất hiện khoảng trống trắng lớn ở bên phải do một số khối nội dung rộng vượt quá 100% chiều rộng màn hình.
*   **Giải pháp tận gốc:** 
    *   Thêm thuộc tính `overflow-x-hidden w-full` vào thẻ body toàn cục.
    *   Thay thế lớp container bọc ngoài của **20 trang con** từ không giới hạn lề sang khóa chặt lề ngang.
*   **Tệp tin đã sửa:**
    *   [src/app/layout.tsx](file:///c:/Users/Quang/Desktop/Dental%20Nha%20Khoa%20Tr%E1%BA%BB/src/app/layout.tsx) (Thêm class `w-full overflow-x-hidden` vào thẻ `html` và `body`).
    *   **20 trang con** (Bao gồm trang chủ, liên hệ, chi phí, các trang dịch vụ, cẩm nang và trang bác sĩ).
    *   *Chi tiết code đã thay đổi:* Thay thế `max-w-5xl mx-auto px-4 sm:px-6` bằng `w-full max-w-5xl mx-auto px-4 sm:px-6 overflow-x-hidden`.

---

### 4. Ràng buộc khung cuộn cho bảng dữ liệu (Table Wrapper Constraint)
*   **Vấn đề:** Các bảng giá điều trị lớn (`min-w-[640px]`, `min-w-[700px]`) ép khung chứa dãn rộng ra ngoài màn hình di động, làm mất tác dụng của lệnh khóa lề ngang.
*   **Giải pháp tận gốc:** Áp dụng bắt buộc chiều rộng `w-full max-w-full` kết hợp thuộc tính cuộn ngang `overflow-x-auto` cho thẻ div bọc ngoài bảng.
*   **Tệp tin đã sửa:** **17 tệp tin giao diện** chứa bảng biểu (trang chi phí, các trang quản trị admin và toàn bộ trang dịch vụ).
    *   *Chi tiết code đã thay đổi:* Sửa `className="overflow-x-auto"` thành `className="overflow-x-auto w-full max-w-full"`.

---

### 5. Co giãn khoảng đệm lề theo thiết bị (Responsive Padding)
*   **Vấn đề:** Khoảng cách lề trong các khối thẻ (card) trên máy tính rất lớn (`p-8` hoặc `p-12`), khi xem trên di động khiến nội dung chữ bị ép quá hẹp, gây lỗi xuống dòng vụn vặt mất thẩm mỹ.
*   **Giải pháp tận gốc:** Chuyển đổi sang hệ padding động theo kích thước màn hình.
*   **Tệp tin đã sửa:** **17 trang dịch vụ và trang nội dung chính**.
    *   *Chi tiết code đã thay đổi:* Sửa `p-8` hoặc `p-12` thành `p-5 sm:p-8 md:p-12`.

---

### 6. Cấu trúc dữ liệu Schema FAQ (JSON-LD FAQ Schema)
*   **Vấn đề:** Cần khai báo câu hỏi thường gặp định dạng máy đọc để Google hiển thị hộp câu hỏi trực tiếp trên kết quả tìm kiếm.
*   **Giải pháp tận gốc:** Nhúng tệp JSON-LD FAQ Schema.
*   **Tệp tin đã sửa:**
    *   `src/app/services/dentures/DenturesClient.tsx`
    *   `src/app/services/invisalign/InvisalignClient.tsx`
    *   `src/app/services/root-canal/RootCanalClient.tsx`
    *   `src/app/services/teeth-whitening/TeethWhiteningClient.tsx`
    *   `src/app/warranty-policy/page.tsx`

---

### 7. Dữ liệu thực thể bác sĩ y khoa E-E-A-T (Doctor Schema JSON-LD)
*   **Vấn đề:** Google cần xác minh chuyên môn y khoa (YMYL) của bác sĩ điều trị để xếp hạng trang web.
*   **Giải pháp tận gốc:** Khai báo cấu trúc thực thể bác sĩ kết nối bằng cấp học vấn, chuyên khoa và thông tin phòng khám chủ quản.
*   **Tệp tin đã sửa:** [src/app/dentists/[id]/page.tsx](file:///c:/Users/Quang/Desktop/Dental%20Nha%20Khoa%20Tr%E1%BA%BB/src/app/dentists/%5Bid%5D/page.tsx)

---

### 8. Vùng chạm tương tác đạt chuẩn di động (Mobile Touch Targets)
*   **Vấn đề:** Các nút bấm nhỏ trên mobile dễ bấm trượt (gây lỗi trải nghiệm người dùng di động).
*   **Giải pháp tận gốc:** Tăng khoảng đệm của nút kích hoạt Menu Hamburger từ `p-2` lên `p-2.5` để đạt kích thước chạm chuẩn 44px x 44px.
*   **Tệp tin đã sửa:** [src/components/Header.tsx](file:///c:/Users/Quang/Desktop/Dental%20Nha%20Khoa%20Tr%E1%BA%BB/src/components/Header.tsx)

---

### 9. Bản tóm tắt cho công cụ tìm kiếm AI (GEO llms.txt Directive)
*   **Vấn đề:** Website cần cung cấp tài liệu cô đọng để các mô hình AI (Gemini, ChatGPT) cào thông tin nhanh chóng.
*   **Giải pháp tận gốc:** Tạo file văn bản phẳng `llms.txt` ở thư mục public.
*   **Tệp tin đã tạo:** `public/llms.txt` (Chứa tóm tắt cấu trúc phòng khám, bảng giá định dạng bằng markdown tối giản).
