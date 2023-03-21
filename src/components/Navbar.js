import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <div className="relative">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
}
