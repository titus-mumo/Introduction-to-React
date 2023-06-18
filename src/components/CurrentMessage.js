import React from "react";
import Weekends from "./Weekends.js";
import Workdays from "./Workdays.js";

function CurrentMessage() {
    const day = new Date().getDay();
    return (
        <>
            {day >= 1 && day <= 5
                ? <Workdays />
                : <Weekends />
            }
        </>
    )
}

export default CurrentMessage;  