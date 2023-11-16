import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchBar from './SearchBar';
import MenuIcon from '@mui/icons-material/Menu';
import './TopBar.scss';

interface TopBarProps {
  drawerWidth: number;
}

export default function TopBar(props: TopBarProps) {
  const { drawerWidth } = props;
  return (
    <AppBar
      position='fixed'
      component='div'
      sx={{
        width: { sm: 1 },
        ml: { sm: `${drawerWidth}px` },
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <IconButton
          color='default'
          aria-label='open drawer'
          edge='start'
          //   onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div'>
          Responsive drawer
        </Typography>
      </Toolbar>
      <SearchBar></SearchBar>
    </AppBar>
  );
}
