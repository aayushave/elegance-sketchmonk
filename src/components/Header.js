import React,{useState} from 'react'
import { AppBar, Toolbar, Container, Button, Typography } from '@mui/material'
import { MenuItem, IconButton, Menu } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
// import { makeStyles } from '@mui/material';
import './../assets/css/custom.css'
import lines from './../assets/images/lines.svg'
const pages = ['HOME', 'PORTFOLIO', 'ABOUT US']

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div >
            <AppBar position="static"
                sx={{
                    backgroundColor: '#fff', boxShadow: 'none' , position:'fixed',zIndex:'1'
                }} >
                <Container maxWidth="xl" >
                    <Toolbar>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{ mr: 2, color: '#0B8234', display: { xs: 'flex', md: 'flex', flexGrow: 1 } }}
                        >
                            Real Elegance
                        </Typography>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                variant="button"
                                sx={{ color: 'black', display: { xs: 'none', md: 'flex', flexGrow: 0, },
                                ':hover': {
                                    bgcolor: 'grey',
                                    textDecorationThickness: '4px', 
                                    color:'orange'
                                 }
                                }}>
                                {page}
                            </Button>
                        ))}
                        <div><Button
                                key="CONTACT US"
                                variant="button"
                                sx={{ color: 'black', display: { xs: 'none', md: 'flex', flexGrow: 0 },
                                marginBottom:'-15px',
                                ':hover': {
                                    bgcolor: 'grey',
                                    color:'orange'
                                 }
                                }}>
                                CONTACT US
                            </Button>
                                <img  className="imglines" src={lines}  alt="lines" style={{display: { xs: 'none', md: 'flex',flexGrow: 0 }}}></img>
                             
                        </div>
                        {
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="Menu"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    sx={{ color: 'black', display: { xs: 'flex', md: 'none', flexGrow: 0 } }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    {pages.map((page) => (
                                        <MenuItem
                                        onClick={handleClose}>{page}
                                        </MenuItem>
                                    ))}
                                     <MenuItem
                                        onClick={handleClose}>CONTACT US
                                        </MenuItem>
                                </Menu>
                            </div>
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Header
