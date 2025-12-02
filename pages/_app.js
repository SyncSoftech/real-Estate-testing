import "@/styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function App({ Component, pageProps }) {
  return (
    <>
     
        <Navbar />
        <div className="mt-20">
        <Component {...pageProps} />
        </div>
        <Footer />       
    </>
  );
}
