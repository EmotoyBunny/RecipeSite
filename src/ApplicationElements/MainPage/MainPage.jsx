import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

import CardsForRecipe from "./Cards/CardsForRecipe.jsx";

// компонент css
import "./MainPage.css"
import RecipeArray from "./Cards/RecipeArray";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            array: [],
        };
    }

    /**
     * Добавление в массив пяти объектов
     */
    pushObject = () => {
        const list = [...this.state.array]
        let i = this.state.count;
        while (i < this.state.count + 5) {
            const object = {
                id: i,
                name: RecipeArray.name[Math.floor(Math.random() * RecipeArray.name.length)],
                date: RecipeArray.date[Math.floor(Math.random() * RecipeArray.date.length)],
                img: RecipeArray.img[Math.floor(Math.random() * RecipeArray.img.length)],
                description: RecipeArray.description[Math.floor(Math.random() * RecipeArray.description.length)],
                comments: RecipeArray.comments[Math.floor(Math.random() * RecipeArray.comments.length)],
                like: RecipeArray.like[Math.floor(Math.random() * RecipeArray.like.length)],
            };
            list.push(object);
            i++;
        }
        this.setState({count: i}, () => {
            this.setState({array: list})
        });
    }

    componentDidMount() {
        this.pushObject();
    }

    render() {
        const listArray = this.state.array.map((item) => {
                if (item.id === 0)
                    return (<div key={item.id} className="block"><CardsForRecipe item={item}/></div>);
                else
                    return (<div key={item.id}><CardsForRecipe item={item}/></div>);
            }
        )
        return (
            <div>
                {listArray}
                <div className="block1">
                    <Button variant="contained" onClick={() => this.pushObject()}>Загрузить ещё</Button>
                </div>
            </div>
        );
    }
}

export default MainPage;

