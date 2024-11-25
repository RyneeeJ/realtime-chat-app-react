import { createContext, useContext, useState } from "react";

const SliderContext = createContext({
  isNavOpen: "",
  handleClose: () => {},
  handleOpen: () => {},
});

export function SliderContextProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleOpen = () => setIsNavOpen(true);
  const handleClose = () => setIsNavOpen(false);

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
