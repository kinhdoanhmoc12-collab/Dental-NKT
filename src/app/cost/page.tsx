"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { 
  Search, 
  Info, 
  ChevronDown, 
  ChevronUp 
} from "lucide-react";

interface CityData {
  rank: number;
  city: string;
  state: string;
  income: number;
  veneer: string;
  implant: string;
  allon4: string;
  data: "Verified" | "State baseline";
}

export default function CostPage() {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currency, setCurrency] = useState<"AUD" | "USD">("AUD");

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const proceduresData = [
    { id: 1, name: lang === "VN" ? "Dán Veneer răng sứ Emax Zico" : "Emax Zico porcelain veneer", au: "1,200–2,500", ntk: lang === "VN" ? "12.000.000 VNĐ" : "650", save: lang === "VN" ? "Tiết kiệm 60–65%" : "$550–1,850 AUD (~60–65%)" },
    { id: 2, name: lang === "VN" ? "Trụ HIOSSEN Mỹ" : "HIOSSEN US implant fixture", au: "2,000–4,000", ntk: lang === "VN" ? "18.000.000 VNĐ" : "975", save: lang === "VN" ? "Tiết kiệm 55–65%" : "$1,025–3,025 AUD (~55–65%)" },
    { id: 3, name: lang === "VN" ? "Thanh 3 kim loại Titan" : "Titanium 3-unit bar restoration", au: "4,000–8,000", ntk: lang === "VN" ? "36.000.000 VNĐ" : "1,950", save: lang === "VN" ? "Tiết kiệm 60–70%" : "$2,050–6,050 AUD (~60–70%)" },
    { id: 4, name: lang === "VN" ? "Phục hình trên Implant sứ Ceramil" : "Ceramil porcelain crown on implant", au: "1,500–3,000", ntk: lang === "VN" ? "9.600.000 VNĐ" : "520", save: lang === "VN" ? "Tiết kiệm 60–65%" : "$980–2,480 AUD (~60–65%)" },
    { id: 5, name: lang === "VN" ? "Chụp toàn sứ Emax Zico (Đức) răng hàm" : "Emax Zico all-ceramic molar crown", au: "1,200–2,500", ntk: lang === "VN" ? "9.600.000 VNĐ" : "520", save: lang === "VN" ? "Tiết kiệm 60–70%" : "$680–1,980 AUD (~60–70%)" },
    { id: 6, name: lang === "VN" ? "Máng trong suốt Invisalign Mỹ Mức 1 - Mức 3" : "Invisalign US clear aligners Level 1-3", au: "6,000–10,000", ntk: lang === "VN" ? "72.000.000–126.000.000 VNĐ" : "3,905–6,835", save: lang === "VN" ? "Tiết kiệm 50–75%" : "$2,095–3,165+ AUD (~50–75%)" },
    { id: 7, name: lang === "VN" ? "Tẩy trắng răng Laser Whitening (Thuốc Đức)" : "In-office Laser Whitening (German gel)", au: "500–1,500", ntk: lang === "VN" ? "3.000.000 VNĐ" : "160", save: lang === "VN" ? "Tiết kiệm 65–88%" : "$340–1,340 AUD (~65–88%)" },
    { id: 8, name: lang === "VN" ? "Điều trị tuỷ răng hàm lớn mức 1 - mức 2" : "Molar root canal treatment Level 1-2", au: "1,400–3,400", ntk: lang === "VN" ? "3.000.000–4.200.000 VNĐ" : "160–228", save: lang === "VN" ? "Tiết kiệm 75–88%" : "$1,240–3,172 AUD (~75–88%)" },
    { id: 9, name: lang === "VN" ? "Nhổ răng khôn ngầm" : "Impacted wisdom tooth extraction", au: "1,500–3,000", ntk: lang === "VN" ? "3.600.000 VNĐ" : "195", save: lang === "VN" ? "Tiết kiệm 80–85%" : "$1,305–2,805 AUD (~80–85%)" },
    { id: 10, name: lang === "VN" ? "Hàm khung kim loại Titan" : "Titanium metal framework denture", au: "2,500–5,000", ntk: lang === "VN" ? "9.600.000 VNĐ" : "520", save: lang === "VN" ? "Tiết kiệm 75–80%" : "$1,980–4,480 AUD (~75–80%)" }
  ];

  const affordabilityData = [
    { name: lang === "VN" ? "Trụ HIOSSEN Mỹ + Phục hình Everes" : "HIOSSEN implant fixture + Everes crown", au: "5,000", pctAu: "8.6%", weeksAu: "2.4 weeks", ntk: lang === "VN" ? "25.200.000 VNĐ" : "1,368", pctNtk: "2.3%" },
    { name: lang === "VN" ? "10 Dán Veneer răng sứ Emax Zico" : "10 Emax Zico porcelain veneers", au: "18,500", pctAu: "31.8%", weeksAu: "8.7 weeks", ntk: lang === "VN" ? "120.000.000 VNĐ" : "6,512", pctNtk: "11.2%" },
    { name: lang === "VN" ? "Thanh 3 kim loại Titan" : "Titanium 3-unit bar restoration", au: "8,000", pctAu: "13.7%", weeksAu: "3.8 weeks", ntk: lang === "VN" ? "36.000.000 VNĐ" : "1,954", pctNtk: "3.4%" },
    { name: lang === "VN" ? "Trụ Implant STRAUMANN Thụy Sỹ" : "STRAUMANN Swiss implant fixture", au: "7,000", pctAu: "12.0%", weeksAu: "3.3 weeks", ntk: lang === "VN" ? "66.000.000 VNĐ" : "3,582", pctNtk: "6.2%" },
    { name: lang === "VN" ? "Chụp toàn sứ Ceramil (mỗi răng)" : "Ceramil all-ceramic crown (per tooth)", au: "1,850", pctAu: "3.2%", weeksAu: "0.9 weeks", ntk: lang === "VN" ? "7.200.000 VNĐ" : "390", pctNtk: "0.7%" },
    { name: lang === "VN" ? "Điều trị tuỷ + Chụp sứ Ceramil (răng hàm)" : "Molar root canal + Ceramil crown", au: "4,000", pctAu: "6.9%", weeksAu: "1.9 weeks", ntk: lang === "VN" ? "10.200.000 VNĐ" : "553", pctNtk: "1.0%" },
    { name: lang === "VN" ? "Máng trong suốt Invisalign Mỹ Mức 1" : "Invisalign US clear aligners Level 1", au: "8,000", pctAu: "13.7%", weeksAu: "3.8 weeks", ntk: lang === "VN" ? "72.000.000 VNĐ" : "3,908", pctNtk: "6.7%" },
    { name: lang === "VN" ? "Nền hàm nhựa dẻo toàn phần" : "Full flexible resin denture base", au: "2,500", pctAu: "4.3%", weeksAu: "1.2 weeks", ntk: lang === "VN" ? "6.000.000 VNĐ" : "325", pctNtk: "0.6%" }
  ];

  const citiesData: CityData[] = [
    { rank: 1, city: "Melbourne", state: "VIC", income: 59784, veneer: "1,300–2,500", implant: "5,000–7,500", allon4: "19,900–36,000", data: "Verified" },
    { rank: 2, city: "Sydney", state: "NSW", income: 62180, veneer: "1,200–3,000+", implant: "5,000–7,500", allon4: "20,000–35,000+", data: "Verified" },
    { rank: 3, city: "Brisbane", state: "QLD", income: 59968, veneer: "1,200–2,300", implant: "4,500–7,000", allon4: "18,000–32,000", data: "Verified" },
    { rank: 4, city: "Perth", state: "WA", income: 63138, veneer: "999–2,500", implant: "4,000–6,000", allon4: "18,000–32,000", data: "Verified" },
    { rank: 5, city: "Adelaide", state: "SA", income: 57401, veneer: "1,100–2,000", implant: "4,500–6,500", allon4: "18,000–30,000", data: "Verified" },
    { rank: 6, city: "Gold Coast", state: "QLD", income: 53751, veneer: "1,477–3,500", implant: "5,068–7,000", allon4: "18,700–28,000", data: "Verified" },
    { rank: 7, city: "Newcastle–Maitland", state: "NSW", income: 59817, veneer: "1,741–1,925", implant: "3,000–6,500", allon4: "18,000–30,000", data: "Verified" },
    { rank: 8, city: "Canberra–Queanbeyan", state: "ACT", income: 75643, veneer: "1,900–3,000", implant: "4,000–6,000", allon4: "20,000–35,000", data: "Verified" },
    { rank: 9, city: "Sunshine Coast", state: "QLD", income: 51606, veneer: "1,500–2,500", implant: "4,500–6,000", allon4: "18,000–28,000", data: "State baseline" },
    { rank: 10, city: "Central Coast", state: "NSW", income: 55037, veneer: "1,500–2,500", implant: "4,500–6,500", allon4: "18,000–28,000", data: "State baseline" },
    { rank: 11, city: "Wollongong", state: "NSW", income: 58509, veneer: "1,500–2,500", implant: "5,000–6,500+", allon4: "18,000–28,000", data: "Verified" },
    { rank: 12, city: "Geelong", state: "VIC", income: 57549, veneer: "1,200–2,000", implant: "3,500–5,500", allon4: "23,000–27,000", data: "Verified" },
    { rank: 13, city: "Hobart", state: "TAS", income: 56852, veneer: "1,580–2,100", implant: "5,000–7,000", allon4: "18,000–28,000", data: "Verified" },
    { rank: 14, city: "Townsville", state: "QLD", income: 60723, veneer: "1,400–2,500", implant: "4,500–6,500", allon4: "18,000–30,000", data: "State baseline" },
    { rank: 15, city: "Cairns", state: "QLD", income: 50814, veneer: "1,400–2,200", implant: "4,500–7,000", allon4: "20,000–30,000", data: "State baseline" },
    { rank: 16, city: "Toowoomba", state: "QLD", income: 55771, veneer: "1,400–2,500", implant: "4,500–6,500", allon4: "18,000–30,000", data: "State baseline" },
    { rank: 17, city: "Darwin", state: "NT", income: 70961, veneer: "1,600–2,036", implant: "3,000–5,514", allon4: "18,000–35,000", data: "State baseline" },
    { rank: 18, city: "Ballarat", state: "VIC", income: 53619, veneer: "1,200–2,000", implant: "3,500–5,500", allon4: "23,000–27,000", data: "State baseline" },
    { rank: 19, city: "Bendigo", state: "VIC", income: 54001, veneer: "1,200–2,000", implant: "3,500–5,500", allon4: "23,000–27,000", data: "State baseline" },
    { rank: 20, city: "Albury–Wodonga", state: "NSW/VIC", income: 51000, veneer: "1,300–2,200", implant: "3,500–6,000", allon4: "20,000–28,000", data: "State baseline" },
    { rank: 21, city: "Launceston", state: "TAS", income: 51598, veneer: "1,580–2,100", implant: "5,000–7,000", allon4: "18,000–28,000", data: "Verified" },
    { rank: 22, city: "Mackay", state: "QLD", income: 62476, veneer: "1,400–2,500", implant: "4,500–6,500", allon4: "18,000–30,000", data: "State baseline" },
    { rank: 23, city: "Rockhampton", state: "QLD", income: 60577, veneer: "1,400–2,500", implant: "4,500–6,500", allon4: "18,000–30,000", data: "State baseline" },
    { rank: 24, city: "Bunbury", state: "WA", income: 54043, veneer: "1,200–2,300", implant: "3,995–6,000", allon4: "from 19,000", data: "Verified" },
    { rank: 25, city: "Bundaberg", state: "QLD", income: 44729, veneer: "1,400–2,400", implant: "4,500–6,500", allon4: "18,000–30,000", data: "State baseline" },
    { rank: 26, city: "Coffs Harbour", state: "NSW", income: 46137, veneer: "1,500–2,500", implant: "4,500–6,500", allon4: "18,000–28,000", data: "State baseline" },
    { rank: 27, city: "Hervey Bay", state: "QLD", income: 44729, veneer: "1,400–2,400", implant: "4,500–6,500", allon4: "18,000–30,000", data: "State baseline" },
    { rank: 28, city: "Wagga Wagga", state: "NSW", income: 55034, veneer: "1,500–2,500", implant: "4,500–6,500", allon4: "18,000–28,000", data: "State baseline" },
    { rank: 29, city: "Shepparton–Mooroopna", state: "VIC", income: 49805, veneer: "1,200–2,200", implant: "3,500–5,500", allon4: "23,000–27,000", data: "State baseline" },
    { rank: 30, city: "Mildura", state: "VIC/NSW", income: 50994, veneer: "1,200–2,200", implant: "3,500–5,500", allon4: "23,000–27,000", data: "State baseline" },
    { rank: 31, city: "Port Macquarie", state: "NSW", income: 44807, veneer: "1,500–2,500", implant: "4,500–6,500", allon4: "18,000–28,000", data: "State baseline" },
    { rank: 32, city: "Gladstone", state: "QLD", income: 60577, veneer: "1,400–2,500", implant: "4,500–6,500", allon4: "18,000–30,000", data: "State baseline" },
    { rank: 33, city: "Ballina", state: "NSW", income: 49000, veneer: "1,500–2,500", implant: "4,500–6,500", allon4: "18,000–28,000", data: "State baseline" },
    { rank: 34, city: "Warragul–Drouin", state: "VIC", income: 51000, veneer: "1,200–2,000", implant: "3,500–5,500", allon4: "23,000–27,000", data: "State baseline" },
    { rank: 35, city: "Tamworth", state: "NSW", income: 51093, veneer: "1,500–2,500", implant: "4,500–6,500", allon4: "18,000–28,000", data: "State baseline" },
    { rank: 36, city: "Busselton", state: "WA", income: 54043, veneer: "1,200–2,300", implant: "3,995–6,000", allon4: "from 19,000", data: "Verified" },
    { rank: 37, city: "Traralgon–Morwell", state: "VIC", income: 49567, veneer: "1,200–2,000", implant: "3,500–5,500", allon4: "23,000–27,000", data: "State baseline" },
    { rank: 38, city: "Orange", state: "NSW", income: 54786, veneer: "1,500–2,500", implant: "4,500–6,500", allon4: "18,000–28,000", data: "State baseline" },
    { rank: 39, city: "Bowral–Mittagong", state: "NSW", income: 49228, veneer: "1,500–2,500", implant: "4,500–6,500", allon4: "18,000–28,000", data: "State baseline" },
    { rank: 40, city: "Dubbo", state: "NSW", income: 54600, veneer: "1,500–2,500", implant: "4,500–6,500", allon4: "18,000–28,000", data: "State baseline" }
  ];

  const faqs = [
    {
      q: lang === "VN" ? "Chi phí trung bình của một ca điều trị nha khoa tại Úc năm 2026 là bao nhiêu?" : "What is the average cost of dental treatment in Australia in 2026?",
      a: lang === "VN"
        ? "Dựa trên dữ liệu thị trường tháng 6 năm 2026 trên 40 thành phố lớn nhất của Úc, giá AUD điển hình là: dán sứ porcelain veneer AUD 1,200–2,500 mỗi răng; implant đơn lẻ AUD 3,000–7,000; All-on-4 AUD 18,000–35,000+ mỗi hàm; mão sứ AUD 1,200–2,500; chữa tủy răng hàm AUD 1,400–3,400; Invisalign AUD 6,000–10,000. Các thủ thuật thẩm mỹ không được chi trả bởi Medicare."
        : "Based on June 2026 market data across Australia's 40 biggest cities, typical AUD prices are: porcelain veneer AUD 1,200–2,500 per tooth; single dental implant AUD 3,000–7,000 (combo); All-on-4 AUD 18,000–35,000+ per arch; porcelain crown AUD 1,200–2,500; root canal on a molar AUD 1,400–3,400 (crown not included); Invisalign AUD 6,000–10,000; complete denture AUD 1,800–5,000 per arch; in-chair whitening AUD 450–1,500. Cosmetic procedures are not covered by Medicare."
    },
    {
      q: lang === "VN" ? "Thành phố nào của Úc có chi phí nha khoa đắt đỏ nhất?" : "Which Australian city has the most expensive dental treatment?",
      a: lang === "VN"
        ? "Sydney và Canberra luôn nằm ở vị trí cao nhất. Giá veneers tại Sydney có thể lên tới hơn AUD 3,000/răng và Canberra bắt đầu từ khoảng AUD 1,900. Adelaide và các trung tâm vùng của bang Victoria (Geelong, Ballarat, Bendigo) là những nơi dễ chịu nhất. Tuy nhiên, sự khác biệt giữa các thành phố của Úc là rất nhỏ so với mức tiết kiệm 60–75% khi làm tại DentalNTK Việt Nam."
        : "Sydney and Canberra consistently sit at the top of the range — Sydney veneers reach AUD 3,000+ per tooth and Canberra veneers start around AUD 1,900. Adelaide and most regional Victorian centres (Geelong, Ballarat, Bendigo) are typically the most affordable capitals and large towns. However, the gap between Australia's cheapest and most expensive city is small compared with the gap between any Australian city and Vietnam, where the same work costs 60–75% less at DentalNTK."
    },
    {
      q: lang === "VN" ? "Khả năng chi trả dịch vụ nha khoa so với thu nhập tại Úc như thế nào?" : "How affordable is dental treatment relative to income in Australia?",
      a: lang === "VN"
        ? "So với thu nhập cá nhân trung vị của Úc là AUD 58,216/năm (ABS 2022–23), một răng implant đơn lẻ chiếm khoảng 8–12% thu nhập năm, trọn bộ 10 veneers chiếm 26–43%, và một hàm All-on-4 chiếm 31–60% thu nhập của cả năm. Tính theo tuần lương, một hàm All-on-4 bằng 8–16 tuần tổng lương của một người lao động toàn thời gian."
        : "Against Australia's median total personal income of AUD 58,216 per year (ABS 2022–23), a single dental implant equals roughly 8–12% of annual income, a full set of 10 veneers equals 26–43%, and an All-on-4 arch can equal 31–60% of a full year's income. Measured in full-time pay (average AUD 2,126/week, ABS November 2025), an All-on-4 costs 8–16 weeks of gross wages. This is the core reason an estimated 15,000+ Australians travel overseas for dental work each year."
    },
    {
      q: lang === "VN" ? "Bệnh nhân có thể tiết kiệm được bao nhiêu tại Nha khoa DentalNTK?" : "How much can Australians save on dental treatment at DentalNTK?",
      a: lang === "VN"
        ? "Tại DentalNTK, dán sứ Emax Zico veneer là AUD $650 (12.000.000 VNĐ) so với AUD $1,200–$2,500 ở Úc, implant đơn lẻ trọn gói từ AUD $1,368–$3,582 so với AUD $3,000–$7,000 ở Úc, và phục hình toàn hàm (Thanh 3 Titan + 4 Implant Hiossen) là AUD $7,425 so với mức AUD $18,000–$35,000+ ở Úc. Sau khi trừ vé máy bay khứ hồi và khách sạn, hầu hết các ca điều trị nhiều răng tiết kiệm từ AUD $3,400 tới hơn AUD $23,000+."
        : "At DentalNTK Clinic, an Emax Zico veneer is AUD $650 (12,000,000 VND) versus AUD $1,200–$2,500 in Australia, a single implant combo ranges from AUD $1,368–$3,582 versus AUD $3,000–$7,000, and a full-arch restoration (Titanium 3-Bar + 4 Implants) is AUD $7,425 versus AUD $18,000–$35,000+. After return flights (AUD $600–$1,200) and accommodation, most multi-tooth plans save AUD $3,400 to AUD $23,000+. Dental tourism becomes financially worthwhile once your treatment plan exceeds roughly AUD $3,400."
    },
    {
      q: lang === "VN" ? "Nguồn số liệu trên trang này có đáng tin cậy và mới nhất không?" : "Is the data on this page reliable and current?",
      a: lang === "VN"
        ? "Có. Các khoảng giá tại Úc phản ánh bảng giá niêm yết của các phòng khám và trang so sánh giá tính đến tháng 6 năm 2026, được đối chiếu với Khảo sát Phí Nha khoa của Hiệp hội Nha khoa Úc (ADA 2024). Số liệu thu nhập theo thành phố được lấy trực tiếp từ Cục Thống kê Úc (ABS 2025). Giá của DentalNTK là giá niêm yết AUD hiện hành."
        : "Yes. Australian price ranges reflect June 2026 published clinic pricing and comparison-site data, cross-checked against the Australian Dental Association Dental Fees Survey (2024 edition, the most recent). City-level income figures come directly from ABS Personal Income in Australia (2022–23, released November 2025) and ABS Average Weekly Earnings (November 2025). DentalNTK prices are from the current AUD price list (June 2026)."
    },
    {
      q: lang === "VN" ? "Quỹ bảo hiểm y tế tư nhân của Úc có chi trả cho việc điều trị tại Việt Nam không?" : "Does my Australian private health fund cover dental treatment in Vietnam?",
      a: lang === "VN"
        ? "Hầu hết các quỹ bảo hiểm y tế tư nhân của Úc không chi trả cho việc điều trị nha khoa tự chọn tại các nhà cung cấp nước ngoài theo các gói chính sách extras tiêu chuẩn, và các công việc thẩm mỹ như veneers bị loại trừ ngay cả ở Úc. Số liệu tiết kiệm trên trang này giả định không có khoản hoàn trả nào từ bảo hiểm y tế."
        : "Most Australian private health funds do not cover elective dental treatment at overseas providers under standard extras policies, and cosmetic work like veneers is excluded even in Australia. The savings figures on this page assume no fund rebate at all. Always confirm with your fund before planning, and ask DentalNTK for a written itemised AUD quote you can compare."
    }
  ];

  const filteredCities = citiesData.filter(
    (item) =>
      item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* ========================================================
          HERO HEADER
          ======================================================== */}
      <div className="space-y-4 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#0b1e2c] font-serif font-extrabold leading-tight">
          {lang === "VN"
            ? "Chi phí làm răng tại Úc theo thành phố vs Việt Nam — Chỉ số giá 40 thành phố"
            : "Dental costs in Australia by city vs Vietnam — 40-city price & affordability index"}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {lang === "VN"
            ? "Báo cáo dữ liệu tháng 6/2026: so sánh giá trung bình của 10 dịch vụ nha khoa phổ biến nhất tại 40 thành phố lớn của Úc so với mức thu nhập trung vị tại địa phương — và bảng giá tương đương tại Nha khoa DentalNTK Việt Nam."
            : "Data-backed June 2026 index: average AUD prices for the 10 most common dental tourism procedures across Australia's 40 biggest cities, scored against local median income — and what the same treatment costs at DentalNTK Clinic in Vietnam."}
        </p>
        <div className="p-4 bg-slate-200/50 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700 font-normal leading-relaxed text-left max-w-3xl mx-auto flex items-start gap-3">
          <Info className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
          <p>
            {lang === "VN"
              ? "Tóm tắt cốt lõi: Tại 40 thành phố Úc, chi phí làm răng dao động từ $250 AUD (tẩy trắng) tới $18,000–$35,000+ AUD (phục hình toàn hàm). So với thu nhập trung vị cả năm ($58,216 AUD), các ca trồng răng Implant và dán sứ thẩm mỹ ngốn từ 10% tới 60% thu nhập năm. Làm răng tại DentalNTK tiết kiệm từ 60% đến 75%, giúp bệnh nhân Úc tiết kiệm ròng từ $3,400 đến $23,000+ AUD sau khi đã trừ toàn bộ chi phí vé máy bay và khách sạn."
              : "Executive Summary: Across 40 Australian cities, common procedures range from AUD $250 (whitening) to AUD $18,000–$35,000+ (full-arch restorations). Measured against Australia's median personal income (AUD $58,216), major cosmetic & implant treatments consume 10% to 60% of annual pay. DentalNTK procedures cost 60% to 75% less, leaving Australian patients with net savings of AUD $3,400 to $23,000+ after return flights and hotel stays."}
          </p>
        </div>
      </div>

      {/* ========================================================
          TABLE 1: 10 MOST COMMON PROCEDURES
          ======================================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            {lang === "VN" ? "1. Bảng giá 10 dịch vụ nha khoa phổ biến nhất (Úc vs Việt Nam)" : "1. The 10 most common dental tourism procedures — Australia vs Vietnam"}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
            {lang === "VN"
              ? "Bảng so sánh chi phí trung bình ngoài thị trường của Úc (đơn vị AUD) và giá niêm yết tại DentalNTK Việt Nam."
              : "These are the ten procedures Australians most often travel for, in order of frequency. Australian figures are national market ranges for June 2026; DentalNTK figures are the current flat-rate lists."}
          </p>
        </div>

        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif uppercase tracking-wider text-xs">
                <th className="p-4">#</th>
                <th className="p-4">{lang === "VN" ? "Dịch vụ" : "Procedure"}</th>
                <th className="p-4 text-center">{lang === "VN" ? "Giá trung bình tại Úc (AUD)" : "Australia Average (AUD)"}</th>
                <th className="p-4 text-center">{lang === "VN" ? "Tại DentalNTK (VNĐ)" : "DentalNTK Price (AUD)"}</th>
                <th className="p-4 text-center">{lang === "VN" ? "Mức tiết kiệm" : "Estimated Savings"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {proceduresData.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-400">{item.id}</td>
                  <td className="p-4 font-semibold text-[#0b1e2c] whitespace-nowrap">{item.name}</td>
                  <td className="p-4 text-center text-slate-600">${item.au}</td>
                  <td className="p-4 text-center font-bold text-teal-700">{lang === "VN" ? item.ntk : `$${item.ntk}`}</td>
                  <td className="p-4 text-center font-bold text-emerald-600">{item.save}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================================
          FULL 10-CATEGORY VIETNAMESE PRICE LIST (AUD / USD SWITCHABLE)
          ======================================================== */}
      <section className="space-y-6 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200">
        <div className="pb-4 border-b border-slate-200">
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest text-teal-brand uppercase">
              {lang === "VN" ? "BẢNG GIÁ NIÊM YẾT CHI TIẾT 2026" : "FULL DETAILED 2026 CLINIC PRICING"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
              {lang === "VN" 
                ? `Bảng giá dịch vụ Nha Khoa Trẻ chi tiết (Đơn vị ${currency})` 
                : `Detailed 10-Category Service Price List (${currency})`}
            </h2>
            <p className="text-sm text-slate-600 font-normal leading-relaxed">
              {lang === "VN"
                ? `Toàn bộ danh mục dịch vụ trong bảng giá niêm yết gốc đã được tự động tính toán quy đổi sang ${currency === "AUD" ? "Đô la Úc (AUD)" : "Đô la Mỹ (USD)"}.`
                : `Complete 10-category clinical price list converted to ${currency === "AUD" ? "Australian Dollars (AUD)" : "US Dollars (USD)"}.`}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {[
            {
              categoryEN: "01. ORTHODONTICS & BRACES",
              categoryVN: "01. NIỀNG RĂNG - CHỈNH NHA",
              items: [
                { nameEN: "Pediatric Orthodontics Level 1 - Level 3", nameVN: "Chỉnh nha trẻ em Mức 1 - Mức 3", unitEN: "Both Arches Package", unitVN: "Trọn gói 2 hàm", aud: "$975 – $2,930 AUD", usd: "$685 – $2,055 USD" },
                { nameEN: "US Damon Self-Ligating Metal Braces Level 1 / Level 2", nameVN: "Chỉnh nha mắc cài kim loại tự động Damond Mỹ Mức 1 / Mức 2", unitEN: "Both Arches Package", unitVN: "Trọn gói 2 hàm", aud: "$2,930 – $3,580 AUD", usd: "$2,055 – $2,510 USD" },
                { nameEN: "US Ceramic Braces", nameVN: "Chỉnh nha mắc cài Sứ Mỹ", unitEN: "Both Arches Package", unitVN: "Trọn gói 2 hàm", aud: "$3,580 AUD", usd: "$2,510 USD" },
                { nameEN: "3M US Self-Ligating Ceramic Braces", nameVN: "Mắc cài sứ tự động 3M Mỹ", unitEN: "Both Arches Package", unitVN: "Trọn gói 2 hàm", aud: "$3,905 AUD", usd: "$2,740 USD" },
                { nameEN: "Invisalign US Clear Aligners Level 1 - Essential Aligners", nameVN: "Máng trong suốt Invisalign Mỹ Mức 1 - Máng Essential", unitEN: "Both Arches Package", unitVN: "Trọn gói 2 hàm", aud: "$3,905 AUD", usd: "$2,740 USD" },
                { nameEN: "Invisalign US Clear Aligners Level 2 - Level 3", nameVN: "Máng trong suốt Invisalign Mỹ Mức 2 - Mức 3", unitEN: "Both Arches Package", unitVN: "Trọn gói 2 hàm", aud: "$5,860 – $6,835 AUD", usd: "$4,110 – $4,795 USD" },
                { nameEN: "Localized Braces & Miniscrew Orthodontics", nameVN: "Chỉnh nha cục bộ mắc cài và minivit", unitEN: "Both Arches Package", unitVN: "Trọn gói 2 hàm", aud: "$975 AUD", usd: "$685 USD" },
                { nameEN: "3D iLux US Clear Aligners Level 1 - Level 3", nameVN: "Máng trong suốt 3D iLux Mỹ Mức 1 - Mức 3", unitEN: "Both Arches Package", unitVN: "Trọn gói 2 hàm", aud: "$4,885 – $7,490 AUD", usd: "$3,425 – $5,250 USD" },
                { nameEN: "German Flex-Lab Clear Aligners", nameVN: "Máng trong suốt Đức - Labo Flex", unitEN: "Both Arches Package", unitVN: "Trọn gói 2 hàm", aud: "$3,580 – $5,860 AUD", usd: "$2,510 – $4,110 USD" },
                { nameEN: "Miniscrew Placement", nameVN: "Cắm minivit", unitEN: "1 Screw", unitVN: "1 vít", aud: "$130 AUD", usd: "$91 USD" },
                { nameEN: "Fixed Space Maintainer", nameVN: "Hàm giữ khoảng cố định", unitEN: "1 Side", unitVN: "1 bên", aud: "$78 AUD", usd: "$55 USD" }
              ]
            },
            {
              categoryEN: "02. PERIODONTICS & GUM CARE",
              categoryVN: "02. ĐIỀU TRỊ NHA CHU",
              items: [
                { nameEN: "Dental Scaling & Polishing Level 1 - Level 2", nameVN: "Lấy cao răng và đánh bóng Mức 1 - Mức 2", unitEN: "1 Visit", unitVN: "1 ca", aud: "$16 – $26 AUD", usd: "$11 – $18 USD" },
                { nameEN: "Periodontitis Treatment Level 1 - Level 2", nameVN: "Điều trị viêm nha chu độ 1 - độ 2", unitEN: "1 Visit", unitVN: "1 ca", aud: "$98 – $163 AUD", usd: "$68 – $114 USD" },
                { nameEN: "Periodontal Crown Lengthening / Flap Surgery", nameVN: "Phẫu thuật nha chu làm dài thân răng / lật vạt", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$98 AUD", usd: "$68 USD" },
                { nameEN: "Periodontal Curettage & Scaling", nameVN: "Nạo nha chu", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$20 AUD", usd: "$14 USD" }
              ]
            },
            {
              categoryEN: "03. ENDODONTICS & ROOT CANAL",
              categoryVN: "03. ĐIỀU TRỊ NỘI NHA",
              items: [
                { nameEN: "Adult Dental Exam & Prescription", nameVN: "Khám + kê đơn người lớn", unitEN: "1 Visit", unitVN: "1 ca", aud: "$6.50 AUD", usd: "$4.50 USD" },
                { nameEN: "Quartz Fiber Post", nameVN: "Chốt thạch anh", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$98 AUD", usd: "$68 USD" },
                { nameEN: "Single Root Canal Treatment / Retreatment", nameVN: "Điều trị tuỷ răng 1 chân / Điều trị tuỷ lại", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$98 – $130 AUD", usd: "$68 – $91 USD" },
                { nameEN: "Premolar Root Canal Treatment / Retreatment", nameVN: "Điều trị tủy răng hàm nhỏ / Điều trị tuỷ lại", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$117 – $195 AUD", usd: "$82 – $137 USD" },
                { nameEN: "Molar Root Canal Treatment Level 1 - Level 2", nameVN: "Điều trị tuỷ răng hàm lớn mức 1 - mức 2", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$160 – $228 AUD", usd: "$114 – $160 USD" },
                { nameEN: "Molar Root Canal Retreatment", nameVN: "Điều trị tuỷ lại răng hàm lớn", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$260 AUD", usd: "$183 USD" },
                { nameEN: "MTA Root Obturation (Premolar / Molar)", nameVN: "Hàn Tuỷ MTA hàm nhỏ / hàm lớn", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$325 AUD", usd: "$228 USD" }
              ]
            },
            {
              categoryEN: "04. DIGITAL PROSTHODONTICS & RESTORATIONS",
              categoryVN: "04. PHỤC HÌNH RĂNG CÔNG NGHỆ KỸ THUẬT SỐ",
              items: [
                { nameEN: "Crown Recementation", nameVN: "Gắn lại chụp răng", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$65 AUD", usd: "$46 USD" },
                { nameEN: "All-Ceramic Ceramil Crown / Inlay / Overlay (Germany Molar) - 7-Yr Warranty", nameVN: "Chụp toàn sứ / Inlay / Overlay Ceramil (Đức) răng hàm - Bảo hành 7 năm", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$390 AUD", usd: "$274 USD" },
                { nameEN: "Aesthetic Ceramil Porcelain Crown (Anterior / Canine)", nameVN: "Chụp sứ Ceramil thẩm mỹ răng cửa / răng nanh", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$455 AUD", usd: "$320 USD" },
                { nameEN: "Aesthetic Ceramil Porcelain Veneer (Anterior / Canine)", nameVN: "Dán Veneer răng sứ Ceramil thẩm mỹ răng cửa / răng nanh", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$520 AUD", usd: "$365 USD" },
                { nameEN: "Glass-Ceramic Upcera Crown / Veneer / Inlay / Overlay (Anterior / Canine) - 10-Yr Warranty", nameVN: "Chụp sứ / Veneer / Inlay / Overlay Upcera Thuỷ tinh răng cửa / nanh - Bảo hành 10 năm", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$585 AUD", usd: "$411 USD" },
                { nameEN: "All-Ceramic Emax Zico Crown (Germany Molar) - 10-Yr Warranty", nameVN: "Chụp toàn sứ Emax Zico (Đức) răng hàm - Bảo hành 10 năm", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$520 AUD", usd: "$365 USD" },
                { nameEN: "Emax Zico Porcelain Crown (Anterior / Canine)", nameVN: "Chụp sứ Emax Zico răng cửa / răng nanh", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$585 AUD", usd: "$411 USD" },
                { nameEN: "Emax Zico Porcelain Veneer (Anterior / Canine)", nameVN: "Dán Veneer răng sứ Emax Zico răng cửa / răng nanh", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$650 AUD", usd: "$456 USD" },
                { nameEN: "Glass-Ceramic Emax Crown / Veneer / Inlay - 10-Yr Warranty", nameVN: "Chụp sứ / Veneer / Inlay Emax Thuỷ Tinh - Bảo hành 10 năm", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$780 AUD", usd: "$548 USD" }
              ]
            },
            {
              categoryEN: "05. RESTORATIVE & TEETH WHITENING",
              categoryVN: "05. HÀN RĂNG - TẨY TRẮNG",
              items: [
                { nameEN: "Permanent Composite Filling Grade 1 - 1-Yr Warranty", nameVN: "Hàn răng vĩnh viễn độ 1 - Bảo hành 1 năm", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$23 AUD", usd: "$16 USD" },
                { nameEN: "Permanent Composite Filling Grade 2 - 1-Yr Warranty", nameVN: "Hàn răng vĩnh viễn độ 2 - Bảo hành 1 năm", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$33 AUD", usd: "$23 USD" },
                { nameEN: "Cervical Cavity Filling - 2-Yr Warranty", nameVN: "Hàn cổ răng - Bảo hành 2 năm", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$26 AUD", usd: "$18 USD" },
                { nameEN: "Aesthetic Composite Filling - 2-Yr Warranty", nameVN: "Hàn răng thẩm mỹ - Bảo hành 2 năm", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$78 AUD", usd: "$55 USD" },
                { nameEN: "Tooth Gem Placement (Client's Gem)", nameVN: "Gắn đá (Đá của khách)", unitEN: "1 Gem", unitVN: "1 đá", aud: "$33 AUD", usd: "$23 USD" },
                { nameEN: "Tooth Gem Placement (Clinic Gem)", nameVN: "Gắn đá của phòng khám", unitEN: "1 Gem", unitVN: "1 đá", aud: "$65 AUD", usd: "$46 USD" },
                { nameEN: "At-Home Teeth Whitening Kit (2 Gels)", nameVN: "Tẩy trắng răng tại nhà 2 ống thuốc", unitEN: "1 Kit", unitVN: "1 ca", aud: "$130 AUD", usd: "$91 USD" },
                { nameEN: "Whitening Trays (Excluding Gel)", nameVN: "Máng tẩy trắng không bao gồm thuốc", unitEN: "1 Pair", unitVN: "1 cặp", aud: "$65 AUD", usd: "$46 USD" },
                { nameEN: "In-Office Laser Teeth Whitening (German Gel)", nameVN: "Tẩy trắng răng Laser Whitening (Thuốc Đức)", unitEN: "1 Visit", unitVN: "1 ca", aud: "$160 AUD", usd: "$114 USD" },
                { nameEN: "PMMA Temporary Acrylic Crown", nameVN: "Chụp răng nhựa PMMA", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$65 AUD", usd: "$46 USD" }
              ]
            },
            {
              categoryEN: "06. TMJ & BITE ADJUSTMENT",
              categoryVN: "06. ĐIỀU TRỊ KHỚP THÁI DƯƠNG HÀM",
              items: [
                { nameEN: "TMJ Therapy: Joint Protective Splint", nameVN: "Máng điều trị khớp TDH: Máng bảo vệ khớp", unitEN: "Treatment Course", unitVN: "Đợt điều trị", aud: "$650 AUD", usd: "$456 USD" },
                { nameEN: "TMJ Therapy: Neuromuscular Movement Disorder", nameVN: "Máng điều trị khớp TDH: Điều rối loạn vận động cơ", unitEN: "Treatment Course", unitVN: "Đợt điều trị", aud: "$1,950 AUD", usd: "$1,370 USD" },
                { nameEN: "TMJ Therapy: Condylar Positioning & Muscle Relaxation Splint", nameVN: "Máng điều trị khớp TDH: Định vị vị trí lồi cầu và thư giãn cơ", unitEN: "Treatment Course", unitVN: "Đợt điều trị", aud: "$2,600 AUD", usd: "$1,825 USD" },
                { nameEN: "Post-TMJ Occlusal Adjustment", nameVN: "Mài chỉnh khớp cắn sau điều trị khớp thái dương hàm", unitEN: "Treatment Course", unitVN: "Đợt điều trị", aud: "$195 AUD", usd: "$137 USD" },
                { nameEN: "Composite Restoration Guided by SAM Articulator", nameVN: "Hàn phục hồi bằng Composite dưới hướng dẫn của Giá khớp Sam", unitEN: "Treatment Course", unitVN: "Đợt điều trị", aud: "$325 AUD", usd: "$228 USD" }
              ]
            },
            {
              categoryEN: "07. PIEZOTOME & BIENAIR TOOTH EXTRACTION",
              categoryVN: "07. NHỔ RĂNG PIEZOTOME VÀ BIENAIR",
              items: [
                { nameEN: "Anterior / Premolar Extraction", nameVN: "Nhổ răng cửa / răng hàm nhỏ", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$33 – $46 AUD", usd: "$23 – $32 USD" },
                { nameEN: "Molar Extraction", nameVN: "Nhổ răng hàm lớn", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$65 AUD", usd: "$46 USD" },
                { nameEN: "Upper Wisdom Tooth Extraction (Straight / Ectopic)", nameVN: "Nhổ răng khôn hàm trên Mọc thẳng / Mọc lệch", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$78 – $130 AUD", usd: "$55 – $91 USD" },
                { nameEN: "Lower Wisdom Tooth Extraction (Straight / Ectopic)", nameVN: "Nhổ răng khôn hàm dưới Mọc thẳng / Mọc lệch", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$98 – $150 AUD", usd: "$68 – $105 USD" },
                { nameEN: "Impacted Wisdom Tooth Extraction", nameVN: "Nhổ răng khôn ngầm", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$195 AUD", usd: "$137 USD" },
                { nameEN: "Impacted Supernumerary Extraction", nameVN: "Nhổ răng thừa ngầm", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$325 AUD", usd: "$228 USD" }
              ]
            },
            {
              categoryEN: "08. GUIDED DENTAL IMPLANTS",
              categoryVN: "08. IMPLANT VỚI MÁNG HƯỚNG DẪN",
              items: [
                { nameEN: "HIOSSEN Implant Fixture (USA)", nameVN: "Trụ HIOSSEN Mỹ", unitEN: "1 Fixture", unitVN: "1 trụ", aud: "$975 AUD", usd: "$685 USD" },
                { nameEN: "SIC Implant Fixture (Germany)", nameVN: "Trụ SIC Đức", unitEN: "1 Fixture", unitVN: "1 trụ", aud: "$1,630 AUD", usd: "$1,141 USD" },
                { nameEN: "STRAUMANN Implant Fixture (Switzerland)", nameVN: "Trụ STRAUMANN Thuỵ Sỹ", unitEN: "1 Fixture", unitVN: "1 trụ", aud: "$3,580 AUD", usd: "$2,510 USD" },
                { nameEN: "Implant Crown - Everes Porcelain", nameVN: "Phục hình trên Implant sứ Everes", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$390 AUD", usd: "$274 USD" },
                { nameEN: "Implant Crown - Ceramil Porcelain", nameVN: "Phục hình trên Implant sứ Ceramil", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$520 AUD", usd: "$365 USD" },
                { nameEN: "Implant Crown - Emax Porcelain", nameVN: "Phục hình trên Implant sứ Emax", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$650 AUD", usd: "$456 USD" },
                { nameEN: "Titanium 3-Unit Bar Restoration", nameVN: "Thanh 3 kim loại Titan", unitEN: "1 Arch", unitVN: "1 hàm", aud: "$1,950 AUD", usd: "$1,370 USD" },
                { nameEN: "Ball Attachment Abutment", nameVN: "Khớp kết nối ball", unitEN: "1 Unit", unitVN: "1 cái", aud: "$325 AUD", usd: "$228 USD" },
                { nameEN: "Bone Grafting for Implant", nameVN: "Ghép xương cho Implant", unitEN: "1 Site", unitVN: "1 đơn vị", aud: "$390 AUD", usd: "$274 USD" }
              ]
            },
            {
              categoryEN: "09. REMOVABLE PROSTHODONTICS",
              categoryVN: "09. PHỤC HÌNH THÁO LẮP",
              items: [
                { nameEN: "Standard Hard Acrylic Partial Denture", nameVN: "Nền hàm nhựa cứng thường bán hàm", unitEN: "1 Arch", unitVN: "1 hàm", aud: "$130 AUD", usd: "$91 USD" },
                { nameEN: "Standard Hard Acrylic Full Denture", nameVN: "Nền hàm nhựa cứng thường toàn hàm", unitEN: "1 Arch", unitVN: "1 hàm", aud: "$195 AUD", usd: "$137 USD" },
                { nameEN: "Imported Hard Acrylic Teeth Setup", nameVN: "Lên răng nhựa cứng ngoại", unitEN: "1 Arch", unitVN: "1 hàm", aud: "$20 AUD", usd: "$14 USD" },
                { nameEN: "Mesh Reinforcement Lining", nameVN: "Đệm lưới", unitEN: "1 Arch", unitVN: "1 hàm", aud: "$65 AUD", usd: "$46 USD" },
                { nameEN: "Flexible Valplast Partial Denture", nameVN: "Nền hàm nhựa dẻo bán phần", unitEN: "1 Arch", unitVN: "1 hàm", aud: "$195 AUD", usd: "$137 USD" },
                { nameEN: "Flexible Valplast Full Denture", nameVN: "Nền hàm nhựa dẻo toàn phần", unitEN: "1 Arch", unitVN: "1 hàm", aud: "$325 AUD", usd: "$228 USD" },
                { nameEN: "Titanium Metal Framework Denture", nameVN: "Hàm khung kim loại Titan", unitEN: "1 Arch", unitVN: "1 hàm", aud: "$520 AUD", usd: "$365 USD" },
                { nameEN: "Titanium Framework Denture with Mocbi Attachments", nameVN: "Hàm Khung kim loại Titan có Mocbi", unitEN: "1 Arch", unitVN: "1 hàm", aud: "$780 AUD", usd: "$548 USD" },
                { nameEN: "Mocbi Precision Attachment Rubber Gaskets", nameVN: "Gioăng cao su Mocbi", unitEN: "1 Arch", unitVN: "1 hàm", aud: "$65 AUD", usd: "$46 USD" },
                { nameEN: "Denture Relining", nameVN: "Đệm hàm", unitEN: "1 Arch", unitVN: "1 hàm", aud: "$65 AUD", usd: "$46 USD" }
              ]
            },
            {
              categoryEN: "10. PEDIATRIC DENTISTRY",
              categoryVN: "10. RĂNG TRẺ EM",
              items: [
                { nameEN: "Primary Tooth Polishing", nameVN: "Đánh bóng răng sữa", unitEN: "1 Visit", unitVN: "1 ca", aud: "$3.30 AUD", usd: "$2.30 USD" },
                { nameEN: "Pediatric Scaling & Polishing", nameVN: "Lấy cao răng - Đánh bóng", unitEN: "1 Visit", unitVN: "1 ca", aud: "$9.80 AUD", usd: "$6.80 USD" },
                { nameEN: "Fuji / Composite Filling - 6-Mo Warranty", nameVN: "Hàn Fuji / composite - Bảo hành 6 tháng", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$16 AUD", usd: "$11 USD" },
                { nameEN: "Primary Tooth Extraction (Topical Anesthesia)", nameVN: "Nhổ răng sữa tê bôi", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$3.30 AUD", usd: "$2.30 USD" },
                { nameEN: "Primary Tooth Extraction (Local Injection)", nameVN: "Nhổ răng sữa tiêm tê", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$9.80 AUD", usd: "$6.80 USD" },
                { nameEN: "Primary Anterior Root Canal Treatment", nameVN: "Điều trị tủy răng cửa", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$46 AUD", usd: "$32 USD" },
                { nameEN: "Primary Molar Root Canal Treatment", nameVN: "Điều trị tủy răng hàm", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$65 AUD", usd: "$46 USD" },
                { nameEN: "Stainless Steel Crown (SSC)", nameVN: "Chụp thép", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$39 AUD", usd: "$27 USD" },
                { nameEN: "Fluoride Varnish Application", nameVN: "Bôi Vecni Fluor", unitEN: "1 Visit", unitVN: "1 ca", aud: "$20 AUD", usd: "$14 USD" },
                { nameEN: "Icon Resin Infiltration Treatment", nameVN: "Điều trị Icon", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$117 AUD", usd: "$82 USD" },
                { nameEN: "Molar Pit & Fissure Sealant", nameVN: "Sealant răng 6", unitEN: "1 Tooth", unitVN: "1 răng", aud: "$13 AUD", usd: "$9.10 USD" }
              ]
            }
          ].map((catGroup, cIdx) => (
            <div key={cIdx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-[#0b1e2c] text-white px-5 py-3.5 font-serif font-bold text-sm sm:text-base flex items-center justify-between">
                <span>{lang === "VN" ? catGroup.categoryVN : catGroup.categoryEN}</span>
                <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl border border-white/15 font-sans text-xs shrink-0">
                  <button
                    type="button"
                    onClick={() => setCurrency("AUD")}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      currency === "AUD"
                        ? "bg-teal-brand text-[#0b1e2c] shadow-sm font-extrabold"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    <span>🇦🇺</span> AUD
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrency("USD")}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      currency === "USD"
                        ? "bg-teal-brand text-[#0b1e2c] shadow-sm font-extrabold"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    <span>🇺🇸</span> USD
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-600 font-semibold uppercase text-[11px] tracking-wider border-b border-slate-200">
                      <th className="p-3">{lang === "VN" ? "Tên dịch vụ" : "Service Name"}</th>
                      <th className="p-3 text-center">{lang === "VN" ? "Đơn vị" : "Unit"}</th>
                      <th className="p-3 text-right text-teal-brand font-bold">{lang === "VN" ? `Giá dịch vụ (${currency})` : `Service Price (${currency})`}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {catGroup.items.map((item, iIdx) => (
                      <tr key={iIdx} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-medium text-slate-800">{lang === "VN" ? item.nameVN : item.nameEN}</td>
                        <td className="p-3 text-center text-slate-500">{lang === "VN" ? item.unitVN : item.unitEN}</td>
                        <td className="p-3 text-right font-mono font-bold text-teal-brand bg-teal-50/30">
                          {currency === "AUD" ? item.aud : item.usd}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            {lang === "VN" ? "2. Chỉ số khả năng chi trả dịch vụ nha khoa so với thu nhập" : "2. Price vs affordability — what these procedures cost relative to income"}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
            {lang === "VN"
              ? "So sánh giá trị dịch vụ đo lường bằng số phần trăm thu nhập năm và số tuần lương toàn thời gian cần thiết tại Úc."
              : "We scored each procedure against two ABS benchmarks: Median personal income of AUD 58,216/year, and average full-time weekly earnings of AUD 2,126/week."}
          </p>
        </div>

        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif uppercase tracking-wider text-xs">
                <th className="p-4">{lang === "VN" ? "Dịch vụ" : "Procedure"}</th>
                <th className="p-4 text-center">{lang === "VN" ? "Giá trung bình tại Úc (AUD)" : "AU Cost (Typical)"}</th>
                <th className="p-4 text-center">{lang === "VN" ? "% Thu nhập năm của người Úc" : "% of Annual Median Income"}</th>
                <th className="p-4 text-center">{lang === "VN" ? "Số tuần lương tại Úc" : "Weeks of Full-time Pay"}</th>
                <th className="p-4 text-center">{lang === "VN" ? "Tại DentalNTK (VNĐ)" : "Same at DentalNTK (AUD)"}</th>
                <th className="p-4 text-center">{lang === "VN" ? "% Thu nhập tương đương" : "DentalNTK % of Income"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {affordabilityData.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-200/20 transition-colors">
                  <td className="p-4 font-bold text-slate-800 whitespace-nowrap">{item.name}</td>
                  <td className="p-4 text-center font-normal">{item.au}</td>
                  <td className="p-4 text-center font-bold text-rose-600">{item.pctAu}</td>
                  <td className="p-4 text-center font-normal text-rose-600">{item.weeksAu}</td>
                  <td className="p-4 text-center font-bold text-teal-brand">{lang === "VN" ? item.ntk : `$${item.ntk}`}</td>
                  <td className="p-4 text-center font-bold text-emerald-600 bg-emerald-50/20">{item.pctNtk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================================
          BREAK-EVEN CALCULATOR FOR DENTAL TOURISM
          ======================================================== */}
      <section className="space-y-10 py-10 px-6 sm:px-10 bg-slate-50/80 rounded-3xl border border-slate-200/80 shadow-sm text-center">
        <div className="space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-teal-brand uppercase">
            {lang === "VN" ? "TÍNH TOÁN ĐIỂM HÒA VỐN" : "BREAK-EVEN CALCULATOR"}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#0b1e2c] font-serif font-extrabold leading-snug">
            {lang === "VN"
              ? "Cách tính điểm hòa vốn cho chuyến du lịch nha khoa"
              : "How to Calculate Break-Even for Your Dental Tourism Trip"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {lang === "VN"
              ? "Một chuyến đi làm răng kết hợp du lịch sẽ hiệu quả về mặt tài chính nếu số tiền chênh lệch tiết kiệm được lớn hơn chi phí đi lại."
              : "A dental tourism trip makes complete financial sense if your total procedure savings exceed your travel and accommodation expenses."}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Step 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 hover:border-teal-brand/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-teal-brand/10 text-teal-brand font-bold flex items-center justify-center text-lg">
                1
              </div>
              <h3 className="text-lg font-bold text-[#0b1e2c]">
                {lang === "VN" ? "Tính mức tiết kiệm dự kiến" : "Calculate Estimated Savings"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {lang === "VN"
                  ? "Đăng ký để nhận báo giá chi tiết bằng AUD từ DentalNTK, sau đó so sánh với bảng báo giá tại Úc."
                  : "Request a detailed itemized quote in AUD from DentalNTK, then compare it against your local Australian quote."}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 hover:border-teal-brand/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-teal-brand/10 text-teal-brand font-bold flex items-center justify-center text-lg">
                2
              </div>
              <h3 className="text-lg font-bold text-[#0b1e2c]">
                {lang === "VN" ? "Cộng chi phí hành trình" : "Add Journey & Stay Costs"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {lang === "VN"
                  ? "Cộng vé máy bay khứ hồi ($600–$1,200 AUD), tiền phòng nghỉ ($80–$150 AUD/đêm từ 7–14 ngày) và chi phí ăn uống sinh hoạt."
                  : "Add return flights ($600–$1,200 AUD), hotel stays ($80–$150 AUD/night for 7–14 days), and daily food/transit expenses."}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 hover:border-teal-brand/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-teal-brand/10 text-teal-brand font-bold flex items-center justify-center text-lg">
                3
              </div>
              <h3 className="text-lg font-bold text-[#0b1e2c]">
                {lang === "VN" ? "So sánh và Quyết định" : "Compare & Decide"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {lang === "VN"
                  ? "Nếu số tiền chênh lệch dương lớn hơn $3,400 AUD, chuyến đi hoàn toàn tự chi trả được và bạn có kỳ nghỉ miễn phí."
                  : "If your net savings exceed $3,400 AUD, your treatment covers the entire travel cost — making your holiday effectively free."}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-teal-brand text-white font-bold rounded-2xl shadow-lg hover:bg-teal-700 transition-all hover:scale-[1.02] text-sm sm:text-base"
          >
            <span>📋</span>
            <span>
              {lang === "VN"
                ? "Đăng ký nhận Báo giá AUD miễn phí"
                : "Get Free Itemized AUD Quote"}
            </span>
          </Link>
        </div>
      </section>

      {/* ========================================================
          TABLE 3: SEARCHABLE 40-CITY INDEX
          ======================================================== */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
              {lang === "VN" ? "3. Bảng tra cứu giá nha khoa của 40 thành phố lớn tại Úc" : "3. Average dental prices across Australia's 40 biggest cities"}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
              {lang === "VN"
                ? "Dữ liệu khảo sát chi tiết theo từng thành phố Úc được đối chiếu trực tiếp với mức thu nhập cá nhân trung vị tại khu vực đó (ABS 2025)."
                : "This table ranks Australia's 40 largest cities by population and shows the local median personal income alongside city-level dental pricing."}
            </p>
          </div>
          {/* Search Box */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={lang === "VN" ? "Tìm theo thành phố hoặc bang..." : "Search city or state..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 focus:border-teal-brand focus:outline-none rounded-xl text-xs sm:text-sm"
            />
          </div>
        </div>

        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm overflow-x-auto max-h-[480px] overflow-y-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px] relative">
            <thead className="sticky top-0 z-10 bg-[#0b1e2c] text-white">
              <tr className="font-serif uppercase tracking-wider text-xs">
                <th className="p-4 bg-[#0b1e2c]">#</th>
                <th className="p-4 bg-[#0b1e2c]">{lang === "VN" ? "Thành phố / Bang" : "City / State"}</th>
                <th className="p-4 bg-[#0b1e2c] text-right">{lang === "VN" ? "Thu nhập trung vị (AUD/năm)" : "Median Income (AUD/yr)"}</th>
                <th className="p-4 bg-[#0b1e2c] text-right">{lang === "VN" ? "Mặt dán sứ / răng" : "Veneer / Tooth"}</th>
                <th className="p-4 bg-[#0b1e2c] text-right">{lang === "VN" ? "Implant đơn lẻ" : "Single Implant"}</th>
                <th className="p-4 bg-[#0b1e2c] text-right">{lang === "VN" ? "All-on-4 / hàm" : "All-on-4 / Arch"}</th>
                <th className="p-4 bg-[#0b1e2c] text-center">{lang === "VN" ? "Độ tin cậy" : "Data Class"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredCities.map((item) => (
                <tr key={item.rank} className="hover:bg-slate-200/20 transition-colors">
                  <td className="p-4 font-mono font-bold text-slate-400">{item.rank}</td>
                  <td className="p-4 font-bold text-slate-800">
                    {item.city}, <span className="text-slate-400 font-mono text-xs">{item.state}</span>
                  </td>
                  <td className="p-4 text-right font-normal">${item.income.toLocaleString()}</td>
                  <td className="p-4 text-right font-normal">${item.veneer}</td>
                  <td className="p-4 text-right font-normal">${item.implant}</td>
                  <td className="p-4 text-right font-normal">${item.allon4}</td>
                  <td className="p-4 text-center font-normal">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      item.data === "Verified" 
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-100" 
                        : "bg-amber-50 text-amber-600 border border-amber-100"
                    }`}>
                      {lang === "VN" 
                        ? (item.data === "Verified" ? "Đã xác thực" : "Mức vùng")
                        : item.data}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredCities.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-400 text-xs sm:text-sm">
                    {lang === "VN" ? "Không tìm thấy thành phố nào khớp." : "No matching cities found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: WHY DENTAL COSTS SO MUCH IN AUSTRALIA
          ======================================================== */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-200/50 p-6 sm:p-10 rounded-3xl border border-slate-200">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-teal-brand uppercase">
              {lang === "VN" ? "TẠI SAO CHI PHÍ TẠI ÚC CAO?" : "THE AUSTRALIAN OVERHEAD GAP"}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#0b1e2c] font-serif font-extrabold leading-tight">
              {lang === "VN"
                ? "Tại sao chi phí điều trị nha khoa tại Úc lại đắt đỏ đến thế?"
                : "Why dental care costs so much more in Australia"}
            </h2>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {lang === "VN"
              ? "Giá dịch vụ nha khoa tại Úc cao hoàn toàn do các yếu tố cấu trúc, chứ không phải do sự chênh lệch chất lượng hay sự độc quyền."
              : "Australian dental prices are high for structural reasons, not price gouging. Overheads like rent, wages, and lab fees flow directly into the patient's invoice."}
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-100 space-y-2 shadow-sm">
            <h4 className="text-sm sm:text-base font-bold text-[#0b1e2c]">
              {lang === "VN" ? "Không có Medicare hỗ trợ" : "No Medicare Coverage"}
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
              {lang === "VN"
                ? "Bảo hiểm y tế công Medicare của Úc không chi trả nha khoa cho người lớn. Bảo hiểm tư nhân extras có hạn mức hoàn tiền rất thấp (chỉ $500–$1,500 AUD một năm)."
                : "Adult dental is excluded from Medicare. Cosmetic makeovers are completely excluded from extras, and major dental caps rarely exceed AUD 500–1,500 per year."}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 space-y-2 shadow-sm">
            <h4 className="text-sm sm:text-base font-bold text-[#0b1e2c]">
              {lang === "VN" ? "Danh sách chờ bệnh viện công kéo dài" : "Years on Public Waitlists"}
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
              {lang === "VN"
                ? "Danh sách chờ khám răng công tại bang Victoria trung bình 14.4 tháng, ở bang Tasmania trung bình lên tới 3.9 năm. Vì vậy, bệnh nhân bắt buộc phải tìm tới các phòng khám tư."
                : "Victoria's average public dental wait is 14.4 months; Tasmania's averages 3.9 years. Public options are practically out of reach for working adults."}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 space-y-2 shadow-sm">
            <h4 className="text-sm sm:text-base font-bold text-[#0b1e2c]">
              {lang === "VN" ? "Chi phí vận hành tại Úc cực cao" : "High Overhead & Staffing Costs"}
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
              {lang === "VN"
                ? "Lương nhân viên y tế, tiền thuê mặt bằng, bảo hiểm trách nhiệm nghề nghiệp và phí chế tác labo tại Úc nằm trong hàng đắt đỏ nhất thế giới."
                : "Staff wages, commercial rent, professional indemnity insurance, and local lab fabrication fees are among the highest in the world."}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          FAQ SECTION
          ======================================================== */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#0b1e2c] font-serif font-extrabold">
            {lang === "VN" ? "Câu hỏi thường gặp" : "Frequently asked questions"}
          </h2>
        </div>

        <div className="space-y-3.5 w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-5 text-left font-bold text-slate-800 hover:text-teal-brand transition-colors text-sm sm:text-base cursor-pointer"
              >
                <span>{faq.q}</span>
                {activeFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-teal-brand shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-2" />
                )}
              </button>
              {activeFaq === index && (
                <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          INQUIRY ANCHOR FORM
          ======================================================== */}
      <section id="inquiry-form" className="text-center pt-8 border-t border-slate-200 space-y-4">
        <h3 className="text-lg sm:text-xl font-serif font-extrabold text-[#0b1e2c]">
          {lang === "VN" ? "Bạn cần nhận phác đồ điều trị và báo giá chính xác bằng AUD?" : "Need an exact AUD quote for your dental plan?"}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto font-normal">
          {lang === "VN"
            ? "Gửi thông tin nhu cầu hoặc ảnh răng của bạn để hội đồng bác sĩ của DentalNTK đánh giá và gửi báo giá chi tiết trong vòng 24 giờ."
            : "Send us a request today. Our Chief Clinical Director will review your case and provide an initial itemised quote — 100% free and without obligations."}
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-block bg-teal-brand hover:bg-teal-brand-hover text-[#0b1e2c] px-8 py-3.5 font-bold text-sm rounded-full transition-all shadow-md cursor-pointer"
          >
            {lang === "VN" ? "Gửi thông tin liên hệ ngay" : "Contact Tourism Concierge Now"}
          </Link>
        </div>
      </section>

    </div>
  );
}
