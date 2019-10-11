export const addItemToCart = (cart, item) => {
    let newCart = [...cart];
    let itemIndex = newCart.findIndex(({id}) => (id === item.id));
    if (itemIndex !== -1) {
        newCart[itemIndex].count += 1;
    }
    else {
        newCart.push({
            ...item,
            count: 1
        });
    }
    return newCart;
};