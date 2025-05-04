import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RighAside from '../components/homelayout/RighAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news,setnews] = useState({});
    // console.log(data,id,news);
    useEffect(()=>{
const NewsDetails = data.find(singleNews=> singleNews.id == id)
setnews(NewsDetails)
    },[data,id])
    
    return (
        <div>
            <header className='my-5'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto gap-4 grid grid-cols-12 '>
                <section className='col-span-9'>
                    <h1 className='font-bold text-2xl py-4'> Dragon News </h1>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RighAside></RighAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;