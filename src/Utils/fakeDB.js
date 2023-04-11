// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getData();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('jobs', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getData();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('jobs', JSON.stringify(shoppingCart));
    }
}

const getData = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('jobs');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('jobs');
}

export {
    addToDb,
    removeFromDb,
    getData,
    deleteShoppingCart
}