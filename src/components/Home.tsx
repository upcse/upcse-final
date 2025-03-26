import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, X } from 'lucide-react';
import { ASSET_PATHS } from '../lib/assets';

// Mock data
const mockGalleryImages = [
  {
    id: '1',
    image_url: ASSET_PATHS.gallery[0].url,
    caption: 'Sports Event 1',
    alt_text: 'Sports activity photo 1'
  },
  {
    id: '2',
    image_url: ASSET_PATHS.gallery[1].url,
    caption: 'Sports Event 2',
    alt_text: 'Sports activity photo 2'
  },
  {
    id: '3',
    image_url: ASSET_PATHS.gallery[2].url,
    caption: 'Sports Event 3',
    alt_text: 'Sports activity photo 3'
  }
];

const mockEvents = [
  {
    id: '1',
    title: '24th ICSE national games',
    description: 'National level sports competition organized by ICSE',
    event_type: 'upcoming',
    start_date: '2025-04-24',
    end_date: '2025-04-29',
    venue: 'Madgaon, Goa',
    registration_deadline: '2025-03-30',
    highlights: [
      'A golden opportunity for selection in International games for Thailand, Europe & Nepal'
    ]
  }
];

const mockNews = [
  {
    id: '1',
    title: 'UPCSE Announces State Games 2024',
    content: 'Uttar Pradesh Council for Sports & Education is proud to announce the upcoming State Games 2024.',
    image_url: ASSET_PATHS.gallery[3].url,
    published_at: '2024-03-25'
  }
];

