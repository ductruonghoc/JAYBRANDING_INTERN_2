import Header from "./header";
import Thumbnail from "./thumbnail";

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
    </div>
  )
}