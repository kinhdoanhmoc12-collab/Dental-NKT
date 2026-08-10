import React from "react";
import { BookOpen, Compass, Heart, ShieldCheck } from "lucide-react";

export interface BlogPost {
  slug: string;
  category: "guide" | "handbook" | "warranty";
  date: string;
  readTime: string;
  titleEN: string;
  titleVN: string;
  excerptEN: string;
  excerptVN: string;
  icon: React.ElementType;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "all-on-4-vs-all-on-6-upper-jaw",
    category: "handbook",
    date: "2026-08-10",
    readTime: "8 min",
    titleEN: "All on 4 vs All on 6 Upper Jaw: Which is Best?",
    titleVN: "All-on-4 vs All-on-6 Hàm Trên: Lựa Chọn Nào Tốt Nhất?",
    excerptEN: "Choosing between all on 4 vs all on 6 upper jaw procedures depends on bone density. Six implants offer superior biomechanical stability for soft upper jaws.",
    excerptVN: "Lựa chọn giữa All-on-4 và All-on-6 cho hàm trên phụ thuộc vào mật độ xương. 6 trụ implant mang lại sự ổn định cơ sinh học vượt trội cho xương hàm trên mềm.",
    icon: BookOpen
  },
  {
    slug: "hanoi-dental-tourism-guide",
    category: "guide",
    date: "2026-07-15",
    readTime: "8 min",
    titleEN: "Hanoi Dental Tourism Guide: How to Plan Your 2026 Trip",
    titleVN: "Cẩm nang du lịch nha khoa Hà Nội: Kế hoạch chi tiết từ A-Z năm 2026",
    excerptEN: "Planning flight routing, medical visas, accommodation near Vinhome Smart City, and typical recovery times for international patients.",
    excerptVN: "Hướng dẫn chi tiết từ việc săn vé máy bay, xin visa y tế, đặt phòng nghỉ gần Vinhome Smart City, và thời gian phục hồi tiêu chuẩn cho khách nước ngoài.",
    icon: Compass
  },
  {
    slug: "implants-vietnam-vs-australia",
    category: "handbook",
    date: "2026-07-02",
    readTime: "10 min",
    titleEN: "Dental Implants in Vietnam vs Australia: Price & Quality Analysis",
    titleVN: "Cấy ghép Implant tại Việt Nam và Úc: So sánh chi tiết về chi phí & chất lượng",
    excerptEN: "A comprehensive comparison of Nobel Biocare/Straumann protocols, showing how patients save over 65% while maintaining international safety standards.",
    excerptVN: "So sánh chi tiết về quy trình cấy ghép trụ Nobel Biocare/Straumann tiêu chuẩn quốc tế, giúp tiết kiệm hơn 65% chi phí mà vẫn đảm bảo an toàn tuyệt đối.",
    icon: Heart
  },
  {
    slug: "minimal-prep-veneers",
    category: "handbook",
    date: "2026-06-25",
    readTime: "6 min",
    titleEN: "Minimal Prep Veneers: Preserving Your Natural Tooth Enamel",
    titleVN: "Mặt dán sứ Veneer mài tối thiểu: Giải pháp bảo tồn men răng tự nhiên tối đa",
    excerptEN: "Understanding the difference between aggressive crown reductions and premium ultra-thin Emax veneers (0.3mm prep) for long-term health.",
    excerptVN: "Phân biệt sự khác nhau giữa bọc răng sứ mài nhiều răng và dán sứ Veneer Emax siêu mỏng (mài dưới 0.3mm) giúp bảo vệ tối đa sức khỏe răng gốc.",
    icon: BookOpen
  },
  {
    slug: "smilecare-global-warranty",
    category: "warranty",
    date: "2026-06-12",
    readTime: "5 min",
    titleEN: "Understanding the SmileCare Global Warranty: Safe Travels",
    titleVN: "Tìm hiểu chi tiết về chính sách Bảo hành Toàn cầu SmileCare",
    excerptEN: "How remote clinical assessments work, what is covered under our 10-year manufacturer warranty, and how to verify batch serial numbers.",
    excerptVN: "Quy trình đánh giá lâm sàng từ xa, quyền lợi được hưởng trong gói bảo hành chính hãng 10 năm và cách kiểm tra thẻ truy xuất nguồn gốc vật liệu.",
    icon: ShieldCheck
  }
];
