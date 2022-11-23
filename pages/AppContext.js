import { createContext } from "react";
import React,{ useState } from "react";



export const contexto = createContext();
const {Provider} = contexto;

const AppContext = ({children}) => {
   
    const [translation , setTranslation] = useState(false)


    

    return (
        <Provider value={{setTranslation,translation}}>
            {children}
        </Provider>
    );
}



export default AppContext