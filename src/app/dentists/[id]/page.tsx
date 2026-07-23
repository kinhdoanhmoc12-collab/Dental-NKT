"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "../../../context/LanguageContext";
import { 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  Star, 
  GraduationCap, 
  ShieldCheck, 
  ArrowLeft,
  Phone,
  Briefcase,
  Globe2,
  Stethoscope,
  Activity,
  Smile,
  ShieldAlert,
  Layers,
  Sparkle
} from "lucide-react";

interface SpecialtyDetail {
  title: string;
  desc: string;
  badge: string;
}

interface DoctorDetail {
  id: string;
  slugs: string[];
  nameVN: string;
  nameEN: string;
  taglineVN: string;
  taglineEN: string;
  roleVN: string;
  roleEN: string;
  badgeVN: string;
  badgeEN: string;
  image: string;
  experienceYears?: number;
  patientsTreated?: string;
  bioVN: string[];
  bioEN: string[];
  educationVN: string[];
  educationEN: string[];
  workHistoryVN: string[];
  workHistoryEN: string[];
  associationsVN: string[];
  associationsEN: string[];
  specialtiesVN: SpecialtyDetail[];
  specialtiesEN: SpecialtyDetail[];
  certificationsVN: { title: string; org: string; detail: string }[];
  certificationsEN: { title: string; org: string; detail: string }[];
  casesVN: { title: string; desc: string; duration: string; result: string }[];
  casesEN: { title: string; desc: string; duration: string; result: string }[];
}

