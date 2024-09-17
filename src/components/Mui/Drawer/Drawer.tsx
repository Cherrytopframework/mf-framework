import { Box, SwipeableDrawer } from '@mui/material'
import { DrawerType } from '../../../utilities/store/utilityStore';

const Drawer = (props: DrawerType) => {
    return (
        // @ts-ignore
        <SwipeableDrawer {...props}
            // anchor="left"
            // open={true}
            // onOpen={() => {}}
            // onClose={() => {}}
        >
            <Box sx={{ width: 200, height: '100%', mt: 8 }}>
                <h2>Drawer</h2>
                {props.children}
            </Box>
        </SwipeableDrawer>
    )
}

export default Drawer

// ?? USAGE
// import { useUtilityStore } from '../../../utilities/store';
// const Drawer = React.lazy(() => import('app/Drawer'));

// const Test = () => {
//     const { drawer, setDrawer } = useUtilityStore();
//     return (
//         <>
//             <button onClick={() => setDrawer({ open: true })}>Open Drawer</button>
//             <Drawer {...drawer}>
//                 <Box sx={{ width: 200, height: '100%', mt: 8 }}>
//                     <h2>Drawer</h2>
//                     {drawer?.content && drawer.content}
//                 </Box>
//             </Drawer>
//         </>
//     )
// }