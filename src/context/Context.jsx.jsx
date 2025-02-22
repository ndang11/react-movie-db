import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MovieContext = createContext();

export function ContextData({ children }) {
    const [seletectedMovie, setSelectedMovie] = useState(null)

    return (
        <MovieContext.Provider value={{ seletectedMovie, setSelectedMovie }}>
            {children}
        </MovieContext.Provider>
    )
}
ContextData.propTypes = {
    children: PropTypes.node
}
export default ContextData;
