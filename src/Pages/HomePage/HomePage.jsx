import Filter from "../../components/Filter/Filter";
import HeroSection from "../../components/HeroSection/HeroSection";
import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/PorductCard/ProductCard";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
    </Layout>
  );
};

export default HomePage;
