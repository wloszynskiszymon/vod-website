import Image from '../../assets/dummy_background.jpeg';

const MovieTile = () => {
  return (
    <div className='border-2 border-purple-800 overflow-hidden hover:border-white transition-all hover:scale-105 cursor-pointer'>
      <img src={Image} className='scale-150' alt='image' />
    </div>
  );
};

export default MovieTile;
