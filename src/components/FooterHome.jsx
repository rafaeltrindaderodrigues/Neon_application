import { Link, useLocation } from "react-router-dom"
import './FooterHome.css'

export default function FooterHome() {

  const location = useLocation();
  
  console.log(location)

  return(   
    <footer className="sm:hidden w-full absolute bottom-0 bg-gray-500/20 border-t border-t-gray-500/60 rounded-t-md px-6 py-3 text-white">
      {/* Div que abrange todos os icones e textos */}
      <div className="flex justify-between items-center">
        <div className="w-10 flex justify-center">
          <Link to={'/home'} className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${location.pathname === '/home' ? 'bg-(--primary-color) text-white' : ''}`}>  
            <i className={`fa-solid fa-house ${location.pathname === '/home' ? 'animate-bottom-navbar-mobile' : ''}`}></i>
          </Link>
        </div>
        <div className="w-10 flex justify-center">
          <Link to={'/messages'} className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${location.pathname === '/messages' ? 'bg-(--primary-color) text-white' : ''}`}>
            <i className={`fa-solid fa-message ${location.pathname === '/messages' ? 'animate-bottom-navbar-mobile' : ''}`}></i>
          </Link>
        </div>
        <div className="w-10 flex justify-center">
          <button className="w-8 h-8 flex items-center justify-center text-xl bg-(--primary-color) text-white rounded-full cursor-pointer">
            +
          </button>
        </div>
        <div className="w-10 flex justify-center">
          <Link to={'/notifications'} className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${location.pathname === '/notifications' ? 'bg-(--primary-color) text-white' : ''}`}>
            <i className={`fa-solid fa-bell ${location.pathname === '/notifications' ? 'animate-bottom-navbar-mobile' : ''}`}></i>
          </Link>
        </div>
        <div className="w-10 flex justify-center">
          <button className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${location.pathname === 'user' ? 'bg-(--primary-color) text-white' : ''}`}>
            <i className={`fa-solid fa-user ${location.pathname === 'user' ? 'animate-bottom-navbar-mobile' : ''}`}></i>
          </button>
        </div>
      </div>
    </footer>
  );
}