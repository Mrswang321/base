import styled from 'styled-components'
const border = ({ Comp }) => {
  return styled(Comp) `
    position: relative;
    &::after {
      position: absolute;
      pointer-events: none;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;

      z-index: 999;

      content: '';

      border-width: ${props => props.width || (props.hasborder ? '1px' : 0)};
      border-color: ${props => props.color || '#ccc'};
      border-style: ${props => props.style || 'solid'};
      border-radius: ${props => props.radius || 0}rem;

      @media (max--moz-device-pixel-ratio: 1.49),(-webkit-max-device-pixel-ratio: 1.49),(max-device-pixel-ratio: 1.49),(max-resolution: 143dpi),(max-resolution: 1.49dppx) {
        width: 100%;
        height: 100%;
        border-radius: ${props => props.radius || 0}rem;;
        transform: scale(1);
      }

      @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49),(-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49),(min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49),(min-resolution: 144dpi) and (max-resolution: 239dpi),(min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {
        width: 200%;
        height: 200%;
        border-radius: ${props => props.radius * 2 || 0}rem;
        transform: scale(0.5);
      }
        
      @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5),(min-resolution: 240dpi), (min-resolution: 2.5dppx) {
        width: 300%;
        height: 300%;
        border-radius: ${props => props.radius * 3 || 0}rem;
        transform: scale(0.333333);
      }
      transform-origin: 0 0;
    }
  `
} 

export default border