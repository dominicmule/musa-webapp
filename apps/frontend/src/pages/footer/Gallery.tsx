import { type ReactElement } from 'react';

function Gallery(): ReactElement {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800',
      title: 'Leadership Summit 2023',
      description: 'Annual gathering of student leaders',
    },
    {
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800',
      title: 'Environmental Week',
      description: 'Campus cleanup and sustainability initiatives',
    },
    {
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800',
      title: 'Innovation Challenge',
      description: 'Student tech showcase and competition',
    },
    {
      url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800',
      title: 'Community Outreach',
      description: 'Volunteer programs and local engagement',
    },
    {
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800',
      title: 'Sports Tournament',
      description: 'Inter-chapter sports competition',
    },
    {
      url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800',
      title: 'Cultural Festival',
      description: 'Celebrating diversity on campus',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">MUSA Gallery</h1>
      <p className="text-xl text-gray-600 mb-12 text-center">
        Capturing moments from our events and activities
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-semibold mb-2">{image.title}</h3>
              <p className="text-gray-200">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;