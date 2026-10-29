import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './ScrollToHash.css'

export default function ScrollToHash() {
const { pathname, hash } = useLocation();

    useEffect(() => {
    if (!hash) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
    }

const id = decodeURIComponent(hash.slice(1));

const scrollToSection = () => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const frame = window.requestAnimationFrame(scrollToSection);

return () => window.cancelAnimationFrame(frame);

}, [pathname, hash]);

return null;
}