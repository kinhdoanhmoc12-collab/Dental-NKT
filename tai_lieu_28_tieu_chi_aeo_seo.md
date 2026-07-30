# CẨM NANG ĐÀO TẠO: 28 TIÊU CHÍ TỐI ƯU HÓA AEO & SEO THẾ HỆ MỚI
*Tài liệu hướng dẫn chi tiết dành cho Lập trình viên (Developer) và Nhân viên viết nội dung (Content Writer)*

---

## 🌟 GIỚI THIỆU CHUNG
Tối ưu hóa công cụ trả lời bằng AI (**AEO - Answer Engine Optimization**) không phải là việc dùng AI để sản xuất nội dung hàng loạt, mà là **cấu trúc hóa và tối ưu hóa nội dung để các công cụ AI (ChatGPT, Gemini, Perplexity) có lý do để chọn bạn** làm nguồn trích dẫn uy tín nhất.

Tài liệu này định nghĩa chi tiết **28 tiêu chí kỹ thuật chia làm 5 nhóm**, đi kèm mục tiêu, cách triển khai chi tiết và ví dụ minh họa để bàn giao trực tiếp cho đội ngũ kỹ thuật và nội dung học tập.

---

## 📝 NHÓM 1: NỘI DUNG & CẤU TRÚC (8 TIÊU CHÍ - 53 ĐIỂM)
*Tập trung vào cách trình bày văn bản rõ ràng, cấu trúc mạch lạc để máy đọc và hiểu nhanh nhất.*

### C1 — Nguyên tắc Answer-first có trong DOM (10đ)
*   **Định nghĩa:** Viết câu trả lời trực diện ngay đầu trang hoặc ngay dưới tiêu đề (H2/H3). Đoạn này phải dài từ **40–80 từ** và hiển thị trực tiếp trong HTML khi tải trang (không ẩn trong accordion hay CSS `display:none`).
*   **Tại sao quan trọng:** Các công cụ AI Search quét trang rất nhanh; chúng cần tìm thấy câu trả lời trực tiếp ngay lập tức để trích xuất thành câu trả lời cho người dùng.
*   **Cách triển khai:**
    ```html
    <h2>What is the cost of dental implants in Vietnam?</h2>
    <p>The cost of a single dental implant in Vietnam ranges from $975 to $3,580 AUD depending on the fixture brand. This is 60-70% cheaper than in Australia, where the same procedure costs $3,000 to $7,000 AUD.</p>
    ```

### C2 — Cấu trúc 4 lớp theo mô hình DLN (10đ)
*   **Định nghĩa:** Mỗi phần nội dung lớn (H2/H3) phải được cấu trúc theo 4 lớp cốt lõi: Câu Core ngắn gọn ($\le$80 từ) $\rightarrow$ Nội dung chi tiết $\rightarrow$ Minh chứng/Hình ảnh $\rightarrow$ Liên kết chuyển bước tiếp theo (**Next-step link**) theo hành trình khách hàng.
*   **Tại sao quan trọng:** Giúp giữ chân người dùng (giảm bounce rate) và tạo sơ đồ logic (semantic path) cho AI đi từ nhận thức đến hành động.
*   **Cách triển khai:** Cuối mỗi section H2/H3, luôn chèn một liên kết gợi ý hành động tiếp theo của người dùng:
    ```html
    <p>➞ <strong>Next Step:</strong> Review our detailed <a href="#pricing">dental implant price list</a> to plan your budget.</p>
    ```

### C3 — FAQ block phải hiển thị trong DOM (10đ)
*   **Định nghĩa:** Tối thiểu 3 cặp Câu hỏi/Trả lời (Q/A) phải luôn hiện diện trong cấu trúc HTML gốc khi trang tải. Tránh sử dụng cơ chế render có điều kiện của React (`{active && <div... >}`) làm mất text trong DOM ban đầu.
*   **Cách triển khai tốt:**
    ```html
    <!-- Ẩn/hiện bằng CSS class chứ không dùng logic lập trình xóa thẻ HTML ra khỏi DOM -->
    <div class="faq-answer hidden">Câu trả lời luôn nằm ở đây để Bot cào...</div>
    ```

