const MovieTile = (props) => {
  return (
    <div className='border-2 border-purple-800 overflow-hidden hover:border-white transition-all hover:scale-105 cursor-pointer shadow-2xl'>
      <img src={props.img} className='bg-cover' alt='image' />
    </div>
  );
};

export default MovieTile;
