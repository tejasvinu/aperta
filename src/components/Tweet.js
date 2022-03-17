import React, {useEffect} from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const Tweet = ({ name, tweets, tweet, setTweets }) => {
    const deleteTweet = () => {
        setTweets(tweets.filter((state) => state.id !== tweet.id));
    }

    useEffect(() => {
    console.log('we run a func');
    }, []);
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));
    
  return (
      <div className="tweet-div">
        <Container className="tweet" maxWidth="sm" >
            <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
            <SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            }>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </Badge>
            <Typography variant="h4" gutterBottom component="div">{name}</Typography>
            <Divider variant="fullWidth" sx={{ borderRightWidth: 400 }} />
            <Typography variant="h5" gutterBottom component="div">{tweet.message}</Typography>
            <Divider variant="fullWidth" sx={{ borderRightWidth: 400 }} />
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={deleteTweet} className="delbut">Delete</Button>
            <Button variant="outlined" startIcon={<ThumbUpIcon/>} className="likebut" >Like</Button>
            </Box>
        </Container>
      </div>  
    );
};

export default Tweet;