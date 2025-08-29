/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
export default function FrameVideo({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="overflow-hidden rounded-lg shadow-xl max-w-5xl w-full">
      {data ? (
        <iframe
          className="w-full sm:h-[570px]"
          src={`${data}`}
          title="Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-gray-500">Video no disponible</p>
      )}
    </div>
  );
}
