import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "مِتریکا | سرمایه‌گذاری در ملک", description: "دموی پلتفرم سرمایه‌گذاری کسری در املاک" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
