export const productsApi = {
    getProducts: () => {
        return fetch('https://redux-info.firebaseio.com/products.json',{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        })
            .then(response => response.json())
    },
    updateProducts: (body) => {
        return fetch('https://redux-info.firebaseio.com/products.json',{
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "Accept": "application/json"
            }
        })
            .then(response => response.json())
    }
};
