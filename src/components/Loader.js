import React from 'react'
import { RotatingLines } from "react-loader-spinner";



export default function Loader() {

    return (
        <>
            <div className="loader d-flex align-items-center justify-content-center">
                <div style={{marginTop:"-20vh"}}>
                    <RotatingLines
                        height="60"
                        width="60"
                        strokeColor="#e96b56"
                        ariaLabel="tail-spin-loading"
                        visible={true}
                    />
                </div>
            </div>
        </>
    )
}
