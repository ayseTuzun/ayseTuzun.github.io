import Sidebar from "./components/Sidebar";
import {CssBaseline, makeStyles} from "@material-ui/core";
import {MemoizedContent} from "./components/Content";
import {useState} from "react";
import {Section} from "./enums/Section";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SidebarDesignMenu from "./components/SidebarDesignMenu";
import designTiles from "./tiles/designTiles";
import researchTiles from "./tiles/researchTiles";
import collectivesTiles from "./tiles/collectivesTiles";
import Summary from "./components/Summary";
import SummaryBar from "./components/SummaryBar";
import Alltagshaus from "./components/project_pages/Alltagshaus";
import {useTranslation} from "react-i18next";
import ScrollToTop from "./utils/ScrollToTop";
import Meetandgreen from "./components/project_pages/Meetandgreen";
import Brauart from "./components/project_pages/Brauart";
import Rathaus from "./components/project_pages/Rathaus";
import Stephanienbad from "./components/project_pages/Stephanienbad";
import Ichbineinbelfaster from "./components/project_pages/Ichbineinbelfaster";
import Firstplaces from "./components/project_pages/Firstplaces";
import HeimatsucheInKleinasien from "./components/project_pages/HeimatsucheInKleinasien";
import Lauf from "./components/project_pages/Lauf";
import OccupantBehaviourResearch from "./components/project_pages/OccupantBehaviourResearch";
import Kreislaufperspektiven from "./components/project_pages/Kreislaufperspektiven";
import ManifestKreislaufstadt from "./components/project_pages/ManifestKreislaufstadt";
import BiennaleCanakkale from "./components/project_pages/BiennaleCanakkale";
import NoFAQ from "./components/project_pages/NoFAQ";
import Typography from "./components/project_pages/Typography";
import FormUndMaterial from "./components/project_pages/FormUndMaterial";
import RuralDispositionPolicies from "./components/project_pages/RuralDispositionPolicies";


const useStyles = makeStyles({
    root: {
        display: 'flex',
        backgroundColor: 'white',
    },
    border: {
        width: 1,
        height: '90vh',
        backgroundColor: "#301A1A",
        position: 'fixed',
        top: '5vh',
        bottom: '5vh',
        left: 'max(20vw, 300px);',
    }
})

function App() {
    const classes = useStyles();
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState(Section.Home);
    const [sectionClicked, sectionClick] = useState(false);


    const designLinks = ['/lauf_design',
                        '/heimatsuche_in_kleinasien_design',
                        '/first_places',
                        '/ich_bin_ein_belfaster',
                        '/stephanienbad',
                        '/rathaus_am_ettlinger_tor',
                        '/brauart',
                        '/meet_and_green',
                        '/alltagshaus'];
    const researchLinks = ['/nutzerverhalten_in_gebaeude',
                            '/lauf_research',
                            '/heimatsuche_in_kleinasien_research',
                            '/kreislaufperspektiven_fuer_die_tuerkische_nordaegaeis',
                            '/manifest_kreislaufstadt',
                            '/biennale_canakkale_100_jahre_bauhaus_research',
                            '/no_faq_research',
                            '/typologie',
                            '/form_und_materialstudien'];
    const collectivesLinks = ['/lauf_collectives', '/laendliche_dispositionspolitik', '/biennale_canakkale_100_jahre_bauhaus_collectives', '/no_faq_collectives'];

    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline/>
                <Switch>
                    <Route exact path="/">
                        <Sidebar
                            setActiveSection={setActiveSection}
                            activeSection={activeSection}
                            sectionClick={sectionClick}/>
                    </Route>
                    <Route path={"/summary"}>
                        <SummaryBar/>
                    </Route>
                    <Route path={designLinks}>
                        <SidebarDesignMenu
                            setActiveSection={setActiveSection}
                            activeSection={activeSection}
                            sectionClick={sectionClick}
                            tiles={designTiles}
                            title={t("sidebar_design")}/>
                    </Route>
                    <Route path={researchLinks}>
                        <SidebarDesignMenu
                            setActiveSection={setActiveSection}
                            activeSection={activeSection}
                            sectionClick={sectionClick}
                            tiles={researchTiles}
                            title={t("sidebar_research")}/>
                    </Route>
                    <Route path={collectivesLinks}>
                        <SidebarDesignMenu
                            setActiveSection={setActiveSection}
                            activeSection={activeSection}
                            sectionClick={sectionClick}
                            tiles={collectivesTiles}
                            title={t("sidebar_collectives")}/>
                    </Route>
                </Switch>
                <div className={classes.border}/>
                <ScrollToTop/>
                <Switch>
                    <Route exact path="/">
                        <MemoizedContent
                            setActiveSection={setActiveSection}
                            activeSection={activeSection}
                            sectionClick={sectionClick}
                            sectionClicked={sectionClicked}
                        />
                    </Route>
                    <Route path={"/summary"}>
                        <Summary/>
                    </Route>
                    <Route path={["/lauf_design", "/lauf_research", "/lauf_collectives"]}>
                        <Lauf/>
                    </Route>
                    <Route path={["/heimatsuche_in_kleinasien_design", "/heimatsuche_in_kleinasien_research"]}>
                        <HeimatsucheInKleinasien/>
                    </Route>
                    <Route path="/first_places">
                        <Firstplaces/>
                    </Route>
                    <Route path="/ich_bin_ein_belfaster">
                        <Ichbineinbelfaster/>
                    </Route>
                    <Route path="/stephanienbad">
                        <Stephanienbad/>
                    </Route>
                    <Route path="/rathaus_am_ettlinger_tor">
                        <Rathaus/>
                    </Route>
                    <Route path="/brauart">
                        <Brauart/>
                    </Route>
                    <Route path="/meet_and_green">
                        <Meetandgreen/>
                    </Route>
                    <Route path="/alltagshaus">
                        <Alltagshaus/>
                    </Route>
                    <Route path="/nutzerverhalten_in_gebaeude">
                        <OccupantBehaviourResearch/>
                    </Route>
                    <Route path="/kreislaufperspektiven_fuer_die_tuerkische_nordaegaeis">
                        <Kreislaufperspektiven/>
                    </Route>
                    <Route path="/manifest_kreislaufstadt">
                        <ManifestKreislaufstadt/>
                    </Route>
                    <Route path={["/biennale_canakkale_100_jahre_bauhaus_research", "/biennale_canakkale_100_jahre_bauhaus_collectives"]}>
                        <BiennaleCanakkale/>
                    </Route>
                    <Route path={["/no_faq_research", "/no_faq_collectives"]}>
                        <NoFAQ/>
                    </Route>
                    <Route path="/typologie">
                        <Typography/>
                    </Route>
                    <Route path="/form_und_materialstudien">
                        <FormUndMaterial/>
                    </Route>
                    <Route path="/laendliche_dispositionspolitik">
                        <RuralDispositionPolicies/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
