import React, { useLayoutEffect, useRef } from "react";
import {TweenMax} from "gsap/all";

const Animate = () => {
    const REl = useRef(null);
    useLayoutEffect(() => {
      /*下面这段代码的意思是当组件加载完成后,在0秒的时间内,将方块的横坐标位置移到600px的位置*/
      TweenMax.to(REl.current, 0, {x: 100})
    }, [])
    
    return (
      <div>
        <div ref={REl} style={{width: '100px', height: '100px', background: 'red'}}>square</div>
      </div>
    )
}

export default Animate;