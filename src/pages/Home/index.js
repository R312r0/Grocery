import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {listRequested, listLoaded} from '../../redux/actions';
import Header from '../../components/Header';
import SearchPanel from '../../components/SearchPanel';
import AddForm from '../../components/AddForm';
import FoodCardsList from '../../components/FoodCardsList';
import WithShopService from '../../components/hoc';
import './home.scss';


function Home(props) {

        const dispatch = useDispatch();

        const searchFood = (items, term) => {
            if (term.length === 0) {
                return items 
            }

            return items.filter((item) => {
                return item.title.indexOf(term) > -1
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

        const {ShopService} = props;

        const fetchList = async () => {
            const foodList = await ShopService.getShopItems();
            dispatch(listLoaded(foodList));
        }
        // console.log(props.ShopService);


        const foodItems =  useSelector(state => state.foodReducer.food);

        useEffect(() => {
            fetchList();
        }, [foodItems]);
            
        console.log(foodItems);


        
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