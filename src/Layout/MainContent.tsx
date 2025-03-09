import React from 'react';
import {MainSection} from "./mainSection/MainSection";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {Testimonials} from "./testimonials/Testimonials";
import {Contacts} from "./contacts/Сontacts";
import {ProjectsCount} from "./projectsCount/ProjectsCount";

export const MainContent = () => {
    return (
        <>
            <MainSection/>
            <Skills/>
            <ProjectsCount/>
            <Works/>
            <Testimonials/>
            <Contacts/>
        </>
    );
};
