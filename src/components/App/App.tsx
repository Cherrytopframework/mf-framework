import { useNavigate } from 'react-router-dom';
// @ts-ignore
import DrawerContainer from 'mf2/DrawerContainer';
// @ts-ignore
import DateTimeLabel from 'mf2/DateTimeLabel';
// @ts-ignore
import DisplayCard from 'mf2/DisplayCard';
// @ts-ignore
import List from 'mf2/List';
// import QueryWrapper from 'mf2/QueryWrapper';
import { Styled } from './App.styles';


const drawerBoxStyle = { padding: "16px", margin: "48px 0", display: "block" };

const Drawer = ({ apps, handleNavigate }: any) => (
    <DrawerContainer
        variant="permanent"
        open={true}
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
    <Styled.Grid sx={{ marginLeft: "240px" }}>
        {apps && (
            <Styled.Grid container>
                {Object.keys(apps)
                    .map((app: string, index: number) => !apps[app].disabled //filter
                        && (
                            <Styled.Grid key={index} size={(3.8) || {
                                // Styled.Grid needs a useWindowSize hook
                                sm: 12,
                                md: 4,
                                lg: 3
                            }}>
                                <DisplayCard
                                    data={{
                                        ...apps[app],
                                        liveLinkClick: (data: any) => handleNavigate(data),
                                        docsLinkClick: () => navigate('/cherrytopframework'),
                                        showCommits: true
                                    }}
                                    sx={{ borderRadius: "16px" }}
                                />
                            </Styled.Grid>
                        )
                    )
                }
            </Styled.Grid>
        )}
        <Styled.Grid sx={{ margin: "16px 0" }}>
            FamilyAppsSuite.2.mfe version
            <DateTimeLabel />
            Copyright 2024 Michael Woodward * Made with ❤️
        </Styled.Grid>
    </Styled.Grid>
);

const App = (props: any) => {
    const navigate = useNavigate();
    
    const sharedProps = {
        apps: props?.appConfig?.cms?.apps,
        handleNavigate: (app: { link: string }) => navigate(app.link),
        navigate
    };

    return (
        <Styled.Grid container>
            {sharedProps.apps && <Drawer {...sharedProps} />}
            {sharedProps.apps && <MainContent {...sharedProps} />}
        </Styled.Grid>
    );
};

export default App;
