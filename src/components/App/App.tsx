import { useNavigate } from 'react-router-dom';
// @ts-ignore
import { Grid } from 'mf2/Mui';
// @ts-ignore
import DrawerContainer from 'mf2/DrawerContainer';
// @ts-ignore
import DateTimeLabel from 'mf2/DateTimeLabel';
// @ts-ignore
import DisplayCard from 'mf2/DisplayCard';
// @ts-ignore
import List from 'mf2/List';


const drawerBoxStyle = { padding: "16px", margin: "48px 0", display: "block" };

const Drawer = ({ apps, handleNavigate }: any) => (
    <DrawerContainer
        variant={{ 
            xs: "temporary", 
            sm: "temporary", 
            md: "temporary",
            lg: "permanent",
            xl: "permanent"
        }}
        anchor={{ xs: "top", sm: "top", md: "top", lg: "left", xl: "left" }}
        open={false}
        sx={{ width: 400, zIndex: 8 }}
        boxStyle={{ width: "500px" }}
    >
        <div style={drawerBoxStyle}>
            <div>
                <p>CherrytopFramework</p>
            </div>
            <hr />
            {apps && (
                <List
                    data={apps.map((app: any) => ({ //todo -> import appTypes from framework
                        ...app,
                        listItemProps: {
                            onClick: () => handleNavigate(app),
                            sx: {
                                "&:hover": {
                                    cursor: "pointer",
                                    background: "rgba(33, 33, 33, 0.4)"
                                }
                            }
                        }
                    }))}
                />
            )}
        </div>
    </DrawerContainer>
);

const MainContent = ({ apps, handleNavigate, navigate }: any) => (
    <Grid sx={{ marginLeft: { xs: 0, md: "240px" }, p: 4, mt: 12 }}>
        {apps && (
            <Grid container spacing={2}>
                {Object.keys(apps)
                    .map((app: string, index: number) => !apps[app].disabled //filter
                        && (
                            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                                <DisplayCard
                                    data={{
                                        ...apps[app],
                                        liveLinkClick: (data: any) => handleNavigate(data),
                                        docsLinkClick: () => navigate('/cherrytopframework'),
                                        showCommits: true
                                    }}
                                    sx={{ borderRadius: "16px" }}
                                />
                            </Grid>
                        )
                    )
                }
            </Grid>
        )}
        <Grid sx={{ margin: "16px 0" }}>
            FamilyAppsSuite.2.mfe version
            <DateTimeLabel />
            Copyright 2024 Michael Woodward * Made with ❤️
        </Grid>
    </Grid>
);

const App = (props: any) => {
    const navigate = useNavigate();
    
    const sharedProps = {
        apps: props?.appConfig?.cms?.apps,
        handleNavigate: (app: { link: string }) => navigate(app.link),
        navigate
    };

    return (
        <Grid container>
            {sharedProps.apps && <Drawer {...sharedProps} />}
            {sharedProps.apps && <MainContent {...sharedProps} />}
        </Grid>
    );
};

export default App;
