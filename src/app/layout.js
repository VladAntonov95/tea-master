"use client";
import "../styles/globals.css";
import { CartProvider, useCart } from "@/context/CartContext";
import { SectionProvider } from "@/context/SectionContext";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import DetailedTea from "@/sections/DetailedTea/DetailedTea";
import DetailedTableware from "@/sections/DetailedTableware/DetailedTableware";
import DetailedSchool from "@/sections/DetailedSchool/DetailedSchool";
import History from "@/sections/History/History";
import Cart from "@/sections/Cart/Cart";
import { useSection } from "@/context/SectionContext";

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <SectionProvider>
        <LayoutContent>{children}</LayoutContent>
      </SectionProvider>
    </CartProvider>
  );
}

function LayoutContent({ children }) {
  const {
    activeSection,
    setActiveSection,
    selectedTea,
    setSelectedTea,
    selectedTableware,
    setSelectedTableware,
  } = useSection();
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
