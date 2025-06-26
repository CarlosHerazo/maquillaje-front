import { FaRss } from 'react-icons/fa';

const RssSubscribe = () => {
  return (
    <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-lg border border-pink-200 shadow-sm">
      <div className="flex items-start">
        <div className="bg-pink-100 p-3 rounded-full mr-4">
          <FaRss className="text-pink-600 text-xl" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-rose-800 mb-1">Suscríbete a nuestras novedades</h3>
          <p className="text-rose-700 mb-3 text-sm">
            Recibe actualizaciones sobre nuevos productos, tutoriales y promociones directamente en tu lector de feeds.
          </p>
          <a
            href="/feed.xml"
            className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaRss className="mr-2" />
            Suscribirse vía RSS
          </a>
        </div>
      </div>
    </div>
  );
};

export default RssSubscribe;  