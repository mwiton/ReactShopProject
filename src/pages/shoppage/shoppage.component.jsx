import React from 'react';
import { withRouter } from 'react-router-dom'

import './shop.styles.scss'
import {SHOP_DATA} from './shop-data'
import Shop from "../../components/shop/shop.component";

const ShopPage = ({match}) => (
    <div className='shoppage' >
        {SHOP_DATA
            .find((category) => (category.routeName === match.params.category_name))
            .items.map(({id, ...otherProps}) => (
                <Shop key={id} {...otherProps}/>
            ))
        }
    </div>
);


export default withRouter(ShopPage);