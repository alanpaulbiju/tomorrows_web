import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FeaturedProperties from "@/components/FeaturedProperties";

export default function RentPage() {
  return (
    <>
      <Navbar />

      <PageHero
        title="Rent Property"
        subtitle="Find luxury rentals and commercial spaces worldwide."
      />

      <FeaturedProperties />

      <Footer />
    </>
  );
}
