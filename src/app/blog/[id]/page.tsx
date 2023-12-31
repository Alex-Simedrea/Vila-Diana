import {
  getDownloadURL,
  getMetadata,
  getStorage,
  ref,
} from '@firebase/storage';
import app from '../../../../firebase';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const storage = getStorage(app);
  const storageRef = ref(storage, `${params.id}.md`);

  let postContent = null;
  let metadata = null;

  try {
    const url = await getDownloadURL(storageRef);
    const response = await fetch(url);
    postContent = await response.text();

    metadata = await getMetadata(storageRef);
  } catch (error) {
    return notFound();
  }

  return (
    <div>
      <div>My Post: {params.id}</div>
      <div>{postContent}</div>
      <div>{JSON.stringify(metadata)}</div>
    </div>
  );
}
