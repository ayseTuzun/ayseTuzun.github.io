import {IconButton, ListItemText, makeStyles} from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ReactComponent as LanguageIconDE } from '../icons/DE.svg';
import { ReactComponent as LanguageIconEN } from '../icons/EN.svg';
import { ReactComponent as LanguageIconTR } from '../icons/TR.svg';
import {Section} from "../enums/Section";
import {Link} from "react-router-dom";
import i18next from "i18next";
import {useTranslation} from "react-i18next";


const useStyles = makeStyles({
    drawerPaper: {
        width: '20%',
        minWidth: '300px',
        border:0,
        paddingTop: '5vh',
        paddingBottom: '5vh',
        paddingLeft: 48,
        height: 'auto',
        bottom: 0,
        top: 0,
        overflow: 'hidden',
        //backgroundColor: 'blue',
    },
    drawer: {
        flexBasis: '20%',
        minWidth: '300px',
    },
    homeListItemTextPrimary: {
        fontSize: 'min(max(10vh, 4rem), 6.5rem);',
        color: '#301A1A',
        fontFamily: 'Coolvetica',
    },
    homeListItemText: {
        marginTop: '1vh',
    },
    homeListItemTextFirstLine: {
        lineHeight: 'min(max(6vh, 2.5rem), 50rem);',
        marginBottom: 'min(max(6vh, 2.5rem), 50rem);'
    },
    homeListItemTextSecondLine: {
        lineHeight: 'min(max(6vh, 2.5rem), 50rem);',
    },
    homeListItemButton: {
        width: 'fit-content',
        height: 'fit-content',
        paddingBlock: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        },
    },
    resumeListItemText: {
        fontSize: 'min(max(3vh, 1.2rem), 6.5rem);',
        fontFamily: 'Source Sans Pro',
        color: '#301A1A',
        '&:hover': {
            fontWeight: 'bold'
        },
        fontWeight: props => props.activeSection === Section.Resume ? 'bold' : 'normal'
    },
    designListItemText: {
        fontSize: 'min(max(3vh, 1.2rem), 6.5rem);',
        fontFamily: 'Source Sans Pro',
        color: '#301A1A',
        '&:hover': {
            fontWeight: 'bold'
        },
        fontWeight: props => props.activeSection === Section.Design ? 'bold' : 'normal'
    },
    researchListItemText: {
        fontSize: 'min(max(3vh, 1.2rem), 6.5rem);',
        fontFamily: 'Source Sans Pro',
        color: '#301A1A',
        '&:hover': {
            fontWeight: 'bold'
        },
        fontWeight: props => props.activeSection === Section.Research ? 'bold' : 'normal'
    },
    collectivesListItemText: {
        fontSize: 'min(max(3vh, 1.2rem), 6.5rem);',
        fontFamily: 'Source Sans Pro',
        color: '#301A1A',
        '&:hover': {
            fontWeight: 'bold'
        },
        fontWeight: props => props.activeSection === Section.Collectives ? 'bold' : 'normal'
    },
    contactListItemText: {
        fontSize: 'min(max(3vh, 1.2rem), 6.5rem);',
        fontFamily: 'Source Sans Pro',
        color: '#301A1A',
        '&:hover': {
            fontWeight: 'bold'
        },
        fontWeight: props => props.activeSection === Section.Contact ? 'bold' : 'normal'
    },
    listItemButton: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
        borderRadius: '28px',
    },
    listItemCV: {
        width: 'fit-content',
        marginLeft: 13,
        marginTop: 'min(max(6vh, 2.3rem), 6.5rem);',
        paddingTop: 0,
        paddingBottom: 0
    },
    listItem: {
        width: 'fit-content',
        marginLeft: 13,
        paddingTop: 0,
        paddingBottom: 0
    },
    listItemDesign: {
        width: 'fit-content',
        paddingTop: 0,
        paddingBottom: 0,
        marginLeft: 13,
        marginTop: 'min(max(3vh, 1.1rem), 6.5rem);'
    },
    listItemResearch: {
        width: 'fit-content',
        marginLeft: 13,
        paddingTop: 0,
        paddingBottom: 0
    },
    listItemCollectives: {
        width: 'fit-content',
        marginLeft: 13,
        marginBottom: 'min(max(3vh, 1.1rem), 6.5rem);',
        paddingTop: 0,
        paddingBottom: 0
    },
    summaryListItemTextPrimary: {
        fontSize: 'min(max(3vh, 1.2rem), 6.5rem);',
        fontFamily: 'Source Sans Pro',
        color: 'white',
    },
    summaryListItemButton: {
        backgroundColor: "#301A1A",
        borderRadius: '28px',
        //width: '20vh',
        width: 'fit-content',
        height: 'fit-content',
        paddingTop: 0,
        paddingBottom: 0,
        '&:hover': {
            backgroundColor: '#663737'
        },
        marginLeft: 13,
    },
    languageIcon: {
        width: 'min(max(5.8vh, 2.45rem), 6.5rem);',
        height: 'min(max(5.8vh, 2.45rem), 6.5rem);',
        paddingInline: 5,
        '&:hover': {
            backgroundColor: 'white'
        },
    },
    link: {
        textDecoration: 'none'
    },
})

