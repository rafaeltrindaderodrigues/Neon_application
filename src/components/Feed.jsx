import Box from "./Box";
import './Feed.css'

export default function Feed() {
  return(
    <div className="px-6 text-white h-130 overflow-y-auto py-6 scrollbar-y-hide space-y-5">
      <Box/>
    </div>
  );
}