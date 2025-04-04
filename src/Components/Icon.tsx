import iconsSprite from './../Assets/iconsSprite.svg';

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props:IconPropsType) => {
    return (
        <svg width={props.width || '50'} height={props.height || '50'} viewBox={props.viewBox || '0 0 50 50'}
             fill="black" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};
