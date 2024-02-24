'use server';

import { revalidatePath } from 'next/cache';

const revalidate = () => {
  revalidatePath('/blog');
}

export default revalidate;