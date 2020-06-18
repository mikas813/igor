import React, {useState} from 'react';
import ImageCard from '../components/ImageCard';
import {Title} from '../components/MainTitle';
import image from '../images/iphone-screen-repair.jpg';
import Footer from '../components/Footer';
import {Auxiliary} from '../components/Auxiliary';
import {ContentWrapper} from '../components/ContentWrapper';
import {Loader} from '../components/loader/Loader';
import {useAxiosGet} from '../components/hooks/imageRequest';

const ourProjectsPageData = [
  [image, image, image, image, image],
  {
    title: 'Наші роботи'
  }
];

function OurProjects() {

  const url = 'https://5ee8d3f5ca595700160294d6.mockapi.io/fxd/our_project_images';
  let [showImage, openFullImage] = useState( false );
  let [fullImageUrl, setFullImageUrl] = useState( null );
  let imagesFromServer = '';
  let imageUrl = useAxiosGet(url)

  const showFullImage = (e) => {
    openFullImage( !showImage );
    setFullImageUrl( fullImageUrl = e.target.src );
  };

  if (imageUrl.error) {
    imagesFromServer = <h3>404 Cторінка не знайдена. Перевірте зєднання з інтернетом!</h3>
  }

  if (imageUrl.loading) {
    imagesFromServer = <Loader/>;
  }

  if (imageUrl.data) {
    imagesFromServer = imageUrl.data.map( (image, id) => {
      return (
        <ImageCard
          alt={`Image: ${id}`}
          key={id}
          image={image.image}
          showFullImage={(e) => showFullImage( e )}
        />
      );
    } );
  }

  return (
    <Auxiliary>
      <ContentWrapper>
        <div className="container shadow-xl pb-10 border-t-2 px-8 text-center m-auto">
          <Title title={ourProjectsPageData[1].title}/>
          <div className='text-center container flex flex-wrap m-auto text-center p-5'>
            {imagesFromServer}
          </div>
          {showImage
            ? <div
              onClick={() => openFullImage( false )}
              className='w-auto top-0 left-0 bottom-0 right-0 fixed z-50 h-auto bg-black-t-50'>
              <img className='xl:max-w-xl m-auto mt-20' src={fullImageUrl} alt=""/>
            </div>
            : null}
        </div>
      </ContentWrapper>
      <Footer/>
    </Auxiliary>
  );
}

export default OurProjects;

