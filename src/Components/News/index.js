import React, { useState, useEffect } from 'react';
import useSWRPost from 'Hooks/useSWRPost';
import NewsCard from 'Components/NewsCard';
import styles from './news.module.css';
import Loader from 'Components/Loader';
import config from 'config';

const News = () => {
    const [news, setNews] = useState([]);
    const [after, setAfter] = useState({});

    const handleSuccess = (r) => {
        setNews(n => n.concat(r.data))
        setAfter(r.after)
    }

    const [getNews, { isValidating }] = useSWRPost(`${config.apiURL}/api/news`, {
        onSuccess: handleSuccess
    })

    useEffect(() => {
        getNews({ after })
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                {isValidating ?
                    <Loader />
                :
                    <button className={styles.loadBtn} onClick={() => getNews({ after })}>Load More</button>
                }
            </section>
        </>
    )
}

export default News;
