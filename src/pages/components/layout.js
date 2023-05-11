import { useRouter } from "next/router";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import { useEffect } from "react";
import Login from "../Login";
import Contact from  "../Contact";




const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));

export default function Layout({ children }) {
  const theme = useTheme();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [openIndex, setOpenIndex] = React.useState(false);
  // const checkUser= window.localStorage.getItem("token");
  const [checkUser,setCheckuser]= React.useState(null);
  // setCheckuser(localStorage.getItem("token"))
  // const router = useRouter();
    // const token = Cookies.get("token"); 
  // console.log(token);
  //const defaultActiveLink = router.asPath;
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleIndex = () => {
    setOpenIndex(!openIndex);
  };


  const isActive = (path) => {
    return router.pathname == path;
  };

  // const getAuthentication=()=>{

  // }

 
  // const { requestedpath } = router.pathname;

  // const handleRedirect = () => {
  //   if (requestedpath) {
  //     router.push(requestedpath);
  //   } else {
  //     router.push('/Contact');
  //   }
  // }
  
 
 
  // getAuthentication();

  // const handleAbout = () => {
  //   setOpenAbout(!openAbout);
  // };
// const handleAbout = () => {
//  let col= document.styles.color("red");
//  return col;
//   };
// const isActive = (path) => {
//   return router.pathname === path;
// };
// useEffect(() => {
//   // Perform localStorage action
//   const checkUser = localStorage.getItem('token');
//   console.log(!!checkUser);
// }, [])
// const router = useRouter();
// if(!!checkUser){
//   // router.push("/Login");
//   return <>User not logged in !!</>;
// }
// }

const [userToken,setuserToken]=React.useState(false);

let requestedpath=router.pathname.split('/');
console.log(requestedpath);

useEffect(()=>{
  const checkUser=localStorage.getItem('token');
  
  if(checkUser!=null && checkUser!=""){
      setuserToken(true)
  }   
  // console.log(checkUser)
  // console.log(!!checkUser)
  // console.log(!checkUser);
  // console.log("!userTokem",!userToken)
})
const userLogout=()=>{
  localStorage.removeItem('token');
}


// if(requestedpath!==''){
//   router.push(requestedpath);
// }
//let requestedpath=router.getcurrentUrl();

// {!checkUser } 
// const [session, loading] = useSession();

//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//       {!loading && !session && (
//         <>
//           <p>You are not logged in.</p>
//           <a href="/api/auth/signin/google">Sign in with Google</a>
//         </>
//       )}
//       {!loading && session && (
//         <>
//           <p>You are logged in.</p>
//           <a href="/api/auth/signout">Sign out</a>
//         </>
//       )}
//     </div>
  
  return (
    <div>
    {/*<div>
    <button onClick={handleRedirect}>Redirect to requested path</button>
  </div>*/}
    {!userToken && <Login/>}
    { userToken && <Box sx={{ display: "flex" }}>
    <CssBaseline />
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onMouseEnter={handleDrawerOpen}
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "flex" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction="row" gap="1rem">
            <Link href="/Login" onClick={userLogout}>

              {" "}
              <Typography textAlign="left" marginRight="40px" color="#fffff" textDecoration="none">
                {" "} Logout
              
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
    <style jsx>{`
    .nav-link {
      text-decoration: none;
    }
    .nav-link:hover {
        background:green;
    }
    .active {
      background:gray;
    }
   
  }

  `}</style>
    <Drawer 
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background:'orange'
        },
      }}
   
      variant="persistent"
      anchor="left"
      open={open}
      // onMouseLeave={handleDrawerClose}
    >
    
      <Divider/>
      <div style={{ display:"block", padding: "20px", margin:"20px", listStyleType: "none"}}><ul></ul>
      <li className={router.pathname == "/Home" ? "active" : ""}>
      <Link href="/Home"  style={{marginLeft:"30px", textDecoration: "none"}}>
      Home</Link>
     </li>
      <li className={router.pathname == "/About" ? "active" : ""}>
      <Link href="/About"  className="nav-link" style={{marginLeft:"30px", textDecoration: "none"}}>About</Link>
      </li>
      <li className={router.pathname == "/Contact" ? "active" : ""}>
      <Link href="/Contact"  className="nav-link" style={{marginLeft:"30px", textDecoration: "none"  }}>Contact</Link>
     </li>
     <li className={router.pathname == "/components/Post" ? "active" : ""}>
     <Link href="/components/Post"  className="nav-link" style={{marginLeft:"30px", textDecoration: "none"}}>Post</Link>
      </li>
      </div>
    </Drawer>
    
    <Main open={open}>
      <DrawerHeader />
      <main style={{ height: "100%", marginTop: "4%"}}>{children}</main>
    </Main>
  </Box>}
    </div>
  );
}
