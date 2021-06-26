import {Grid, makeStyles} from "@material-ui/core";
import {MemoizedHome} from "./Home";
import {MemoizedResume} from "./Resume";
import {MemoizedDesign} from "./Design";
import {useEffect, useState} from "react";
import {Events, scroller} from "react-scroll";
import {Section} from "../enums/Section";
import {useInView} from "react-intersection-observer";
import designTiles from "../tiles/designTiles";
import researchTiles from "../tiles/researchTiles";
import collectivesTiles from "../tiles/collectivesTiles";
import {MemoizedContact} from "./Contact";
import {memo} from "react";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        //width: '100%',
        marginTop: '5vh',
        marginLeft: '50px',
        marginRight: '50px',
        minWidth: '860px',
        //scrollSnapType: "y mandatory",
        backgroundColor: 'white'
    },
    contentItem1: {
        marginBottom: '30vh',
        scrollSnapAlign: "end",
    },
    contentItem2: {
        marginBottom: '5vh',
        scrollSnapAlign: "start",
    },
    contentItem3: {
        marginBottom: '40vh',
        scrollSnapAlign: "start",
    },
    contentItem4: {
        marginBottom: '40vh',
        scrollSnapAlign: "start",
    },
    contentItem5: {
        marginBottom: '50vh',
        scrollSnapAlign: "start",
    },
    contentItem6: {
        width: '100%',
        scrollSnapAlign: "start",
    },
    "@global": {
        body: {
            //"overscroll-behavior-y": "none",
        },

        // FF/Chrome need it on html, Safari needs it on body
        "html,body": {
            //scrollSnapType: "y proximity",
        },
    }
})


export function Content(props) {
    const classes = useStyles();
    const {setActiveSection, activeSection, sectionClick, sectionClicked} = props;
    const [scrolling, setScrolling] = useState(false);
    const [homeRef, homeInView] = useInView({
        /* Optional options */
        threshold: 0,
    });

    const [resumeRef, resumeInView] = useInView({
        /* Optional options */
        threshold: 0,
    });

    const [designRef, designInView] = useInView({
        /* Optional options */
        threshold: 0,
    });

    const [researchRef, researchInView] = useInView({
        /* Optional options */
        threshold: 0,
    });

    const [collectivesRef, collectivesInView] = useInView({
        /* Optional options */
        threshold: 0,
    });

    const [contactRef, contactInView] = useInView({
        /* Optional options */
        threshold: 0,
    });

    useEffect(() => {
        Events.scrollEvent.register('end', function(to, element) {
            setScrolling(false)
        });
        return () => {
            Events.scrollEvent.remove('end');
        };
    }, [])

    useEffect(() => {
        if (!scrolling) {
            if (homeInView) {
                setActiveSection(Section.Home);
            } else if (resumeInView) {
                setActiveSection(Section.Resume);
            } else if (designInView) {
                setActiveSection(Section.Design);
            } else if (researchInView) {
                setActiveSection(Section.Research);
            } else if (collectivesInView) {
                setActiveSection(Section.Collectives);
            } else if (contactInView) {
                setActiveSection(Section.Contact);
            }
        }
        
    }, [scrolling, designInView, setActiveSection, homeInView, resumeInView, researchInView, collectivesInView, contactInView])

    useEffect(() => {
        if (sectionClicked) {
            sectionClick(false);
            switch (activeSection) {
                case Section.Home:
                    scrollTo(classes.contentItem1, -50);
                    break;
                case Section.Resume:
                    scrollTo(classes.contentItem2, -40);
                    break;
                case Section.Design:
                    scrollTo(classes.contentItem3, -40);
                    break;
                case Section.Research:
                    scrollTo(classes.contentItem4, -40);
                    break;
                case Section.Collectives:
                    scrollTo(classes.contentItem5, -40);
                    break;
                case Section.Contact:
                    scrollTo(classes.contentItem6, 0);
                    break;
                default:
                    scrollTo(classes.contentItem1);
            }   
        }
    }, [activeSection, classes.contentItem1, classes.contentItem2, classes.contentItem3, classes.contentItem4, classes.contentItem5, classes.contentItem6, sectionClick, sectionClicked])


    const scrollTo = (element, offset) => {
        setScrolling(true);
        scroller.scrollTo(element, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: offset
        })
    }

    return (
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-end"
            className={classes.root}
        >
            <Grid item ref={homeRef} className={classes.contentItem1}>
                <MemoizedHome/>
            </Grid>
            <Grid item ref={resumeRef} className={classes.contentItem2}>
                <MemoizedResume/>
            </Grid>
            <Grid item ref={designRef} className={classes.contentItem3}>
                <MemoizedDesign tiles={designTiles}/>
            </Grid>
            <Grid item ref={researchRef} className={classes.contentItem4}>
                <MemoizedDesign tiles={researchTiles}/>
            </Grid>
            <Grid item ref={collectivesRef} className={classes.contentItem5}>
                <MemoizedDesign tiles={collectivesTiles}/>
            </Grid>
            <Grid item ref={contactRef} className={classes.contentItem6}>
                <MemoizedContact/>
            </Grid>
        </Grid>
    )
}

export const MemoizedContent = memo(Content)