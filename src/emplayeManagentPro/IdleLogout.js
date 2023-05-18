import React, { useRef } from "react";
import { useIdleTimer } from 'react-idle-timer';


export default function IdleLogout() {

    const idleTimeRef = useRef(null);
    /***----Seeeion Timeout---****/

    const onIdle = () => {
        console.log("Log Out");
        alert("Your session is about to expire")
        window.location.href = "/adminLogin"
    };
    const idleTimer = useIdleTimer({
        crossTab: true,
        r3ef: idleTimeRef,
        timeout: 60 * 3 * 1000,
        onIdle: onIdle,
    });

    return (

        <div idleTimer={idleTimer}></div>

    )
}
