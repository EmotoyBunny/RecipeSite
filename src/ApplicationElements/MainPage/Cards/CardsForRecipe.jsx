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
            boolean: 0,
            array: [],
        };
    }


    // открытие и закрытие доп. информации
    handleExpandClick = () => {
        let i = !this.state.expanded;
        this.setState({expanded: i});
        if (this.state.boolean === 0)
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
        this.setState({boolean: 1}, () => {
            this.setState({array: list})
        });
    };

    render() {
        return (
            <Card className="root">
                <CardHeader
                    title={this.props.item.name}
                    subheader={this.props.item.date}
                />
                <CardMedia
                    className="media"
                    image={this.props.item.img}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.item.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon/>
                    </IconButton>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.item.like}
                    </Typography>
                    <IconButton aria-label="share">
                        <ForumIcon/>
                    </IconButton>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.item.comments}
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

