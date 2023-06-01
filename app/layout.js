import "./globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "GSAP animations",
  description: "Different animations with Gsap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} body`}>{children}</body>
    </html>
  );
}