const DOCTORS_DATA: Record<string, DoctorDetail> = {
  d1: {
    id: "d1",
    slugs: ["d1", "dr-nguyen-thi-thuy-hang", "nguyen-thi-thuy-hang"],
    nameVN: "Dr. Nguyễn Thị Thúy Hằng",
    nameEN: "Dr. Nguyen Thi Thuy Hang",
    taglineVN: "Bác sĩ được đào tạo chuyên sâu phẫu thuật trong miệng, nha chu. Đi đầu trong ứng dụng kỹ thuật số vào điều trị nha khoa",
    taglineEN: "Specialist in Oral Surgery & Periodontics. Leading pioneer in digital dentistry applications.",
    roleVN: "Trưởng khoa Thẩm mỹ Nụ cười & Phẫu thuật Trong miệng",
    roleEN: "Cosmetic Smile Lead & Oral Surgery Specialist",
    badgeVN: "Chuyên gia Phẫu thuật Trong miệng & Nha chu",
    badgeEN: "Oral Surgery & Periodontal Specialist",
    image: "/dr_emily.png",
    experienceYears: 8,
    bioVN: [
      "Tốt nghiệp Đại học Y Hà Nội năm 2018.",
      "Chuyên môn cao và nhiều kinh nghiệm về Implant, nhổ răng khôn, điều trị tụt lợi, cười lộ nướu, các ca viêm quanh răng nặng, phục hình răng.",
      "Ứng dụng kỹ thuật số trong điều trị nha khoa từ năm 2020.",
      "Bác sĩ được khách hàng yêu mến bởi sự vô cùng kỹ càng, chỉn chu và cầu toàn trong công việc."
    ],
    bioEN: [
      "Graduated from Hanoi Medical University in 2018.",
      "Extensive clinical expertise in Dental Implants, wisdom tooth extraction, gum recession treatment, gummy smile correction, severe periodontitis management, and prosthodontics.",
      "Pioneer in applying digital technology in dental treatment since 2020.",
      "Highly beloved by patients for her meticulousness, diligence, and perfectionism in every clinical procedure."
    ],
    educationVN: [
      "Tốt nghiệp Đại học Y Hà Nội chuyên khoa Răng Hàm Mặt (8/2012 – 8/2018)",
      "Hoàn thành khoá học về 'Implant cơ bản trong nha khoa' năm 2020",
      "Hoàn thành thực hành 18 tháng tại Bệnh viện hữu nghị Việt Nam – Cuba",
      "Hoàn thành khoá học 'Nha chu chuyên sâu' của Thạc sĩ, bác sĩ Phạm Hoài Nam năm 2022",
      "Các khoá đào tạo ngắn hạn nâng cao về Implant, phục hình trên implant, nha chu"
    ],
    educationEN: [
      "Graduated from Hanoi Medical University specializing in Odonto-Stomatology (08/2012 – 08/2018)",
      "Completed 'Basic Dental Implantology' Certificate in 2020",
      "Completed 18-month clinical residency at Vietnam – Cuba Friendship Hospital",
      "Completed 'Advanced Periodontics' Masterclass by Master/Dr. Pham Hoai Nam in 2022",
      "Postgraduate training courses in Implants, Implant Prosthetics & Periodontics"
    ],
    workHistoryVN: [
      "Bác sĩ chuyên khoa phẫu thuật trong miệng (nhổ răng khôn, implant), điều trị cười hở lợi, điều trị tụt lợi và các bệnh về nha chu tại Nha khoa Trẻ từ 2018 đến nay",
      "Bác sĩ điều trị nha khoa tổng quát"
    ],
    workHistoryEN: [
      "Oral Surgery Specialist (Wisdom Tooth Extraction, Implants), Gummy Smile Correction, Gum Recession & Periodontal Disease Treatment at DentalNTK (Nha khoa Trẻ) from 2018 to present",
      "General Dentistry Clinician"
    ],
    associationsVN: [
      "Hội viên hội International Team for Implantology (ITI), trực thuộc hội ITI Section Việt Nam"
    ],
    associationsEN: [
      "Active Member of International Team for Implantology (ITI), Vietnam Section"
    ],
    specialtiesVN: [
      {
        title: "Phẫu thuật Trong miệng & Cấy ghép Implant",
        desc: "Chuyên khoa phẫu thuật trong miệng và Implant. Hoàn thành khóa học Implant cơ bản 2020 và 18 tháng thực hành tại Bệnh viện Việt Nam – Cuba.",
        badge: "Phẫu thuật & Implant"
      },
      {
        title: "Nhổ Răng Khôn & Nha Khoa Tổng Quát",
        desc: "Bác sĩ điều trị nha khoa tổng quát và nhổ răng khôn chuyên sâu. Được khách hàng yêu mến bởi sự kỹ càng, chỉn chu và cầu toàn.",
        badge: "Nha khoa Tổng quát"
      },
      {
        title: "Điều trị Cười Lộ Nướu & Tụt Lợi (Nha chu)",
        desc: "Chuyên môn cao về điều trị tụt lợi, cười lộ nướu và các ca viêm quanh răng nặng. Hoàn thành khóa học Nha chu chuyên sâu ThS.BS Phạm Hoài Nam năm 2022.",
        badge: "Nha chu Chuyên sâu"
      },
      {
        title: "Ứng dụng Kỹ thuật số trong Nha khoa",
        desc: "Bác sĩ đi đầu trong ứng dụng công nghệ kỹ thuật số vào điều trị nha khoa tại Nha khoa Trẻ từ năm 2020.",
        badge: "Kỹ thuật số từ 2020"
      }
    ],
    specialtiesEN: [
      {
        title: "Oral Surgery & Dental Implants",
        desc: "Specialist in oral surgery and dental implants. Completed Basic Implantology in 2020 and 18-month residency at Vietnam - Cuba Hospital.",
        badge: "Surgery & Implants"
      },
      {
        title: "Wisdom Teeth & General Dentistry",
        desc: "General dentistry and specialized wisdom tooth extraction. Highly beloved by patients for meticulousness and perfectionism.",
        badge: "General Care"
      },
      {
        title: "Gummy Smile & Gum Recession Treatment",
        desc: "Expertise in gum recession, gummy smile correction, and severe periodontitis. Completed Advanced Periodontics by Master/Dr. Pham Hoai Nam (2022).",
        badge: "Periodontics"
      },
      {
        title: "Digital Dentistry Applications",
        desc: "Pioneer in applying digital technology in clinical dental treatment at DentalNTK since 2020.",
        badge: "Digital since 2020"
      }
    ],
    certificationsVN: [],
    certificationsEN: [],
    casesVN: [],
    casesEN: []
  },
  d2: {
    id: "d2",
    slugs: ["d2", "dr-nguyen-huy-hoang", "nguyen-huy-hoang"],
    nameVN: "Dr. Nguyễn Huy Hoàng",
    nameEN: "Dr. Nguyen Huy Hoang",
    taglineVN: "Bác sĩ được đào tạo chuyên sâu về chỉnh nha tại Đại học Koln - Đức. Chuyên môn cao về điều trị khớp thái dương hàm. Đi đầu trong ứng dụng kỹ thuật số vào điều trị nha khoa.",
    taglineEN: "Specialist in Orthodontics trained at University of Cologne, Germany. Expert in TMJ disorders & pioneer in digital dentistry.",
    roleVN: "Trưởng khoa Cấy ghép Implant & Chỉnh nha",
    roleEN: "Head of Implantology & Orthodontics",
    badgeVN: "Cấy ghép 15,000+ Implant",
    badgeEN: "15,000+ Implants Placed",
    image: "/dr_phong.png",
    experienceYears: 15,
    patientsTreated: "8,000+ Ca",
    bioVN: [
      "Tốt nghiệp Đại học Y Hà Nội năm 2011.",
      "Đào tạo chỉnh nha tại Đại học Cologne – Đức.",
      "Chuyên môn cao về Chỉnh nha, implant, răng thẩm mỹ, điều trị khớp Thái Dương hàm.",
      "Đi đầu về ứng dụng kỹ thuật số trong điều trị nha khoa.",
      "Bác sĩ chuyên sâu về chỉnh nha Invisalign Quốc tế.",
      "Thành viên tổ chức Operation Smile."
    ],
    bioEN: [
      "Graduated from Hanoi Medical University in 2011.",
      "Postgraduate Orthodontics training at University of Cologne – Germany.",
      "Extensive clinical expertise in Orthodontics, Implants, Aesthetic Dentistry & TMJ disorders.",
      "Leading pioneer in digital dentistry applications.",
      "Certified International Invisalign Specialist.",
      "Volunteer surgeon & active member of Operation Smile."
    ],
    educationVN: [
      "Tốt nghiệp Đại học Y Hà Nội chuyên khoa Răng Hàm Mặt (8/2005 – 06/2011)",
      "Hoàn thành khoá học về chỉnh nha cơ bản (4/2012 – 10/2012)",
      "Học tập và trao đổi lên kế hoạch điều trị để nâng cao về chỉnh nha cùng với GS.BS. Braumann, Giám đốc trung tâm chỉnh Nha Đại học Cologne, Thành phố Koln, Đức (8/2016 – 11/2016)",
      "Các khoá đào tạo ngắn hạn trong và ngoài nước về chỉnh nha, răng thẩm mỹ, điều trị loạn năng khớp thái dương hàm"
    ],
    educationEN: [
      "Graduated from Hanoi Medical University specializing in Odonto-Stomatology (08/2005 – 06/2011)",
      "Completed Basic Orthodontics Certificate (04/2012 – 10/2012)",
      "Advanced Orthodontics Masterclass & clinical planning alongside Prof. Dr. Braumann, Director of Orthodontic Center, University of Cologne, Germany (08/2016 – 11/2016)",
      "Postgraduate domestic and international training in Orthodontics, Aesthetic Dentistry & TMJ Dysfunction Management"
    ],
    workHistoryVN: [
      "Bác sĩ Khoa Phẫu thuật tạo hình hàm mặt tại Bệnh viện Hữu Nghị Việt Nam - Cu Ba (8/2011 - 2018)",
      "Bác sĩ Hoàng trực tiếp tham gia gần 1,000 ca mổ nhân đạo về khe hở môi cho trẻ em của tổ chức Operation Smile (Phẫu thuật nụ cười) phối hợp Bệnh viện Việt Nam - Cu Ba tổ chức",
      "Bác sĩ trực tiếp tiến hành: Nhổ các răng 8, các răng ngầm khó trong xương, phẫu thuật bệnh lý và chấn thương vùng hàm mặt",
      "Bác sĩ tham gia và trực tiếp làm phẫu thuật cắt đẩy xương hàm",
      "Bác sĩ sáng lập và phụ trách chuyên môn tại Phòng khám Nha khoa Trẻ từ 2017 với gần 15.000 bệnh nhân"
    ],
    workHistoryEN: [
      "Maxillofacial Plastic Surgery Specialist at Vietnam - Cuba Friendship Hospital (08/2011 - 2018)",
      "Personally operated on nearly 1,000 humanitarian cleft lip & palate surgeries for children with Operation Smile & Vietnam-Cuba Hospital",
      "Performs complex impacted wisdom tooth extractions, bone impactions, maxillofacial trauma & pathology surgeries",
      "Performs orthognathic jaw repositioning surgeries",
      "Founder & Chief Clinical Officer at DentalNTK (Nha khoa Trẻ) since 2017, treating nearly 15,000 patients"
    ],
    associationsVN: [
      "Là tình nguyện viên của tổ chức Operation Smile, tham gia mổ nhân đạo cho các bé hở môi vòm của tổ chức (01/2012 - nay)",
      "Tham dự chương trình hội thảo của Operation Smile tại Mỹ về các vấn đề môi vòm đặc biệt chỉnh nha cho bệnh nhân bị khe hở môi vòm (5/2014)",
      "Là thành viên Hội Implant Việt Nam",
      "Là thành viên Hiệp hội Chỉnh nha Việt Nam"
    ],
    associationsEN: [
      "Volunteer surgeon for Operation Smile, conducting humanitarian cleft palate surgeries (01/2012 - present)",
      "Attended Operation Smile USA Symposium on Cleft Lip/Palate & specialized orthodontic management (05/2014)",
      "Active Member of Vietnam Implantology Association",
      "Active Member of Vietnam Association of Orthodontists (VAO)"
    ],
    specialtiesVN: [
      {
        title: "Chỉnh nha Chuyên sâu & Invisalign Quốc tế",
        desc: "Được đào tạo chuyên sâu về chỉnh nha tại Đại học Cologne (Đức) và chứng nhận Bác sĩ chuyên sâu Invisalign Quốc tế.",
        badge: "Đại học Cologne (Đức)"
      },
      {
        title: "Điều trị Rối loạn năng Khớp Thái Dương Hàm (TMJ)",
        desc: "Chuyên môn cao về chẩn đoán, điều trị bệnh lý và loạn năng khớp thái dương hàm.",
        badge: "Chuyên sâu TMJ"
      },
      {
        title: "Phẫu thuật Hàm Mặt & Nhổ Răng 8 Ngầm Khó",
        desc: "Trực tiếp tiến hành nhổ các răng 8, răng ngầm khó trong xương, phẫu thuật chấn thương hàm mặt và phẫu thuật cắt đẩy xương hàm.",
        badge: "Phẫu thuật Hàm mặt"
      },
      {
        title: "Cấy ghép Implant & Răng Sứ Thẩm mỹ Kỹ thuật số",
        desc: "Cấy ghép Implant, phục hình răng sứ thẩm mỹ đi đầu trong ứng dụng kỹ thuật số vào điều trị nha khoa.",
        badge: "Kỹ thuật số"
      }
    ],
    specialtiesEN: [
      {
        title: "Advanced Orthodontics & International Invisalign Specialist",
        desc: "Postgraduate orthodontic training at University of Cologne (Germany) & certified International Invisalign Specialist.",
        badge: "Cologne Univ (Germany)"
      },
      {
        title: "TMJ Disorders & Craniofacial Pain Management",
        desc: "High clinical expertise in diagnosing and managing complex TMJ pathology and joint dysfunction.",
        badge: "TMJ Specialist"
      },
      {
        title: "Maxillofacial Surgery & Impacted Wisdom Tooth Extraction",
        desc: "Performs complex impacted wisdom tooth extractions, maxillofacial trauma surgeries, and orthognathic jaw surgeries.",
        badge: "Maxillofacial Surgery"
      },
      {
        title: "Dental Implants & Digital Aesthetic Dentistry",
        desc: "Dental implantology and aesthetic ceramic restorations, pioneering digital technology applications in dentistry.",
        badge: "Digital Dentistry"
      }
    ],
    certificationsVN: [],
    certificationsEN: [],
    casesVN: [],
    casesEN: []
  },
  d3: {
    id: "d3",
    slugs: ["d3", "dr-pham-xuan-dang", "pham-xuan-dang"],
    nameVN: "Dr. Phạm Xuân Đáng",
    nameEN: "Dr. Pham Xuan Dang",
    taglineVN: "Đào tạo Chỉnh nha tại Đại học Y Hà Nội. Chuyên gia Chỉnh nha, Điều trị Nội nha vi phẫu & Tiểu phẫu",
    taglineEN: "Orthodontics training at Hanoi Medical University. Expert in Orthodontics, Microscopic Endodontics & Minor Surgery.",
    roleVN: "Chuyên gia Chỉnh nha & Nội nha",
    roleEN: "Orthodontic & Endodontic Specialist",
    badgeVN: "Chuyên gia Chỉnh nha & Nội nha",
    badgeEN: "Orthodontic & Endodontic Specialist",
    image: "/dr_hung.png",
    experienceYears: 8,
    bioVN: [
      "Đào tạo chỉnh nha tại Đại học Y HÀ NỘI.",
      "Chuyên môn cao về chỉnh nha người lớn, chỉnh nha sớm trẻ em, điều trị nội nha, tiểu phẫu.",
      "Ứng dụng kỹ thuật số trong điều trị nha khoa."
    ],
    bioEN: [
      "Orthodontic post-graduate training at Hanoi Medical University.",
      "Extensive expertise in adult orthodontics, early pediatric orthodontics, endodontics, and minor surgery.",
      "Applying digital technology in dental treatment."
    ],
    educationVN: [
      "Tốt nghiệp Bác sĩ Răng Hàm Mặt - Đại học Y Hà Nội",
      "Tốt nghiệp Khóa Chuyên sâu Chỉnh nha Thẩm mỹ - Đại học Y Hà Nội",
      "Chứng chỉ Nội nha Vi phẫu Kính hiển vi"
    ],
    educationEN: [
      "Doctor of Dental Surgery - Hanoi Medical University",
      "Postgraduate Aesthetic Orthodontics Diploma - Hanoi Medical University",
      "Microscopic Endodontic Surgery Certification"
    ],
    workHistoryVN: [
      "Bác sĩ chuyên khoa Chỉnh nha & Nội nha tại Nha khoa Trẻ (DentalNTK)",
      "Bác sĩ tiểu phẫu răng khôn & điều trị nha khoa kỹ thuật số"
    ],
    workHistoryEN: [
      "Orthodontic & Endodontic Specialist at DentalNTK (Nha khoa Trẻ)",
      "Minor Surgery & Digital Dentistry Clinician"
    ],
    associationsVN: [
      "Hội viên Hội Nắn chỉnh răng Việt Nam (VAO)",
      "Hội viên Hội Nội nha Việt Nam"
    ],
    associationsEN: [
      "Member of Vietnam Association of Orthodontists (VAO)",
      "Member of Vietnam Endodontic Association"
    ],
    specialtiesVN: [
      {
        title: "Chỉnh nha Thẩm mỹ & Chỉnh nha Sớm Trẻ em",
        desc: "Đào tạo chỉnh nha tại Đại học Y Hà Nội. Chuyên môn cao về chỉnh nha người lớn, nắn chỉnh khớp cắn và chỉnh nha sớm cho trẻ em.",
        badge: "Chỉnh nha Chuyên sâu"
      },
      {
        title: "Điều trị Nội nha (Chữa tủy)",
        desc: "Chuyên môn cao về điều trị nội nha chuyên sâu, xử lý bảo tồn răng thật tối đa.",
        badge: "Nội nha Chuyên sâu"
      },
      {
        title: "Tiểu phẫu & Nha khoa Kỹ thuật số",
        desc: "Thực hiện các ca tiểu phẫu phẫu thuật trong miệng nhẹ nhàng và ứng dụng công nghệ kỹ thuật số trong điều trị nha khoa.",
        badge: "Nha khoa Kỹ thuật số"
      }
    ],
    specialtiesEN: [
      {
        title: "Adult & Early Pediatric Orthodontics",
        desc: "Orthodontic post-graduate training at Hanoi Medical University. Expert in adult braces, bite correction, and early pediatric intervention.",
        badge: "Orthodontic Specialist"
      },
      {
        title: "Endodontic Therapy (Root Canal)",
        desc: "High clinical expertise in endodontic procedures, preserving natural teeth.",
        badge: "Endodontics"
      },
      {
        title: "Minor Surgery & Digital Dentistry",
        desc: "Gentle minor oral surgical procedures and applying digital technology in dental treatment.",
        badge: "Digital Dentistry"
      }
    ],
    certificationsVN: [],
    certificationsEN: [],
    casesVN: [],
    casesEN: []
  },
  d4: {
    id: "d4",
    slugs: ["d4", "dr-le-thi-nhat-minh", "le-thi-nhat-minh"],
    nameVN: "Dr. Lê Thị Nhật Minh",
    nameEN: "Dr. Le Thi Nhat Minh",
    taglineVN: "Tốt nghiệp Đại học Y Hà Nội năm 2019. Chuyên gia Chỉnh nha Trẻ em, Chỉnh nha Người lớn & Invisalign",
    taglineEN: "Graduated Hanoi Medical University 2019. Specialist in Pediatric & Adult Orthodontics & Invisalign.",
    roleVN: "Chuyên gia Chỉnh nha & Niềng răng Thẩm mỹ",
    roleEN: "Orthodontic & Aesthetic Braces Specialist",
    badgeVN: "Chuyên gia Chỉnh nha ĐH Y Hà Nội",
    badgeEN: "Orthodontic Specialist (HMU)",
    image: "/dr_minh.png",
    experienceYears: 7,
    patientsTreated: "1,000+ Ca",
    bioVN: [
      "Tốt nghiệp Đại học Y Hà Nội năm 2019.",
      "Hoàn thành khóa học chỉnh nha chuyên sâu tại Đại học Y Hà Nội.",
      "Bác sĩ chuyên sâu về chỉnh nha trẻ em, chỉnh nha người lớn và điều trị chỉnh nha với hệ thống máng trong suốt Invisalign.",
      "Đã tham dự các khóa chỉnh nha chuyên sâu Bio Meaw - Geaw.",
      "Bác sĩ đã hoàn thành hơn 1.000 ca chỉnh nha trẻ em và chỉnh nha người lớn, bác sĩ được khách hàng yêu mến nhờ sự tâm huyết, kỹ càng và đồng hành với bệnh nhân trong từng ca chỉnh."
    ],
    bioEN: [
      "Graduated from Hanoi Medical University in 2019.",
      "Completed advanced postgraduate orthodontic training at Hanoi Medical University.",
      "Specialist in pediatric orthodontics, adult orthodontics, and Invisalign clear aligner treatments.",
      "Attended advanced specialized Bio Meaw - Geaw orthodontic courses.",
      "Successfully treated over 1,000 pediatric and adult orthodontic cases, highly beloved by patients for her dedication, meticulousness, and continuous companionship throughout each treatment journey."
    ],
    educationVN: [
      "Tốt nghiệp Đại học Y Hà Nội chuyên khoa Răng Hàm Mặt",
      "Hoàn thành khóa học về chỉnh nha cơ bản",
      "Hoàn thành khóa học về chỉnh nha với máng trong suốt Invisalign",
      "Các khóa đào tạo ngắn hạn về chỉnh nha chuyên sâu",
      "Các khóa chỉnh nha chuyên sâu Bio Meaw - Geaw"
    ],
    educationEN: [
      "Doctor of Dental Surgery - Hanoi Medical University",
      "Completed Basic Orthodontics Certificate Program",
      "Completed Invisalign Clear Aligner Therapy Certificate",
      "Short-term advanced specialized orthodontic training programs",
      "Advanced Bio Meaw - Geaw Orthodontic Courses"
    ],
    workHistoryVN: [],
    workHistoryEN: [],
    associationsVN: [],
    associationsEN: [],
    specialtiesVN: [
      {
        title: "Chỉnh nha Máng trong suốt Invisalign & Mắc cài Thẩm mỹ",
        desc: "Hoàn thành khóa đào tạo chuyên sâu về chỉnh nha máng trong suốt Invisalign và mắc cài tại Đại học Y Hà Nội. Thiết kế phác đồ nắn chỉnh nụ cười và tái tạo khớp cắn sinh học cho khách hàng trưởng thành.",
        badge: "Invisalign & Mắc cài"
      },
      {
        title: "Kỹ thuật Bio Meaw - Geaw & Nắn chỉnh Khớp cắn Chuyên sâu",
        desc: "Được đào tạo bài bản các khóa chỉnh nha Bio Meaw - Geaw nâng cao. Đã trực tiếp hoàn thành hơn 1.000 ca nắn chỉnh khớp cắn, tái lập chức năng ăn nhai cho khách hàng.",
        badge: "Bio Meaw & Khớp cắn"
      }
    ],
    specialtiesEN: [
      {
        title: "Invisalign Clear Aligners & Aesthetic Adult Braces",
        desc: "Specialized postgraduate training in Invisalign aligners and braces at Hanoi Medical University. Tailored biomechanical alignment for adult smile transformations.",
        badge: "Invisalign & Braces"
      },
      {
        title: "Bio Meaw - Geaw Technique & Complex Occlusal Realignment",
        desc: "Advanced certified training in Bio Meaw - Geaw biomechanical alignment. Successfully completed over 1,000 adult alignment and occlusal restoration cases.",
        badge: "Bio Meaw & Occlusion"
      }
    ],
    certificationsVN: [],
    certificationsEN: [],
    casesVN: [],
    casesEN: []
  },
  d5: {
    id: "d5",
    slugs: ["d5", "dr-nguyen-thu-hoai", "nguyen-thu-hoai"],
    nameVN: "Dr. Nguyễn Thu Hoài",
    nameEN: "Dr. Nguyen Thu Hoai",
    taglineVN: "Tốt nghiệp Đại học Y Hà Nội năm 2020. Chuyên gia Chỉnh nha Người lớn, Invisalign & Phục hình Thẩm mỹ",
    taglineEN: "Graduated Hanoi Medical University 2020. Specialist in Adult Orthodontics, Invisalign & Style Italiano Restorations.",
    roleVN: "Chuyên gia Chỉnh nha & Phục hình Thẩm mỹ",
    roleEN: "Orthodontic & Aesthetic Restoration Specialist",
    badgeVN: "Chuyên gia Chỉnh nha ĐH Y Hà Nội",
    badgeEN: "Orthodontic Specialist (HMU)",
    image: "/dr_hoai.png",
    experienceYears: 6,
    patientsTreated: "1,000+ Ca",
    bioVN: [
      "Tốt nghiệp Đại học Y Hà Nội năm 2020.",
      "Bác sĩ chuyên sâu về chỉnh nha trẻ em, chỉnh nha người lớn và điều trị chỉnh nha với hệ thống máng trong suốt Invisalign, răng trẻ em, điều trị nha khoa tổng quát, hàn thẩm mỹ.",
      "Ứng dụng kỹ thuật số trong chỉnh nha trẻ em.",
      "Bác sĩ được khách hàng yêu mến nhờ sự gần gũi, thân thiện và tâm huyết trong từng ca điều trị."
    ],
    bioEN: [
      "Graduated from Hanoi Medical University in 2020.",
      "Specialist in pediatric orthodontics, adult orthodontics, Invisalign clear aligners, pediatric dentistry, general dental care, and aesthetic composite restorations.",
      "Pioneering digital technology applications in orthodontic aligner therapy.",
      "Highly beloved by patients for her warm, approachable, and dedicated clinical care."
    ],
    educationVN: [
      "Tốt nghiệp Đại học Y Hà Nội chuyên khoa Răng Hàm Mặt",
      "Hoàn thành khóa học về chỉnh nha cơ bản",
      "Hoàn thành khóa học về chỉnh nha với máng trong suốt Invisalign",
      "Các khóa đào tạo ngắn hạn về chỉnh nha chuyên sâu",
      "Hoàn thành các khóa học về phục hình xâm lấn tối thiểu, khóa học cơ bản và nâng cao về hàn thẩm mỹ theo Style Italiano"
    ],
    educationEN: [
      "Doctor of Dental Surgery - Hanoi Medical University",
      "Completed Basic Orthodontics Certificate Program",
      "Completed Invisalign Clear Aligner Therapy Certificate",
      "Short-term advanced specialized orthodontic training programs",
      "Completed Minimally Invasive Prosthetics & Style Italiano Advanced Aesthetic Restoration Courses"
    ],
    workHistoryVN: [],
    workHistoryEN: [],
    associationsVN: [],
    associationsEN: [],
    specialtiesVN: [
      {
        title: "Chỉnh nha Máng trong suốt Invisalign & Mắc cài",
        desc: "Hoàn thành đào tạo chuyên sâu về niềng răng máng trong suốt Invisalign và chỉnh nha cơ bản tại Đại học Y Hà Nội.",
        badge: "Invisalign & Chỉnh nha"
      },
      {
        title: "Phục hình Xâm lấn Tối thiểu & Hàn Thẩm mỹ Style Italiano",
        desc: "Hoàn thành các khóa đào tạo nâng cao về phục hình xâm lấn tối thiểu và tái tạo nụ cười thẩm mỹ theo chuẩn Style Italiano quốc tế.",
        badge: "Style Italiano & Phục hình"
      }
    ],
    specialtiesEN: [
      {
        title: "Invisalign Clear Aligners & Comprehensive Orthodontics",
        desc: "Advanced postgraduate certification in Invisalign aligners and orthodontics at Hanoi Medical University.",
        badge: "Invisalign & Ortho"
      },
      {
        title: "Minimally Invasive Restorations & Style Italiano Aesthetics",
        desc: "Certified in minimally invasive prosthetics and Style Italiano aesthetic composite tooth transformations.",
        badge: "Style Italiano & Restorative"
      }
    ],
    certificationsVN: [],
    certificationsEN: [],
    casesVN: [],
    casesEN: []
  }
};

