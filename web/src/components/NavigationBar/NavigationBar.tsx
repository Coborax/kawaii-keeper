import React from 'react'
import {
  Box,
  Sheet,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  Divider,
  IconButton
} from '@mui/joy'
import {
  Home as HomeIcon,
  Person as ProfileIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Favorite as FavoriteIcon,
  Notifications as NotificationsIcon
} from '@mui/icons-material'

interface UserSidebarProps {
  user?: {
    name: string
    avatar?: string
    email?: string
  }
  onNavigate?: (path: string) => void
  onLogout?: () => void
}

const UserSidebar: React.FC<UserSidebarProps> = ({
  user = {
    name: 'Guest User',
    email: 'guest@example.com',
    avatar: '/default-avatar.png'
  },
  onNavigate = () => {},
  onLogout = () => {}
}) => {
  const menuItems = [
    {
      icon: <HomeIcon />,
      text: 'Home',
      path: '/home'
    },
    {
      icon: <ProfileIcon />,
      text: 'Profile',
      path: '/profile'
    },
    {
      icon: <FavoriteIcon />,
      text: 'Favorites',
      path: '/favorites'
    },
    {
      icon: <SettingsIcon />,
      text: 'Settings',
      path: '/settings'
    }
  ]

  return (
    <>
      {/* User Profile Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 2,
          pb: 2
        }}
      >
        <Avatar
          src={user.avatar}
          alt={user.name}
          sx={{ width: 56, height: 56 }}
        />
        <Box>
          <Typography level="title-lg">{user.name}</Typography>
          <Typography level="body-sm" color="neutral">{user.email}</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 1 }} />

      {/* Navigation Menu */}
      <List sx={{ flex: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.path}>
            <ListItemButton
              onClick={() => onNavigate(item.path)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >
              {item.icon}
              <Typography>{item.text}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 1 }} />

      {/* Logout Section */}
      <ListItem>
        <ListItemButton
          color="danger"
          onClick={onLogout}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          <LogoutIcon />
          <Typography color="danger">Logout</Typography>
        </ListItemButton>
      </ListItem>
    </>
  )
}

export default UserSidebar