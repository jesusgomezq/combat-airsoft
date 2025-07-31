import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import HeroSection from "../../components/HeroSection/HeroSection";
import Layout from "../../components/Layout/Layout";
import News from "../../components/News/News";
import ProductCard from "../../components/PorductCard/ProductCard";
import Testimonial from "../../components/Testimonial/Testimonial";




const HomePage = () => {
  const dispatch = useDispatch()
  const cartItem = useSelector((state) => state.cart)
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <News />
      <Testimonial />
    </Layout>
  );
};

export default HomePage;