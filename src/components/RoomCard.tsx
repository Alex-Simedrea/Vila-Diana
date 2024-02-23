import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Chip from '@/components/Chip';
import { Button, Link } from '@nextui-org/react';

interface RoomCardProps {
  name: string;
  description: string;
  imagesSrc: string[];
  surface: number;
  people: number;
  bed: string;
  rooms: string[];
}

export default function RoomCard({
  name,
  description,
  imagesSrc,
  surface,
  people,
  bed,
  rooms,
}: RoomCardProps) {
  return (
    <div className='flex rounded-3xl bg-secondary-150 p-4 max-lg:flex-col lg:h-[35rem] lg:rounded-large lg:p-6'>
      <Carousel className='w-full max-lg:max-h-[20rem] lg:h-full lg:w-8/12'>
        <CarouselContent className='h-full'>
          {imagesSrc.map((src, index) => (
            <CarouselItem key={index}>
              <div className='flex h-[20rem] w-full items-center justify-center lg:h-full'>
                <img
                  src={src}
                  alt={`image${index}`}
                  className='h-[20rem] w-full self-start overflow-hidden rounded-[1rem] object-cover lg:!h-full lg:rounded-[1.5rem]'
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
      <div className='flex flex-col justify-center lg:w-4/12 lg:pl-10 lg:pr-4'>
        <div>
          <h2 className='text-2xl font-bold max-lg:pt-4 lg:text-4xl'>{name}</h2>
          <p className='py-3 text-medium lg:py-6 lg:text-lg'>{description}</p>
        </div>
        <div className='flex flex-wrap gap-2'>
          <Chip label={`${surface} mp`} icon='arrows-maximize' />
          <Chip label={people.toString()} icon='person' />
          <Chip label={bed} icon='bed' />
          <Chip label={rooms.join(', ')} icon='key' />
        </div>
        <Button
          as={Link}
          href='https://vila-diana-9.pynbooking.direct'
          target='_blank'
          size='lg'
          radius='full'
          className='mb-2 mt-4 max-h-14 flex-grow bg-primary-800 text-white lg:mt-10'
        >
          Rezerva acum
          <i className='fa-regular fa-arrow-up-right'></i>
        </Button>
      </div>
    </div>
  );
}
