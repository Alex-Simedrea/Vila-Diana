import { getMetadata, getStorage, listAll, ref } from '@firebase/storage';
import app from '../../../firebase';

export default async function Page() {
  const storage = getStorage(app);
  const storageRef = ref(storage);
  let files: any[] = [null];

  try {
    const res = await listAll(storageRef);
    const promises = res.items.map(async (item) => {
      const metadata = await getMetadata(item);
      return {
        name: item.name,
        metadata: metadata,
      };
    });

    files = await Promise.all(promises);
  } catch (error) {
    console.error('Error listing files', error);
  }

  return (
    <div>
      <h1>Article Page</h1>
      <p>{JSON.stringify(files)}</p>
    </div>
  );
}
