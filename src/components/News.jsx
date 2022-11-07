import React from 'react'
import NewsItem from './NewsItem'
import business from './Data/business.json'
import entertainment from './Data/entertainment.json'
import health from './Data/health.json'
import science from './Data/science.json'
import sports from './Data/sports.json'
import technology from './Data/technology.json'
import general from './Data/general.json'


const News =(props)=> {
  
 const data = {business,general,entertainment,health,science,sports,technology}
  console.log(data.business)
    return (
      <div className='mx-2 mt-20'>
        <h2 className='text-center font-bold bg-gray-300 min-w-full p-2 text-xl'> Newsy - Top {props.category} headlines </h2>
       
       
        <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {data[props.category].map((element)=>{
            return <div className="" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0, 45):''} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage?element.urlToImage:"https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png"} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author?element.author:"Unknown"}/>
            </div>
          })}
           
        </div>
       
        
      </div>
     

    )
  
}
/*News.defaultProps ={
  country : 'in',
  category:'general',
  

}

News.propTypes ={
  country:PropTypes.string,
  category:PropTypes.string,
  apiKey:PropTypes.string
}*/
export default News
