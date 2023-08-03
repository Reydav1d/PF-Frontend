import { useEffect, useRef } from "react";

const PhotoWidget = ({setImageLink}) => {
    const photoRef = useRef();
    const widgetPhoto = useRef(); 

    useEffect(() => {
        photoRef.current = window.cloudinary;
        widgetPhoto.current = photoRef.current.createUploadWidget(
            {
                cloudName: 'dhucdz03p',
                uploadPreset: 'profilePhotos',
            },
            function (error, result) {
                if (!error && result && result.event === 'succes') {
                    setImageLink(result.info.url);
                }
            }
        )
    }, [setImageLink]);

    const handleButton = (e) => {
        e.preventDefault();
        e.stopPropagation();
        widgetPhoto.current.open();
    };

    return (
        <button
        className="mt-4 bg-violet-800 text-white py-2 px-4 rounded hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
        onClick={handleButton}>Agregar foto de perfil</button>
    )
}
export default PhotoWidget;