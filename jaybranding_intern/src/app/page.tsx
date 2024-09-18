import Header from "./header";
import Thumbnail from "./thumbnail";
import Contact from "./contact"
import Introduce from "./Intro";
import Products from "./products";
import News from "./news";
import PartnerComponent from "./partner";
import Footer from "./footer";

export default function Component() {
  return (
    <div
      className="relative 
                w-full">
      <div className="relative
                      w-full">
        <Header />
        <Thumbnail></Thumbnail>
        <Introduce></Introduce>
        <Products/>
        <News/>
        <PartnerComponent/>
        <div
          className="w-full
                    max-md:hidden">
            <Footer/>
        </div>
      </div>
      <div
        className="fixed right-[22px] bottom-[22px]
                  max-md:hidden">
          <Contact/>
      </div>
    </div>
  )
}