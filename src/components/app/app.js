import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import GroceryAddForm from '../grocery_add_form';
import GroceryList from '../grocery_list';
import GroceryFilter from '../grocery_filter';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: "Banana", ranOut: false,  priority: 3, id:1},
                {label: "Apple", ranOut: false,  priority: 2, id: 2},
                {label: "Orange", ranOut: false, priority: 5, id: 3}
            ],
            term : '',
            filter: 'all'
        };
        this.deleteItem  = this.deleteItem.bind(this);
        this.addItem  = this.addItem.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.onAviability = this.onAviability.bind(this);
        this.sortGrocery = this.sortGrocery.bind(this);
        this.sortF = this.sortF.bind(this);
        this.changeGrocery = this.changeGrocery.bind(this);
        this.maxId = 4;
    }


    sortF(a, b) {
        if(a.priority > b.priority) {
            return 1;
        }
        else if(a.priority < b.priority) {
            return -1;
        }

        if(a.label < b.label) {
            return -1;
        } else if (a.label > b.label) {
            return 1;
        } else {
            return 0;
        }
    }

    sortGrocery() {
        const {data} = this.state;
        const newArr = data.sort((a, b) => this.sortF(a,b));

        this.setState(({data})=>{
            return {
                data: newArr
            }
        })
    }



    onAviability(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id  === id);

            const old = data[index]
            const newItem = {...old, ranOut: !old.ranOut}

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }

        })
    }


    onUpdateSearch(term) {
        this.setState({term})
    }

    searchGroc(items, term) {
        if(term.length === 0) {
            return items
        }
        return items.filter( (items) => {
            return items.label.indexOf(term) > -1
        });
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {

                data: newArr
            }

        });
    }

    addItem(body, pr, isExist) {
        const newItem = {
           label: body,
           ranOut: isExist,
           priority: pr,
           id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    filterGroc(items, filter) {
        if (filter === "have") {
            return items.filter(item => item.ranOut === false);
        } else if (filter === "ran out") {
            return items.filter(item => item.ranOut === true);
        } else {
            return items
        }
    }
    onFilterSelect(filter) {
        this.setState({filter});
    }

    render(){

        const {data, term, filter} = this.state;

        const visiblePosts = this.filterGroc(this.searchGroc(data, term), filter);

        return(
            <>
            <Container>
                <Row>
                    <Col md='12'>
                        <GroceryFilter
                        onUpdateSearch={this.onUpdateSearch}
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                        onSortGrocery={this.sortGrocery}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md='12' >
                    <GroceryList 
                    groceries={visiblePosts}
                    onDelete={this.deleteItem}
                    onAviability={this.onAviability}
                    />
                    </Col>
                </Row>
                <Row>
                    <Col md='12'>
                        <GroceryAddForm
                            onAdd={this.addItem}
                            onSortGrocery={this.sortGrocery}
                            />
                    </Col> 
                </Row>
            </Container>
          </>
        )
    }
}

