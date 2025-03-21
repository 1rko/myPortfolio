import {DefaultTheme} from 'styled-components';

// Определение breakpoints
export const breakpoints = {
    small: '376px',
    medium: '830px',
    large: '945px',
    xlarge: '1200px'
};

// Функции для медиа-запросов
const mediaQueries = {
    small: `@media screen and (max-width: ${breakpoints.small})`,
    medium: `@media screen and (max-width: ${breakpoints.medium})`,
    large: `@media screen and (max-width: ${breakpoints.large})`,
    xlarge: `@media screen and (max-width: ${breakpoints.xlarge})`
};

// Определение типа темы
export const myTheme: DefaultTheme = {
    colors: {
        primary: '#fb3f5c',
        mainText: 'rgba(65,59,64,0.9)',
        titleDarkText: '#191018',
        menuItemText: '#f8eeef',
        fieldBorder: 'rgba(0, 0, 0, 0.2)',
        projectCountBG: '#FEC5CE',
        fifth: '#2d2d2d',
        six: '#05060a',
        seven: '#fe2c54',
        activeFieldBorder: '#5d616f',
        fieldLabel: '#071a58'
    },
    fonts: {
        main: '"Nunito Sans", sans-serif',
        secondary: '"Nunito", sans-serif',
        third: '"Poppins", sans-serif',
        headerLogo: '"Nova Mono", monospace',
        fontWeight: 400
    },
    breakpoints, // Добавляем breakpoints
    media: mediaQueries, // Добавляем медиа-запросы
};
