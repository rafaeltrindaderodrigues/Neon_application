export default function Box() {
  return(
    <div className="bg-gray-700/10 p-4 rounded-lg border border-gray-600/80 sm:w-[50%]">
      {/* post headline */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-5">
          <img src="./user_image.jpeg" alt="userImage" className="w-12 h-12 rounded-full object-cover"/>
          <div className="leading-5">
            <h4 className="text-lg">Rafael</h4>
            <span className="text-[0.8rem] text-gray-500">2h ago</span>
          </div>
        </div>
        <i class="fa-solid fa-ellipsis cursor-pointer"></i>
      </div>

      {/* post text */}
      <div className="mb-4">
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam autem, esse perspiciatis culpa aperiam dicta quod nulla porro modi quo consequatur delectus expedita. Facere natus possimus ex incidunt qui iusto?</p>
      </div>

      {/* post image */}
      <div className="rounded-lg border border-gray-600/80 mb-4">
        <img src="ferrari.jpeg" alt="ferrari" className="w-full h-60 object-cover rounded-lg"/>
      </div>

      {/* seção de corações e comentários */}
      <div className="flex items-center justify-between">

        {/* Lado esquerdo */}
        <div className="flex space-x-5">
          {/* Likes */}
          <div className="space-x-2">
            <i class="fa-regular fa-heart"></i>
            <span>842</span>
          </div>
          
          {/* Comentários */}
          <div className="space-x-2">
            <i class="fa-regular fa-message"></i>
            <span>13</span>
          </div>

          {/* Send */}
          <div className="space-x-2">
            <i class="fa-regular fa-paper-plane"></i>
          </div>
        </div>

        {/* Lado direito */}
        <div>
          <i class="fa-regular fa-bookmark"></i>
        </div>
      </div>
    </div>
  );
}