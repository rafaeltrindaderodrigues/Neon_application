import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import './FooterHome.css'

export default function FooterHome() {

  const [activeTab, setActiveTab] = useState('home');
  
  return(   
    <footer className="w-full absolute bottom-0 bg-gray-500/20 border-t border-t-gray-500/60 rounded-t-md px-6 py-3 text-white">
      {/* Div que abrange todos os icones e textos */}
      <div className="flex justify-between items-center">
        <div className="w-10 flex justify-center">
          <button onClick={() => setActiveTab('home')} className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${activeTab === 'home' ? 'bg-(--primary-color) text-white' : ''}`}>  
            <i className={`fa-solid fa-house ${activeTab === 'home' ? 'animate-bottom-navbar-mobile' : ''}`}></i>
          </button>
        </div>
        <div className="w-10 flex justify-center">
          <button onClick={() => setActiveTab('message')} className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${activeTab === 'message' ? 'bg-(--primary-color) text-white' : ''}`}>
            <i className={`fa-solid fa-message ${activeTab === 'message' ? 'animate-bottom-navbar-mobile' : ''}`}></i>
          </button>
        </div>
        <div className="w-10 flex justify-center">
          <button className="w-8 h-8 flex items-center justify-center text-xl bg-(--primary-color) text-white rounded-full cursor-pointer">
            +
          </button>
        </div>
        <div className="w-10 flex justify-center">
          <button onClick={() => setActiveTab('bell')} className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${activeTab === 'bell' ? 'bg-(--primary-color) text-white' : ''}`}>
            <i className={`fa-solid fa-bell ${activeTab === 'bell' ? 'animate-bottom-navbar-mobile' : ''}`}></i>
          </button>
        </div>
        <div className="w-10 flex justify-center">
          <button onClick={() => setActiveTab('user')} className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${activeTab === 'user' ? 'bg-(--primary-color) text-white' : ''}`}>
            <i className={`fa-solid fa-user ${activeTab === 'user' ? 'animate-bottom-navbar-mobile' : ''}`}></i>
          </button>
        </div>
      </div>
    </footer>
  );
}