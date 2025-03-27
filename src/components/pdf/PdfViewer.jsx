import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/utils/context/Wrapper";

const PdfViewer = ({ fileUrl, onClose }) => {
    const { setIsPdf } = useContext(CartContext);

    return (
        <div className="fixed top-0 left-0 z-[999] bg-[#000000e2] w-full h-[100dvh] flex items-center justify-center flex-col p-4">
            {/* Close Button */}
            <button onClick={() => setIsPdf(false)} className="absolute z-[999] top-6 right-6 bg-white w-[35px] h-[35px] flex items-center justify-center rounded-full shadow-lg">
                <i className="ri-close-line"></i>
            </button>

            {/* PDF Viewer */}
            <div className="sm:w-[350px] md:w-[600px] w-[1000px] sm:h-[35vh] md:h-[65vh] h-[90vh] flex items-center justify-center bg-white shadow-lg rounded-lg p-4 overflow-hidden">
                <iframe src={fileUrl} className="w-full h-full border-none"></iframe>
            </div>
        </div>
    );
};

export default PdfViewer;
