const fakestore = {

    fetchAllProduct: async () => {
        const res = await fetch(`https://fakestoreapi.com/products`);
        const result = await res.json();
        return result;

    },

    fetchAllProductById: async (productId) => {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const result = await res.json();
        return result;
    },

    fetchAllProductBySearchQuery: async (query) => {
        const res = await fetch(`https://fakestoreapi.com/products`)
        const result = await res.json();
        return result.filter((product)=>product.title.toLowerCase().includes(query));
    },

}
export {fakestore};