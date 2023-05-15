import React from 'react';
import MainSection from '../pure/MainSection';
import Navbar from '../pure/Navbar';
import BottomSectionContainer from './BottomSectionContainer';

const HomepageContainer = () => {
    return (
        <div className='main-app'>
            <Navbar></Navbar>
            <MainSection></MainSection>
            <BottomSectionContainer></BottomSectionContainer>
        </div>
    );
}

export default HomepageContainer;
