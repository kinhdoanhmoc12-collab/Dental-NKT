"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "../../../context/LanguageContext";
import { blogPosts, BlogPost as LocalBlogPost } from "../../../data/blogPosts";
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
        <Link href="/dental-handbook" className="inline-block bg-[#0b1e2c] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-teal-brand transition-colors">
          {lang === "VN" ? "Quay lại Cẩm nang" : "Back to Blog"}
        </Link>
      </div>
    );
  }

  // Articles Detail Content
  const articleContent: Record<string, { en: React.ReactNode; vn: React.ReactNode }> = {
    "all-on-4-vs-all-on-6-upper-jaw": {
      en: (
        <div className="space-y-6 text-base text-slate-800 font-normal leading-relaxed">
          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] pt-4">What is the biomechanical difference in upper jaw restoration?</h2>
          <div className="quote-box border-l-4 border-teal-brand bg-slate-50 p-4 my-4 rounded-r-xl">
            <p className="text-sm font-medium italic text-slate-600">The primary difference between the two configurations lies in load distribution. Six implants disperse chewing pressure much more evenly than four across the softer upper jawbone.</p>
          </div>
          <p>Australian patients often wonder why their specialist suggests six titanium posts instead of just four. The upper maxilla resembles a porous sponge (Type 3 or 4 bone) rather than dense hardwood. When you bite down, the force transfers directly to these embedded fixtures.</p>
          <p>A clinical study on occlusal forces indicates that distributing this load prevents micro-movements during the crucial osseointegration healing phase. You can read more about this scientific consensus on <a href="https://pubmed.ncbi.nlm.nih.gov/30678235/" target="_blank" rel="noopener noreferrer" className="text-teal-brand hover:underline font-bold">PubMed regarding biomechanics of implant-supported prostheses</a>. Using fewer posts in soft bone increases the risk of implant failure or prosthetic bridge fracture over time.</p>
          <p>We always assess your specific bite force and jaw dimensions before recommending a definitive treatment plan. The structural benefits of adding two extra pillars to your restoration include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Optimal anterior-posterior (A-P) spread: Creating a wider foundation for the final zirconia bridge.</li>
            <li>Reduced cantilever length: Minimising leverage stress on the posterior implants when chewing.</li>
            <li>Redundancy safety net: Higher clinical security if one implant encounters integration issues.</li>
          </ul>
          <p>Understanding these mechanics is a crucial step in your dental tourism journey. You can read more about <strong><Link href="/services/implants" className="text-teal-brand hover:underline">understanding implant biomechanics</Link></strong> in our patient library.</p>
          
          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] pt-4">Why does upper jaw bone density require more implants?</h3>
          <p>Upper jaw bone is naturally less dense and often affected by sinus cavities, requiring more anchorage points for a secure hold.</p>
          <p>The upper jaw is categorised as Type 3 or Type 4 bone in dental science. This softer architecture means titanium threads have less solid mass to grip initially compared to the dense lower mandible. Placing six fixtures maximises the total bone-to-implant contact (BIC) area, accelerating healing.</p>
          <p>It is similar to using more wall anchors when hanging a heavy shelf on plasterboard. Patients with a history of periodontal disease usually have even less bone volume available. You can learn more about <strong><Link href="/services/implants" className="text-teal-brand hover:underline">Type 3 bone density classifications</Link></strong> to understand your clinical profile.</p>
          <p className="text-center my-6">
            <img src="/images/cases/case_implant.jpg" alt="All-on-6 dental implants restoration before and after" className="max-w-full h-auto rounded-2xl mx-auto shadow-md" />
          </p>

          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] pt-4">What are the bone grafting needs for all on 4 vs all on 6 upper jaw?</h2>
          <div className="quote-box border-l-4 border-teal-brand bg-slate-50 p-4 my-4 rounded-r-xl">
            <p className="text-sm font-medium italic text-slate-600">All-on-4 implants typically bypass bone grafting via angled placement, whereas All-on-6 restorations often require sinus lifts to anchor the straight posterior posts.</p>
          </div>
          <p>Many Australians travel to Vietnam hoping to avoid invasive and costly bone grafts. The four-implant protocol was originally designed to bypass the maxillary sinus cavities entirely. By angulating the posterior implants at 45 degrees, surgeons utilise available anterior bone.</p>
          <p>However, if you opt for six implants, the posterior ones are typically placed straight down. This often requires additional bone volume in the molar regions. Patients frequently need to undergo sinus lift procedures prior to placement.</p>
          <p>According to guidelines from the <a href="https://www.ada.org.au" target="_blank" rel="noopener noreferrer" className="text-teal-brand hover:underline">Australian Dental Association (ADA)</a>, if you lack sufficient bone, adding synthetic grafting material adds healing time to your trip. Your surgeon must balance the need for extra structural strength against the desire for a graftless surgery. Some patients may even explore zygomatic implant alternatives for severe bone loss.</p>
          <p>We evaluate these grafting requirements meticulously during your initial 3D CBCT scan review.</p>

          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] pt-4">How to choose based on your anatomical scan?</h2>
          <div className="quote-box border-l-4 border-teal-brand bg-slate-50 p-4 my-4 rounded-r-xl">
            <p className="text-sm font-medium italic text-slate-600">The choice between four or six implants is decided by analyzing a 3D CBCT scan to evaluate remaining bone volume and sinus cavity proximity.</p>
          </div>
          <p>You should never feel pressured into a six-implant protocol without clear radiographic evidence. A 3D CBCT scan provides a comprehensive topographical map of your maxilla. It reveals exactly how much native bone you have left after tooth loss.</p>
          <p>Learning about reading your dental CBCT scan empowers you as a patient. If your scan shows adequate bone volume in the posterior region, six implants are an excellent option. If the sinus cavities are heavily enlarged, four implants might be safer and more predictable.</p>
          <p>We believe in transparent, evidence-based treatment planning for every international patient. Your anatomical reality dictates the optimal engineering solution for your smile. You can explore further details on understanding maxillary anatomy on our blog.</p>

          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] pt-4">Can an All-on-4 be upgraded to an All-on-6 later?</h2>
          <div className="quote-box border-l-4 border-teal-brand bg-slate-50 p-4 my-4 rounded-r-xl">
            <p className="text-sm font-medium italic text-slate-600">Upgrading from All-on-4 to All-on-6 is technically possible but financially inefficient, as it requires manufacturing a completely new bridge prosthesis.</p>
          </div>
          <p>Some patients ask if they can start with four and upgrade if issues arise in the future. While surgeons can place additional implants into the healed jawbone later on. The existing titanium framework embedded in your bridge cannot be easily altered or expanded.</p>
          <p>You must understand zirconia bridge design limitations before choosing your initial protocol. You would need to pay for a brand new final prosthesis to fit the new six-post configuration. This makes upgrading a highly inefficient financial decision for dental tourists.</p>
          <p>It is far better to get the biomechanical diagnosis right during the first surgical phase in Vietnam. We strongly recommend discussing long-term durability expectations with your specialist upfront. Proper planning ensures excellent long-term dental implant longevity without future structural upgrades.</p>

          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] pt-4">What are the long term success rates of full arch restorations?</h2>
          <div className="quote-box border-l-4 border-teal-brand bg-slate-50 p-4 my-4 rounded-r-xl">
            <p className="text-sm font-medium italic text-slate-600">Clinical data confirms ten year survival rates exceeding ninety-five percent for both configurations when paired with proper oral hygiene and regular checks.</p>
          </div>
          <p>Both All-on-4 and All-on-6 procedures demonstrate high success rates globally when performed by qualified specialists using premium materials. Clinical literature shows that implant survival rates remain exceptionally high even after ten years of functional load. However, maintaining these results requires strict adherence to post-operative hygiene protocols.</p>
          <p>At Dental NKT, we ensure that every full arch procedure is backed by premium components. We utilize titanium fixtures from leading global manufacturers to ensure optimal biocompatibility. You can check our detailed <strong><Link href="/dental-costs" className="text-teal-brand hover:underline font-bold">dental implant price list</Link></strong> to plan your treatment budget.</p>
          <p>Furthermore, our clinical team is trained in advanced European protocols to minimize the risk of peri-implantitis, which is the leading cause of late implant failure. Our specialists provide detailed care instructions to help you protect your investment. You can read more about <strong><Link href="/services/implants" className="text-teal-brand hover:underline">implant cleaning and hygiene care</Link></strong> in our patient resource section.</p>
          <p>By choosing a clinic that prioritizes sterilization and precise placement, you significantly reduce the likelihood of long-term complications. Our goal is to provide restorations that function comfortably for decades.</p>

          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] pt-4">How does digital dentistry enhance implant precision?</h2>
          <div className="quote-box border-l-4 border-teal-brand bg-slate-50 p-4 my-4 rounded-r-xl">
            <p className="text-sm font-medium italic text-slate-600">Digital dentistry enhances precision through 3D CBCT scans, intraoral scans, and custom 3D-printed surgical guides that eliminate human placement error.</p>
          </div>
          <p>In the past, dentists relied on manual measurements and stone models to plan implant placement. Today, we utilize advanced digital dentistry tools to create a precise digital twin of your oral anatomy. This virtual planning stage allows us to select the optimal implant size, angle, and position before the surgery begins.</p>
          <p>Our clinic is equipped with state-of-the-art diagnostic tools, including intraoral scanners and advanced imaging software. These technologies allow us to design custom surgical guides that direct the implant insertion with extreme accuracy. You can explore our <strong><Link href="/equipment" className="text-teal-brand hover:underline font-bold">advanced dental technology and equipment</Link></strong> page to see the tools we use.</p>
          <p>By utilizing digital workflows, we minimize surgical trauma, reduce chair time, and accelerate the overall healing process for our patients. This digital precision is especially critical when planning complex All-on-6 cases.</p>

          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] pt-4">What is the role of the medical reviewer in dental tourism?</h2>
          <div className="quote-box border-l-4 border-teal-brand bg-slate-50 p-4 my-4 rounded-r-xl">
            <p className="text-sm font-medium italic text-slate-600">Medical reviewers guarantee patient safety by auditing travel guides and clinical statements to align with international healthcare standards.</p>
          </div>
          <p>When researching dental treatments abroad, patients are often overwhelmed by conflicting information online. To combat this, we ensure that all our clinical guides are reviewed by experienced practitioners. This guarantees that the information you read is accurate, up-to-date, and aligned with international standards.</p>
          <p>Our medical content is reviewed by our lead specialists who hold advanced degrees from prestigious institutions. You can read more about <strong><Link href="/dentists" className="text-teal-brand hover:underline">our dentists and clinical specialists</Link></strong> to verify their credentials and experience. This clinical oversight is part of our commitment to transparent patient education.</p>
          <p>We believe that informed patients make better health decisions. By providing accurate medical guides, we help you navigate your dental tourism journey with confidence.</p>

          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] pt-4">How to prepare for your dental trip to Hanoi?</h2>
          <div className="quote-box border-l-4 border-teal-brand bg-slate-50 p-4 my-4 rounded-r-xl">
            <p className="text-sm font-medium italic text-slate-600">Preparing for a dental holiday requires organizing medical visas, flight dates, accommodation near the clinic, and recovery timelines in advance.</p>
          </div>
          <p>Once you have finalized your treatment plan with our specialists, the next step is to plan your travel logistics. Traveling for major dental work requires careful coordination of flights, accommodation, and recovery timelines. We recommend arriving in Hanoi at least one day before your scheduled consultation.</p>
          <p>Our patient coordinators are available to assist you with every aspect of your trip. We provide guidance on securing medical visas, booking flights, and selecting accommodations near our clinic. You can review our <strong><Link href="/dental-handbook" className="text-teal-brand hover:underline">complete dental tourism travel guide</Link></strong> to plan your stay.</p>
          <p>We also partner with local boutique hotels to offer comfortable lodging options for our international patients during their recovery. Our team is dedicated to making your dental holiday as comfortable as possible.</p>

          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] pt-4">What are the warranty terms for full mouth restorations?</h2>
          <div className="quote-box border-l-4 border-teal-brand bg-slate-50 p-4 my-4 rounded-r-xl">
            <p className="text-sm font-medium italic text-slate-600">Every restoration is backed by a global warranty covering material defects on both implant fixtures and zirconia prosthetic bridges.</p>
          </div>
          <p>We stand behind the quality of our clinical work and the materials we use. Every full arch restoration at our clinic is backed by a comprehensive warranty policy. This warranty covers both the implant fixtures and the prosthetic components against structural defects.</p>
          <p>We provide global warranty cards that allow you to verify the authenticity of your implants online. This ensures that you can access support even after returning to Australia. You can read our <strong><Link href="/warranty-policy" className="text-teal-brand hover:underline font-bold">global warranty policy and terms</Link></strong> to understand your coverage.</p>
          <p>By combining premium materials with precise surgical techniques, we deliver restorations that you can rely on for a lifetime.</p>
        </div>
      ),
      vn: (
        <div className="space-y-6 text-base text-slate-800 font-normal leading-relaxed">
          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] pt-4">Sự khác biệt về cơ sinh học trong phục hình hàm trên là gì?</h2>
          <div className="quote-box border-l-4 border-teal-brand bg-slate-50 p-4 my-4 rounded-r-xl">
            <p className="text-sm font-medium italic text-slate-600">Sự khác biệt chính giữa hai cấu hình nằm ở sự phân bổ lực nhai. 6 trụ implant phân tán lực đều hơn nhiều so với 4 trụ trên xương hàm trên mềm xốp.</p>
          </div>
          <p>Bệnh nhân Úc thường tự hỏi tại sao nha sĩ đề đề xuất 6 trụ implant thay vì chỉ 4 trụ. Xương hàm trên có cấu trúc xốp (xương Loại 3 hoặc Loại 4) giống như miếng bọt biển hơn là gỗ cứng. Khi nhai, lực sẽ truyền trực tiếp lên các trụ implant này.</p>
          <p>Một nghiên cứu về lực cắn cho thấy phân bổ lực đều giúp ngăn ngừa vi dịch chuyển trong giai đoạn tích hợp xương. Việc sử dụng ít trụ implant hơn trên nền xương mềm làm tăng nguy cơ đào thải trụ hoặc gãy cầu răng theo thời gian.</p>
          <p>Chúng tôi luôn đánh giá lực nhai và thể tích xương cụ thể của bạn trước khi đưa ra phác đồ. Lợi ích của việc thêm hai trụ chịu lực bao gồm: Nhịp cầu rộng hơn, giảm lực đòn bẩy phía sau, và có phương án dự phòng an toàn nếu một trụ gặp sự cố.</p>
          
          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] pt-4">Tại sao mật độ xương hàm trên yêu cầu nhiều trụ implant hơn?</h3>
          <p>Xương hàm trên tự nhiên mỏng hơn và thường bị ảnh hưởng bởi xoang hàm, đòi hỏi nhiều điểm neo giữ hơn để đảm bảo tính ổn định.</p>
          <p>Đặt 6 trụ giúp tối đa hóa diện tích tiếp xúc giữa xương và implant (BIC), đẩy nhanh quá trình lành thương. Điều này tương tự như việc sử dụng nhiều neo vít hơn khi treo một kệ nặng trên tường thạch cao.</p>
          <p className="text-center my-6">
            <img src="/images/cases/case_implant.jpg" alt="Phục hình răng Implant All-on-6 trước và sau" className="max-w-full h-auto rounded-2xl mx-auto shadow-md" />
          </p>

          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] pt-4">Nhu cầu ghép xương của All-on-4 vs All-on-6 hàm trên là gì?</h2>
          <div className="quote-box border-l-4 border-teal-brand bg-slate-50 p-4 my-4 rounded-r-xl">
            <p className="text-sm font-medium italic text-slate-600">All-on-4 thường tránh ghép xương bằng cách cấy nghiêng các trụ phía sau, trong khi All-on-6 thường yêu cầu nâng xoang để đặt các trụ thẳng ở vùng răng hàm.</p>
          </div>
          <p>Nhiều bệnh nhân Úc du lịch nha khoa mong muốn tránh ghép xương xâm lấn và tốn kém. Phương pháp All-on-4 ban đầu được thiết kế để đi xuyên qua và tránh các xoang hàm trên bằng cách cấy nghiêng 45 độ.</p>
          <p>Tuy nhiên, nếu chọn All-on-6, các trụ phía sau thường được đặt thẳng đứng, đòi hỏi đủ thể tích xương ở vùng răng hàm. Do đó, nâng xoang và ghép xương nhân tạo là chỉ định thường gặp, kéo dài thời gian điều trị.</p>

          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] pt-4">Làm thế nào để lựa chọn dựa trên phim chụp cấu trúc của bạn?</h2>
          <p>Bác sĩ phẫu thuật sẽ đánh giá dựa trên phim chụp CBCT 3D để đo chính xác chiều cao, chiều rộng xương và vị trí của xoang hàm.</p>
          <p>Phim CBCT 3D cung cấp bản đồ địa hình toàn diện của hàm trên của bạn. Nếu phim chụp cho thấy đủ thể tích xương ở vùng răng hàm phía sau, All-on-6 là một lựa chọn tuyệt vời. Nếu xoang hàm quá rộng và xương tiêu nhiều, All-on-4 sẽ an toàn và dễ tiên lượng hơn.</p>

          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] pt-4">All-on-4 có thể nâng cấp lên All-on-6 sau này không?</h2>
          <p>Về kỹ thuật là có thể cấy thêm trụ sau này, nhưng quy trình này rất phức tạp, tốn kém và yêu cầu chế tác lại một cầu răng sứ hoàn toàn mới.</p>
          <p>Cầu răng hiện có không thể sửa đổi hay nối thêm. Bạn sẽ phải trả tiền cho một hàm răng giả mới phù hợp với cấu hình 6 trụ mới. Vì vậy, tốt nhất là đưa ra chẩn đoán cơ sinh học chính xác ngay từ giai đoạn phẫu thuật đầu tiên tại Việt Nam.</p>
        </div>
      )
    },
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
        <Link href="/dental-handbook" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-teal-brand transition-colors">
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
