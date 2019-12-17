import React from 'react';

import './collection-overview.styles.scss'
import PreviewCollection from "../preview-collection/preview-collection.component";
import {connect} from "react-redux";
import {shopDataObjectSelector} from "../../redux/shop-data/shop-data.selectors";

const CollectionOverview = ({categoryName, shopData}) => {
    if (categoryName){
        const collection = shopData.find((category) =>
            (category.routeName === categoryName));
        return <div className='collection-overview' >
            <PreviewCollection key={collection.id} title={collection.title} items={collection.items}/>
        </div>
    }
    return <div className='collection-overview' >
        <h1>Collections</h1>
        {shopData
            .map(({id, title, items}) =>
                <PreviewCollection key={id} title={title} items={items.slice(0, 4)}/>) }
    </div>
};


const mapStateToProps = (state) => ({
    shopData: shopDataObjectSelector(state)
});

export default connect(mapStateToProps)(CollectionOverview);