import Footer from '@/components/Footer';
import { poppins } from '@/app/fonts';

export default function About() {
  return (
    <div className='flex min-h-[calc(100dvh-4rem)] flex-col'>
      <main className='flex-1 px-[16px] pt-6 md:px-10 md:pt-10'>
        <h1
          className={`text-5xl font-semibold ${poppins.className} pb-10 leading-tight max-md:text-3xl`}
        >
          Despre noi
        </h1>
        <div className='pb-10'>
          <img
            src='/about.jpg'
            alt='Photo of the villa'
            className='w-full rounded-large object-cover max-lg:mb-10 max-lg:aspect-video max-md:rounded-medium lg:float-right lg:mx-10 lg:w-2/5'
          />
          <p className='text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
            egestas erat ac efficitur. Suspendisse volutpat dapibus fringilla.
            In hac habitasse platea dictumst. Morbi condimentum efficitur lectus
            vitae mollis. Morbi vulputate viverra lacinia. Ut nec gravida quam.
            Nullam ac iaculis elit. Mauris diam magna, sagittis et vestibulum
            ut, convallis ut dolor. Nunc sed est at turpis semper laoreet non ut
            elit. Aliquam erat volutpat. Mauris lectus sem, faucibus id rutrum
            vel, mattis eget dui. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Etiam quis suscipit lectus. Ut aliquam elit sit
            amet viverra tincidunt. Quisque lacinia ullamcorper nulla, in
            tristique metus porta ac. Etiam ac enim tellus. Sed non egestas
            enim. Aliquam tincidunt leo lacus, id consequat nisi rhoncus vel.
            Suspendisse eu odio at risus porttitor bibendum. Sed nec dui nec
            purus rutrum viverra quis pharetra tortor. Pellentesque aliquet mi
            ultrices, pulvinar felis non, viverra nunc. Aliquam rhoncus nisl eu
            leo maximus, tincidunt vulputate mauris interdum. Sed ac fringilla
            nisi. Nunc rutrum tincidunt ex non mattis. Ut faucibus pretium
            tempus. Sed rutrum justo lorem, id fermentum dui blandit ac.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nullam a enim et sem eleifend elementum sed
            sed justo. Quisque varius eget lectus in pretium. Fusce non faucibus
            eros. Proin at massa neque. Pellentesque lacus urna, porta ut quam
            eget, lacinia vulputate urna. Donec pretium dignissim malesuada.
            Nulla fermentum nunc sem. Curabitur quis velit ut velit porttitor
            iaculis. Phasellus maximus turpis lacinia velit aliquet vulputate.
            Mauris laoreet, purus vitae lobortis elementum, ligula ipsum euismod
            nulla, vehicula luctus ipsum felis a nisl. Integer accumsan accumsan
            mauris ac tincidunt. Proin dignissim lacus in ipsum dignissim,
            vulputate venenatis velit euismod. Sed tempor libero ac lacus
            viverra placerat.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
