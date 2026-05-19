import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FeaturedProperties from "@/components/FeaturedProperties";

export default function BuyPage() {
  return (
    <>
      <Navbar />

      <PageHero
        title="Buy Property"
        subtitle="Explore premium international real estate opportunities."
      />

      <FeaturedProperties />

      <Footer />
    </>
  );
}
