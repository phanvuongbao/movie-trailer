import PropType from "prop-types";

const MovieSearch = ({ title, data }) => {
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-xl mb-4">{title}</h2>
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="w-[200px] h-[300px] relative group"
            // onClick={() => handleTrailer(item.id)}
          >
            <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
              <img
                src={`${import.meta.env.VITE_IMG_URL}${item.backdrop_path}`}
                className="w-full h-full object-cover "
                alt={item.original_name}
              />
              <div className="absolute left-2 bottom-4">
                <p className="uppercase text-md">
                  {item.title || item.original_title}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

MovieSearch.propTypes = {
  title: PropType.string,
  data: PropType.array,
};

export default MovieSearch;
