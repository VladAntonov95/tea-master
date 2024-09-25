"use client";
// import useState from react
import { useState } from "react";

// import styles
import "../styles/globals.css";

// import Header and Footer components
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

// import detailed sections
import DetailedTea from "@/sections/DetailedTea/DetailedTea";
import DetailedTableware from "@/sections/DetailedTableware/DetailedTableware";
import DetailedSchool from "@/sections/DetailedSchool/DetailedSchool";

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

// export const metadata = {
//   title: "Чайна Перетвореного Світогляду",
//   description: "Чайна Перетвореного Світогляду",
// };

export default function RootLayout({ children }) {
  // State to show ditailed section
  const [activeSection, setActiveSection] = useState("");

  // Function to handle section click
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  // Function to handle back click
  const handleBackClick = () => {
    setActiveSection(""); // Сбрасываем активную секцию, чтобы вернуть на главный экран
  };

  return (
    <html lang="ua">
      <body className={`${roboto.variable} ${crimsonPro.variable} antialiased`}>
        <Header onSectionClick={handleSectionClick} onBack={handleBackClick} />
        <main className={`${activeSection ? "hidden" : "block"}`}>
          {children}
        </main>
        {activeSection === "tea" && <DetailedTea onBack={handleBackClick} />}
        {activeSection === "tableware" && (
          <DetailedTableware onBack={handleBackClick} />
        )}
        {activeSection === "school" && (
          <DetailedSchool onBack={handleBackClick} />
        )}
        <Footer />
      </body>
    </html>
  );
}
