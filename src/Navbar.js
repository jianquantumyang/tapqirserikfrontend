import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    Link,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ChatIcon from '@mui/icons-material/Chat';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import PhotoFilterIcon from '@mui/icons-material/PhotoFilter';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('Tapqir serik'); // Default page name

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handlePageChange = (pageName) => {
        setCurrentPage(pageName);
        setMenuOpen(false); // Close the menu when a page is selected
    };

    return (
        <div>
            <AppBar
                sx={{
                    boxShadow: 'none',
                    borderBottom: '1px solid #333',
                    zIndex: 999,
                }}
                position="static"
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        onClick={toggleMenu}
                        sx={{ display: { xs: 'block', sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ display: { xs: 'block', sm: 'none' }, mx: 'auto' }}>
                        {currentPage}
                    </Typography>

                    <Button
                        color="inherit"
                        component={Link}
                        href="/"
                        onClick={() => handlePageChange('Чат')}
                        sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'center' }}
                    >
                        Tapqir serik
                    </Button>
                    <Button
                        component={Link}
                        href="/"
                        color="inherit"
                        onClick={() => handlePageChange('Чат')}
                        sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'center' }}
                    >
                        Чат
                    </Button>
                    <Button
                    component={Link}
                    href="/image"
                        color="inherit"
                        onClick={() => handlePageChange('Сурет')}
                        sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'center' }}
                    >
                        Сурет
                    </Button>
                    <Button
                    component={Link}
                    href="/voice"
                        color="inherit"
                        onClick={() => handlePageChange('Жасанды дауыс')}
                        sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'center' }}
                    >
                        Жасанды дауыс
                    </Button>
                    <Button
                    component={Link}
                    href="/about"
                        color="inherit"
                        onClick={() => handlePageChange('FAQ')}
                        sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'center' }}
                    >
                        FAQ
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer anchor="bottom" open={menuOpen} onClose={toggleMenu} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                <List>
                    <ListItem component={Link}
                        href="/" button onClick={() => handlePageChange('Чат')}>
                        <ListItemIcon>
                            <ChatIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Чат" sx={{ paddingLeft: '0px', marginLeft: '0px' }} />
                    </ListItem>
                    <ListItem component={Link}
                        href="/image" button onClick={() => handlePageChange('Сурет')}>
                        <ListItemIcon>
                            <PhotoFilterIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Сурет" sx={{ paddingLeft: '0px', marginLeft: '0px' }} />
                    </ListItem>
                    <ListItem component={Link}
                        href="/voice" button onClick={() => handlePageChange('Жасанды дауыс')}>
                        <ListItemIcon>
                            <GraphicEqIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Жасанды дауыс" sx={{ paddingLeft: '0px', marginLeft: '0px' }} />
                    </ListItem>
                    <ListItem component={Link}
                        href="/about" button onClick={() => handlePageChange('FAQ')}>
                        <ListItemIcon>
                            <HelpOutlineIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="FAQ" sx={{ paddingLeft: '0px', marginLeft: '0px' }} />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}
