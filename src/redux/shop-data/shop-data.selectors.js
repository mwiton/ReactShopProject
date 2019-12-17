import { createSelector } from 'reselect'

const shopDataSelector = state => state.shopData;

export const shopDataObjectSelector = createSelector(
    shopDataSelector,
    shopData => shopData.data
);