const mockCoreTeamMembers = [
  {
    id: '1',
    name: 'Shri Anandeshwar Panday',
    designation: 'General Secretary UPCSE',
    photo_url: ASSET_PATHS.coreTeam.member1,
    flip_card_content: {
      positions: [
        'Treasurer - Indian Olympic association',
        'General secretary - South AHF',
        'President - Indian Hapkido Federation',
        'Standard committee member - Olympic council of Asia'
      ]
    },
    display_order: 1
  },
  {
    id: '2',
    name: 'Smt. Neelam Mishra',
    designation: 'TBA - UPCSE',
    photo_url: ASSET_PATHS.coreTeam.member2,
    flip_card_content: {
      positions: [
        'Athlete',
        'International master\'s athelete',
        '101+ International & National medals combined',
        'Social Worker',
        'Government Employee',
        'Ambassador - SVEEP and Beti Bachao Beti Padhao'
      ]
    },
    display_order: 2
  },
  {
    id: '3',
    name: 'Shri Pankaj Pandey',
    designation: 'TBA - UPCSE',
    photo_url: ASSET_PATHS.coreTeam.member3,
    flip_card_content: {
      positions: [
        'National Player MPED'
      ]
    },
    display_order: 3
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState<'events' | 'news'>('events');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying && mockGalleryImages.length > 0) {
        setCurrentSlide((prev) => (prev + 1) % mockGalleryImages.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Slideshow and Events/News Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Slideshow */}
          <div className="relative bg-white rounded-lg shadow-lg p-4">
            <div className="aspect-w-16 aspect-h-9 relative">
              {mockGalleryImages.length > 0 && (
                <img
                  src={mockGalleryImages[currentSlide].image_url}
                  alt={mockGalleryImages[currentSlide].alt_text}
                  className="w-full h-full object-cover rounded cursor-pointer"
                  onClick={() => setSelectedImage(mockGalleryImages[currentSlide].image_url)}
                />
              )}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <button 
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + mockGalleryImages.length) % mockGalleryImages.length)}
                  className="bg-white/80 p-2 rounded-full hover:bg-white"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-white/80 p-2 rounded-full hover:bg-white"
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
                <button 
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % mockGalleryImages.length)}
                  className="bg-white/80 p-2 rounded-full hover:bg-white"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Events and News */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex space-x-4 mb-4">
              <button
                className={`px-4 py-2 rounded transition-colors ${
                  activeTab === 'events' ? 'bg-[#B67B5B] text-white' : 'bg-gray-200'
                }`}
                onClick={() => setActiveTab('events')}
              >
                Events
              </button>
              <button
                className={`px-4 py-2 rounded transition-colors ${
                  activeTab === 'news' ? 'bg-[#B67B5B] text-white' : 'bg-gray-200'
                }`}
                onClick={() => setActiveTab('news')}
              >
                News
              </button>
            </div>

            <div className="overflow-y-auto max-h-[400px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              {activeTab === 'events' ? (
                <div className="space-y-4">
                  {mockEvents.map((event) => (
                    <div key={event.id} className="border-b pb-4">
                      <h3 className="text-xl font-semibold text-[#B67B5B]">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                      <div className="mt-2">
                        <p><span className="font-semibold">Venue:</span> {event.venue}</p>
                        <p>
                          <span className="font-semibold">Date:</span>{' '}
                          {new Date(event.start_date).toLocaleDateString()} 
                          {event.end_date && ` to ${new Date(event.end_date).toLocaleDateString()}`}
                        </p>
                        {event.registration_deadline && (
                          <p>
                            <span className="font-semibold">Registration Deadline:</span>{' '}
                            {new Date(event.registration_deadline).toLocaleDateString()}
                          </p>
                        )}
                        {event.highlights && (
                          <ul className="mt-2 list-disc list-inside">
                            {event.highlights.map((highlight, index) => (
                              <li key={index} className="text-[#407245] font-medium">{highlight}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {mockNews.map((item) => (
                    <div key={item.id} className="border-b pb-4">
                      <h3 className="text-xl font-semibold text-[#B67B5B]">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                      {item.image_url && (
                        <img
                          src={item.image_url}
                          alt={item.title}
                          className="mt-2 rounded-lg w-full cursor-pointer"
                          onClick={() => setSelectedImage(item.image_url)}
                        />
                      )}
                      <p className="text-sm text-gray-500 mt-2">
                        {new Date(item.published_at).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                  <div className="text-center pt-4">
                    <a 
                      href="/gallery#news"
                      className="text-[#B67B5B] hover:text-[#407245] font-semibold"
                    >
                      Show More →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Core Team Members */}
        <div className="mt-16" aria-label="Core Team Members">
          <div className="grid grid-cols-12 gap-8">
            {mockCoreTeamMembers.map((member, index) => {
              const colSpan = index === 0 ? 5 : index === 1 ? 4 : 3;
              return (
                <div
                  key={member.id}
                  className={`col-span-${colSpan} relative group`}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 group-hover:scale-105">
                    <div className="relative aspect-w-4 aspect-h-5">
                      <img
                        src={member.photo_url}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className="text-gray-600">{member.designation}</p>
                    </div>
                    {/* Flip Card Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm">
                        {member.flip_card_content.positions.map((position, i) => (
                          <p key={i} className="text-gray-800 mb-2">{position}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* About UPCSE */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 relative">
            <span className="relative inline-block">
              ABOUT UPCSE
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-[#B67B5B]"></span>
            </span>
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg mb-4">
              Uttar Pradesh Council for Sports and Education has been working in Uttar Pradesh for the last 3 years to promote sports and education. UPCSE, which is affiliated to the Indian Council of Sports and Education and is recognized by the Uttar Pradesh Olympic Association, is working on its slogan - 
            </p>
            <h3 className="text-xl font-bold text-center mb-4 text-[#4169E1]">
              'खेलेगा गाँव तभी तो ठेलेगा भारत'
            </h3>
            <p className="text-lg mb-4">
              The Council is also encouraging the youth towards sports in every district and village of the state, in which the Council, with the help of the head of the village and town and the village head, is encouraging the youth to do more sports. JADA is trying to provide more opportunities for sports so that good players get a chance to participate in the competitions held in the district and the state and showcase their talent.
            </p>
            <p className="text-lg">
              UPCSE is working since 2017 in all over Uttar Pradesh to develop sports at grassroot level.
            </p>
            <div className="text-center mt-6">
              <a href="/about" className="text-[#B67B5B] hover:text-[#407245] font-semibold">
                Read More →
              </a>
            </div>
          </div>
        </div>

        {/* Objectives */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">OBJECTIVES</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mx-[5%]">
            {[
              'Promoting Sports with Education',
              'Promoting Sports and Physical Education',
              'Affiliations and Collaborations',
              'Inclusive Participation',
              'Health and Wellness',
              'Community Engagement and Social Impact'
            ].map((objective, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#B67B5B] hover:via-[#B6AEC1] hover:to-[#407245] group"
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold group-hover:text-white transition-colors">
                    {objective}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white"
            aria-label="Close fullscreen image"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Fullscreen view"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Home;