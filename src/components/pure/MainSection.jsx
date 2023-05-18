import React from 'react';

import '../../styles/main/mainSectionStyles.css';

const MainSection = () => {
    return (
        <div className='main-section'>
            <div id="left-section">
                <img src="images/image-web-3-desktop.jpg" alt="web-3-desktop" id="web-3-desktop"></img>
                <img src="images/image-web-3-mobile.jpg" alt="web-3-desktop" id="web-3-mobile"></img>
                <div id="bottom-section">
                    <div id='bottom-title'>
                        <h1>The Bright Future of Web 3.0?</h1>
                    </div>
                    <div id='bottom-description'>
                        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                        <button id="read-more-button">READ MORE</button>
                    </div>
                </div>
            </div>
            <div id="right-section">
                <section className='new-articles'>
                    <h1 id="new">New</h1>
                    <h4>Hydrogen VS Electric Cars</h4>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    <hr className='line'></hr>
                    <h4>The Downsides of AI Artistry</h4>
                    <p>What are the possible adverse effects of on-demand AI image generation?</p>
                    <hr className='line'></hr>
                    <h4>Is VC Funding Drying Up?</h4>
                    <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </section>
            </div>
        </div>
    );
}

export default MainSection;
