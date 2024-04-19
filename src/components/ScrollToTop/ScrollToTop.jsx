import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    goToTop();
  }, [pathname]);

  return (
    <>
      <div
        onClick={goToTop}
        className="animate-bounce-slow fixed right-8 bottom-8 bg-primary w-12 h-12 flex flex-row justify-center items-center rounded-full shadow-xl cursor-pointer z-50"
      >
        <ChevronUp className="text-3xl text-white" />
      </div>
    </>
  );
};

export default ScrollToTop;
