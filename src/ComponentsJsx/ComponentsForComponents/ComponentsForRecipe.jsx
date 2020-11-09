import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
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

export default function ComponentsForRecipe(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "5%",
            maxWidth: "90%",
        },
        media: {
            paddingTop: '56.25%', // 16:9
        },
    }));

    const classes = useStyles();

    // открытие и закрытие доп. информации
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // доп. информация
    const listItems = props.item.ingredients.map((items) =>
        <Typography paragraph key={items.id}>
            {items.text}
        </Typography>
    );

    return (
        <Card className={classes.root}>
            <CardHeader
                title={props.item.name}
                subheader={props.item.date}
            />
            <CardMedia
                className={classes.media}
                image={props.item.img}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.item.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.item.like}
                </Typography>
                <IconButton aria-label="share">
                    <ForumIcon/>
                </IconButton>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.item.comments}
                </Typography>
                <IconButton
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>ИНГРЕДИЕНТЫ:</Typography>
                    {listItems}
                </CardContent>
            </Collapse>
        </Card>
    );
}

