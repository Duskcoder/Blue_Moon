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
import { Navigate, json, useLocation, useNavigate } from "react-router-dom";
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
import '../../Component/Admin/adminpanel.css'


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


function Adminpanel(props) {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);


    const container =
        window !== undefined ? () => window().document.body : undefined;
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#305931",
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

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/users`); // Replace with your API endpoint
                if (response.status === 200) {
                    const jsonData = response.data;
                    setData(jsonData);
                    setFilteredData(jsonData)
                    console.log(jsonData)
                }
            } catch (err) {
                console.error('Error:', err);
            }
        }

        fetchData();
    }, []);





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

    const [currentpage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const firstIndex = (currentpage - 1) * recordsPerPage;
    const lastIndex = currentpage * recordsPerPage;




    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const location = window.location;
    const handeldelete = (id) => {
        axios
            .delete(`${process.env.REACT_APP_API_BASE_URL}/adminpanel/delete/${id}`)
            .then((res) => {

                location.reload();
                console.log(res, "john")
                console.log("deleted succussfully")
            })
            .catch((err) => {
                console.log(err, "williams")
            })
    }


    const handleFilter = (event) => {
        const query = event.target.value.toLowerCase();
        const filtered = data.filter((item) => {
            return (
                item.name?.toLowerCase()?.includes(query) ||
                item.email?.toLowerCase()?.includes(query) ||
                item.user_address?.toLowerCase()?.includes(query) ||
                item.ref_id?.toLowerCase()?.includes(query) ||
                item.discount_point?.toLowerCase()?.includes(query) ||
                item.phone?.toLowerCase()?.includes(query)
            );
        });
        setFilteredData(filtered);

    };

    const handleFilters = (event) => {
        const query = event.target.value.toLowerCase();
        const filtered = data.filter((item) => {
            return (
                item.name.toLowerCase().includes(query)
            );
        });
        setFilteredData(filtered);
    };






    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className="dashboard-bar"
                open={open}
                style={{ backgroundColor: "#FFD700" }}
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
                        <ListItemButton className="bg-warning ">
                            <ListItemIcon onClick={() => { navigate("/admin") }}>
                                <h4 className="dashboard-h4">
                                    <b className="text-white">Dashboard</b>
                                </h4>
                            </ListItemIcon>
                            <ListItemText />
                        </ListItemButton>
 
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon onClick={() => { navigate("/Level") }}>
                                <h4 className="dashboard-h4">
                                    <b>Rooms</b>
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

                <h2>Dashboard</h2>
                <button
                    className="btn btn-success btn-xs ms-3 mb-3"

                    data-toggle="modal"
                    onClick={() => { navigate("/addrooms") }}

                >Add

                </button>
                <TableContainer component={Paper}>
                    <input
                        type="text"
                        className="float-end mb-3 searchbar"
                        onChange={handleFilter}
                        placeholder="Search "
                    />

                   <div className='sys'>
                   <Table  sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead className="sys">
                            <TableRow>
                                <StyledTableCell align="center">cover_img</StyledTableCell>
                                <StyledTableCell align="center">name</StyledTableCell>
                                {/* <StyledTableCell align="center">description</StyledTableCell> */}
                                <StyledTableCell align="center">beds</StyledTableCell>
                                <StyledTableCell align="center">restrooms</StyledTableCell>
                                <StyledTableCell align="center">bathtub</StyledTableCell>
                                <StyledTableCell align="center">adult</StyledTableCell>
                                <StyledTableCell align="center">status</StyledTableCell>
                                <StyledTableCell align="center">price</StyledTableCell>
                                <StyledTableCell align="center">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <div>


                        </div>
                        <TableBody>
                            {filteredData.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={8} align="center">
                                        No data available in this table
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredData.slice(firstIndex, lastIndex).map((items) => (
                                    <StyledTableRow key={items.id}>
                                        <StyledTableCell component="th" scope="row" align="center">
                                            {items.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {items.email}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {items.phone}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {items.user_address}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {items.ref_id}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {items.discount_point}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {items.wallet}
                                        </StyledTableCell>

                                        <StyledTableCell align="center">
                                            <button
                                                className="btn btn-primary btn-xs"
                                                data-title="Edit"
                                                data-toggle="modal"
                                                data-target="#edit"
                                                onClick={() => navigate(`edit/${items.id}`)}

                                            >
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>
                                            <button
                                                className="btn btn-danger btn-xs ms-3"
                                                data-title="Delete"
                                                data-toggle="modal"
                                                data-target="#delete"
                                                onClick={() =>
                                                    handeldelete(items.id)
                                                }

                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                            <button
                                                className="btn btn-info btn-xs ms-3"
                                                onClick={() => { navigate(`view/${items.id}`) }}
                                            >
                                                <i className="fas fa-eye"></i>
                                            </button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                   </div>
                    <div className='container mob'>
                    <div className='row'>
                    <TableHead className="col-6">
                            <TableRow>
                                <StyledTableCell align="center">Name</StyledTableCell>

                            </TableRow>
                            <TableRow>
                                <StyledTableCell align="center">Email</StyledTableCell>

                            </TableRow>
                            <TableRow>
                                <StyledTableCell align="center">Number</StyledTableCell>

                            </TableRow>
                            <TableRow>
                                <StyledTableCell align="center">User_address</StyledTableCell>

                            </TableRow>
                            <TableRow>
                                <StyledTableCell align="center">Referal id</StyledTableCell>

                            </TableRow>
                            <TableRow>
                                <StyledTableCell align="center">discount</StyledTableCell>

                            </TableRow>
                            <TableRow>
                                <StyledTableCell align="center">Wallet</StyledTableCell>

                            </TableRow>
                            <TableRow>
                                <StyledTableCell align="center">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableRow className="col-6">
                            <TableCell className="d-flex align-items-center">
                                No data available in this table
                            </TableCell>
                        </TableRow>
                    </div>
                       
                    </div>


                    <div className="pagination-container">
                        <Pagination
                            activePage={currentpage}
                            itemsCountPerPage={recordsPerPage}
                            totalItemsCount={filteredData.length}
                            pageRangeDisplayed={2}
                            className="mt-3"
                            onChange={handlePageChange}
                            itemclassName="page-item"
                            linkclassName="page-link"
                            innerclassName="pagination"
                        />
                    </div>
                </TableContainer>
            </Main>
        </Box>
    );
}

export default Adminpanel;