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

// export const metadata = {
//   title: "Чайна Перетвореного Світогляду",
//   description: "Чайна Перетвореного Світогляду",
// };
// make server metadata

export default function RootLayout({ children }) {
  // State to show ditailed section
  const [activeSection, setActiveSection] = useState("");

  // State to reset selected tea
  const [selectedTea, setSelectedTea] = useState(null);
  const [selectedTableware, setSelectedTableware] = useState(null);

  // Function to handle section click
  const handleSectionClick = (section) => {
    if (section === "tea") {
      setSelectedTea(null);
    } else if (section === "tableware") {
      setSelectedTableware(null);
    }
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  // Function to handle back click
  const handleBackClick = () => {
    setActiveSection(""); // Сбрасываем активную секцию, чтобы вернуть на главный экран
  };

  return (
    <html lang="ua">
      <body className={`font-mono antialiased`}>
        <Header
          onSectionClick={handleSectionClick}
          onBack={handleBackClick}
          activeSection={activeSection}
        />
        <main className={`${activeSection ? "hidden" : "block"}`}>
          {children}
        </main>
        {activeSection === "tea" && (
          <DetailedTea
            onBack={handleBackClick}
            selectedTea={selectedTea}
            onSelectTea={setSelectedTea}
          />
        )}
        {activeSection === "tableware" && (
          <DetailedTableware
            onBack={handleBackClick}
            selectedTableware={selectedTableware}
            onSelectTableware={setSelectedTableware}
            activeSection={activeSection}
          />
        )}
        {activeSection === "school" && (
          <DetailedSchool onBack={handleBackClick} />
        )}
        <Footer activeSection={activeSection} />
      </body>
    </html>
  );
}
