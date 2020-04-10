import React from 'react';
import PostLink from "../post-link";
import PropTypes from "prop-types"

import InfiniteScroll from "react-infinite-scroll-component";

// import { Container } from './styles';

const GalleryNews = ({ news, loading, fetchNews }) => {
    
    const NewsLoaded = news
    .filter(notice => !!notice.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(notice => <PostLink key={notice.node.id} post={notice.node} />)

    // Create gallery here
    return (
      
      <InfiniteScroll
        dataLength={news.length}
        next={() => fetchNews()}
        hasMore={true}
        loader={
          <p style={{ textAlign: "center", marginTop: "1%" }}>
            Isso é tudo...
          </p>
        }
      >
          <div className="grids">
          {!loading
            ? NewsLoaded
            : ""}
            </div>
      </InfiniteScroll>
      
    )
  }
  export default GalleryNews;

  GalleryNews.propTypes = {
    news: PropTypes.array,
    loading: PropTypes.bool,
    fetchNews: PropTypes.func,
  }