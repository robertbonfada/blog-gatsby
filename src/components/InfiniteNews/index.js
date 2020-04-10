import React, { useState, useEffect } from "react"
import GalleryNews from "../GalleryNews"
import PropTypes from "prop-types"

const InfiniteNews = (props) => {

    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchNews()
    }, [])


    const fetchNews = () => {
        let moreNews = []
        console.log('news')
        console.log(props.newsLoaded)
        let size = 10
        if(props.newsLoaded.length < 10) {
            size = props.newsLoaded.length;
        }
        for(let i=news.length; i < size; i++ ) {
            moreNews.push({
                node: props.newsLoaded[i].node,
            })
        }
        console.log(moreNews)
        setNews([...news, ...moreNews])
        console.log(news)
        setLoading(false)
    }

    
    return (
        <GalleryNews news={news} loading={loading} fetchNews={fetchNews} />
    )
}
export default InfiniteNews;

GalleryNews.propTypes = {
    news: PropTypes.array,
    loading: PropTypes.bool,
    fetchNews: PropTypes.func,
  }