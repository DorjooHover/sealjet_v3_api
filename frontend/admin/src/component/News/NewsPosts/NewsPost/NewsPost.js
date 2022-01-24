import React from 'react';

// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import { deleteNews } from '../../../../actions/posts';

const NewsPost = ({ news, setCurrentId }) => {
     const dispatch = useDispatch()
     return (
          < >
               <li>{news.title}</li>
               <li>{news.description}</li>
               <button onClick={() => dispatch(deleteNews(news._id))}><DeleteIcon /></button>
          </ >

     );
};

export default NewsPost;
