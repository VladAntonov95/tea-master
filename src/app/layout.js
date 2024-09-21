// import styles
import Footer from "@/components/layout/Footer/Footer";
import "../styles/globals.css";

// import Header component
import Header from "@/components/layout/Header/Header";

import { Crimson_Pro, Roboto } from "next/font/google";

const crimsonPro = Crimson_Pro({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["cyrillic"],
  display: "swap",
});

export const metadata = {
  title: "Чайна Перетвореного Світогляду",
  description: "Чайна Перетвореного Світогляду",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <body className={`${roboto.variable} ${crimsonPro.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
