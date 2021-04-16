import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const drawerWidth = 240;
const drawerMargin = 60;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        marginTop: drawerMargin
    },
    drawerPaper: {
        width: drawerWidth,
        marginTop: drawerMargin
    },
    drawerContainer: {
        overflow: "auto"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: "#ffffff"
    }
}));

function EngageComp(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        {["OverView", "Documents", "Tools", "Contacts"].map((text) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
            <Toolbar />
            <main className={classes.content}>
                <h1> PAGE OF {props.match.params.ToolName}</h1>
                <TextareaAutosize
                    aria-label="minimum height"
                    rowsMin={7}
                    placeholder="Comments"
                />

                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                    ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                    elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
                    sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
                    mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
                    risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
                    purus viverra accumsan in. In hendrerit gravida rutrum quisque non
                    tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
                    morbi tristique senectus et. Adipiscing elit duis tristique
                    sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                    posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
            </main>
        </div>
    );
}

export default withRouter(EngageComp);