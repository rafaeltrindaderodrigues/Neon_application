import Feed from '../components/Feed';
import FooterHome from '../components/FooterHome'
import NavbarMobile from '../components/NavbarMobile';
import Stories from '../components/Stories';

export default function Home() {
  return(
    <div className="w-full h-screen relative bg-(--background-color) overflow-y-auto">
      <NavbarMobile/>

      <div className='pt-20'>
        <Stories/>

        <Feed/>
      </div>
      
      <FooterHome/>
    </div>
  );
}