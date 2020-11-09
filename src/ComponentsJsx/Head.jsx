import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';


import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// компоненты jsx
import MainContent from "./MainContent";

// компоненты css
import "./ComponentsCss/Head.css"

export default function Head() {
    const useStyles = makeStyles((theme) => ({
        title: {
            flexGrow: 10,
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
                <AppBar position="static">
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
                        <Typography variant="body1" align='center' className={classes.title}>
                            Рецепты.ру
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <Switch>
                <Route exact path="/" component={MainContent}/>
                <Route path="*" component={MainContent}/>
            </Switch>
        </Router>
    );
}
