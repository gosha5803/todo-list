import { Box, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import React, {useState} from 'react';
import { MyButton } from 'shared/ui/MyButton/ui/MyButton';
import type { MyMenuItem, MyMenuProps } from '../model/types/my-menu-props'



export const MyMenu: React.FC<MyMenuProps> = ({menuItems, menuButton, iconButton, position, className}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget)
    }
    const handleClose = (item: MyMenuItem) => {
        item.action()
        setAnchorEl(null)
    }

    return (
        <Box>
            {<MyButton onClick={handleClick} {...menuButton}></MyButton>}
            {<IconButton onClick={handleClick} {...iconButton}></IconButton>}

            {(menuButton || iconButton) &&
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={!!anchorEl}
            onClose={() => setAnchorEl(null)}
            >
                {menuItems.map(item => 
                <MenuItem onClick={() => handleClose(item)} key={item.title}>
                {item.icon ? <ListItemIcon>{item.icon}</ListItemIcon> : ''}
                    {item.title}</MenuItem>
                )}
                </Menu> 
            // TODO Фича по открытию менюшки вызовом контекстного меню
            // <Menu 
            // id="basic-menu"
            // anchorReference='anchorPosition'
            // anchorPosition={position}
            // open={!!position?.left}
            // onClose={() => setAnchorEl(null)}
            // >
            // {menuItems.map(item => 
            // <MenuItem onClick={() => handleClose(item)} key={item.title}>
            // {item.icon ? <ListItemIcon>{item.icon}</ListItemIcon> : ''}
            //     {item.title}</MenuItem>
            // )}
            // </Menu>   
            }
      </Box>
    );
};
