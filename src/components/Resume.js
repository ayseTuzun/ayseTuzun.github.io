import {Box, Grid, makeStyles} from "@material-ui/core";
import {MemoizedResumeEntry} from "./ResumeEntry";
import {useTranslation} from "react-i18next";
import {memo} from "react";

const useStyles = makeStyles({
    root: {
        minHeight: '2155px',
    },
    birthDate: {
        fontFamily: 'Source Sans Pro',
        fontSize: '30px',
        color: '#301A1A',
    },
})

export function Resume() {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Grid container item className={classes.root} spacing={4} direction="column">
            <Grid item className={classes.birthDate}>
                {t("resume_title")}
            </Grid>
            <Grid container item spacing={8} justify={"space-between"}>
                <Grid container item xs={7} direction="column" spacing={4}>
                    <MemoizedResumeEntry
                        mainTitle={t("resume_work_experience_title") + '\xa0\xa0\xa0' + t("resume_work_experience_title_2")}
                        title={t("resume_work_experience_1_location")}
                        subtitles={[[t("resume_work_experience_1_position_1_dates"), t("resume_work_experience_1_position_1_title")], [t("resume_work_experience_1_position_2_dates"), t("resume_work_experience_1_position_2_title")]]}
                        descriptions={
                            [t("resume_work_experience_1_note_1"),
                                t("resume_work_experience_1_note_2"),
                                t("resume_work_experience_1_note_3")]
                        }
                    />
                    <MemoizedResumeEntry
                        title={t("resume_work_experience_2_location")}
                        subtitles={[[t("resume_work_experience_2_position_1_dates"), t("resume_work_experience_2_position_1_title")]]}
                        descriptions={
                            [t("resume_work_experience_2_note_1")]
                        }
                    />
                    <MemoizedResumeEntry
                        title={t("resume_work_experience_3_location")}
                        subtitles={[[t("resume_work_experience_3_position_1_dates"), t("resume_work_experience_3_position_1_title")], [t("resume_work_experience_3_position_2_dates"), t("resume_work_experience_3_position_2_title")]]}
                        descriptions={
                            [t("resume_work_experience_3_note_1"),
                                t("resume_work_experience_3_note_2")]
                        }
                    />
                    <MemoizedResumeEntry
                        title={t("resume_work_experience_4_location")}
                        subtitles={[[t("resume_work_experience_4_position_1_dates"), t("resume_work_experience_4_position_1_title")]]}
                        descriptions={
                            [t("resume_work_experience_4_note_1"),
                                t("resume_work_experience_4_note_2")]
                        }
                    />
                    <MemoizedResumeEntry
                        title={t("resume_work_experience_5_location")}
                        subtitles={[[t("resume_work_experience_5_position_1_dates"), t("resume_work_experience_5_position_1_title")]]}
                        descriptions={
                            [t("resume_work_experience_5_note_1"),
                                t("resume_work_experience_5_note_2")]
                        }
                    />
                    <MemoizedResumeEntry
                        title={t("resume_work_experience_6_location")}
                        subtitles={[[t("resume_work_experience_6_position_1_dates"), t("resume_work_experience_6_position_1_title")]]}
                        descriptions={
                            [t("resume_work_experience_6_note_1"),
                                t("resume_work_experience_6_note_2")]
                        }
                    />
                    <MemoizedResumeEntry
                        title={t("resume_work_experience_7_location")}
                        subtitles={[[t("resume_work_experience_7_position_1_dates"), t("resume_work_experience_7_position_1_title")]]}
                        descriptions={
                            [t("resume_work_experience_7_note_1")]
                        }
                    />
                    <MemoizedResumeEntry
                        title={t("resume_work_experience_8_location")}
                        subtitles={[[t("resume_work_experience_8_position_1_dates"), t("resume_work_experience_8_position_1_title")]]}
                        descriptions={
                            [t("resume_work_experience_8_note_1"),
                                t("resume_work_experience_8_note_2")]
                        }
                    />
                </Grid>
                <Grid container item xs={5} direction="column" spacing={4}>
                    <Box border={1} paddingX={2} paddingY={1} borderRadius={15} borderColor={'#301A1A'}>
                        <Grid container item direction="column" spacing={4}>
                            <MemoizedResumeEntry
                                mainTitle={t("resume_education_title")}
                                title={t("resume_education_1_location")}
                                subtitles={[[t("resume_education_1_degree_1_dates"), t("resume_education_1_degree_1_title"), t("resume_education_1_degree_1_grade")],
                                    [t("resume_education_1_degree_2_dates"), t("resume_education_1_degree_2_title"), t("resume_education_1_degree_2_grade")]]}
                                descriptions={[]}
                            />
                            <MemoizedResumeEntry
                                title={t("resume_education_2_location")}
                                subtitles={[[t("resume_education_2_degree_1_dates"), t("resume_education_2_degree_1_title"), t("resume_education_2_degree_1_grade")]]}
                                descriptions={[]}
                            />
                            <MemoizedResumeEntry
                                title={t("resume_education_3_location")}
                                subtitles={[[t("resume_education_3_degree_1_dates"), t("resume_education_3_degree_1_title"), t("resume_education_3_degree_1_grade")]]}
                                descriptions={[]}
                            />
                        </Grid>
                    </Box>
                    <Box border={1} paddingX={2} paddingY={1} borderRadius={15} borderColor={'#301A1A'} marginTop={2}>
                        <Grid container item direction="column" spacing={4}>
                            <MemoizedResumeEntry
                                mainTitle={t("resume_qualifications_title")}
                                title={t("resume_qualifications_language_title")}
                                subtitles={[[t("resume_qualifications_language_1_name"), "", t("resume_qualifications_language_1_level")],
                                    [t("resume_qualifications_language_2_name"), "", t("resume_qualifications_language_2_level")],
                                    [t("resume_qualifications_language_3_name"), "", t("resume_qualifications_language_3_level")]]}
                                descriptions={[]}
                            />
                            <MemoizedResumeEntry
                                title={t("resume_qualifications_software_title")}
                                subtitles={[["Adobe Photoshop, InDesign, Illustrator, Premiere Pro, ArchiCAD, Allplan, Vectorworks, SketchUp, QGIS, Figma, Microsoft Office, Jira, Confluence"]]}
                                descriptions={[]}
                            />
                        </Grid>
                    </Box>
                    <Box border={1} paddingX={2} paddingY={1} borderRadius={15} borderColor={'#301A1A'} marginTop={2}>
                        <Grid container item direction="column" spacing={4}>
                            <MemoizedResumeEntry
                                mainTitle={t("resume_interests_title") + '\xa0\xa0\xa0' + t("resume_interests_title_2") + '\xa0\xa0\xa0' + t("resume_interests_title_3")}
                                subtitles={[[t("resume_interests_list")]]}
                                descriptions={[]}
                            />
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export const MemoizedResume = memo(Resume)