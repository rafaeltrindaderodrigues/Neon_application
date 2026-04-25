import FooterHome from '../components/FooterHome'
import NavbarMobile from '../components/NavbarMobile';
import Stories from '../components/Stories';

export default function Home() {
  return(
    <div className="w-full h-screen relative bg-(--background-color)">
      <NavbarMobile/>

      <div className='pt-20'>
        <Stories/>
      </div>
      
      <FooterHome/>
    </div>
  );
}