import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Navigate, json, useLocation, useNavigate, useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import Pagination from "react-js-pagination"; // Import Pagination component
// import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Details from "./Details";
import OutlinedInput from '@mui/material/OutlinedInput';

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
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));


function Addrooms(props) {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);


    const container =
        window !== undefined ? () => window().document.body : undefined;
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#5B40E1",
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    }));

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/adminpanel/level`); // Replace with your API endpoint
    //             if (response.status === 200) {
    //                 const jsonData = response.data;
    //                 setData(jsonData);
    //                 setFilteredData(jsonData)
    //                 console.log(jsonData)
    //             }
    //         } catch (err) {
    //             console.error('Error:', err);
    //         }
    //     }

    //     fetchData();
    // }, []);





    const theme = useTheme();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const myprofile = () => {
        navigate("/myprofile");
    };

    const logout = () => {
        localStorage.clear();
        navigate("/");
    };

    // const [currentpage, setCurrentPage] = useState(1);
    // const recordsPerPage = 10;
    // const firstIndex = (currentpage - 1) * recordsPerPage;
    // const lastIndex = currentpage * recordsPerPage;


    // const handleFilter = (event) => {
    //     const query = event.target.value.toLowerCase();
    //     const filtered = data.filter((item) => {
    //         return (
    //             (typeof item.membership_type === 'string' && item.membership_type.toLowerCase().includes(query)) ||
    //             (typeof item.membership_level === 'string' && item.membership_level.toLowerCase().includes(query)) ||
    //             (typeof item.stages === 'string' && item.stages.toLowerCase().includes(query)) ||
    //             (typeof item.amount === 'string' && item.amount.toLowerCase().includes(query))
    //         );
    //     });
    //     setFilteredData(filtered);
    // };




    // const handlePageChange = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    // };


    // const handleFilters = (event) => {
    //     const query = event.target.value.toLowerCase();
    //     const filtered = data.filter((item) => {
    //         return (
    //             item.membership_type.toLowerCase().includes(query)
    //         );
    //     });
    //     setFilteredData(filtered);
    // };
    // console.log(filteredData, "dev")



    // const [record, setRecord] = useState({
    //     membership_type: '',
    //     membership_level: '',
    //     stages: '',
    //     amount: ''
    // });

    // const showDetail = async (si_no) => {
    //     await axios.get(`${process.env.REACT_APP_API_BASE_URL}/adminpanel/adminlevelview/${si_no}`)
    //         .then((response) => {
    //             setRecord(response.data);
    //             setValue(si_no)

    //             setNewAmount(response.data[0].amount)
    //             console.log(response.data[0].amount, "ammout")
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    // const [newamount, setNewAmount] = useState("");
    // const [value, setValue] = useState("")

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/adminpanel/adminlevelview/edit/${value}`, { newamount });
    //         console.log(newamount, "john")
    //         if (response.status === 200) {
    //             window.location.reload();
    //             // You can redirect to another page or update the UI as needed.
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // console.log(newamount, "kjvjkhv")
    
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className="dashboard-bar"
                open={open}
                style={{ backgroundColor: "#5B40E1" }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: "none" }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        BlueMoon
                    </Typography>



                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        className="logout-icon"
                        style={{ position: "absolute", right: "0" }}
                    >
                        <AccountCircle sx={{ width: 40, height: 40 }} />
                    </IconButton>

                    <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={myprofile}>My profile</MenuItem>
                        <MenuItem onClick={logout}>Log Out</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon onClick={() => { navigate("/admin") }}>
                                <h4 className="dashboard-h4">
                                    <b>Dashboard</b>
                                </h4>
                            </ListItemIcon>
                            <ListItemText />
                        </ListItemButton>

                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className="bg-warning">
                            <ListItemIcon onClick={() => { navigate("/Level") }}>
                                <h4 className="dashboard-h4">
                                    <b className="text-white">Rooms</b>
                                </h4>
                            </ListItemIcon>
                            <ListItemText />
                        </ListItemButton>

                    </ListItem>

                </List>
                <Divider />
            </Drawer>
            <Main open={open}>
                <DrawerHeader />

                <h2>AddRooms</h2>
                <Details/>
                {/* <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 3 },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">RoomName</InputLabel>
        <Input id="component-simple" />
      </FormControl>
      
     
     
    </Box> */}
            </Main>



            {/* <form onSubmit={handleSubmit}>
                <div className="modal fade mt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Amount Details</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Amount
                                <input
                                    type="number"
                                    className=" w-100 mb-3 searchbar"
                                    value={newamount}
                                    placeholder="Search "
                                    onChange={(e) => setNewAmount(e.target.value)}
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form> */}


        </Box>
    );
}

export default Addrooms;