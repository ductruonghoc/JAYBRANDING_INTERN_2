import Header from "./header";
import Thumbnail from "./thumbnail";
import Contact from "./contact"

export default function Component() {
  return (
    <div
      className="relative 
                w-full">
      <div className="relative
                      w-full">
        <Header />
        <Thumbnail></Thumbnail>
      </div>
      <div
        className="fixed right-[22px] bottom-[22px]">
          <Contact/>
      </div>
    </div>
  )
}