### C13 — Chỉ có duy nhất 1 thẻ H1 (5đ)
*   **Định nghĩa:** Mỗi URL chỉ được phép chứa duy nhất một thẻ `<h1>` làm tiêu đề chính cho trang. Độ dài tiêu chuẩn từ **20–80 ký tự**.
*   **Cách triển khai:**
    ```html
    <!-- Đúng -->
    <h1>Dental Tourism Vietnam: Save Up to 70% in Hanoi</h1>
    ```

### C14 — Heading Hierarchy (Thứ tự tiêu đề) (5đ)
*   **Định nghĩa:** Cấu trúc tiêu đề phân cấp chuẩn mực: H1 $\rightarrow$ H2 $\rightarrow$ H3 $\rightarrow$ H4. Tuyệt đối không nhảy cóc cấp độ (ví dụ: dùng H2 rồi nhảy thẳng sang H4 mà bỏ qua H3).
*   **Cách triển khai:**
    ```markdown
    # H1: Title
      ## H2: Section 1
        ### H3: Sub-section A
      ## H2: Section 2
    ```

### C15 — Độ sâu nội dung (Content Depth) (5đ)
*   **Định nghĩa:** Độ dài từ vựng phải phù hợp với loại trang: trang dịch vụ chuyên sâu cần **800–2000 từ**; bài cẩm nang/tin tức chuyên sâu cần **1500–3000 từ**. Các trang quá ngắn (dưới 200 từ) sẽ bị đánh giá là nội dung nghèo nàn (Thin Content).

### C16 — Readability (Dễ đọc, dễ hiểu) (5đ)
*   **Định nghĩa:** Độ dài câu trung bình nên từ **15–20 từ**. Hạn chế dùng câu phức chứa nhiều vế phụ. Nên tách các câu dài (trên 30 từ) thành các câu đơn ngắn gọn để AI dễ phân tích dữ liệu.

### C17 — Định dạng Lists & Tables (3đ)
*   **Định nghĩa:** Sử dụng tối đa thẻ danh sách (`<ul>`, `<ol>`) và bảng biểu (`<table>`) để hệ thống hóa thông tin.
*   **Tại sao quan trọng:** AI Search cực kỳ ưu tiên trích xuất các thông tin có cấu trúc bảng biểu hoặc danh sách gạch đầu dòng để hiển thị trực tiếp cho người dùng.

---

## 🗂️ NHÓM 2: SCHEMA JSON-LD (3 TIÊU CHÍ - 30 ĐIỂM)
*Giúp máy tìm kiếm và các AI Agent hiểu chính xác bản chất trang web của bạn là gì (Bài viết, Dịch vụ hay Hỏi đáp).*

### C4 — Tích hợp JSON-LD chuẩn xác (10đ)
*   **Định nghĩa:** Khai báo cấu trúc Schema bằng thẻ script JSON-LD phù hợp với nội dung.
*   **Cách triển khai:**
    ```html
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Dental NKT Clinic",
      "telephone": "+84963333844"
    }
    </script>
    ```

### C5 — Schema phải khớp 100% nội dung DOM (10đ)
*   **Định nghĩa:** Mọi dữ liệu khai báo trong schema (đặc biệt là các câu hỏi và câu trả lời trong `FAQPage`) phải có văn bản tương ứng hiển thị trên giao diện người dùng (đạt chỉ số Jaccard Token Overlap $\ge$35%). Khai báo schema "khống" không có nội dung thực sẽ bị Google phạt.

### C6 — Schema hợp lệ cấu trúc (10đ)
*   **Định nghĩa:** Cấu trúc Schema không được thiếu các trường bắt buộc (Required properties) theo quy định của Google và Schema.org (như `headline`, `datePublished` đối với Article).

