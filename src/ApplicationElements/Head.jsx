import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import IconButton from '@material-ui/core/IconButton';


import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// компоненты jsx
import MainPage from "./MainPage/MainPage.jsx";

// компоненты css
import "./Head.css"

export default function Head() {
    const useStyles = makeStyles((theme) => ({
        title: {
            flexGrow: 20,
        },
    }));

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const StyledMenuItem = withStyles((theme) => ({
        root: {
            '&:focus': {
                backgroundColor: theme.palette.primary.main,
                '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                    color: theme.palette.common.white,
                },
            },
        },
    }))(MenuItem);

    const classes = useStyles();
    return (
        <Router>
            <div>
                <AppBar position="fixed">
                    <Toolbar>
                        <div>
                            <MenuIcon
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <MoreVertIcon/>
                            </MenuIcon>
                            <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                onExiting={handleClose}
                                onClick={handleClose}
                            >
                                <Link to="/">
                                    <StyledMenuItem>
                                        <ListItemIcon>
                                            <SendIcon fontSize="default"/>
                                        </ListItemIcon>
                                        <ListItemText primary="Главная"/>
                                    </StyledMenuItem>
                                </Link>
                            </Menu>
                        </div>
                        <Typography variant="h5" align='center' className={classes.title}>
                            Рецепты.ру
                        </Typography>
                        <IconButton aria-label="delete"><PersonPinIcon fontSize="large"/></IconButton>
                    </Toolbar>
                </AppBar>
            </div>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="*" component={MainPage}/>
            </Switch>
        </Router>
    );
}
