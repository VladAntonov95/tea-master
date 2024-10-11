// root layout

"use client";
import { useState } from "react";
import "../styles/globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import DetailedTea from "@/sections/DetailedTea/DetailedTea";
import DetailedTableware from "@/sections/DetailedTableware/DetailedTableware";
import DetailedSchool from "@/sections/DetailedSchool/DetailedSchool";
import History from "@/sections/History/History";
import Cart from "@/sections/Cart/Cart";
import { CartProvider, useCart } from "@/context/CartContext";

export default function RootLayout({ children }) {
  const [activeSection, setActiveSection] = useState("");
  const [selectedTea, setSelectedTea] = useState(null);
  const [selectedTableware, setSelectedTableware] = useState(null);

  return (
    <CartProvider>
      <LayoutContent
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        selectedTea={selectedTea}
        setSelectedTea={setSelectedTea}
        selectedTableware={selectedTableware}
        setSelectedTableware={setSelectedTableware}
      >
        {children}
      </LayoutContent>
    </CartProvider>
  );
}

function LayoutContent({
  activeSection,
  setActiveSection,
  selectedTea,
  setSelectedTea,
  selectedTableware,
  setSelectedTableware,
  children,
}) {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  const handleSectionClick = (section) => {
    if (section === "tea") {
      setSelectedTea(null);
    } else if (section === "tableware") {
      setSelectedTableware(null);
    }
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleBackClick = () => {
    setActiveSection("");
  };

  return (
    <html lang="ua">
      <body className={`font-mono antialiased`}>
        <Header
          onSectionClick={handleSectionClick}
          onBack={handleBackClick}
          activeSection={activeSection}
          cartItems={cartItems}
        />

        <main className={`${activeSection ? "hidden" : "block"}`}>
          {children}
        </main>

        {activeSection === "tea" && (
          <DetailedTea
            onBack={handleBackClick}
            selectedTea={selectedTea}
            onSelectTea={setSelectedTea}
            addToCart={addToCart}
          />
        )}
        {activeSection === "tableware" && (
          <DetailedTableware
            onBack={handleBackClick}
            selectedTableware={selectedTableware}
            onSelectTableware={setSelectedTableware}
            activeSection={activeSection}
            addToCart={addToCart}
          />
        )}
        {activeSection === "school" && (
          <DetailedSchool
            onBack={handleBackClick}
            activeSection={activeSection}
          />
        )}
        {activeSection === "cart" && (
          <Cart
            onBack={handleBackClick}
            activeSection={activeSection}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
        )}
        {activeSection === "history" && <History onBack={handleBackClick} />}
        <Footer activeSection={activeSection} />
      </body>
    </html>
  );
}
