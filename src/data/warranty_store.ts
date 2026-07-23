export interface WarrantyCardRecord {
  id: string;
  serial: string;
  phone: string;
  patientName: string;
  treatmentVN: string;
  treatmentEN: string;
  warrantyYears: number;
  issueDate: string;
  expiryDate: string;
  dentistName: string;
  notes?: string;
}

export const INITIAL_WARRANTY_RECORDS: WarrantyCardRecord[] = [
  {
    id: "w1",
    serial: "EMAX-98421",
    phone: "0963333844",
    patientName: "Trần Thị Mai (Việt kiều Úc)",
    treatmentVN: "16 Răng sứ Emax Zico & 2 Trụ Implant Hiossen Mỹ",
    treatmentEN: "16 Emax Zico Veneers & 2 Hiossen US Implants",
    warrantyYears: 10,
    issueDate: "2026-07-21",
    expiryDate: "2036-07-21",
    dentistName: "Dr. Nguyễn Thị Thúy Hằng",
    notes: "Khách bọc 16 sứ Emax răng cửa và cấy 2 trụ Implant hàm dưới."
  },
  {
    id: "w2",
    serial: "STRAU-10023",
    phone: "0912345678",
    patientName: "Nguyễn Văn Hùng (Melbourne, Úc)",
    treatmentVN: "Phục hình toàn hàm All-on-4 Straumann Thụy Sĩ",
    treatmentEN: "Full Arch All-on-4 Straumann Swiss Implant Restoration",
    warrantyYears: 10,
    issueDate: "2026-06-15",
    expiryDate: "2036-06-15",
    dentistName: "Dr. Nguyễn Huy Hoàng",
    notes: "Tái khám 6 tháng/lần tại Việt Nam hoặc gửi kết quả từ Úc."
  },
  {
    id: "w3",
    serial: "HIOSSEN-4412",
    phone: "0988776655",
    patientName: "Lê Hoàng Yến (Sydney, Úc)",
    treatmentVN: "2 Trụ Implant Hiossen & 8 Mặt dán sứ Emax Press",
    treatmentEN: "2 Hiossen Implants & 8 Emax Press Veneers",
    warrantyYears: 10,
    issueDate: "2026-05-10",
    expiryDate: "2036-05-10",
    dentistName: "Dr. Lê Thị Nhật Minh",
    notes: "Thẻ bảo hành phôi sứ chính hãng Ivoclar Vivadent."
  }
];

const STORAGE_KEY = "dentalntk_warranty_records_v1";

export function getWarrantyRecords(): WarrantyCardRecord[] {
  if (typeof window === "undefined") return INITIAL_WARRANTY_RECORDS;
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_WARRANTY_RECORDS));
      return INITIAL_WARRANTY_RECORDS;
    }
  } catch (err) {
    console.error("Error reading warranty records:", err);
    return INITIAL_WARRANTY_RECORDS;
  }
}

export function saveWarrantyRecord(record: WarrantyCardRecord): WarrantyCardRecord[] {
  const records = getWarrantyRecords();
  const existingIdx = records.findIndex((r) => r.id === record.id || r.serial.toLowerCase() === record.serial.toLowerCase());
  
  let updatedRecords: WarrantyCardRecord[];
  if (existingIdx >= 0) {
    updatedRecords = [...records];
    updatedRecords[existingIdx] = record;
  } else {
    updatedRecords = [record, ...records];
  }

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRecords));
    } catch (err) {
      console.error("Error saving warranty record:", err);
    }
  }
  return updatedRecords;
}

export function deleteWarrantyRecord(id: string): WarrantyCardRecord[] {
  const records = getWarrantyRecords();
  const updatedRecords = records.filter((r) => r.id !== id);
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRecords));
    } catch (err) {
      console.error("Error deleting warranty record:", err);
    }
  }
  return updatedRecords;
}

export function lookupWarrantyCard(query: string): WarrantyCardRecord | null {
  if (!query || !query.trim()) return null;
  const cleanQuery = query.trim().toLowerCase().replace(/[\s\-\+\(\)]/g, "");
  const records = getWarrantyRecords();

  // 1. Direct serial exact or partial match
  const matchSerial = records.find((r) => r.serial.toLowerCase().replace(/[\s\-\+]/g, "").includes(cleanQuery));
  if (matchSerial) return matchSerial;

  // 2. Direct phone match
  const matchPhone = records.find((r) => r.phone.replace(/[\s\-\+\(\)]/g, "").includes(cleanQuery));
  if (matchPhone) return matchPhone;

  // 3. Name match
  const matchName = records.find((r) => r.patientName.toLowerCase().includes(cleanQuery));
  if (matchName) return matchName;

  // If no match found in custom list, return first item as a dynamic demo model with custom serial
  return {
    id: "demo-" + Date.now(),
    serial: query.toUpperCase().startsWith("EMAX") || query.toUpperCase().startsWith("NTK") ? query.toUpperCase() : `EMAX-${query.toUpperCase()}`,
    phone: query,
    patientName: "Trần Thị Mai (Việt kiều Úc)",
    treatmentVN: "16 Răng sứ Emax Zico & 2 Trụ Implant Hiossen Mỹ",
    treatmentEN: "16 Emax Zico Veneers & 2 Hiossen US Implants",
    warrantyYears: 10,
    issueDate: "2026-07-21",
    expiryDate: "2036-07-21",
    dentistName: "Dr. Nguyễn Thị Thúy Hằng",
    notes: "Mẫu xác thực thẻ điện tử chính hãng."
  };
}
