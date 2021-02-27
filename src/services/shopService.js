export default class ShopService {

    url = 'http://localhost:3000/shop';

    getShopItems = async () => {
        const response = await fetch(this.url);
        if (!response.ok) {
            throw new Error('Server error');
        }
        const result = await response.json();
        return result;
    }

    addShopItems = async (title, price) => {

        console.log(title, price);

        const response = await fetch(this.url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: title, exist: true, price: price, id: `_${Math.random().toString(36).substr(2, 9)}`})
        });
        if (!response.ok) {
            throw new Error('Server error');
        }

    }
}