import React from 'react'
import './ShopPreview.styles.scss'
import CollectionItem from '../collectionItems/collectionItem.component'
const ShopPreview= ({title, items})=>(
    <div className="collection-preview">
        <h1>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((itm,idx)=>idx< 4).map(({id,...others})=><CollectionItem key={id} {...others}></CollectionItem>)
            }
        </div>
    </div>
)

export default ShopPreview