import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function FooterHome() {

  const [homeActive, setHomeActive] = useState(false);
  const [messageActive, setMessageActive] = useState(false);
  const [bellActive, setBellActive] = useState(false);
  const [userActive, setUserActive] = useState(false);
  
  return(
    <footer className="w-full absolute bottom-0 bg-gray-500/20 border-t border-t-gray-500/60 rounded-t-md px-6 py-3 text-white">
      {/* Div que abrange todos os icones e textos */}
      <div className="flex justify-between items-center">
        {/* icone + texto */}
        <div>
          <button onClick={() => setHomeActive(!homeActive)} className="flex flex-col items-center space-y-1">
            <i className={`fa-solid fa-house ${homeActive && 'text-(--primary-color)'}`}></i>
            {homeActive && (<span className="text-(--primary-color) text-[8px] shadow">HOME</span>)}
          </button>
        </div>
        <div>
          <button onClick={() => setMessageActive(!messageActive)} className="flex flex-col items-center space-y-1">
            <i className={`fa-solid fa-message ${messageActive && 'text-(--primary-color)'}`}></i>
            {messageActive && (<span className="text-(--primary-color) text-[8px] shadow">MESSAGE</span>)}
          </button>
        </div>
        <div>
          <button className="text-xl bg-(--primary-color) rounded-full px-2 cursor-pointer">+</button>
        </div>
        <div>
          <button>
            <i class="fa-solid fa-bell"></i>
          </button>
        </div>
        <div>
          <button>
            <i class="fa-solid fa-user"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}