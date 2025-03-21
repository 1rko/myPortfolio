import {myTheme, breakpoints} from '../Styles/MyTheme.styled'

type FontPropsType = {
    family?: string
    weight?: number
    lineHeight?: number
    fMin: number
    fMax: number
    color?: string
}

export const font = ({family, weight, lineHeight, fMin, fMax, color}: FontPropsType) => {
    return `
    font-family: ${family || myTheme.fonts.main}  ;
    font-weight:  ${weight || myTheme.fonts.weight};
    font-height:  ${lineHeight || 1.2};
    font-size:  calc( (100vw - ${breakpoints.small})/( ${parseInt(breakpoints.xlarge)} - ${parseInt(breakpoints.small)}) * (${fMax} - ${fMin}) + ${fMin}px);;
    color: ${color || myTheme.colors.mainText};
    `
}