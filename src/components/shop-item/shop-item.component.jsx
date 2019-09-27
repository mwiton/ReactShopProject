import React from 'react';
import { withRouter }from 'react-router-dom'

import './shop-item.styles.scss'

const ShopItem = ({name}) => (
    <div className='shop-item'>
        <p>{name}</p>
    </div>
);


export default withRouter(ShopItem);