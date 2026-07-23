"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "../../../context/LanguageContext";
import { blogPosts, BlogPost as LocalBlogPost } from "../page";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost as CrmBlogPost } from "../../../types/crm";

export default function BlogPostDetail() {
  const { lang } = useLanguage();
  const params = useParams();
  const slug = params?.slug as string;
  const [post, setPost] = useState<CrmBlogPost | LocalBlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
    fetch(`${baseUrl}/blog/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setPost(data.data);
        } else {
          const staticPost = blogPosts.find((p) => p.slug === slug);
          setPost(staticPost || null);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        const staticPost = blogPosts.find((p) => p.slug === slug);
        setPost(staticPost || null);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto space-y-4">
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <div className="h-8 bg-slate-200 rounded w-1/3"></div>
          <div className="h-4 bg-slate-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto space-y-4">
        <h1 className="text-2xl font-serif font-bold text-[#0b1e2c]">
          {lang === "VN" ? "Không tìm thấy bài viết" : "Article Not Found"}
        </h1>
        <p className="text-xs text-slate-500 font-light">
          {lang === "VN" ? "Bài viết bạn yêu cầu không tồn tại hoặc đã bị xóa." : "The requested blog post could not be located."}
        </p>
        <Link href="/blog" className="inline-block bg-[#0b1e2c] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-teal-brand transition-colors">
          {lang === "VN" ? "Quay lại Cẩm nang" : "Back to Blog"}
        </Link>
      </div>
    );
  }

  // Articles Detail Content
  const articleContent: Record<string, { en: React.ReactNode; vn: React.ReactNode }> = {
    "hanoi-dental-tourism-guide": {
      vn: (
        <div className="space-y-6 text-base text-slate-800 font-normal leading-relaxed">
          <p>
            Hà Nội đang trở thành một trong những điểm đến hàng đầu thế giới về du lịch nha khoa nhờ chi phí điều trị tối ưu cùng chất lượng dịch vụ chuẩn quốc tế. Tuy nhiên, để có một chuyến đi suôn sẻ và đạt kết quả tốt nhất, việc lập kế hoạch chi tiết trước khi đi là cực kỳ quan trọng.
          </p>

          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] pt-4">1. Đặt lịch và Tư vấn từ xa</h3>
          <p>
            Trước khi mua vé máy bay, bạn nên hoàn tất quy trình tư vấn trực tuyến. Hãy liên hệ với bác sĩ của DentalNTK để lập phác đồ điều trị sơ bộ cùng báo giá bằng tiền tệ AUD/VND rõ ràng.
          </p>

          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] pt-4">2. Thời gian lưu trú dự kiến</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Làm mặt dán sứ Veneer (10 - 16 đơn vị):</strong> Cần thời gian từ 7 - 10 ngày. Bạn sẽ có ít nhất 2 buổi hẹn lâm sàng để mài cùi răng mỏng, chế tạo mặt sứ CAD/CAM tại lab và gắn thử trước khi gắn vĩnh viễn.</li>
            <li><strong>Cấy ghép Implant đơn lẻ:</strong> Giai đoạn cấy trụ kim loại cần 3 - 5 ngày ở Hà Nội. Sau đó 3 - 6 tháng xương hàm tích hợp, bạn sẽ quay lại khoảng 5 ngày để lắp mão răng sứ hoàn thiện.</li>
            <li><strong>Phục hình All-on-4 / All-on-6:</strong> Cần khoảng 10 - 12 ngày cho giai đoạn phẫu thuật cấy ghép và lắp hàm tạm cố định.</li>
          </ul>

          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] pt-4">3. Thủ tục Visa và Lưu trú</h3>
          <p>
            Khách du lịch từ Úc, Mỹ và Châu Âu có thể dễ dàng xin E-visa trực tuyến có thời hạn 30 ngày. Về chỗ ở, DentalNTK tọa lạc tại Vinhomes Smart City Tây Mỗ - khu đô thị sinh thái hiện đại bậc nhất phía Tây Hà Nội. Bạn có thể thuê các căn hộ dịch vụ cao cấp ngay trong phân khu, rất tiện lợi cho việc di chuyển đến phòng khám chỉ trong vài phút đi bộ.
          </p>
        </div>
      ),
      en: (
        <div className="space-y-6 text-base text-slate-800 font-normal leading-relaxed">
          <p>
            Hanoi has emerged as a premier global hub for dental tourism, combining major financial savings with world-class clinical standards. However, preparing thoroughly before you board your flight is essential to ensuring a comfortable experience and a successful clinical outcome.
          </p>

          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] pt-4">1. Remote Diagnostics First</h3>
          <p>
            Do not book your flights until you have received your provisional written case file. Send high-resolution photos of your smile and any recent OPG panoramic radiographs. Our specialists will review these to draft a tooth-by-tooth diagnosis and issue a guaranteed AUD quote.
          </p>

          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] pt-4">2. Duration of Stay Guide</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Porcelain Veneers (10 to 16 units):</strong> Plan for a 7 to 10 day stay. This gives the digital lab time to custom-mill the ceramics and allows for multiple trial-smile sessions.</li>
            <li><strong>Single Implant Placement:</strong> Requires only 3 to 5 days in Vietnam for the surgical placement of the titanium fixture. The final crown is fitted during a second 5-day trip 3 to 6 months later.</li>
            <li><strong>All-on-4 / All-on-6 Arches:</strong> Plan for 10 to 12 days to cover the implant surgery, gum recovery checkups, and the placement of the fixed temporary bite.</li>
          </ul>

          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] pt-4">3. Visas & Accommodations</h3>
          <p>
            Australian citizens can apply online for an e-visa, which typically processes in 3 to 5 business days. For lodging, our clinic is conveniently located in Vinhome Smart City, which features premium serviced apartments, grocery stores, and restaurants within short walking distance.
          </p>
        </div>
      )
    },
    "implants-vietnam-vs-australia": {
      vn: (
        <div className="space-y-6 text-base text-slate-800 font-normal leading-relaxed">
          <p>
            Cấy ghép răng Implant là giải pháp tối ưu nhất để thay thế răng đã mất. Tại Úc và các nước phương Tây, chi phí cho một răng implant đơn lẻ dao động từ $5,000 đến $8,000 AUD, khiến nhiều người không thể chi trả. Điều trị tại DentalNTK Hà Nội mở ra cơ hội phục hình chất lượng cao chỉ với một phần nhỏ chi phí.
          </p>

          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] pt-4">Tại sao có sự chênh lệch chi phí lớn như vậy?</h3>
          <p>
            Mức tiết kiệm 65 - 75% không xuất phát từ việc giảm chất lượng vật liệu hay tay nghề bác sĩ, mà phụ thuộc hoàn toàn vào chi phí vận hành phòng khám tại Việt Nam (tiền thuê mặt bằng, lương nhân viên y tế, thuế phòng khám) thấp hơn rất nhiều so với Úc.
          </p>

          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] pt-4">Tiêu chuẩn vật liệu chuẩn quốc tế</h3>
          <p>
            Chúng tôi sử dụng các dòng implant chính hãng từ Thụy Sĩ, Đức và Hoa Kỳ như <strong>Straumann (SLActive)</strong> và <strong>Nobel Biocare (TiUltra)</strong>. Bệnh nhân sẽ nhận được thẻ bảo hành chính hãng kèm mã vạch số sê-ri đăng ký toàn cầu, đảm bảo tính minh bạch và nguồn gốc xuất xứ rõ ràng.
          </p>
        </div>
      ),
      en: (
        <div className="space-y-6 text-base text-slate-800 font-normal leading-relaxed">
          <p>
            A single implant fixture, abutment, and crown in Australia frequently costs between $5,000 and $8,000 AUD. At DentalNTK in Vietnam, the exact same brands and clinical standards are available starting at under $2,300 AUD, representing a massive saving.
          </p>

          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] pt-4">Why is it so much more affordable?</h3>
          <p>
            The difference in pricing is driven entirely by clinic operating overheads. Dental rent, medical labor wages, and local tax structures in Vietnam are a fraction of those in Sydney or Melbourne. Quality is never compromised.
          </p>

          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] pt-4">Traceable Brand Standards</h3>
          <p>
            DentalNTK only uses implants from globally recognized manufacturers, including <strong>Straumann®</strong> (Switzerland) and <strong>Nobel Biocare®</strong> (USA/Sweden). Patients receive the original manufacturer serial batch sticker cards, allowing any dentist worldwide to verify the authenticity of the components.
          </p>
        </div>
      )
    },
    "minimal-prep-veneers": {
      vn: (
        <div className="space-y-6 text-base text-slate-800 font-normal leading-relaxed">
          <p>
            Khi nhắc đến làm răng thẩm mỹ, mục tiêu quan trọng nhất là tạo nên nụ cười rạng rỡ nhưng vẫn bảo tồn tối đa cấu trúc răng thật. Kỹ thuật mài răng tối thiểu (Minimal Prep) hoặc không mài răng (No-Prep) của chúng tôi giúp giảm thiểu ê buốt và bảo vệ tủy răng trọn vẹn.
          </p>

          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] pt-4">Mài tối thiểu dưới 0.3mm</h3>
          <p>
            Thay vì mài nhỏ răng thành các cọc nhọn như phương pháp làm chụp răng sứ truyền thống, mặt dán sứ Veneer Emax siêu mỏng chỉ yêu cầu xử lý một lớp men răng cực mỏng trên bề mặt (từ 0.1mm - 0.3mm), thậm chí nhiều trường hợp không cần mài (No-Prep). Điều này giúp bảo vệ men răng tự nhiên tối đa, tránh nguy cơ viêm tủy về lâu dài.
          </p>

          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] pt-4">Vật liệu sứ cao cấp Ivoclar Emax</h3>
          <p>
            Chúng tôi sử dụng bánh sứ thủy tinh lithium disilicate chính hãng <strong>Ivoclar Vivadent Emax Press</strong> nhập khẩu từ Đức/Thụy Sĩ. Dòng sứ này có độ bền chịu lực uốn lên tới 400 MPa và độ trong mờ tự nhiên hoàn hảo, không bị xỉn màu hay mài mòn theo thời gian.
          </p>
        </div>
      ),
      en: (
        <div className="space-y-6 text-base text-slate-800 font-normal leading-relaxed">
          <p>
            The hallmark of modern cosmetic dentistry is preserving natural tooth structure. Traditional crowns require grinding away 60-70% of healthy enamel, exposing the inner dentin. Ultra-thin porcelain veneers are designed to protect your biological teeth.
          </p>

          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] pt-4">Preparation Under 0.3mm</h3>
          <p>
            Minimal prep veneers involve shaving less than 0.3mm of the front enamel surface—equivalent to a contact lens thickness. For many alignment cases, we offer completely non-invasive, no-prep veneers that require zero enamel removal and keep the tooth structure intact.
          </p>

          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] pt-4">German Lithium Disilicate (Emax)</h3>
          <p>
            We exclusively craft our veneers from premium <strong>Ivoclar Vivadent Emax Press</strong> blocks. They provide high flexural strength (400 MPa) and lifelike translucent aesthetics that beautifully mimic natural tooth light reflection.
          </p>
        </div>
      )
    },
    "smilecare-global-warranty": {
      vn: (
        <div className="space-y-6 text-base text-slate-800 font-normal leading-relaxed">
          <p>
            Lo ngại lớn nhất của bệnh nhân khi đi nước ngoài làm răng là chế độ bảo hành và xử lý rủi ro khi trở về nước. Tại DentalNTK, chúng tôi xóa bỏ rào cản này bằng chính sách Bảo hành Toàn cầu SmileCare minh bạch bằng văn bản pháp lý.
          </p>

          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] pt-4">Quy trình Bảo hành rõ ràng</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Chẩn đoán từ xa qua ảnh chụp:</strong> Nếu có bất kỳ sự cố nào, bệnh nhân chỉ cần gửi ảnh chụp cận cảnh và mô tả tình trạng. Hội đồng bác sĩ sẽ phản hồi trong vòng 24 giờ.</li>
            <li><strong>Bảo hành vật liệu chính hãng:</strong> Mặt dán sứ Emax được bảo hành chính hãng 7 năm. Mão răng sứ Lava và Implant Nobel Biocare bảo hành lên tới 10 năm.</li>
            <li><strong>Hỗ trợ chi phí đi lại điều trị:</strong> Trong trường hợp phát sinh lỗi kỹ thuật từ phía lâm sàng/phòng Lab được xác nhận, chúng tôi sẽ tài trợ một phần hoặc toàn bộ chi phí vé máy bay khứ hồi để bạn quay lại Hà Nội xử lý.</li>
          </ul>
        </div>
      ),
      en: (
        <div className="space-y-6 text-base text-slate-800 font-normal leading-relaxed">
          <p>
            The biggest hesitation patients have regarding overseas dental work is follow-up accountability. Our SmileCare Global Warranty removes this barrier, providing peace of mind through a written, legally binding policy.
          </p>

          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] pt-4">How the Warranty Policy Works</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Remote Photographic Review:</strong> If you experience any discomfort or ceramic chipping, simply upload photos via our secure chat portal. Our clinical board responds within 24 hours.</li>
            <li><strong>Extended Manufacturer Cover:</strong> We offer a 7-year warranty on Emax veneers and a 10-year warranty on Straumann/Nobel Biocare implants.</li>
            <li><strong>Travel Compensation:</strong> If a clinical failure is verified, we will cover return flights and accommodation to Hanoi to complete remedial work free of charge.</li>
          </ul>
        </div>
      )
    }
  };

  const title = lang === "VN" ? post.titleVN : post.titleEN;

  return (
    <div className="pt-6 pb-12 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Back Button */}
      <div className="mb-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-teal-brand transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{lang === "VN" ? "Quay lại danh mục cẩm nang" : "Back to Blog"}</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-3 border-b border-slate-100 pb-4 mb-6">
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span className="bg-teal-brand-light text-teal-brand font-bold py-1 px-3 rounded-full uppercase tracking-wider">
            {post.category}
          </span>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.date}</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3.5xl font-serif font-extrabold text-[#0b1e2c] leading-tight">
          {title}
        </h1>
      </header>

      {/* Article Content */}
      <article className="prose max-w-none mb-10">
        {articleContent[post.slug] ? (
          lang === "VN" ? articleContent[post.slug]?.vn : articleContent[post.slug]?.en
        ) : (
          <div 
            className="space-y-6 text-base text-slate-800 font-normal leading-relaxed"
            dangerouslySetInnerHTML={{ __html: lang === "VN" ? (post as CrmBlogPost).contentVN : (post as CrmBlogPost).contentEN }}
          />
        )}
      </article>

      {/* Bottom CTA Block */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 text-center sm:text-left">
          <h4 className="font-serif text-lg font-bold text-[#0b1e2c]">
            {lang === "VN" ? "Bạn cần tư vấn chi tiết cho trường hợp của mình?" : "Need a Personalized Travel Assessment?"}
          </h4>
          <p className="text-xs text-slate-500 font-light max-w-lg">
            {lang === "VN"
              ? "Hãy liên hệ với DentalNTK để đội ngũ bác sĩ chuyên khoa phản hồi phác đồ chi tiết cùng báo giá trọn gói."
              : "Contact DentalNTK for a free review and written price quote before planning your flight."}
          </p>
        </div>
        <Link 
          href="/contact" 
          className="bg-[#0b1e2c] hover:bg-teal-brand text-white px-6 py-3 font-bold text-xs rounded-full transition-all shadow-md flex items-center gap-2 whitespace-nowrap"
        >
          <span>{lang === "VN" ? "Liên hệ tư vấn miễn phí" : "Get Free Quote"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>

    </div>
  );
}
