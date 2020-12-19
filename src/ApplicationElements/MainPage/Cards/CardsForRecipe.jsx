import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ForumIcon from '@material-ui/icons/Forum';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardMedia from '@material-ui/core/CardMedia';

import RecipeArray from "./RecipeArray.jsx";
import "./Cards.css"

class CardsForRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            array: [],
            j: 0,
            name: RecipeArray.name[Math.floor(Math.random() * RecipeArray.name.length)],
            date: RecipeArray.date[Math.floor(Math.random() * RecipeArray.date.length)],
            img: RecipeArray.img[Math.floor(Math.random() * RecipeArray.img.length)],
            description: RecipeArray.description[Math.floor(Math.random() * RecipeArray.description.length)],
            comments: RecipeArray.comments[Math.floor(Math.random() * RecipeArray.comments.length)],
            like: RecipeArray.like[Math.floor(Math.random() * RecipeArray.like.length)],
        };
    }


    // открытие и закрытие доп. информации
    handleExpandClick = () => {
        let i = !this.state.expanded;
        this.setState({expanded: i});
        if (this.state.j === 0)
            this.outputItem();
    };


    // доп. информация
    outputItem = () => {
        const listItems = [];
        let i = 0;
        while (i < 6) {
            const newObject = {
                id: i,
                text: RecipeArray.ingredients[Math.floor(Math.random() * Object.keys(RecipeArray.ingredients).length)]
            };
            listItems.push(newObject);
            i++;
        }
        const list = listItems.map((items) =>
            <Typography paragraph key={items.id}>
                {items.text}
            </Typography>
        );
        this.setState({array: list});
        this.setState({j: 1})
    };

    render() {
        return (
            <Card className="root">
                <CardHeader
                    title={this.state.name}
                    subheader={this.state.date}
                />
                <CardMedia
                    className="media"
                    image={this.state.img}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.state.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon/>
                    </IconButton>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.state.like}
                    </Typography>
                    <IconButton aria-label="share">
                        <ForumIcon/>
                    </IconButton>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.state.comments}
                    </Typography>

                    <IconButton
                        onClick={this.handleExpandClick}
                    >
                        <ExpandMoreIcon/>
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto">
                    <CardContent>
                        <Typography paragraph>ИНГРЕДИЕНТЫ:</Typography>
                        {this.state.array}
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

export default CardsForRecipe;

