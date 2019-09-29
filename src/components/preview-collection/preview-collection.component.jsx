import React from 'react';

import './collection-preview.styles.scss'
import ShopItem from "../../components/shop-item/shop-item.component";

const PreviewCollection = ({title, items}) => (
    <div className='collection-preview' >
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.map(({id, ...otherProps}) => (
                <ShopItem key={id} {...otherProps}/>
            ))}
        </div>
    </div>
);


export default PreviewCollection;