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


const App = (props: { appConfig?: any }) => {
    const navigate = useNavigate();
    const handleNavigate = (app: any) => navigate(app.link);

    const apps = props?.appConfig?.cms?.apps;
    
    return (
        <Styled.Grid container>
            {console.log("App.props.appConfig: ", props) as any}
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
                        data={
                            props?.appConfig?.cms?.apps
                                .map((app) => ({
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
                                }))
                        }
                    />
                    )}
                </div>
            </DrawerContainer>
            <Styled.Grid sx={{ marginLeft: "240px" }}>
                <Styled.Grid>
                    FamilyAppsSuite.2.mfe version
                    <DateTimeLabel />
                </Styled.Grid>
                {apps && (
                <Styled.Grid container>
                    {Object.keys(props?.appConfig.cms.apps)
                        .map((app: string, index: number) => !props?.appConfig.cms.apps[app].disabled //filter
                            && (
                                <Styled.Grid key={index} size={(3.8) || {
                                    // Styled.Grid needs a useWindowSize hook
                                    sm: 12,
                                    md: 4,
                                    lg: 3
                                }}>
                                    <DisplayCard
                                        data={props?.appConfig.cms.apps[app]}
                                        sx={{ borderRadius: "16px" }}
                                        onData={(data) => console.log("DisplayCard.data: ", data)}
                                        onClick={(data) => handleNavigate(data)}
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
        </Styled.Grid>
    );
};

export default App;
