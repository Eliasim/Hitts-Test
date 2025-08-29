export default function VideoThumbnail({
  img,
  label,
  video,
  onSelect,
  isActive,
}) {
  return (
    <span className="flex flex-col justify-center items-center">
      {!isActive ? (
        <img
          src={img}
          alt={label}
          className="h-full mx-5 cursor-pointer button-hover"
          onClick={() => onSelect(video)}
        />
      ) : (
        <div className="w-46 h-46 mx-5 flex items-center justify-center rounded-full bg-red-500 text-white font-bold mb-4 p-2">
          Los Deportistas latinoamericanos que participan en Sochi 2014.
        </div>
      )}

      <label className="text-white text-center text-justify font-semibold">
        {label}
      </label>
    </span>
  );
}
