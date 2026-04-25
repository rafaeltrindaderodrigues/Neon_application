export default function Stories() {
  return <div className="px-6 flex justify-between items-center overflow-x-auto text-white">
    <div className="">
      <div className="border border-(--primary-color) w-15 h-15 rounded-full flex items-center justify-center">
        <span className="bg-gray-800 w-13 h-13 flex justify-center items-center rounded-full">+</span>
      </div>

      <p>Your stories</p>
    </div>
    <div className="text-white border border-(--primary-color)">
      +
    </div>
    <div className="text-white border border-(--primary-color)">
      +
    </div>
  </div>
}