import './Stories.css';

export default function Stories() {
  return <div className="px-6 flex items-center sm:justify-center overflow-x-auto text-white space-x-5 no-scrollbar mb-4">
    {/* Story */}
    <div className="flex flex-col items-center space-y-2">
      <div className="border border-(--primary-color) w-20 h-20 rounded-full flex items-center justify-center">
        <span className="bg-gray-800/60 w-18 h-18 flex justify-center items-center rounded-full">+</span>
      </div>

      <p className="text-[0.6rem]">Your stories</p>
    </div>

    {/* Story */}
    <div className="flex flex-col items-center space-y-2">
      <div className="border border-(--primary-color) w-20 h-20 rounded-full flex items-center justify-center">
        <img src="./user_image.jpeg" alt="user_image" className="w-18 h-18 rounded-full object-cover"/>
      </div>

      <p className="text-[0.6rem]">Rafael</p>
    </div>

    {/* Story */}
    <div className="flex flex-col items-center space-y-2">
      <div className="border border-(--primary-color) w-20 h-20 rounded-full flex items-center justify-center">
        <img src="./user_story.jpeg" alt="user_story" className="w-18 h-18 rounded-full object-cover"/>
      </div>

      <p className="text-[0.6rem]">Pedro</p>
    </div>

    {/* Story */}
    <div className="flex flex-col items-center space-y-2">
      <div className="border border-(--primary-color) w-20 h-20 rounded-full flex items-center justify-center">
        <img src="./user_story2.jpeg" alt="user_story2" className="w-18 h-18 rounded-full object-cover"/>
      </div>

      <p className="text-[0.6rem]">Caio</p>
    </div>

    {/* Story */}
    <div className="flex flex-col items-center space-y-2">
      <div className="border border-(--primary-color) w-20 h-20 rounded-full flex items-center justify-center">
        <img src="./user_image.jpeg" alt="user_image" className="w-18 h-18 rounded-full object-cover"/>
      </div>

      <p className="text-[0.6rem]">Lorenzo</p>
    </div>

    {/* Story */}
    <div className="flex flex-col items-center space-y-2">
      <div className="border border-(--primary-color) w-20 h-20 rounded-full flex items-center justify-center">
        <img src="./user_story.jpeg" alt="user_story" className="w-18 h-18 rounded-full object-cover"/>
      </div>

      <p className="text-[0.6rem]">Rafael</p>
    </div>

    {/* Story */}
    <div className="flex flex-col items-center space-y-2">
      <div className="border border-(--primary-color) w-20 h-20 rounded-full flex items-center justify-center">
        <img src="./user_story2.jpeg" alt="user_story2" className="w-18 h-18 rounded-full object-cover"/>
      </div>

      <p className="text-[0.6rem]">Rafael</p>
    </div>
  </div>
}