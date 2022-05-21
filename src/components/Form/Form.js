import React, { useState} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
import FileBase from 'react-file-base64';


const Form = () =>{
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

    const classes = useStyles();

    const handleSubmit = async (e) => {
       console.log("will be added later");
        };

    const clear = () => {
        console.log("will be added later");
    };

    return (
        <Paper className={classes.paper}>
                    
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">My Memories:D</Typography>

                <TextField 
                    name="creator" 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth 
                    value={postData.creator} //state from useState
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })} //changes the value of the state. "...postData" helps to keep all the rest text fields in case a second input will be added. otherwise, new info will just override everything everytime"
                />

                <TextField 
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth value={postData.title} 
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })} 
                />

                <TextField 
                    name="message" 
                    variant="outlined" 
                    label="Message" fullWidth multiline
                    value={postData.message} 
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })} 
                />

                <TextField 
                    name="tags" 
                    variant="outlined" 
                    label="Tags" 
                    fullWidth value={postData.tags} 
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(' ') })} 
                />

                <div className={classes.fileInput}>
                    <FileBase 
                        type="file" 
                        multiple={false} 
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} 
                    />
                </div>

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
                    Submit 
                </Button>

                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
                    delete
                </Button>
            </form>
        </Paper>
    )
}

export default Form;