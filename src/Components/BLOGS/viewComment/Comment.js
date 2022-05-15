/*
This component will provide a UI 
to display a selected blog comments
*/

// importing external libraries

import React, { useState } from 'react';

import {
  Card, CardActions, CardContent,
  Button, Typography, Modal, Paper
} from '@material-ui/core';
import moment from 'moment';

// local imports
import useStyles from './styles';
import PostParentReComment from '../postComment/PostParentReComment';

const Comment = ({ comment, close }) => {
    const [modalOpenParentComment, setModalOpenParentComment] = useState(false);
    const [modalOpenChildComment, setModalOpenChildComment] = useState(false);

    //Modal toggle settings for parent comment tag
    const handleModalOpenParentComment = () => { setModalOpenParentComment(true) };
    const handleModalCloseParentComment = () => { setModalOpenParentComment(false) };
    
    //Modal toggle settings for child comment tag
    const handleModalOpenChildComment = () => { setModalOpenChildComment(true) };
    const handleModalCloseChildComment = () => { setModalOpenChildComment(false) };
    
    const user = JSON.parse(localStorage.getItem('userInfo'));
    const username = user?.data?.user?.username;
   
    const classes = useStyles();
      
  
    return (
        <div className={classes.main}>

            {/* Parent comment */}
            <div>
                <Card className={classes.cardParent}>
                    <CardContent>
                        <div>
                            <Typography variant="body2">Initial Comment</Typography>
                            <hr></hr>
                            <Typography gutterBottom className={classes.titleText1}>
                                {comment?.parentComment?.content}
                            </Typography>
                            <Typography style={{ fontSize: '0.7rem', color: 'grey' }}>
                                Commented by {username}  {moment.utc(comment?.parentComment?.createTime).local().fromNow()}...
                            </Typography>
                        </div>
                    </CardContent>
                    <CardActions className={classes.actions} >
                        <Button className={classes.btn}
                            variant='inherit'
                            color='primary'
                            onClick={handleModalOpenParentComment}>
                            <Typography className={classes.more}>
                                Comment Back
                            </Typography>
                        </Button>
                        <Modal className={classes.modal} open={modalOpenParentComment} onClose={handleModalCloseParentComment}>
                        <>             
                        <PostParentReComment
                                    closeEdit={handleModalCloseParentComment}
                                    commentParentId={comment?.parentComment?.id}
                                    towardUserId={comment?.parentComment?.creator?.id.toString()}
                                />
                        </>
                        </Modal>
                    </CardActions>
                </Card>
            </div>

            {/* Child comments */}
            {comment?.childComments?.length ? (
            < Paper className={classes.cardChild} style={{maxWidth: '24em', overflowY: 'scroll'}}>
                 <Typography style={{margin: '1em'}} variant="body2">Response to the Initial Comment</Typography>
                            <hr style={{margin: '1em'}}></hr>
                {comment?.childComments?.map(commentChild => (
                    <div>
                       
                        <Typography gutterBottom style={{margin: '1em'}} className={classes.titleText2}>
                            {commentChild?.content}
                        </Typography>
                        <Typography style={{ fontSize: '0.6rem', color: 'grey', marginLeft:'1.4em' }}>
                            Recommented by {username}  {moment.utc(commentChild?.createTime).local().fromNow()}...
                        </Typography>
                        <Button className={classes.btnChild}
                            variant='inherit'
                            color='primary'
                            onClick={handleModalOpenChildComment}>
                            <Typography style={{marginLeft: '1.4em'}} className={classes.moreChild}>
                                Comment Back
                            </Typography>
                        </Button>
                        <hr></hr>
                        <Modal className={classes.modal} open={modalOpenChildComment} onClose={handleModalCloseChildComment}>
                        <>             
                        <PostParentReComment
                                    closeEdit={handleModalCloseChildComment}
                                    commentParentId={commentChild?.commentParentId.toString()}
                                    towardUserId={commentChild?.creator?.id}
                                />
                        </>
                        </Modal>
                    </div>
                ))}
                
            </Paper>
            ) : null
        }
          
    </div>
  );
};

export default Comment;
