import FooterHome from "../components/FooterHome";
import NavbarMobile from "../components/NavbarMobile";

export default function Notification() {
  return(
    <section className="w-full flex flex-col h-screen relative bg-(--background-color)">
      <NavbarMobile/>
      
      <FooterHome/>
    </section>  
  );
}