import { useState } from "react"

export default function NavbarMobile() {

  const [searchActive, setSearchActive] = useState(false);

  return(
    <nav className="sm:hidden w-full absolute top-0 bg-[#0e0e0e] border border-b-gray-500/60 flex justify-between items-center py-3 px-5">
      <div className="flex items-center">
        <div className="absolute">
          <i className="fa-solid fa-search text-(--primary-color)" onClick={() => setSearchActive(!searchActive)}></i>
          {searchActive && (
            <input type="text" placeholder="Search for..." className="relative bottom-[-45px] left-[-20px] text-white w-50 bg-gray-900 py-2 px-4 outline-none rounded-md slide-search-bar"/>
          )}
        </div>
      </div>
      <span className="text-(--primary-color) ">NEON</span>
      <img src="./user_image.jpeg" alt="user_image" className="w-8 h-8 rounded-full object-cover border border-(--primary-color) p-1"/>
    </nav>
  )
}