import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import TrustSection from "@/components/TrustSection"
import SearchFilterSection from "@/components/SearchFilterSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustSection />
      <SearchFilterSection />
      <Footer />
    </div>
  )
}