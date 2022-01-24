import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import NewsPost from './NewsPost/NewsPost'
const NewsPosts = ({ setCurrentId }) => {
     const allNews = useSelector((state) => state.posts);
     console.log(allNews)
     return (
          !allNews.newsMessages.length ? <CircularProgress /> : (
               <Grid container alignItems="stretch" spacing={3}>
                    {allNews.newsMessages.map((news) => (

                         <NewsPost news={news} setCurrentId={setCurrentId} />

                    ))}
               </Grid>
          )
     );
};

export default NewsPosts;
