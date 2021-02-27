import React from 'react';
import {useSelector} from 'react-redux';
import Header from '../../components/Header';
import SearchPanel from '../../components/SearchPanel';
import AddForm from '../../components/AddForm';
import FoodCardsList from '../../components/FoodCardsList';
import WithShopService from '../../components/hoc';
import './home.scss';


const Home = () =>  {


        const searchFood = (items, term) => {
            if (term.length === 0) {
                return items 
            }

            return items.filter((item) => {
                return item.name.indexOf(term) > -1
            })
        }

        const filterFood = (items, filter) => {
            if (filter === 'exist') {
                return items.filter(item => item.exist)
            }
            else if (filter === 'missing') {
                return items.filter(item => !item.exist)
            } else {
                return items
            }
        }

        const foodItems =  useSelector(state => state.foodReducer.food);
        const term = useSelector(state => state.foodReducer.searchTerm);
        const filter = useSelector(state => state.foodReducer.filter);

        const visibleItems = filterFood(searchFood(foodItems, term), filter);


        return (
            <div className='wrapper'>
                <Header/>
                <SearchPanel/>
                <FoodCardsList foodItems={visibleItems}/>
                <AddForm/>
            </div> 
        )

}

export default WithShopService()(Home);