---

## 🔗 NHÓM 3: ENTITY & LINKING (3 TIÊU CHÍ - 23 ĐIỂM)
*Xây dựng mạng lưới liên kết ngữ nghĩa giữa nội dung của bạn với bản đồ tri thức thế giới.*

### C7 — Entity Clarity (Rõ ràng thực thể) (10đ)
*   **Định nghĩa:** Định nghĩa rõ các khái niệm chuyên ngành bằng thẻ `<abbr>` khi xuất hiện lần đầu và tạo liên kết dẫn tới các trang tri thức lớn (Wikipedia, Bách khoa toàn thư) để xác định thực thể.
*   **Cách triển khai:**
    ```html
    We use advanced <abbr title="Cone Beam Computed Tomography">CBCT</abbr> diagnostics...
    ```

### C8 — Internal Link có Anchor Text mô tả (10đ)
*   **Định nghĩa:** Chèn tối thiểu 3 liên kết nội bộ trong bài viết. Anchor text (đoạn chữ chứa link) phải mô tả chính xác nội dung trang đích hướng tới.
*   **Tại sao quan trọng:** Tránh dùng các từ mơ hồ như "click here", "tại đây", "xem thêm" vì AI không thể liên kết được ngữ nghĩa của từ đó với trang đích.
*   **Ví dụ đúng:** "You can check our detailed [dental implant price list](/dental-costs) to plan your trip."

