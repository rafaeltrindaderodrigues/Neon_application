import FooterHome from "../components/FooterHome";
import NavbarMobile from "../components/NavbarMobile";
import Stories from "../components/Stories";

export default function Messages() {
  return <div className="w-full h-screen relative bg-(--background-color)">
    <div>
      {/* Construção dos elementos dentro da página Messages */}
      <NavbarMobile/>

      <div className="pt-20">
        {/* Stories */}
        <Stories/>

        <div className="messages">
          <div></div>
        </div>
      </div>

      <FooterHome/>
    </div>
  </div>
}