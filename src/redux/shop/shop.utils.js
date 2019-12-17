export const addItemToCart = (cart, item) => {
    let newCart = [...cart];
    let itemIndex = newCart.findIndex(({id}) => (id === item.id));
    if (itemIndex !== -1) {
        newCart = cart.map(cartItem =>
            cartItem.id === item.id
                ? { ...cartItem, count: cartItem.count + 1 }
                : cartItem
        );
    }
    else {
        newCart.push({
            ...item,
            count: 1
        });
    }
    return newCart;
};

export const deleteItemFromCart = (cart, item, ifAll) => {
    let newCart;
    let itemIndex = cart.findIndex(({id}) => (id === item.id));
    if (itemIndex !== -1) {
        newCart = cart.map(cartItem =>
            cartItem.id === item.id
                ? { ...cartItem, count: cartItem.count - 1 }
                : cartItem
        );
        if (newCart[itemIndex].count === 0 || ifAll) {
            newCart.splice(itemIndex, 1);
        }
    }
    return newCart;
};