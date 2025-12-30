import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import font Inter
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import SmoothScrolling from "@/components/SmoothScrolling";
import "./globals.css";

// Cấu hình Font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Additiv3 - 3D Manufacturing",
  description: "High quality 3D manufacturing for teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <SmoothScrolling>
              {children}
            </SmoothScrolling>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}