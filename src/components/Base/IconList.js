import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';

const ListItems = ({icon, children}) => (
  <ListItem 
    sx={{ 
      textAlign: "left",
      alignItems: "flex-start",
    }}
  >
    <ListItemDecorator>{icon}</ListItemDecorator>
    <ListItemContent>{children}</ListItemContent>
  </ListItem>
)

export default function IconList({ icon, children }) {
  return (
    <List aria-labelledby="decorated-list-demo" sx={{gap: 2}}>
      {React.Children.map( children, child => <ListItems icon={icon} children={child} />)}
    </List>
  );
}