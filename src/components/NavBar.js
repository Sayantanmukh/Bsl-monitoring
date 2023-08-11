// import MenuIcon from '@mui/icons-material/Menu';
// import { Box } from "@mui/material";
// import MuiAppBar from '@mui/material/AppBar';
// import IconButton from '@mui/material/IconButton';
// import { styled, useTheme } from '@mui/material/styles';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// const drawerWidth = 240;
// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginRight: drawerWidth,
//   }),
// }));

// function NavBar() {
//   const theme = useTheme();
//   <Box sx={{ display: 'flex' }}>
//     <AppBar position="fixed" open={open}>
//       <Toolbar>
//         <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
//           Bluescope Monitoring
//         </Typography>
//         <IconButton
//           color="inherit"
//           aria-label="open drawer"
//           edge="end"
//           onClick={handleDrawerOpen}
//           sx={{ ...(open && { display: 'none' }) }}
//         >
//           <MenuIcon />
//         </IconButton>
//       </Toolbar>
//     </AppBar>
//   </Box>
// }

// export default NavBar;