import Box from "./Box";
import './Feed.css'

export default function Feed() {
  return (
    <div className="px-6 text-white py-6 scrollbar-y-hide space-y-5 sm:flex sm:flex-col sm:justify-center sm:items-center">
      <Box />
      <Box />
      <Box />
    </div>
  );
}