import { createSelector } from 'reselect'

const shopSelector = state => state.shop;

export const cartItemsSelector = createSelector(
    shopSelector,
    shop => shop.cartItems
);

export const cartSizeSelector = createSelector(
    cartItemsSelector,
    items => items.reduce((accumulator, item) => (
        accumulator + item.count
    ), 0)
);

export const totalPriceSelector = createSelector(
    cartItemsSelector,
    items => items.reduce((accumulator, item) => (
        accumulator + item.count * item.price
    ), 0)
);

export const cartVisibleSelector = createSelector(
    shopSelector,
    shop => shop.cartVisible
);