export default function Sidebar(props) {
    const classes = useStyles(props);
    const { t } = useTranslation();

    const handleSectionClick = (section) => {
        props.setActiveSection(section);
        props.sectionClick(true);
    }

    const switchLanguage = (language) => {
        i18next.changeLanguage(language);
    }


    return (
        <Drawer
            variant="permanent"
            anchor="left"
            classes={{
                paper: classes.drawerPaper
            }}
            className={classes.drawer}
        >
            <List disablePadding>
                <ListItem dense button disableRipple key={'Ayşe Tüzün'} onClick={() => handleSectionClick(Section.Home)} classes={{button:classes.homeListItemButton}}>
                    <ListItemText primary={<div>
                        <div className={classes.homeListItemTextFirstLine}>Ayşe</div>
                        <div className={classes.homeListItemTextSecondLine}>Tüzün</div>
                    </div>} className={classes.homeListItemText} classes={{primary:classes.homeListItemTextPrimary}}/>
                </ListItem>
                <ListItem button key={'Lebenslauf'} onClick={() => handleSectionClick(Section.Resume)} className={classes.listItemCV} classes={{button:classes.listItemButton}}>
                    <ListItemText primary={t("sidebar_resume")} classes={{primary:classes.resumeListItemText}}/>
                </ListItem>
                <ListItem button key={'Entwurf'} onClick={() => handleSectionClick(Section.Design)} className={classes.listItemDesign} classes={{button:classes.listItemButton}}>
                    <ListItemText primary={t("sidebar_design")} classes={{primary:classes.designListItemText}}/>
                </ListItem>
                <ListItem button key={'Forschung'} onClick={() => handleSectionClick(Section.Research)} className={classes.listItemResearch} classes={{button:classes.listItemButton}}>
                    <ListItemText primary={t("sidebar_research")} classes={{primary:classes.researchListItemText}}/>
                </ListItem>
                <ListItem button key={'Kollektives'} onClick={() => handleSectionClick(Section.Collectives)} className={classes.listItemCollectives} classes={{button:classes.listItemButton}}>
                    <ListItemText primary={t("sidebar_collectives")} classes={{primary:classes.collectivesListItemText}}/>
                </ListItem>
                <ListItem button key={'Kontakt'} onClick={() => handleSectionClick(Section.Contact)} className={classes.listItem} classes={{button:classes.listItemButton}}>
                    <ListItemText primary={t("sidebar_contact")} classes={{primary:classes.contactListItemText}}/>
                </ListItem>
            </List>
            <List style={{ marginTop: `auto` }}>
                <ListItem key={'Language Buttons'}>
                    <IconButton onClick={() => switchLanguage("en")} className={classes.languageIcon}>
                        <LanguageIconEN/>
                    </IconButton>
                    <IconButton onClick={() => switchLanguage("de")} className={classes.languageIcon}>
                        <LanguageIconDE/>
                    </IconButton>
                    <IconButton onClick={() => switchLanguage("tr")} className={classes.languageIcon}>
                        <LanguageIconTR/>
                    </IconButton>
                </ListItem>
                <Link className={classes.link} to={"/summary"}>
                    <ListItem button key={'Wenig Zeit?'} classes={{button:classes.summaryListItemButton}}>
                        <ListItemText primary={t("sidebar_summary")} classes={{primary:classes.summaryListItemTextPrimary}}/>
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    );
}