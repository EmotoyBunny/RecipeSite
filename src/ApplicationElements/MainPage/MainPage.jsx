import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

import CardsForRecipe from "./Cards/CardsForRecipe.jsx";

// компонент css
import "./MainPage.css"

class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            j: 0,
            array: [],
        };
    }

    /**
     * Создание 5 карточек
     */
    createCards = () => {
        let i = this.state.j;
        const arrList = [...this.state.array];
        while (i < this.state.j + 5) {
            if (i === 0)
                arrList.push(<div key={i} className="block"><CardsForRecipe/></div>);
            else
                arrList.push(<div key={i}><CardsForRecipe/></div>);
            i++;
        }
        this.setState({j: i});
        this.setState({array: arrList});
    };

    componentDidMount() {
        this.createCards();
    }

    render() {
        return (
            <div>
                {this.state.array}
                <div className="block1">
                    <Button variant="contained" onClick={this.createCards}>Загрузить ещё</Button>
                </div>
            </div>
        );
    }
}

export default MainPage;

