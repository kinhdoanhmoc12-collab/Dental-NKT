/**
 * Timezone Helper Utility
 * Converts Australian/New Zealand timezone bookings to Vietnam local time (ICT, UTC+7).
 */

export interface BookingTimeDetail {
  originalTime: string; // ISO string or datetime-local value
  sourceTimezone: 'AEST' | 'AEDT' | 'ACST' | 'ACDT' | 'AWST' | 'NZST' | 'NZDT' | 'UTC';
}

export function convertToVietnamTime(booking: BookingTimeDetail): Date {
  const date = new Date(booking.originalTime);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid booking date provided.');
  }

  // Timezone offsets relative to UTC in minutes
  const timezoneOffsets: Record<string, number> = {
    AEST: 10 * 60,  // UTC+10
    AEDT: 11 * 60,  // UTC+11
    ACST: 9.5 * 60, // UTC+9.5
    ACDT: 10.5 * 60,// UTC+10.5
    AWST: 8 * 60,   // UTC+8
    NZST: 12 * 60,  // UTC+12
    NZDT: 13 * 60,  // UTC+13
    UTC: 0
  };

  const offsetMinutes = timezoneOffsets[booking.sourceTimezone] ?? 10 * 60; // Default to AEST

  // Convert local source date back to absolute UTC by subtracting offset
  const utcMillis = date.getTime() - (offsetMinutes * 60 * 1000);

  // Return the converted Date object
  return new Date(utcMillis);
}

/**
 * Formats a Date object to a readable string in Vietnam Time (ICT)
 */
export function formatVietnamTime(date: Date): string {
  // Add UTC+7 offset (7 hours in milliseconds) to format local ICT
  const ictDate = new Date(date.getTime() + (7 * 60 * 60 * 1000));
  
  const yyyy = ictDate.getUTCFullYear();
  const mm = String(ictDate.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(ictDate.getUTCDate()).padStart(2, '0');
  const hh = String(ictDate.getUTCHours()).padStart(2, '0');
  const min = String(ictDate.getUTCMinutes()).padStart(2, '0');

  return `${dd}/${mm}/${yyyy} ${hh}:${min} (Vietnam Local Time)`;
}
