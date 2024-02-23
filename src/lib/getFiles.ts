'use server';

import fs from 'fs';
import path from 'path';

export interface Image {
  src: string;
}

export default async function getGalleryImages(): Promise<Image[] | undefined> {
  const directoryPath = path.join(process.cwd(), 'public', 'gallery');
  const filenames = fs.readdirSync(directoryPath);
  return filenames.map((name) => ({
    src: `/gallery/${name}`,
  }));
}

export async function getAccommodationImages(
  folder: string,
): Promise<string[] | undefined> {
  const directoryPath = path.join(
    process.cwd(),
    'public',
    'accommodation',
    folder,
  );
  const filenames = fs.readdirSync(directoryPath);
  return filenames.map((name) => `/accommodation/${folder}/${name}`);
}
