const MovieTile = ({ id, title, img, name, date, media_type, isMovie }) => {
  const URL_INFO_LINK = `https://www.themoviedb.org/${
    media_type || isMovie ? 'movie' : 'tv'
  }/`;

  // If tv series/movie is 3 months old then disply 'new' label
  function checkIsNew(dateString) {
    const date = new Date(dateString);
    const diffInMillis = Date.now() - date.getTime();
    const months = diffInMillis / (1000 * 60 * 60 * 24 * 30);
    return months <= 3;
  }

  const isNew = checkIsNew(date);

  return (
    <div className='w-[12rem] lg:w-[14rem] 2xl:w-[16rem] min-h-[5rem] group flex justify-center items-center relative border-2 border-gray-600 drop-shadow-2xl cursor-pointer rounded-xl overflow-hidden hover:border-white transition-all duration-200 hover:scale-105  '>
      <a
        href={URL_INFO_LINK + id}
        target='_blank'
        rel='noreferrer'
        className='block w-full'
      >
        <div className='absolute top-0 left-0 w-full h-full flex-center bg-gray-900 bg-opacity-20 transition-opacity duration-200 group-hover:bg-black group-hover:bg-opacity-80 '>
          <p className='text-white tracking-tighter text-sm lg:text-lg font-bold text-center p-1 opacity-0 group-hover:opacity-100 duration-200 '>
            {title ? title : name}
          </p>
        </div>
        {isNew && (
          <div className='absolute opacity-1 -top-3 -right-3 lg:-top-4 lg:-right-4 translate-x-1/3 translate-y-3/4 w-full h-1/4 bg-purple-800 rotate-45 flex-center group-hover:opacity-0'>
            <p className='text-white trakcing-wider text-[13px] sm:text-sm text-center'>
              NOWY
            </p>
          </div>
        )}

        <img
          src={img}
          className='object-contain w-full'
          alt={`${title} poster`}
        />
      </a>
    </div>
  );
};

export default MovieTile;
