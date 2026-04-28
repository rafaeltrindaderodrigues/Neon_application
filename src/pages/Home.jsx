import Feed from '../components/Feed';
import FooterHome from '../components/FooterHome'
import Navbar from '../components/Navbar';
import NavbarMobile from '../components/NavbarMobile';
import Stories from '../components/Stories';

export default function Home() {
  return (
    <div className="w-full flex flex-col h-screen relative bg-(--background-color) overflow-hidden">
      <NavbarMobile />
      
      <Navbar/>

      <div className='flex-1 overflow-y-auto scrollbar-y-hide pt-20 sm:pt-10'>
        <Stories />

        <Feed />
      </div>

      <FooterHome />
    </div>
  );
}