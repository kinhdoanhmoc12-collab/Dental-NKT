"use client";

import React, { useEffect, useState } from "react";
import { BookOpen, Plus, Edit2, Trash2, Save, X, RefreshCw, Sparkles, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { apiFetch } from "../../../lib/api";
import { BlogPost } from "../../../types/crm";

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);

  // Form Fields
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("guide");
  const [readTime, setReadTime] = useState("5 min");
  const [titleEN, setTitleEN] = useState("");
  const [titleVN, setTitleVN] = useState("");
  const [excerptEN, setExcerptEN] = useState("");
  const [excerptVN, setExcerptVN] = useState("");
  const [contentEN, setContentEN] = useState("");
  const [contentVN, setContentVN] = useState("");
  const [saving, setSaving] = useState(false);
  const [translating, setTranslating] = useState(false);

  // SEO Helper States
  const [primaryKeyword, setPrimaryKeyword] = useState("");
  const [analyzerLang, setAnalyzerLang] = useState<"VN" | "EN">("VN");

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    setLoading(true);
    try {
      const res = await apiFetch("/blog");
      if (res.success) {
        setPosts(res.data || []);
      }
    } catch (err) {
      console.error("Failed to load blog posts", err);
    } finally {
      setLoading(false);
    }
  }

  const handleEdit = (post: BlogPost) => {
    setCurrentPost(post);
    setSlug(post.slug);
    setCategory(post.category);
    setReadTime(post.readTime);
    setTitleEN(post.titleEN);
    setTitleVN(post.titleVN);
    setExcerptEN(post.excerptEN);
    setExcerptVN(post.excerptVN);
    setContentEN(post.contentEN || "");
    setContentVN(post.contentVN || "");
    setPrimaryKeyword(post.slug.split("-").join(" ")); // Prepopulate guess keyword from slug
    setIsEditing(true);
  };

  const handleAddNew = () => {
    setCurrentPost(null);
    setSlug("");
    setCategory("guide");
    setReadTime("5 min");
    setTitleEN("");
    setTitleVN("");
    setExcerptEN("");
    setExcerptVN("");
    setContentEN("");
    setContentVN("");
    setPrimaryKeyword("");
    setIsEditing(true);
  };

  const handleAutoTranslate = async () => {
    if (!titleEN && !excerptEN && !contentEN) {
      alert("Vui lòng điền nội dung Tiếng Anh trước khi dịch.");
      return;
    }
    setTranslating(true);
    try {
      // 1. Translate Title
      if (titleEN) {
        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: titleEN, from: "en", to: "vi" }),
        });
        const data = await res.json();
        if (data.success) setTitleVN(data.data);
      }

      // 2. Translate Excerpt
      if (excerptEN) {
        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: excerptEN, from: "en", to: "vi" }),
        });
        const data = await res.json();
        if (data.success) setExcerptVN(data.data);
      }

      // 3. Translate Content
      if (contentEN) {
        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: contentEN, from: "en", to: "vi" }),
        });
        const data = await res.json();
        if (data.success) setContentVN(data.data);
      }

      alert("Dịch tự động sang Tiếng Việt thành công!");
    } catch (err) {
      console.error(err);
      alert("Dịch tự động thất bại, vui lòng thử lại.");
    } finally {
      setTranslating(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa bài viết này không?")) return;

    try {
      const res = await apiFetch(`/blog/${id}`, {
        method: "DELETE",
      });
      if (res.success) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
      }
    } catch (err) {
      console.error(err);
      alert("Xóa bài viết thất bại.");
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const payload = {
      slug,
      category,
      date: new Date().toISOString().split("T")[0],
      readTime,
      titleEN,
      titleVN: titleVN || titleEN,
      excerptEN,
      excerptVN: excerptVN || excerptEN,
      contentEN,
      contentVN: contentVN || contentEN,
    };

    try {
      let res;
      if (currentPost) {
        // Update
        res = await apiFetch(`/blog/${currentPost.id}`, {
          method: "PUT",
          body: JSON.stringify(payload),
        });
      } else {
        // Create
        res = await apiFetch("/blog", {
          method: "POST",
          body: JSON.stringify(payload),
        });
      }

      if (res.success) {
        loadPosts();
        setIsEditing(false);
      }
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Lưu bài viết thất bại.");
    } finally {
      setSaving(false);
    }
  };

  // SEO Template Generation
  const handleGenerateTemplate = (lang: "VN" | "EN") => {
    if (!primaryKeyword) {
      alert("Vui lòng nhập từ khóa chính để tạo mẫu!");
      return;
    }
    const cleanSlug = slug || primaryKeyword.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    if (!slug) {
      setSlug(cleanSlug);
    }

    if (lang === "VN") {
      setTitleVN(`10 Lợi ích của việc điều trị ${primaryKeyword} năm 2026`);
      setExcerptVN(`10 lợi ích vượt trội về ${primaryKeyword} an toàn, giảm ê buốt và hồi phục nhanh giúp bạn có nụ cười tự tin. Bác sĩ của DentalNTK hướng dẫn chi tiết cách chọn quy trình chuẩn y khoa mà không cần lo lắng.`);
      setContentVN(`<div class="article-container">

    <!-- ========== SAPO ========== -->
    <p class="sapo-paragraph">
        10 lợi ích quan trọng về <a href="https://phamthiquynhtrang.com/${cleanSlug}" class="link-highlight">${primaryKeyword}</a>, an toàn sinh học và thẩm mỹ tối ưu giúp bạn hồi phục nụ cười tự nhiên. Bác sĩ DentalNTK sẽ hướng dẫn chi tiết từng bước giúp bạn hiểu rõ quy trình mà không cần nhịn ăn hay lo lắng. Dinh dưỡng nha khoa, phục hồi răng, nha khoa thẩm mỹ.
    </p>

    <!-- ========== MỞ BÀI ========== -->
    <p>Bạn đang phân vân không biết có nên thực hiện điều trị nha khoa này không?</p>
    <p>Trong cẩm nang này, bác sĩ sẽ chia sẻ chi tiết toàn bộ khía cạnh y khoa giúp bạn đưa ra lựa chọn đúng đắn.</p>

    <!-- ========== H2 ĐẦU TIÊN: GIẢI QUYẾT INTENT CHÍNH ========== -->
    <h2 id="section1" class="heading-h2">Tại sao bạn cần điều trị ${primaryKeyword} ngay hôm nay?</h2>

    <div class="quote-box">
        <div class="quote-border">
            <p class="quote-text">
                Điều trị nha khoa đúng cách giúp ngăn ngừa 95% biến chứng tiêu xương răng và phục hồi 100% chức năng ăn nhai trong 7 ngày. Việc can thiệp sớm giảm tối đa chi phí phát sinh và đảm bảo an toàn sinh học cho toàn bộ cung hàm.
            </p>
        </div>
    </div>

    <p>Khi tiến hành điều trị, việc lựa chọn vật liệu sinh học tương thích là <strong><a href="https://phamthiquynhtrang.com/nha-khoa" class="link-content">chìa khóa phục hồi nhanh</a></strong> của bệnh nhân.</p>
    <p>Ví dụ thực tế từ các ca lâm sàng của phòng khám cho thấy tốc độ lành thương nhanh hơn 30% khi áp dụng công nghệ số.</p>

    <!-- H3 con của H2 đầu tiên -->
    <h3 class="heading-h3">Quy trình điều trị có gây ê buốt nhiều hay không?</h3>
    <p>Cảm giác ê buốt hoàn toàn được kiểm soát nhờ công nghệ gây tê tại chỗ tiên tiến.</p>
    <p>Nhờ áp dụng thiết bị siêu âm giảm rung chấn, bệnh nhân hầu như cảm thấy dễ chịu trong suốt thời gian nằm ghế nha.</p>

    <!-- ========== H2 THỨ 2 ========== -->
    <h2 id="section2" class="heading-h2">Những bước chuẩn bị y khoa quan trọng là gì?</h2>
    
    <div class="quote-box">
        <div class="quote-border">
            <p class="quote-text">
                Bệnh nhân cần chụp phim toàn cảnh Panorama để khảo sát cấu trúc xương và làm các xét nghiệm máu cơ bản trước khi tiến hành can thiệp lâm sàng nhằm hạn chế 100% rủi ro ngoài ý muốn.
            </p>
        </div>
    </div>

    <p>Để biết thêm về chi phí dịch vụ, bạn nên tham khảo <strong><a href="https://phamthiquynhtrang.com/bang-gia" class="link-content">bảng giá nha khoa quốc tế</a></strong> được niêm yết minh bạch.</p>

    <!-- ========== BẢNG DỮ LIỆU ========== -->
    <div class="table-wrapper">
        <table class="data-table">
            <thead>
                <tr class="table-header">
                    <th class="table-th" style="width: 30%;">Phương pháp</th>
                    <th class="table-th" style="width: 35%;">Ưu điểm nổi bật</th>
                    <th class="table-th" style="width: 35%;">Thời gian lành thương</th>
                </tr>
            </thead>
            <tbody>
                <tr class="row-bg-white">
                    <td class="table-td">Công nghệ thường</td>
                    <td class="table-td">Chi phí tối ưu</td>
                    <td class="table-td">10 đến 14 ngày</td>
                </tr>
                <tr class="row-bg-light">
                    <td class="table-td">Công nghệ kỹ thuật số</td>
                    <td class="table-td">Lành thương siêu tốc</td>
                    <td class="table-td">3 đến 5 ngày</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- ========== H2 FAQ ========== -->
    <h2 id="faq" class="heading-h2">Câu hỏi thường gặp về ${primaryKeyword}?</h2>

    <h3 class="heading-h3">Thời gian duy trì kết quả điều trị kéo dài bao lâu?</h3>
    <p>Độ bền dao động từ 15 đến 25 năm tùy thuộc vào thói quen chăm sóc răng miệng và loại vật liệu bạn lựa chọn sử dụng.</p>

    <h3 class="heading-h3">Sau khi làm răng cần ăn kiêng những gì?</h3>
    <p>Bạn chỉ nên kiêng ăn các đồ ăn quá cứng, quá nóng hoặc quá lạnh trong 24 giờ đầu tiên để đảm bảo vật liệu liên kết vững chắc.</p>

    <!-- ========== KẾT BÀI ========== -->
    <p class="footer-note">
        Tóm lại, điều trị đúng phác đồ kỹ thuật số giúp bạn bảo vệ sức khỏe răng miệng lâu dài. Bác sĩ hy vọng bài viết cẩm nang này sẽ đem lại nhiều kiến thức hữu ích. Khám phá thêm tại phamthiquynhtrang.com.
    </p>

</div>`);
    } else {
      setTitleEN(`10 Benefits of Getting ${primaryKeyword} Treatment in 2026`);
      setExcerptEN(`10 key advantages of ${primaryKeyword} safe procedures, minimized discomfort, and fast recovery to restore your smile. Guide by expert doctor Anna Trang.`);
      setContentEN(`<div class="article-container">

    <!-- ========== SAPO ========== -->
    <p class="sapo-paragraph">
        10 primary clinical benefits of <a href="https://phamthiquynhtrang.com/${cleanSlug}" class="link-highlight">${primaryKeyword}</a>, biocompatibility, and aesthetic outcomes to restore your natural smile. Doctor Anna Trang will guide you step-by-step to get ideal results without discomfort. Dental care, oral rehabilitation, cosmetic dentistry.
    </p>

    <!-- ========== INTRODUCTION ========== -->
    <p>Are you considering this specific dental procedure but feeling unsure about the journey?</p>
    <p>In this clinical guide, our chief specialists will walk you through the essential facts to make an informed choice.</p>

    <!-- ========== H2: MAIN INTENT ========== -->
    <h2 id="section1" class="heading-h2">Why should you consider ${primaryKeyword} treatment today?</h2>

    <div class="quote-box">
        <div class="quote-border">
            <p class="quote-text">
                Appropriate dental treatment prevents bone loss in 95% of clinical cases and restores 100% masticatory function within 7 days. Early intervention minimizes total costs and guarantees biometric stability of your jaw arch.
            </p>
        </div>
    </div>

    <p>When undergoing treatment, selecting high-grade materials is the <strong><a href="https://phamthiquynhtrang.com/services" class="link-content">clinical foundation for recovery</a></strong>.</p>
    <p>Clinical observations show that healing speed increases by 30% when digital dental techniques are applied.</p>

    <!-- H3 con -->
    <h3 class="heading-h3">Is the treatment procedure painful?</h3>
    <p>Pain is fully managed using advanced computerized local anesthesia.</p>
    <p>By employing ultrasonic surgical tools, patients experience maximum comfort while sitting in the dental chair.</p>

    <!-- ========== H2 THỨ 2 ========== -->
    <h2 id="section2" class="heading-h2">What are the necessary preparation steps?</h2>
    
    <div class="quote-box">
        <div class="quote-border">
            <p class="quote-text">
                Patients require a full digital panoramic X-ray to examine bone structure and basic blood tests before active surgery to reduce clinical risks.
            </p>
        </div>
    </div>

    <p>To understand treatment pricing options, view the <strong><a href="https://phamthiquynhtrang.com/pricing" class="link-content">international dental pricing table</a></strong> online.</p>

    <!-- ========== BẢNG DỮ LIỆU ========== -->
    <div class="table-wrapper">
        <table class="data-table">
            <thead>
                <tr class="table-header">
                    <th class="table-th" style="width: 30%;">Method</th>
                    <th class="table-th" style="width: 35%;">Key Advantage</th>
                    <th class="table-th" style="width: 35%;">Recovery Time</th>
                </tr>
            </thead>
            <tbody>
                <tr class="row-bg-white">
                    <td class="table-td">Traditional Protocol</td>
                    <td class="table-td">Economical option</td>
                    <td class="table-td">10 to 14 days</td>
                </tr>
                <tr class="row-bg-light">
                    <td class="table-td">Fully Digital Protocol</td>
                    <td class="table-td">Super-fast bone healing</td>
                    <td class="table-td">3 to 5 days</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- ========== H2 FAQ ========== -->
    <h2 id="faq" class="heading-h2">Frequently asked questions about ${primaryKeyword}?</h2>

    <h3 class="heading-h3">How long does the restoration last?</h3>
    <p>The lifetime ranges from 15 to 25 years depending on personal oral hygiene and materials chosen.</p>

    <h3 class="heading-h3">What diet is required after surgery?</h3>
    <p>You should avoid hard, hot, or cold foods for the first 24 hours to secure proper bonding.</p>

    <!-- ========== KẾT BÀI ========== -->
    <p class="footer-note">
        In summary, digital dental treatment preserves your oral health long-term. We hope this clinical guide brings helpful facts. Learn more at phamthiquynhtrang.com.
    </p>

</div>`);
    }
  };

  // Live SEO Analyzer
  const runSeoCheck = (lang: "VN" | "EN") => {
    const title = lang === "VN" ? titleVN : titleEN;
    const excerpt = lang === "VN" ? excerptVN : excerptEN;
    const content = lang === "VN" ? contentVN : contentEN;
    const keyword = primaryKeyword.trim().toLowerCase();

    if (!keyword) {
      return [{ id: "no-keyword", label: "Vui lòng nhập từ khóa chính để phân tích", passed: false, status: "warning" as const }];
    }

    const checks: { id: string; label: string; passed: boolean; status: "success" | "warning" | "error"; msg?: string }[] = [];

    // 1. Keyword in H1 Title
    const titleHasKeyword = title.toLowerCase().includes(keyword);
    checks.push({
      id: "title-keyword",
      label: "Từ khóa chính xuất hiện trong tiêu đề",
      passed: titleHasKeyword,
      status: titleHasKeyword ? "success" : "error",
      msg: titleHasKeyword ? "" : `Tiêu đề nên chứa từ khóa '${primaryKeyword}'`,
    });

    // 2. Title Word Count
    const titleWords = title.trim().split(/\s+/).filter(Boolean).length;
    const titleLenOk = titleWords >= 6 && titleWords <= 12;
    checks.push({
      id: "title-length",
      label: `Độ dài tiêu đề tốt (6-12 từ, hiện tại: ${titleWords} từ)`,
      passed: titleLenOk,
      status: titleLenOk ? "success" : "warning",
      msg: titleLenOk ? "" : "Tiêu đề lý tưởng là từ 6-9 từ",
    });

    // 3. Keyword in Sapo
    const excerptHasKeyword = excerpt.toLowerCase().includes(keyword);
    checks.push({
      id: "sapo-keyword",
      label: "Từ khóa chính xuất hiện trong Sapo",
      passed: excerptHasKeyword,
      status: excerptHasKeyword ? "success" : "error",
      msg: excerptHasKeyword ? "" : `Sapo cần chứa từ khóa '${primaryKeyword}'`,
    });

    // 4. Keyword in first 60 chars of Sapo
    const first60HasKeyword = excerpt.slice(0, 60).toLowerCase().includes(keyword);
    checks.push({
      id: "sapo-first60",
      label: "Từ khóa nằm trong 60 ký tự đầu Sapo",
      passed: first60HasKeyword,
      status: first60HasKeyword ? "success" : "warning",
      msg: first60HasKeyword ? "" : "Đẩy từ khóa lên đầu Sapo giúp AI dễ nhận biết hơn",
    });

    // 5. Excerpt Length
    const metaLen = excerpt.length;
    const metaLenOk = metaLen >= 140 && metaLen <= 170;
    checks.push({
      id: "sapo-length",
      label: `Độ dài Sapo tối ưu (145-160 ký tự, hiện tại: ${metaLen})`,
      passed: metaLenOk,
      status: metaLenOk ? "success" : "warning",
      msg: metaLenOk ? "" : "Nên điều chỉnh Sapo về khoảng 145-160 ký tự",
    });

    // 6. Excerpt Brand/Author check
    const hasAuthor = excerpt.toLowerCase().includes("trang") || excerpt.toLowerCase().includes("author") || excerpt.toLowerCase().includes("bác sĩ") || excerpt.toLowerCase().includes("ntk");
    checks.push({
      id: "sapo-author",
      label: "Sapo chứa tên thương hiệu hoặc tác giả",
      passed: hasAuthor,
      status: hasAuthor ? "success" : "warning",
      msg: hasAuthor ? "" : "Nên chèn tác giả (e.g. Bác sĩ/Anna) tăng E-E-A-T",
    });

    // 7. Word Count
    const contentWords = content.trim().split(/\s+/).filter(Boolean).length;
    const contentLenOk = contentWords >= 1500; // Allow 1500+ for flexible writing, though target is 2200-4000
    checks.push({
      id: "content-length",
      label: `Bài viết chuyên sâu (Tối thiểu 1500 từ, hiện tại: ${contentWords} từ)`,
      passed: contentLenOk,
      status: contentLenOk ? "success" : "warning",
      msg: contentLenOk ? "" : "Nên triển khai nội dung chi tiết hơn (đích: 2200-4000 từ)",
    });

    // 8. Banned Characters
    const hasExclamation = content.includes("!");
    const hasDoubleQuotes = content.includes('"') || content.includes('“') || content.includes('”');
    const hasMarkdownBold = content.includes("**");
    checks.push({
      id: "banned-chars",
      label: "Không có ký tự cấm (!, ngoặc kép, bold markdown **)",
      passed: !hasExclamation && !hasDoubleQuotes && !hasMarkdownBold,
      status: (!hasExclamation && !hasDoubleQuotes && !hasMarkdownBold) ? "success" : "error",
      msg: [
        hasExclamation && "Xóa dấu chấm than '!'.",
        hasDoubleQuotes && "Xóa ngoặc kép '\"', dùng ngoặc đơn.",
        hasMarkdownBold && "Xóa markdown bold '**', dùng thẻ <strong>."
      ].filter(Boolean).join(" "),
    });

    // 9. Banned Words
    const banned = ["cam kết", "100%", "tuyệt đối", "đảm bảo", "thần tốc", "siêu hiệu quả", "vô cùng", "cực kỳ", "chào bạn", "xin chào", "hello", "bất ngờ", "tiết lộ"];
    const foundBanned = banned.filter(w => content.toLowerCase().includes(w));
    checks.push({
      id: "banned-words",
      label: "Không sử dụng từ ngữ bị cấm (cam kết, 100%, tuyệt đối...)",
      passed: foundBanned.length === 0,
      status: foundBanned.length === 0 ? "success" : "error",
      msg: foundBanned.length === 0 ? "" : `Từ cấm được tìm thấy: ${foundBanned.join(", ")}`,
    });

    // 10. Headings as questions
    const headings = content.match(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi) || [];
    const allQuestions = headings.every(h => h.includes("?"));
    checks.push({
      id: "headings-q",
      label: "Tất cả headings H2, H3 là câu hỏi (?)",
      passed: headings.length > 0 && allQuestions,
      status: (headings.length > 0 && allQuestions) ? "success" : "warning",
      msg: allQuestions ? "" : "Thêm dấu hỏi '?' vào cuối tất cả H2, H3",
    });

    // 11. Quote-box presence
    const hasQuoteBox = content.includes("quote-box");
    checks.push({
      id: "quote-box",
      label: "Có Quote-box Featured Snippet",
      passed: hasQuoteBox,
      status: hasQuoteBox ? "success" : "warning",
      msg: hasQuoteBox ? "" : "Bổ sung <div class='quote-box'> sau các H2",
    });

    // 12. Internal Links Count
    const links = content.match(/<a\s+[^>]*href=[^>]*>/gi) || [];
    const linksOk = links.length >= 8;
    checks.push({
      id: "links-count",
      label: `Số lượng internal links (Tối thiểu 8 links, hiện tại: ${links.length})`,
      passed: linksOk,
      status: linksOk ? "success" : "warning",
      msg: linksOk ? "" : "Bổ sung thêm links liên kết",
    });

    // 13. Strong Links check
    const hasStrongLink = content.includes("<strong><a") || content.includes("<b><a") || content.includes("<a href[^>]*><strong>") || /<strong>\s*<a/i.test(content) || /<a[^>]*>\s*<strong>/i.test(content);
    checks.push({
      id: "strong-links",
      label: "Có internal links được in đậm (strong/bold)",
      passed: hasStrongLink,
      status: hasStrongLink ? "success" : "warning",
      msg: hasStrongLink ? "" : "Cần bôi đậm (strong) liên kết để AI dễ quét",
    });

    return checks;
  };

  const currentSeoResults = runSeoCheck(analyzerLang);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-slate-100 pb-4">
        <div>
          <h1 className="font-serif text-3xl font-extrabold text-[#0b1e2c]">Quản lý Blog Cẩm nang</h1>
          <p className="text-sm text-slate-500 font-light">Viết bài viết hướng dẫn lâm sàng và cẩm nang du lịch nha khoa bằng 2 ngôn ngữ.</p>
        </div>
        {!isEditing && (
          <button
            onClick={handleAddNew}
            className="flex items-center gap-2 px-5 py-3 bg-teal-brand hover:bg-teal-brand-hover text-white rounded-xl text-xs font-bold shadow-md cursor-pointer transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Viết bài mới</span>
          </button>
        )}
      </div>

      {isEditing ? (
        /* Edit Form */
        <form onSubmit={handleSave} className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <h3 className="font-serif font-bold text-lg text-[#0b1e2c]">
              {currentPost ? "Chỉnh sửa bài viết" : "Viết bài viết mới"}
            </h3>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="p-2 hover:bg-slate-100 rounded-xl text-slate-500 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* URL & Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Đường dẫn tĩnh (Slug)</label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="vd: cam-nang-cam-implant-hanoi"
                className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-brand rounded-xl py-2.5 px-4 text-xs transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Danh mục</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-brand rounded-xl py-2.5 px-4 text-xs transition-colors cursor-pointer"
              >
                <option value="guide">Travel Guide (Du lịch)</option>
                <option value="implants">Implant (Cấy ghép)</option>
                <option value="veneers">Veneers (Răng sứ)</option>
                <option value="warranty">Warranty (Bảo hành)</option>
              </select>
            </div>
          </div>

          {/* SEO helper config */}
          <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-teal-brand" />
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Từ khóa chính (SEO Primary Keyword)
                  </label>
                </div>
                <input
                  type="text"
                  value={primaryKeyword}
                  onChange={(e) => setPrimaryKeyword(e.target.value)}
                  placeholder="Nhập từ khóa chính để phân tích (vd: răng khôn, implant)"
                  className="w-full bg-white border border-slate-200 focus:outline-none focus:border-teal-brand rounded-xl py-2.5 px-4 text-xs transition-colors"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleGenerateTemplate("VN")}
                  className="px-4 py-2.5 bg-teal-brand/10 hover:bg-teal-brand text-teal-brand hover:text-white rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer"
                >
                  Tạo Mẫu SEO VN
                </button>
                <button
                  type="button"
                  onClick={() => handleGenerateTemplate("EN")}
                  className="px-4 py-2.5 bg-slate-200 hover:bg-[#0b1e2c] text-[#0b1e2c] hover:text-white rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer"
                >
                  Tạo Mẫu SEO EN
                </button>
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Editor and SEO panel Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 8 columns: Editor Form */}
            <div className="lg:col-span-8 space-y-8">
              {/* Tiếng Việt */}
              <div className="space-y-5 bg-teal-brand/[0.02] border border-teal-brand/10 p-5 rounded-2xl">
                <div className="flex justify-between items-center pb-2 border-b border-teal-brand/10 mb-2">
                  <span className="text-[10px] font-bold text-teal-brand uppercase tracking-wider block">Bản Tiếng Việt (VN)</span>
                  <button
                    type="button"
                    disabled={translating}
                    onClick={handleAutoTranslate}
                    className="px-3 py-1.5 bg-teal-brand/10 hover:bg-teal-brand hover:text-white disabled:bg-slate-100 disabled:text-slate-400 text-teal-brand rounded-lg text-[10px] font-extrabold transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    {translating ? (
                      <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-current"></div>
                    ) : (
                      <span>⚡ Dịch tự động từ bản Anh (EN)</span>
                    )}
                  </button>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Tiêu đề bài viết (VN) <span className="text-slate-400 font-normal">(Không bắt buộc, tự động dùng Tiếng Anh nếu trống)</span></label>
                  <input
                    type="text"
                    value={titleVN}
                    onChange={(e) => setTitleVN(e.target.value)}
                    placeholder="Tiêu đề bằng tiếng Việt"
                    className="w-full bg-white border border-slate-200 focus:outline-none focus:border-teal-brand rounded-xl py-2.5 px-4 text-xs transition-colors font-bold"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Tóm tắt ngắn / Sapo (VN) <span className="text-slate-400 font-normal">(Không bắt buộc)</span></label>
                  <textarea
                    rows={2}
                    value={excerptVN}
                    onChange={(e) => setExcerptVN(e.target.value)}
                    placeholder="Viết tóm tắt hiển thị ở danh mục tin tức"
                    className="w-full bg-white border border-slate-200 focus:outline-none focus:border-teal-brand rounded-xl py-2.5 px-4 text-xs transition-colors resize-none font-light leading-relaxed"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Nội dung chi tiết HTML (VN) <span className="text-slate-400 font-normal">(Không bắt buộc)</span></label>
                  <textarea
                    rows={12}
                    value={contentVN}
                    onChange={(e) => setContentVN(e.target.value)}
                    placeholder="Nhập mã HTML bài viết chi tiết..."
                    className="w-full bg-white border border-slate-200 focus:outline-none focus:border-teal-brand rounded-xl py-3 px-4 text-xs font-mono transition-colors font-light leading-relaxed"
                  />
                </div>
              </div>

              {/* Tiếng Anh */}
              <div className="space-y-5 bg-slate-100/50 border border-slate-200/80 p-5 rounded-2xl">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Bản Tiếng Anh (EN)</span>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Tiêu đề bài viết (EN)</label>
                  <input
                    type="text"
                    required
                    value={titleEN}
                    onChange={(e) => setTitleEN(e.target.value)}
                    placeholder="Tiêu đề bằng tiếng Anh"
                    className="w-full bg-white border border-slate-200 focus:outline-none focus:border-teal-brand rounded-xl py-2.5 px-4 text-xs transition-colors font-bold"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Tóm tắt ngắn / Sapo (EN)</label>
                  <textarea
                    rows={2}
                    required
                    value={excerptEN}
                    onChange={(e) => setExcerptEN(e.target.value)}
                    placeholder="Viết tóm tắt bằng tiếng Anh"
                    className="w-full bg-white border border-slate-200 focus:outline-none focus:border-teal-brand rounded-xl py-2.5 px-4 text-xs transition-colors resize-none font-light leading-relaxed"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Nội dung chi tiết HTML (EN)</label>
                  <textarea
                    rows={12}
                    required
                    value={contentEN}
                    onChange={(e) => setContentEN(e.target.value)}
                    placeholder="Nhập mã HTML bài viết chi tiết bằng tiếng Anh..."
                    className="w-full bg-white border border-slate-200 focus:outline-none focus:border-teal-brand rounded-xl py-3 px-4 text-xs font-mono transition-colors font-light leading-relaxed"
                  />
                </div>
              </div>
            </div>

            {/* Right 4 columns: SEO Assistant */}
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-5 lg:sticky lg:top-6 max-h-[85vh] overflow-y-auto">
              <div className="border-b border-slate-200 pb-3 flex justify-between items-center">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">Bộ Phân Tích SEO v3.0</span>
                <select
                  value={analyzerLang}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setAnalyzerLang(e.target.value as "VN" | "EN")}
                  className="bg-white border border-slate-200 rounded-lg p-1 text-[10px] cursor-pointer font-bold text-slate-700"
                >
                  <option value="VN">Bản Việt (VN)</option>
                  <option value="EN">Bản Anh (EN)</option>
                </select>
              </div>

              {/* Live Checklist Items */}
              <div className="space-y-3.5">
                {currentSeoResults.map((check, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start text-xs border-b border-slate-100 pb-2">
                    {check.status === "success" && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    )}
                    {check.status === "warning" && (
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    )}
                    {check.status === "error" && (
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-0.5">
                      <span className={`font-semibold ${
                        check.status === "success"
                          ? "text-slate-700"
                          : check.status === "warning"
                          ? "text-slate-800"
                          : "text-rose-700"
                      }`}>
                        {check.label}
                      </span>
                      {check.msg && (
                        <p className="text-[10px] text-slate-400 font-light leading-relaxed">
                          {check.msg}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* E-E-A-T Note */}
              <div className="bg-[#0b1e2c] text-white p-4 rounded-xl space-y-1.5">
                <h4 className="text-xs font-bold text-teal-brand uppercase tracking-wide">Quy tắc E-E-A-T thời AI</h4>
                <p className="text-[10px] text-slate-300 font-light leading-relaxed">
                  Tránh viết vòng vo mở bài, hãy trả lời thẳng thắn câu hỏi trong 1-2 câu đầu heading. Sử dụng các thẻ HTML cấu trúc rõ ràng để AI quét nội dung tối ưu.
                </p>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-5 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 px-6 py-2.5 bg-teal-brand hover:bg-teal-brand-hover disabled:bg-teal-brand/50 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer transition-all"
            >
              <Save className="w-4 h-4" />
              <span>{saving ? "Đang lưu..." : "Lưu bài viết"}</span>
            </button>
          </div>
        </form>
      ) : (
        /* Blog List Panel */
        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
          {loading ? (
            <div className="py-20 flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-brand"></div>
            </div>
          ) : posts.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    <th className="py-4 px-6">Tiêu đề Việt / Anh</th>
                    <th className="py-4 px-6">Danh mục</th>
                    <th className="py-4 px-6 text-right">Hành động</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 text-xs">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 space-y-0.5 max-w-sm sm:max-w-md">
                        <div className="font-bold text-slate-800 text-sm truncate">{post.titleVN}</div>
                        <div className="text-slate-400 text-[10px] font-light truncate">{post.titleEN}</div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider">
                          {post.category}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => handleEdit(post)}
                            className="p-1.5 bg-slate-100 text-slate-600 hover:bg-teal-brand hover:text-white rounded-lg transition-colors cursor-pointer"
                            title="Chỉnh sửa bài viết"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                             onClick={() => post.id && handleDelete(post.id)}
                             className="p-1.5 bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white rounded-lg transition-colors cursor-pointer"
                             title="Xóa bài viết"
                           >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="py-16 text-center text-slate-400 font-light text-sm">
              Chưa có bài viết blog nào. Hãy nhấp vào nút Viết bài mới ở trên để bắt đầu.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
