import { Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import styles from "./AboutStyles.jsx";
import { useEffect } from "react";

function AboutSection() {
    const classes = styles();
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down("sm"));
    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);
    return (
        <>
            {/* About Section */}
            <Container maxWidth="lg" id="about-section">
                <Grid
                    container
                    className={classes.root}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography variant="h3" className={classes.title}>
                            About <span className={classes.textColored}>Me</span>
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                        I am a passionate full-stack web developer with a strong background in front-end development. I completed an intensive bootcamp at Masai School, dedicating 12 hours a day to coding. Afterward, I worked at a leading IT company, where I contributed to the development of a React-based POS dashboard and multiple websites using Next.js.
             
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                        As a product enthusiast, I love creating intuitive and user-centric solutions. I believe in understanding the products we build and their impact on end-users. I approach every project with enthusiasm, aiming for high-quality results. I thrive in collaborative environments, enjoying teamwork to bring ideas to life.
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                        Outside of coding, I enjoy playing cricket and football. I prioritize mental well-being through daily meditation, which keeps me focused and clear-headed. I am excited about the endless possibilities in web development and look forward to creating innovative solutions that make a positive impact.
                        </Typography>
                    </Grid>
                </Grid>
                {!small && (<span className="scroll-btn">
                    <a href="#skills-section" onClick={e => {
                        let whereTo = document.getElementById("skills-section");
                        e.preventDefault();
                        whereTo && whereTo.scrollIntoView({ behavior: "smooth", block: "start" });
                    }} style={{
                        display: "flex", justifyContent: "center",
                    }}
                    >
                        <span className="mouse">
                            <span>
                            </span>
                        </span>
                    </a>
                </span>
                )}
            </Container>
        </>
    );
}

export default AboutSection;

