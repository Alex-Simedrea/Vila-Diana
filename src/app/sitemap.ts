import { MetadataRoute } from 'next';
import { getMetadata, getStorage, listAll, ref } from '@firebase/storage';
import app from '../../firebase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const storage = getStorage(app);
  const storageRef = ref(storage);
  let files: any[] = [null];

  try {
    const res = await listAll(storageRef);
    const promises = res.items.map(async (item) => {
      const metadata = await getMetadata(item);
      let id = item.name.split('.')[0];
      return {
        id: id,
        date: metadata.timeCreated,
      };
    });

    files = await Promise.all(promises);
  } catch (error) {
    console.error('Error listing files', error);
  }

  const result = [
    {
      url: 'https://vila-diana.com',
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://vila-diana.com/about',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://vila-diana.com/blog',
      lastModified: files.length > 0 ? files[files.length - 1].date : null,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://vila-diana.com/gallery',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://vila-diana.com/accommodation',
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://vila-diana.com/contact',
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://vila-diana.com/legal/terms-and-conditions',
      changeFrequency: 'never',
      priority: 0.1,
    },
    {
      url: 'https://vila-diana.com/legal/rules',
      changeFrequency: 'never',
      priority: 0.1,
    },
    {
      url: 'https://vila-diana.com/legal/cookies',
      changeFrequency: 'never',
      priority: 0.1,
    },
    {
      url: 'https://vila-diana.com/legal/gdpr',
      changeFrequency: 'never',
      priority: 0.1,
    },
    {
      url: 'https://vila-diana.com/legal/accommodation',
      changeFrequency: 'never',
      priority: 0.1,
    },
  ];

  files.forEach((file) => {
    result.push({
      url: `https://vila-diana.com/blog/${file.id}`,
      lastModified: file.date,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  return result as MetadataRoute.Sitemap;
}
