import React, { useState, useEffect } from 'react';
import useSWRPost from 'Hooks/useSWRPost';
import NewsCard from 'Components/NewsCard';
import styles from './news.module.css';
import Loader from 'Components/Loader';

const News = () => {
    const [news, setNews] = useState([]);
    const [after, setAfter] = useState({});

    const [getNews, { isValidating }] = useSWRPost('http://localhost:5000/api/news', {
        onSuccess: (r) => {
            setNews(n => n.concat(r.data))
            setAfter(r.after)
        }
    })

    useEffect(() => {
        getNews({ after })
    }, [])

    return (
        <>
            <section className={styles.news}>
                {news.map(n => (<NewsCard
                    key={n.id}
                    title={n.title}
                    thumbnail={n.thumbnail}
                    url={n.url}
                />)
                )}
                {isValidating && <Loader />}
            </section>
        </>
    )
}

export default News;