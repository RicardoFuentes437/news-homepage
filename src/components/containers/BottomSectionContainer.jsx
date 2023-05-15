import React from 'react';
import Card from '../pure/Card';

import '../../styles/bottomSection/bottomSectionStyles.css';

const BottomSectionContainer = () => {
    const description1 = "What happens when old PCs are given modern upgrades?";
    const description2 = "Our best picks for various needs and budgets";
    const description3 = "How the pandemic has sparked fresh opportunities";

    return (
        <div className='bottom-section'>
            <Card image='images/image-retro-pcs.jpg' number='01' title='Reviving Retro PCs' description={description1}></Card>
            <Card image='images/image-top-laptops.jpg' number='02' title='Top 10 Laptops of 2022' description={description2}></Card>
            <Card image='images/image-gaming-growth.jpg' number='03' title='The Growth of Gaming' description={description3}></Card>
        </div>
    );
}

export default BottomSectionContainer;
