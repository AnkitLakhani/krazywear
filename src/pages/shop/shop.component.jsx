import React from 'react'
import './shop.styles.scss'
import SHOP_DATA from './shop.data'
import ShopPreview from '../../components/shopPrevious/ShopPreview.component'

class Shop extends React.Component{
    state = {
        collections: SHOP_DATA
    }
    render(){
        return (
                this.state.collections.map(({title,...restInCollection})=><ShopPreview title={title} {...restInCollection}></ShopPreview>)
        )
    }
}

export default Shop