import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselDot from './CarouselDot';
import CarouselArrow from './CarouselArrow';
import MovieTile from '../MovieTile';

const MainCarousel = ({ data, title }) => {
  const responsive = {
    desktop_xl: {
      breakpoint: { max: 1920, min: 1366 },
      items: 6,
      slidesToSlide: 6,
    },
    desktop: {
      breakpoint: { max: 1366, min: 1200 },
      items: 5,
      slidesToSlide: 5,
    },
    laptop: {
      breakpoint: { max: 1200, min: 768 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  return (
    <div className='relative w-full h-full pt-8 my-8'>
      <h2
        id='testing'
        className='absolute top-0 left-0 px-4 md:px-6 lg:px-8 text-gray-300 font-extrabold text-lg md:text-xl lg:text-2xl uppercase tracking-wider '
      >
        <p>{title}</p>
      </h2>
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        itemClass={'px-2 lg:px-4'}
        customDot={<CarouselDot />}
        dotListClass='carousel-dot-list-overriden pointer-events-none'
        renderDotsOutside={true}
        containerClass='py-2 md:py-4'
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