### C26 — Liên kết ngoài chất lượng cao (Outbound Link) (3đ)
*   **Định nghĩa:** Chèn từ **1–3 liên kết ngoài** dẫn tới các trang web có độ uy tín cực cao (tên miền .gov, .edu, .org, Wikipedia) để chứng thực thông tin chuyên môn.
*   **Ví dụ:** Dẫn nguồn thông tin y tế về nha khoa từ trang chủ của [Australian Dental Association (ADA)](https://www.ada.org.au).

---

## ⚙️ NHÓM 4: TECHNICAL SEO (8 TIÊU CHÍ - 34 ĐIỂM)
*Các tiêu chuẩn kỹ thuật giúp bot dễ dàng thu thập và tối ưu thông tin hiển thị.*

### C11 — Title Tag (Thẻ tiêu đề) (5đ)
*   **Định nghĩa:** Độ dài từ **30–60 ký tự**. Từ khóa chính đứng ở đầu, tên thương hiệu đứng ở cuối, phân tách bằng dấu gạch đứng `|` hoặc gạch ngang `-`.

### C12 — Meta Description (Mô tả trang) (5đ)
*   **Định nghĩa:** Độ dài từ **120–160 ký tự**. Phải tóm tắt ngắn gọn giá trị cốt lõi của trang và có câu kêu gọi hành động (CTA).

### C18 — Trust Signals (Tín hiệu uy tín) (5đ)
*   **Định nghĩa:** Đảm bảo 5 yếu tố kỹ thuật bắt buộc: Giao thức HTTPS bảo mật, khai báo `<html lang>`, thẻ meta viewport tương thích di động, thẻ canonical chống trùng lặp URL và thẻ robots cho phép lập chỉ mục (`index, follow`).

### C19 — Open Graph / Social Meta (5đ)
*   **Định nghĩa:** Khai báo đủ 5 thẻ mạng xã hội bắt buộc: `og:title`, `og:description`, `og:image`, `og:url` và `og:type` để hiển thị đẹp mắt khi chia sẻ link.

### C23 — Robots.txt & Sitemap (5đ)
*   **Định nghĩa:** Tệp `/robots.txt` phải khai báo đường dẫn tới sitemap; tệp `/sitemap.xml` phải tồn tại và chứa cấu trúc XML hợp lệ.

### C24 — File llms.txt (Tiêu chuẩn AI Discovery mới) (3đ)
*   **Định nghĩa:** Tạo một file văn bản thô dạng markdown đặt tại `/public/llms.txt`. File này chứa thông tin tóm tắt cấu trúc website và các liên kết dịch vụ cốt lõi dành riêng cho các AI Bot quét nhanh.
*   **Cách triển khai mẫu:**
    ```markdown
    # Dental NKT Clinic
    - Location: Hanoi, Vietnam
    - Website: https://nhakhoatre.vn
    - Email: cskh.nhakhoatre@gmail.com
    ```

### C25 — Thẻ Hreflang đa ngôn ngữ (3đ)
*   **Định nghĩa:** Đối với các site đa ngôn ngữ, bắt buộc phải dùng thẻ `<link rel="alternate" hreflang="...">` để khai báo các phiên bản ngôn ngữ khác nhau của cùng một bài viết cho Google. (Đối với site đơn ngữ thì tiêu chí này được miễn trừ).

### C27 — Cấu trúc đường dẫn URL (3đ)
*   **Định nghĩa:** URL dài dưới 100 ký tự, ngắn gọn (chỉ nên từ 3-5 cấp), viết hoàn toàn bằng chữ thường (lowercase), sử dụng dấu gạch ngang `-` để phân tách từ (tuyệt đối không dùng dấu gạch dưới `_`).

---

## 🎬 NHÓM 5: MEDIA & PERFORMANCE (6 TIÊU CHÍ - 45 ĐIỂM)
*Tối ưu hóa trải nghiệm người dùng, tốc độ tải trang và độ chân thực của thông tin.*

### C9 — Alt Text cho Hình ảnh (5đ)
*   **Định nghĩa:** Mọi hình ảnh minh họa đều phải có thuộc tính `alt` mô tả chính xác nội dung bức ảnh (có chứa từ khóa tự nhiên). Đối với các ảnh chỉ có tác dụng trang trí (decorative), bắt buộc khai báo `alt=""` kèm thuộc tính `role="presentation"`.

### C10 — Tác giả & Chứng thực E-E-A-T (15đ)
*   **Định nghĩa:** Hiển thị rõ ràng tên tác giả (bác sĩ chuyên môn) viết bài trong DOM. Sử dụng Schema tác giả dạng `@type: Person` kết nối tới trang thông tin của bác sĩ nhằm chứng thực tính chuyên môn lâm sàng.

### C20 — Tần suất cập nhật (Freshness) (7đ)
*   **Định nghĩa:** Cập nhật bài viết định kỳ và khai báo thuộc tính `dateModified` trong schema. Bài viết được cập nhật dưới 90 ngày sẽ được chấm điểm tối đa từ các AI Engine.

### C21 — Core Web Vitals (Tốc độ trang) (10đ)
*   **Định nghĩa:** Trang web phải đạt tiêu chuẩn xanh của Google: LCP < 2.5s (Thời gian tải phần tử lớn nhất), CLS < 0.1 (Độ giật màn hình khi load) và INP < 200ms (Độ trễ tương tác đầu tiên).

### C22 — Tối ưu hóa Ảnh (Image Optimization) (5đ)
*   **Định nghĩa:** Sử dụng định dạng ảnh thế hệ mới (WebP, AVIF) thay vì JPG/PNG; cấu hình tính năng lazy loading cho các ảnh nằm phía dưới màn hình cuộn; luôn khai báo trước chiều rộng (`width`) và chiều cao (`height`) của ảnh để tránh giật CLS.

### C28 — Đa dạng phương tiện truyền thông (Multimedia Richness) (3đ)
*   **Định nghĩa:** Ngoài văn bản, trang web nên tích hợp thêm video, audio hoặc mô hình tương tác 3D. Đặc biệt, đối với video/audio, bắt buộc phải có phần **văn bản mô tả (transcript)** đi kèm (tối thiểu 200 từ) để AI có thể đọc hiểu nội dung video của bạn.
