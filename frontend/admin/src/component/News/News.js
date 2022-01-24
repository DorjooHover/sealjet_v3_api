import React, { useState, useEffect, Fragment } from 'react'
import { Grid } from '@material-ui/core'
import "../News/News.css";
import { useDispatch, useSelector } from 'react-redux'
import { createNews } from '../../actions/posts'
import FileBase from 'react-file-base64'
import NewsPosts from './NewsPosts/NewsPosts';
const News = ({ currentId, setCurrentId }) => {

    const [newsData, setNewsData] = useState({ title: '', description: '', type: '', selected_image: '' })
    const dispatch = useDispatch()
    const news = useSelector((state) => (currentId ? state.posts.newsMessages.find((m) => m._id === currentId) : null))
    console.log(currentId)
    useEffect(() => {
        if (news) setNewsData(news)
    }, [news])
    const clear = () => {
        // setCurrentId(0)
        setNewsData({ title: '', description: '', type: '', selected_image: '' })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        dispatch(createNews(newsData))
        clear()
    }

    return (
        <div className='News'>
            <h1 className='title'>Мэдээ</h1>
            <form className='newsForm' onSubmit={handleSubmit}>
                <div className="news">
                    <div className='newsItem'>
                        <label>Мэдээний гарчиг</label>
                        <input type="text" name="title" value={newsData.title} onChange={(e) => setNewsData({ ...newsData, title: e.target.value })} />
                    </div>
                    <div className='newsItem'>
                        <label>Мэдээний дэлгэрэнгүй</label>
                        <textarea name="" id="" cols="30" rows="10" name="description" value={newsData.description} onChange={(e) => setNewsData({ ...newsData, description: e.target.value })}></textarea>
                    </div>
                    <div className='newsItem'>
                        <label >Ангилал</label>
                        <select className='classification' placeholder='Сонгоно уу' name="type" id="active" value={newsData.type} onChange={(e) => setNewsData({ ...newsData, type: e.target.value })}>
                            <option value="classification1" placeholder='Сонгоно уу'>Ангилал1</option>
                            <option value="classification2">Ангилал2</option>
                            <option value="classification3">Ангилал3</option>
                        </select>
                    </div>
                    <div className='newsItem'>
                        <label>Зураг оруулах</label>
                        <FileBase type="file" onDone={({ base64 }) => setNewsData({ ...newsData, selected_image: base64 })} />
                    </div>
                    <button className='Button'>Нийтлэх</button>
                </div>
                <div className="news">
                    <div className='newsItem_2'>
                        <label>Сүүлд оруулсан мэдээнүүд</label>
                        <NewsPosts setCurrentId={setCurrentId} />
                    </div>
                </div>
            </form >
        </div >
    )
}

export default News
