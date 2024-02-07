import { createPortal } from "react-dom";
import useLoading from "@/app/_hooks/useLoading";

const LoadingIndicator: React.FC = () => {
  const { loading } = useLoading();

  const display = loading
    ? createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-65 z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>,
        document.body
      )
    : null;

  return display;
};

export default LoadingIndicator;
