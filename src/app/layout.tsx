import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexa Code",
  description:
    "Nexa Code에서는 비즈니스를 발전시키는 혁신적인 소프트웨어 솔루션을 만드는 데 열정을 쏟고 있습니다. 숙련된 개발자와 디자이너로 구성된 당사 팀은 협력하여 귀하의 고유한 요구 사항에 맞는 최첨단 응용 프로그램을 만듭니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
