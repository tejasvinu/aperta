import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CreateTweet = ({tweets,setTweets,textInput,setTextInput,like,setLike}) => {

    //functions
    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    }

    const submitTweetHandler = (e) => {
        e.preventDefault();
        like = 0;
        setTweets([...tweets, { message:textInput, id: uuidv4() }]);
        setTextInput("");
    }

    return (
        <div className="create">
        <Grid container spacing={2}>
            <form className="maketweet" onSubmit = {submitTweetHandler}>
                <Grid item xs={8}>
                    <textarea rows="8" columns="400" value={textInput} onChange={userInputHandler} placeholder="enter your post" maxlength ="250"></textarea>
                </Grid>
                <Grid item xs={8}><FontAwesomeIcon icon="fa-solid fa-link" size="lg" /></Grid>
                <Grid item xs={8}>
                    <Button className="postbut" variant="contained" endIcon={<SendIcon />} type="submit">
                        Post
                    </Button>
                </Grid>    
            </form>
        </Grid>
        </div>
    );
}

export default CreateTweet;