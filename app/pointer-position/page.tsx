"use client"
import React, { useState } from 'react'

function PointerPosition() {
    const [position, set_position] = useState({
        x: 0,
        y: 0
    })
    return (
        <div style={{ height: "100vh", width: "100vw", position: "relative" }} onPointerMove={(event) => {
            set_position({
                x: event.clientX,
                y: event.clientY
            })
        }} >
            pointer component
            <div style={{ position: "absolute", top: "-35px", left: "-20px", transform : `translate(${position.x}px , ${position.y}px )` , width: "20px", height: "20px", backgroundColor: "red", borderRadius: "20px" }} >
            </div>
        </div>
    )
}

export default PointerPosition
