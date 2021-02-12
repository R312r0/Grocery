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
}