import { useAddPhotoMutation, useFetchPhotosQuery } from '../store';
import Button from './Button';
import PhotosListItem from './PhotosListItem';
import Skeleton from './Skeleton';

function PhotosList({ album }) {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-8 w-8" times={3} />;
  } else if (error) {
    content = <div>Error loading photos..</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex items-center justify-between">
        <h3 className="text-lg font-bold">Photos in {album.title}</h3>
        <Button onClick={handleAddPhoto} loading={results.isLoading}>
          + Add Photo
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">{content}</div>
    </div>
  );
}

export default PhotosList;
