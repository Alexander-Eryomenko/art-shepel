import { useSelector } from 'react-redux';
import { selectGalleryData } from '../../store/gallery/selectors';

import PicturesItem from "../../components/PicturesItem/PicturesItem";
import './Gallery.scss';

const Gallery = () => {
    const galleryData = useSelector(selectGalleryData);
    console.log(galleryData);
    return (
        <div className="gallery">
            {galleryData.map(picture => {
                return <PicturesItem key={picture.id} title={picture.title} src={picture.name} />;
            })}
        </div>
    );
};

export default Gallery;
