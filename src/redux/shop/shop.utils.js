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

export const deleteItemFromCart = (cart, item) => {
    let newCart = [...cart];
    let itemIndex = newCart.findIndex(({id}) => (id === item.id));
    if (itemIndex !== -1) {
        newCart.splice(itemIndex, 1);
    }
    return newCart;
};

export const changeCartItemCount = (cart, item, change) => {
    let newCart = [...cart];
    let itemIndex = newCart.findIndex(({id}) => (id === item.id));
    if (itemIndex !== -1) {
        newCart[itemIndex].count += change;
        if (newCart[itemIndex].count === 0) {
            newCart.splice(itemIndex, 1);
        }
    }
    return newCart;
};