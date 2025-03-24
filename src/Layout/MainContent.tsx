import {MainSection} from "./sections/mainSection/MainSection";
import {Skills} from "./sections/skills/Skills";
import {Works} from "./sections/works/Works";
import {Testimonials} from "./sections/testimonials/Testimonials";
import {Contacts} from "./sections/contacts/Сontacts";
import {ProjectsCount} from "./sections/projectsCount/ProjectsCount";

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
