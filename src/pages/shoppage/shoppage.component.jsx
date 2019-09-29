import React from 'react';
import { withRouter } from 'react-router-dom'

import {SHOP_DATA} from './shop-data'
import PreviewCollection from "../../components/preview-collection/preview-collection.component";


class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {collections: SHOP_DATA,
                      categoryName: ''};
    }

    render () {
        if (this.props.match.params.hasOwnProperty('category_name')){
            const collection = this.state.collections.find((category) =>
                (category.routeName === this.props.match.params.category_name));
            return <div className='shop-page' >
                <h1>Collections</h1>
                <PreviewCollection key={collection.id} title={collection.title} items={collection.items}/>
            </div>
        }
        return <div className='shop-page' >
            <h1>Collections</h1>
            {this.state.collections
                .map(({id, title, items}) =>
                    <PreviewCollection key={id} title={title} items={items.slice(0, 4)}/>) }
        </div>
    }
}


export default withRouter(ShopPage);

/* {SHOP_DATA
                .find((category) => (category.routeName === match.params.category_name))
                .items.map(({id, ...otherProps}) => (
                    <Shop key={id} {...otherProps}/>
                ))
            } */