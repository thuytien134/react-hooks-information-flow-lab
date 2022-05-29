import React from "react";



function Header({onDarkModeClick, isDarkMode}){
    return(
        <button onClick={onDarkModeClick} >{isDarkMode ? "On Mode" : "Off Mode"}</button>
    )
}
export default Header