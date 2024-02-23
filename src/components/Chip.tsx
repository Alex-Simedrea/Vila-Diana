import '@/lib/fontawesome/css/fa.css';

interface ChipProps {
  label: string;
  icon: string;
}

export default function Chip({label, icon}: ChipProps) {
  return (
    <div className='bg-secondary-50 rounded-full lg:py-4 py-2 px-5 lg:px-6 flex gap-2 lg:gap-3 justify-center items-center'>
      <i className={`fa fa-${icon} fa-solid text-xl lg:text-2xl`}></i>
      <span className='lg:text-lg text-medium font-medium'>{label}</span>
    </div>
  );
}