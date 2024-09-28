import { lazy, Suspense } from "react";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ContactUs from "./components/Main/ContactUs";
import Loader from "./UI/Loader";

const Services = lazy(() => import("./components/Services/Services"));
const GlobalCount = lazy(() => import("./components/Main/GlobalCount"));
const Testimonials = lazy(() => import("./components/Main/Testimonials"));
const FAQ = lazy(() => import("./components/Main/FAQ"));

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Suspense fallback={<Loader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <GlobalCount />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Testimonials />
        </Suspense>
        <FAQ />
        <ContactUs />
      </main>
      <CTA />
      <Footer />
    </>
  );
}

export default App;
