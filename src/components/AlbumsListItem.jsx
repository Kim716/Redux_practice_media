import { GoTrashcan } from 'react-icons/go';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import { useRemoveAlbumMutation } from '../store';

function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        className="mr-3"
        onClick={handleRemoveAlbum}
        loading={results.isLoading}
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos in album
    </ExpandablePanel>
  );
}

export default AlbumsListItem;
