import { createContext, useContext, useEffect, useState } from "react";

const SliderContext = createContext({
  isNavOpen: "",
  handleClose: () => {},
  handleOpen: () => {},
});

export function SliderContextProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleOpen = () => setIsNavOpen(true);
  const handleClose = () => setIsNavOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsNavOpen(false);
      }
    };

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SliderContext.Provider value={{ isNavOpen, handleClose, handleOpen }}>
      {children}
    </SliderContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSlider() {
  const context = useContext(SliderContext);
  return context;
}
