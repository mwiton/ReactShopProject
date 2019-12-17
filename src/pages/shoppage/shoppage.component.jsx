import React from 'react';
import { withRouter } from 'react-router-dom'

import CollectionOverview from "../../components/collection-overview/collection-overview.component";


class ShopPage extends React.Component {

    render () {
        if (this.props.match.params.hasOwnProperty('category_name')){
            return <div className='shop-page' >
                <CollectionOverview categoryName={this.props.match.params.category_name}/>
            </div>
        }
        return <div className='shop-page' >
            <CollectionOverview />) }
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