export default function DoctorDetailPage() {
  const { lang } = useLanguage();
  const params = useParams();
  const rawId = Array.isArray(params.id) ? params.id[0] : params.id;
  const doctorKey = rawId?.toLowerCase() || "d1";

  // Match doctor key by ID or slug
  const doctor = Object.values(DOCTORS_DATA).find(
    (doc) => doc.id === doctorKey || doc.slugs.includes(doctorKey)
  ) || DOCTORS_DATA.d1;

  const name = lang === "VN" ? doctor.nameVN : doctor.nameEN;
  const tagline = lang === "VN" ? doctor.taglineVN : doctor.taglineEN;
  const role = lang === "VN" ? doctor.roleVN : doctor.roleEN;
  const badge = lang === "VN" ? doctor.badgeVN : doctor.badgeEN;
  const bios = lang === "VN" ? doctor.bioVN : doctor.bioEN;
  const educations = lang === "VN" ? doctor.educationVN : doctor.educationEN;
  const workHistory = lang === "VN" ? doctor.workHistoryVN : doctor.workHistoryEN;
  const associations = lang === "VN" ? doctor.associationsVN : doctor.associationsEN;
  const specialties = lang === "VN" ? doctor.specialtiesVN : doctor.specialtiesEN;
  const certifications = lang === "VN" ? doctor.certificationsVN : doctor.certificationsEN;
  const cases = lang === "VN" ? doctor.casesVN : doctor.casesEN;

  return (
    <div className="py-10 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Back button link */}
      <div>
        <Link 
          href="/dentists" 
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-teal-brand transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === "VN" ? "Quay lại danh sách Bác sĩ" : "Back to All Dentists"}</span>
        </Link>
      </div>

      {/* ========================================================
          HERO SECTION: DOCTOR PORTRAIT & QUICK INFO
          ======================================================== */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left: High-res Portrait with Badges */}
        <div className="lg:col-span-5 relative">
          <div className="relative h-[380px] sm:h-[450px] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-md border border-slate-100">
            <Image 
              src={doctor.image} 
              alt={name} 
              fill 
              className="object-cover object-top" 
              priority
              sizes="(max-w-7xl) 40vw, 100vw"
            />
          </div>
        </div>

        {/* Right: Info & Bio Summary */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-teal-brand uppercase block">
              {role}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-[#0b1e2c]">
              {name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed italic">
              &ldquo;{tagline}&rdquo;
            </p>
          </div>

          {/* Quick Highlights / Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            {doctor.experienceYears ? (
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                <span className="text-xs text-slate-400 font-medium block">{lang === "VN" ? "Kinh nghiệm" : "Experience"}</span>
                <strong className="text-xl sm:text-2xl font-serif font-extrabold text-[#0b1e2c]">{doctor.experienceYears}+ {lang === "VN" ? "Năm" : "Years"}</strong>
              </div>
            ) : (
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                <span className="text-xs text-slate-400 font-medium block">{lang === "VN" ? "Học vấn chính" : "Education"}</span>
                <strong className="text-sm sm:text-base font-serif font-extrabold text-[#0b1e2c] block truncate">{lang === "VN" ? "Đại học Y Hà Nội" : "Hanoi Medical Univ"}</strong>
              </div>
            )}

            {doctor.patientsTreated ? (
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                <span className="text-xs text-slate-400 font-medium block">{lang === "VN" ? "Bệnh nhân điều trị" : "Patients Treated"}</span>
                <strong className="text-xl sm:text-2xl font-serif font-extrabold text-teal-brand">
                  {lang === "VN" ? doctor.patientsTreated : doctor.patientsTreated.replace("Ca", "Cases")}
                </strong>
              </div>
            ) : (
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                <span className="text-xs text-slate-400 font-medium block">{lang === "VN" ? "Chuyên khoa" : "Specialty"}</span>
                <strong className="text-sm sm:text-base font-serif font-extrabold text-teal-brand block truncate">{role}</strong>
              </div>
            )}

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1 col-span-2 sm:col-span-1">
              <span className="text-xs text-slate-400 font-medium block">{lang === "VN" ? "Đánh giá" : "Rating"}</span>
              <div className="flex items-center gap-1">
                <strong className="text-xl sm:text-2xl font-serif font-extrabold text-[#0b1e2c]">5.0</strong>
                <div className="flex text-amber-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>
          </div>

          {/* Bio bullet points */}
          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal border-t border-slate-100 pt-4">
            <h3 className="font-bold text-[#0b1e2c] text-sm mb-2">{lang === "VN" ? "Giới thiệu chung:" : "General Overview:"}</h3>
            {bios.map((paragraph, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="text-teal-brand text-base leading-none">•</span>
                <span>{paragraph}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <Link 
              href="/contact" 
              className="bg-teal-brand hover:bg-teal-brand-hover text-[#0b1e2c] px-6 py-3.5 font-bold text-xs sm:text-sm rounded-full transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{lang === "VN" ? "Đặt lịch khám trực tiếp" : "Book Consultation"}</span>
            </Link>
            <a 
              href="tel:+84963333844" 
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3.5 font-bold text-xs sm:text-sm rounded-full transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-teal-brand" />
              <span>+84 963 333 844</span>
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 2: EDUCATION, WORK HISTORY & ASSOCIATIONS
          ======================================================== */}
      {(educations.length > 0 || (workHistory && workHistory.length > 0) || (associations && associations.length > 0)) && (
        <section className={`grid grid-cols-1 ${(!workHistory || workHistory.length === 0) && (!associations || associations.length === 0) ? "lg:grid-cols-1" : "lg:grid-cols-2"} gap-8 items-start`}>
          
          {/* Left Column: Academic Training (Quá trình đào tạo) */}
          {educations.length > 0 && (
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4">
                <div className="p-3 bg-white text-teal-brand rounded-xl shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-extrabold text-[#0b1e2c]">
                    {lang === "VN" ? "Quá trình đào tạo" : "Academic & Clinical Education"}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {lang === "VN" ? "Bằng cấp & Chứng chỉ chuyên khoa" : "Medical degrees & postgraduate courses"}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {educations.map((edu, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-teal-brand/20 transition-all">
                    <ShieldCheck className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Right Column: Work Experience & Associations */}
          {((workHistory && workHistory.length > 0) || (associations && associations.length > 0)) && (
            <div className="space-y-8">
              
              {/* Work Experience (Quá trình công tác) */}
              {workHistory && workHistory.length > 0 && (
                <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-6 shadow-sm">
                  <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4">
                    <div className="p-3 bg-white text-teal-brand rounded-xl shadow-sm">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-extrabold text-[#0b1e2c]">
                        {lang === "VN" ? "Quá trình công tác" : "Clinical Practice History"}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">
                        {lang === "VN" ? "Kinh nghiệm phẫu thuật & vị trí làm việc" : "Clinical milestones & surgical roles"}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3.5">
                    {workHistory.map((work, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-teal-brand/20 transition-all">
                        <div className="p-1.5 bg-teal-brand-light text-teal-brand rounded-lg shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">{work}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Professional Associations (Hội khoa học, tổ chức) */}
              {associations && associations.length > 0 && (
                <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-5 shadow-sm">
                  <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4">
                    <div className="p-3 bg-white text-teal-brand rounded-xl shadow-sm">
                      <Globe2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-extrabold text-[#0b1e2c]">
                        {lang === "VN" ? "Tham gia các Hội khoa học, tổ chức" : "Professional Associations & Activities"}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">
                        {lang === "VN" ? "Thành viên tổ chức quốc tế & mổ nhân đạo" : "Global memberships & volunteer missions"}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {associations.map((assoc, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-semibold bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-teal-brand/20 transition-all">
                        <CheckCircle2 className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{assoc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          )}

        </section>
      )}

      {/* ========================================================
          SECTION 3: CLINICAL SPECIALTIES & EXPERTISE (BALANCED GRID)
          ======================================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-widest text-teal-brand uppercase">
            {lang === "VN" ? "LĨNH VỰC CHUYÊN MÔN CHÍNH" : "CLINICAL SPECIALTIES"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            {lang === "VN" ? `Chuyên môn & Thế mạnh điều trị của ${name}` : `Clinical Expertise & Focus Areas`}
          </h2>
        </div>

        <div className={`grid grid-cols-1 ${specialties.length % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
          {specialties.map((spec, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-brand/40 transition-all space-y-3 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-teal-brand-light text-teal-brand rounded-xl group-hover:bg-teal-brand group-hover:text-[#0b1e2c] transition-colors">
                    {idx % 4 === 0 ? <Stethoscope className="w-5 h-5" /> : idx % 4 === 1 ? <Sparkles className="w-5 h-5" /> : idx % 4 === 2 ? <Activity className="w-5 h-5" /> : <Layers className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-brand bg-teal-brand/10 px-3 py-1 rounded-full">
                    {spec.badge}
                  </span>
                </div>
                <h4 className="text-base font-serif font-bold text-[#0b1e2c] leading-snug group-hover:text-teal-brand transition-colors">
                  {spec.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                  {spec.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-brand" />
                <span>{lang === "VN" ? "Tiêu chuẩn kiểm soát nhiễm khuẩn quốc tế" : "International Sterilization Standard"}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION 4: INTERNATIONAL ACCREDITATIONS & CERTIFICATES
          ======================================================== */}
      {certifications && certifications.length > 0 && (
        <section className="space-y-6 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
          <div className="flex flex-col items-center justify-center text-center border-b border-slate-200/80 pb-6 space-y-2 max-w-2xl mx-auto">
            <div className="p-3.5 bg-white text-teal-brand rounded-2xl shadow-sm border border-slate-100">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#0b1e2c]">
                {lang === "VN" ? "Chứng chỉ Quốc tế & Đào tạo Nâng cao" : "International Accreditations"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                {lang === "VN" ? "Chứng nhận tay nghề lâm sàng & giảng viên quốc tế" : "Certified clinical & speaker accreditations"}
              </p>
            </div>
          </div>

          <div className={`grid grid-cols-1 ${certifications.length === 2 ? 'md:grid-cols-2' : certifications.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'} gap-6`}>
            {certifications.map((cert, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-brand/40 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-brand bg-teal-brand-light px-3 py-1 rounded-full border border-teal-brand/10">
                      {lang === "VN" ? "Chứng chỉ Đã xác thực" : "Verified Accreditation"}
                    </span>
                    <Sparkles className="w-4 h-4 text-amber-500 shrink-0 group-hover:rotate-12 transition-transform" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-[#0b1e2c] group-hover:text-teal-brand transition-colors leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-bold text-teal-brand">{cert.org}</p>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">{cert.detail}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-brand" />
                    {lang === "VN" ? "Chứng nhận Quốc tế" : "International Standard"}
                  </span>
                  <span className="text-teal-brand font-bold">100% Verified</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================
          SECTION 5: FEATURED CASE STUDIES LED BY THIS DOCTOR
          ======================================================== */}
      {cases && cases.length > 0 && (
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-teal-brand uppercase">
              {lang === "VN" ? "CA LÂM SÀNG TIÊU BIỂU" : "FEATURED CASE STUDIES"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
              {lang === "VN" ? `Kết quả điều trị thực tế của ${name}` : `Clinical Case Results by ${name}`}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((cs, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 hover:shadow-md transition-all">
                <div className="space-y-1 border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-bold text-teal-brand uppercase tracking-wider block">
                    {lang === "VN" ? `Ca lâm sàng #${idx + 1}` : `Case Study #${idx + 1}`}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#0b1e2c]">{cs.title}</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">{cs.desc}</p>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm">
                  <li className="flex justify-between py-1.5 border-b border-slate-50">
                    <span className="text-slate-400">{lang === "VN" ? "Thời gian điều trị" : "Treatment Duration"}</span>
                    <strong className="text-slate-800">{cs.duration}</strong>
                  </li>
                  <li className="flex justify-between py-1.5">
                    <span className="text-slate-400">{lang === "VN" ? "Kết quả đạt được" : "Outcome"}</span>
                    <strong className="text-teal-brand font-bold text-right max-w-[220px]">{cs.result}</strong>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================
          SECTION 6: APPOINTMENT / CONSULTATION BOOKING CARD
          ======================================================== */}
      <section className="bg-[#0b1e2c] text-white p-8 sm:p-12 rounded-3xl shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <span className="text-xs font-bold tracking-widest text-teal-brand uppercase">
            {lang === "VN" ? "ĐẶT LỊCH KHÁM TRỰC TIẾP" : "DIRECT CLINICAL CONSULTATION"}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold leading-tight">
            {lang === "VN" 
              ? `Nhận phác đồ điều trị trực tiếp từ ${name}` 
              : `Get a direct treatment plan from ${name}`}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-2xl leading-relaxed">
            {lang === "VN"
              ? "Đăng ký tư vấn trực tiếp với bác sĩ. Đội ngũ chuyên khoa sẽ lập kế hoạch điều trị chi tiết bằng văn bản kèm báo giá AUD hoàn toàn miễn phí."
              : "Request a consultation. Dr. " + name + " and our team will issue a comprehensive written AUD treatment plan 100% free of charge."}
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
          <Link
            href="/contact"
            className="w-full text-center bg-teal-brand hover:bg-teal-brand-hover text-[#0b1e2c] py-4 px-6 font-bold text-sm rounded-full transition-all shadow-md block cursor-pointer"
          >
            {lang === "VN" ? "Đăng ký tư vấn miễn phí" : "Request Free Treatment Plan"}
          </Link>
          <Link
            href="/cost"
            className="w-full text-center bg-slate-800 hover:bg-slate-700 text-[#0b1e2c] py-4 px-6 font-bold text-sm rounded-full transition-all border border-slate-700 block cursor-pointer text-white"
          >
            {lang === "VN" ? "Xem bảng giá chi tiết" : "View Full Price List"}
          </Link>
        </div>
      </section>

    </div>
  );
}
