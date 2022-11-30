import { useSelector } from 'react-redux';
import { selectGalleryData } from '../../store/gallery/selectors';

import PicturesItem from "../../components/PicturesItem/PicturesItem";
import './Gallery.scss';

const Gallery = () => {
    const galleryData = useSelector(selectGalleryData);
    return (
        <div className="gallery">
            <div className="gallery__title">
                Gallery
            </div>
            <div className="gallery__items">
                {galleryData.map(picture => {
                    return <PicturesItem key={picture.id} title={picture.title} name={picture.name} />;
                })}
            </div>
        </div>
    );
};

export default Gallery;
