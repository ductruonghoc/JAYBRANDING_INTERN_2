import Header from "./header";
import Thumbnail from "./thumbnail";
import Contact from "./contact"
import Introduce from "./Intro";

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
      </div>
      <div
        className="fixed right-[22px] bottom-[22px]
                  max-md:hidden">
          <Contact/>
      </div>
    </div>
  )
}