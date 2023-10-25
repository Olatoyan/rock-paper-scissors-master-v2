import Rules from "./Rules";
import ToggleSection from "./ToggleSection";

function Footer() {
  return (
    <footer className="flex items-center justify-between w-full px-12">
      <ToggleSection />
      <Rules />
    </footer>
  );
}

export default Footer;
