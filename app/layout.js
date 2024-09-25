import Preloader from "@/layout/Preloader";
import "@css/bootstrap.min.css";
import "@css/font-awesome-pro.css";
import "@css/fxotary-icon.css";
import "@css/responsive.css";
import "@css/slick.css";
import "@css/spacing.css";
import "@css/style.css";
import "./globals.css";

export const metadata = {
  title: "Mount Cyber- Digital Marketing Company",
  description: "We are aTech company that helps buisnesses grow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
