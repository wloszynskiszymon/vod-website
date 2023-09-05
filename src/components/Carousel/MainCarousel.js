import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselDot from './CarouselDot';
import CarouselArrow from './CarouselArrow';
import MovieTile from '../MovieTile';

const MainCarousel = ({ data, title }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };

  return (
    <div className='relative w-full h-full pt-8 my-8'>
      <h2
        id='testing'
        className='absolute top-0 left-0  px-8 text-gray-300 font-extrabold text-md md:text-2xl uppercase tracking-wider '
      >
        <p>{title}</p>
      </h2>
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        itemClass={'px-1 md:px-4'}
        customDot={<CarouselDot />}
        dotListClass='carousel-dot-list-overriden pointer-events-none'
        renderDotsOutside={true}
        containerClass='py-4'
        customRightArrow={<CarouselArrow.Right />}
        customLeftArrow={<CarouselArrow.Left />}
        swipeable={false}
      >
        {data.map((item) => (
          <MovieTile key={item.media_type + item.id} data={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
