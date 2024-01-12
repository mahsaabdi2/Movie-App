import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { createPortal } from "react-dom";
import { ImSpinner8 } from "react-icons/im";

const Loading= () =>{

  const isFetching= useIsFetching();
  const isMutating=useIsMutating();

 
    return createPortal(
       <>
       {(!!isFetching || !!isMutating) &&(
        <div className="fixed right-0 top-0 left-0 bottom-0 w-screen h-screen flex items-center justify-center bg-black">
            
            <ImSpinner8 className="text-4xl animate-spin text-white"/>

            </div>
)}
      
       </>,
       document.getElementById("modal")
    )
};

export default Loading;