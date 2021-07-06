import {Section} from "../enums/Section";
import designTiles from "../tiles/designTiles";
import {MemoizedDesign} from "./Design";
import collectivesTiles from "../tiles/collectivesTiles";
import researchTiles from "../tiles/researchTiles";
import {makeStyles} from "@material-ui/core";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import '../App.css';


const useStyles = makeStyles({
    img: {
        width: '100%',
    }
})

export default function Projects(props) {
    const classes = useStyles();
    const {lastClickedProjectSection} = props;

    const renderSwitch = (lastClickedProjectSection) => {
        switch (lastClickedProjectSection) {
            case null:
                return <CSSTransition timeout={200} classNames="item" key="image"><img src={'images/projects.jpg'} className={classes.img}/></CSSTransition>
            case Section.Design:
                return <CSSTransition timeout={200} classNames="item" key="design"><MemoizedDesign tiles={designTiles}/></CSSTransition>
            case Section.Collectives:
                return <CSSTransition timeout={200} classNames="item" key="collectives"><MemoizedDesign tiles={collectivesTiles}/></CSSTransition>
            case Section.Research:
                return <CSSTransition timeout={200} classNames="item" key="research"><MemoizedDesign tiles={researchTiles}/></CSSTransition>
            default:
                return null
        }
    }

    return (
        <div>
            <TransitionGroup>
                {renderSwitch(lastClickedProjectSection)}
            </TransitionGroup>
        </div>
    )

}