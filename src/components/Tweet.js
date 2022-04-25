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
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const Tweet = ({ name, tweets, tweet, setTweets, like, setLike }) => {
    const deleteTweet = () => {
      setTweets(tweets.filter((state) => state.id !== tweet.id));
    }
    
    const likeTweet = () => {
      setLike(1)
    }

    useEffect(() => {
    console.log('we run a func');
    }, []);
  
    
return (
  <>
    <div className="tweet-div">
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;800;900&display=swap"></link>
      <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"></link>
        <Container className="tweet" maxWidth="sm" >
            {/* <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
            <SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            }>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </Badge>
            <Typography variant="h4" gutterBottom component="div">{name}</Typography>
            <Divider className="divid" style={{ background: 'grey' }} variant="fullWidth" sx={{ borderRightWidth: 400 }} />
            <Typography className = "message"variant="h5" gutterBottom component="div">{tweet.message}</Typography>
            <Divider className="divid" style={{ background: 'grey' }} variant="fullWidth" sx={{ borderRightWidth: 400 }} />
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={deleteTweet} className="delbut"></Button>
            <Button variant="outlined" startIcon={<ThumbUpIcon />} onClick={likeTweet} className="likebut" ></Button>
            <h1>{setLike}</h1>
            </Box> */}
          <div class="mb-4 py-4">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex flex-row align-items-center">
                <div class="avatar mr-6"><img class="avatar-img" src="https://i.ibb.co/3TPnWpZ/people-1.jpg" alt="avatar"></img></div>
                <div>
                <h2 class="h6 mb-0">{name}</h2>
                  <p class="small text-muted mb-0">5 min ago</p>
                </div>
              </div>
              <button class="btn btn-icon btn-text-dark dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  <i data-feather="more-vertical"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-right">
                <li><a class="dropdown-item" href="#">Save</a></li>
                <li><a class="dropdown-item" href="#">Unsubscribe</a></li>
              </ul>
            </div><img class="rounded w-100 mt-3" src="https://i.ibb.co/RYbgG6K/mango-blue.jpg" alt="feed"></img>
            <div class="mt-3">
              <h4 class="h5">this is a tweet</h4>
            <p class="text-muted mb-0">{tweet.message}</p>
            </div>
            <div class="d-flex justify-content-between">
              <button class="btn btn-text-dark d-flex align-items-center px-1" type="button">
                  <i class="mr-1" data-feather="heart"></i>432
              </button>
              <button class="btn btn-icon btn-text-dark" type="button">
                  <i data-feather="share-2"></i>
              </button>
            </div>
          </div>
        </Container>
    </div>
    </>
    );
};

export default Tweet;