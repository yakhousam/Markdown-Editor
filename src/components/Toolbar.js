import React from 'react'
import resizesmall from "../resizesmall.png"
import  resizebig from  "../resizebig.png";

function Toolbar(props) {
    //  const src = props.isResize ? "https://dl.dropboxusercontent.com/s/zd3g0qi8ou12lhr/resizesmall.png"  :
    //                               "https://dl.dropboxusercontent.com/s/35drq73osntbmup/resizebig.png";
    const src = props.isResize ? resizesmall  : resizebig ;
    
    const style={
        backgroundImage: `url(${src})`,
        backgroundSize: '100%',
        backgroundColor: 'transparent'
    }
    return(
        <div className="toolbar">
        <p><span style={{fontSize:"24px"}}>&#x3D5; </span>{props.toolbarTitle}</p>
        <button className="btn-resize" name={props.name} onClick={props.resize} style={style}> </button>
        </div>
    )
}

export default Toolbar;