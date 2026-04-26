import FooterHome from "../components/FooterHome";
import { Link } from "react-router-dom";
import Stories from "../components/Stories";

export default function Messages() {
  return <div className="w-full h-screen relative bg-(--background-color) text-white">

    {/* Navigation Messages */}
    <nav className="w-full absolute top-0 py-3 px-5 border-b border-b-gray-500/60 ">
      <div className="flex justify-between items-center">
        <Link to={'/home'}>
          <i class="fa-solid fa-chevron-left cursor-pointer bg-[#0e0e0e]"></i>
        </Link>
        <span>Messages</span>
        <i class="fa-solid fa-feather-pointed text-(--primary-color) cursor-pointer"></i>
      </div>
    </nav>

    {/* Stories */}
    <div className="pt-20 mb-4">
      <Stories />
    </div>

    {/* Messages section */}
    <section className="bg-gray-700/10 px-6 py-4 space-y-8 border-t border-t-gray-500/60">

      {/* User div */}
      <div className="flex space-x-5 items-center">
        {/* image and online icon */}
        <div className="relative">
          <img src="./user_image.jpeg" alt="userImage" className="w-16 h-12 object-cover rounded-full" />
          <div className="w-3 h-3 bg-green-500 absolute bottom-0 right-0 rounded-full"></div>
        </div>

        {/* Coluna do nome e mensagem */}
        <div className="w-full">
          {/* name - time */}
          <div className="flex justify-between">
            <span>Ana C.</span>
            <span className="text-[0.8rem] text-(--primary-color)">10m ago</span>
          </div>
          {/* message - visualize circle */}
          <div className="flex justify-between items-center">
            <span>Oii, tudo bem?</span>
            <div className="w-3 h-3 bg-(--primary-color) rounded-full"></div>
          </div>
        </div>
      </div>

      {/* User div */}
      <div className="flex space-x-5 items-center">
        {/* image and online icon */}
        <div className="relative">
          <img src="./user_story.jpeg" alt="userStory" className="w-16 h-12 object-cover rounded-full" />
          <div className="hidden w-3 h-3 bg-green-500 absolute bottom-0 right-0 rounded-full"></div>
        </div>

        {/* Coluna do nome e mensagem */}
        <div className="w-full">
          {/* name - time */}
          <div className="flex justify-between">
            <span>Rafael</span>
            <span className="text-[0.8rem] text-(--primary-color)">2m ago</span>
          </div>
          {/* message - visualize circle */}
          <div className="flex justify-between items-center">
            <span>Vai sair hoje mano?</span>
            <div className="w-3 h-3 bg-(--primary-color) rounded-full"></div>
          </div>
        </div>
      </div>

      {/* User div */}
      <div className="flex space-x-5 items-center">
        {/* image and online icon */}
        <div className="relative">
          <img src="./user_story2.jpeg" alt="userStory2" className="w-16 h-12 object-cover rounded-full" />
          <div className="w-3 h-3 bg-green-500 absolute bottom-0 right-0 rounded-full"></div>
        </div>

        {/* Coluna do nome e mensagem */}
        <div className="w-full">
          {/* name - time */}
          <div className="flex justify-between">
            <span>Pietra</span>
            <span className="text-[0.8rem] text-(--primary-color)">1h ago</span>
          </div>
          {/* message - visualize circle */}
          <div className="flex justify-between items-center">
            <span>Nossa véi</span>
            <div className="w-3 h-3 bg-(--primary-color) rounded-full"></div>
          </div>
        </div>
      </div>

    </section>

    <FooterHome />
  </div>

}