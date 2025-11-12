import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SearchFilterSection from "@/components/SearchFilterSection"

export default function FindPGsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-beige to-white">
      <Header />
      <div className="pt-24">
        <SearchFilterSection />
      </div>
      <Footer />
    </div>
  )
}
