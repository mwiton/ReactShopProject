import React from 'react';
import { withRouter } from 'react-router-dom'

import './shop.styles.scss'
import {SHOP_DATA} from '../../pages/shoppage/shop-data'
import ShopItem from "../../components/shop-item/shop-item.component";

const Shop = ({match}) => (
    <div className='shop' >
        {SHOP_DATA
            .find((category) => (category.routeName === match.params.category_name))
            .items.map(({id, ...otherProps}) => (
                <ShopItem key={id} {...otherProps}/>
            ))
        }
    </div>
);


export default withRouter(Shop);