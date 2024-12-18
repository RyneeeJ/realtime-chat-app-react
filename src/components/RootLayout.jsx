import { Suspense } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Loader from "./Loader";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import { SliderContextProvider } from "../contexts/SliderContext";

function RootLayout() {
  return (
    <SliderContextProvider>
      <div className="relative mx-auto flex h-full max-w-6xl flex-col overflow-x-hidden">
        <Header />

        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Loader />}>
            <MainContent />
          </Suspense>
        </ErrorBoundary>
      </div>
    </SliderContextProvider>
  );
}

export default RootLayout;
