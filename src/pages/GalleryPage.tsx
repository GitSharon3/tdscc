import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { colors } from '../theme/colors';

interface GalleryImage {
  id: string;
  titleEn: string;
  titleNe: string;
  thumbnail: string;
  full: string;
}

interface Album {
  id: string;
  titleEn: string;
  titleNe: string;
  descriptionEn: string;
  descriptionNe: string;
  category: string;
  imageCount: number;
  coverImage: string;
  images: GalleryImage[];
  dateEn: string;
  dateNe: string;
}

interface CategoryOption {
  value: string;
  labelEn: string;
  labelNe: string;
}

// Mock data for albums
const GALLERY_ALBUMS: Album[] = [
  {
    id: '1',
    titleEn: 'Annual General Meeting 2024',
    titleNe: '२०२४ वार्षिक साधारण सभा',
    descriptionEn: 'Highlights from our annual general meeting with shareholders and stakeholders',
    descriptionNe: 'शेयरहोल्डर र हितग्राहीहरूसँग हाम्रो वार्षिक सभाको मुख्य क्षणहरू',
    category: 'AGM & Conferences',
    imageCount: 8,
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    dateEn: 'March 2024',
    dateNe: 'मार्च २०२४',
    images: Array.from({ length: 8 }, (_, i) => ({
      id: `1-${i}`,
      titleEn: `AGM Photo ${i + 1}`,
      titleNe: `सभा फोटो ${i + 1}`,
      thumbnail: `https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop`,
      full: `https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop`,
    })),
  },
  {
    id: '2',
    titleEn: 'Excellence Awards Ceremony',
    titleNe: 'उत्कृष्टता पुरस्कार समारोह',
    descriptionEn: 'Recognition and awards for outstanding performance and dedication',
    descriptionNe: 'असाधारण कार्यसम्पादन र समर्पणको लागि सम्मान र पुरस्कार',
    category: 'Awards & Recognition',
    imageCount: 6,
    coverImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
    dateEn: 'February 2024',
    dateNe: 'फेब्रुअरी २०२४',
    images: Array.from({ length: 6 }, (_, i) => ({
      id: `2-${i}`,
      titleEn: `Awards Photo ${i + 1}`,
      titleNe: `पुरस्कार फोटो ${i + 1}`,
      thumbnail: `https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&h=200&fit=crop`,
      full: `https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop`,
    })),
  },
  {
    id: '3',
    titleEn: 'Office Space & Work Culture',
    titleNe: 'कार्यालय स्थान र कार्य संस्कृति',
    descriptionEn: 'Tour of our modern office spaces and vibrant work environment',
    descriptionNe: 'हाम्रो आधुनिक कार्यालय परिसर र प्राणवन्त कार्य वातावरणको भ्रमण',
    category: 'Office',
    imageCount: 7,
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    dateEn: 'January 2024',
    dateNe: 'जनवरी २०२४',
    images: Array.from({ length: 7 }, (_, i) => ({
      id: `3-${i}`,
      titleEn: `Office Photo ${i + 1}`,
      titleNe: `कार्यालय फोटो ${i + 1}`,
      thumbnail: `https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop`,
      full: `https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop`,
    })),
  },
  {
    id: '4',
    titleEn: 'International Conference 2024',
    titleNe: 'अन्तर्राष्ट्रिय सम्मेलन २०२४',
    descriptionEn: 'Global conference with industry experts and thought leaders',
    descriptionNe: 'उद्योग विशेषज्ञ र विचार नेताहरूसँग विश्वव्यापी सम्मेलन',
    category: 'AGM & Conferences',
    imageCount: 9,
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    dateEn: 'December 2023',
    dateNe: 'डिसेम्बर २०२३',
    images: Array.from({ length: 9 }, (_, i) => ({
      id: `4-${i}`,
      titleEn: `Conference Photo ${i + 1}`,
      titleNe: `सम्मेलन फोटो ${i + 1}`,
      thumbnail: `https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop`,
      full: `https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop`,
    })),
  },
  {
    id: '5',
    titleEn: 'Customer Appreciation Events',
    titleNe: 'ग्राहक सम्मान कार्यक्रम',
    descriptionEn: 'Special events celebrating our valued customers and partnerships',
    descriptionNe: 'हाम्रा मूल्यवान ग्राहक र साझेदारीहरूको उत्सव',
    category: 'Events',
    imageCount: 9,
    coverImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
    dateEn: 'November 2023',
    dateNe: 'नोभेम्बर २०२३',
    images: Array.from({ length: 9 }, (_, i) => ({
      id: `5-${i}`,
      titleEn: `Event Photo ${i + 1}`,
      titleNe: `कार्यक्रम फोटो ${i + 1}`,
      thumbnail: `https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&h=200&fit=crop`,
      full: `https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop`,
    })),
  },
  {
    id: '6',
    titleEn: 'Team Recognition Awards',
    titleNe: 'टिम मान्यता पुरस्कार',
    descriptionEn: 'Celebrating outstanding achievements and team excellence',
    descriptionNe: 'असाधारण उपलब्धि र टिम उत्कृष्टता का उत्सव',
    category: 'Awards & Recognition',
    imageCount: 8,
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    dateEn: 'October 2023',
    dateNe: 'अक्टोबर २०२३',
    images: Array.from({ length: 8 }, (_, i) => ({
      id: `6-${i}`,
      titleEn: `Recognition Photo ${i + 1}`,
      titleNe: `मान्यता फोटो ${i + 1}`,
      thumbnail: `https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop`,
      full: `https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop`,
    })),
  },
  {
    id: '7',
    titleEn: 'Regional Workshop Series',
    titleNe: 'क्षेत्रीय कार्यशाला शृङ्खला',
    descriptionEn: 'Training and development workshops across different regions',
    descriptionNe: 'विभिन्न क्षेत्रहरूमा प्रशिक्षण र विकास कार्यशालाहरू',
    category: 'Events',
    imageCount: 7,
    coverImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
    dateEn: 'September 2023',
    dateNe: 'सेप्टेम्बर २०२३',
    images: Array.from({ length: 7 }, (_, i) => ({
      id: `7-${i}`,
      titleEn: `Workshop Photo ${i + 1}`,
      titleNe: `कार्यशाला फोटो ${i + 1}`,
      thumbnail: `https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&h=200&fit=crop`,
      full: `https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop`,
    })),
  },
];

const CATEGORIES: CategoryOption[] = [
  { value: 'All', labelEn: 'All', labelNe: 'सबै' },
  { value: 'Events', labelEn: 'Events', labelNe: 'कार्यक्रमहरू' },
  { value: 'Office', labelEn: 'Office', labelNe: 'कार्यालय' },
  { value: 'AGM & Conferences', labelEn: 'AGM & Conferences', labelNe: 'वार्षिक सभा र सम्मेलन' },
  { value: 'Awards & Recognition', labelEn: 'Awards & Recognition', labelNe: 'पुरस्कार र मान्यता' },
];

interface LightboxState {
  isOpen: boolean;
  currentImageIndex: number;
  albumId: string;
}

export const GalleryPage = ({ language }: { language: 'en' | 'ne' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [lightbox, setLightbox] = useState<LightboxState>({ isOpen: false, currentImageIndex: 0, albumId: '' });

  const isNe = language === 'ne';

  const filteredAlbums =
    selectedCategory === 'All'
      ? GALLERY_ALBUMS
      : GALLERY_ALBUMS.filter((album) => album.category === selectedCategory);

  const handleOpenLightbox = (albumId: string, imageIndex: number) => {
    setLightbox({ isOpen: true, currentImageIndex: imageIndex, albumId });
  };

  const handleNextImage = () => {
    const album = GALLERY_ALBUMS.find((a) => a.id === lightbox.albumId);
    if (album && lightbox.currentImageIndex < album.images.length - 1) {
      setLightbox({ ...lightbox, currentImageIndex: lightbox.currentImageIndex + 1 });
    }
  };

  const handlePrevImage = () => {
    if (lightbox.currentImageIndex > 0) {
      setLightbox({ ...lightbox, currentImageIndex: lightbox.currentImageIndex - 1 });
    }
  };

  const handleCloseLightbox = () => {
    setLightbox({ isOpen: false, currentImageIndex: 0, albumId: '' });
  };

  const currentAlbum = GALLERY_ALBUMS.find((a) => a.id === lightbox.albumId);
  const currentImage = currentAlbum?.images[lightbox.currentImageIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFBF9] via-[#F0F7F4] to-[#FAFBF9]">
      {/* Header Section */}
      <div
        className="relative py-6 px-3 sm:px-3 lg:px-5 overflow-hidden"
        style={{ backgroundColor: colors.primary.DEFAULT }}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-62 h-62 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-62 h-62 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {isNe ? 'फोटो ग्यालरी' : 'Photo Gallery'}
          </h1>
          <p className="text-lg text-emerald-50 max-w-2xl mx-auto">
            {isNe
              ? 'हाम्रो स्मरणीय क्षणहरू, कार्यक्रम र गतिविधिहरूको संग्रह खोजिएन'
              : 'Explore our collection of memorable moments, events, and activities'}
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((category) => (
              <button
                key={category.value}
                onClick={() => {
                  setSelectedCategory(category.value);
                  setSelectedAlbum(null);
                }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'text-white shadow-lg transform scale-105'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
                style={{
                  backgroundColor: selectedCategory === category.value ? colors.accent.DEFAULT : 'transparent',
                }}
              >
                {isNe ? category.labelNe : category.labelEn}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!selectedAlbum ? (
          // Albums Grid View
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAlbums.map((album) => (
                <div
                  key={album.id}
                  onClick={() => setSelectedAlbum(album)}
                  className="group cursor-pointer h-full"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                      <img
                        src={album.coverImage}
                        alt={isNe ? album.titleNe : album.titleEn}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                        style={{ backgroundColor: colors.accent.DEFAULT }}
                      ></div>
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <p className="text-sm font-semibold" style={{ color: colors.primary.DEFAULT }}>
                          {album.imageCount} {isNe ? 'फोटोहरू' : 'photos'}
                        </p>
                      </div>
                    </div>

                    {/* Album Info */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-opacity-80 transition-colors">
                        {isNe ? album.titleNe : album.titleEn}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 flex-1">
                        {isNe ? album.descriptionNe : album.descriptionEn}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                          {isNe ? album.dateNe : album.dateEn}
                        </p>
                        <div
                          className="inline-flex items-center gap-1 font-semibold text-sm group-hover:gap-2 transition-all"
                          style={{ color: colors.accent.DEFAULT }}
                        >
                          {isNe ? 'एलबम हेर्नुहोस्' : 'View Album'}
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

                  {isNe ? 'यस श्रेणीमा कुनै एलबम पाइएन।' : 'No albums found in this category.'}
                
            {filteredAlbums.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-slate-500">No albums found in this category.</p>
              </div>
            )}
          </>
        ) : (
          // Album Photos View
          <>
            {/* Back Button & Album Header */}
            <div className="mb-8">
              <button
                onClick={() => setSelectedAlbum(null)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors mb-6"
                style={{ color: colors.primary.DEFAULT }}
              >
                <ChevronLeft className="w-5 h-5" />
                {isNe ? 'एलबमहरूमा फर्कनुहोस्' : 'Back to Albums'}
              </button>

              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  {isNe ? selectedAlbum.titleNe : selectedAlbum.titleEn}
                </h2>
                <p className="text-slate-600 mb-4">
                  {isNe ? selectedAlbum.descriptionNe : selectedAlbum.descriptionEn}
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span
                    className="px-3 py-1 rounded-full"
                    style={{ backgroundColor: colors.primary.light, color: colors.primary.DEFAULT }}
                  >
                    {selectedAlbum.category}
                  </span>
                  <span className="text-slate-500">{isNe ? selectedAlbum.dateNe : selectedAlbum.dateEn}</span>
                  <span className="text-slate-500">
                    {selectedAlbum.images.length} {isNe ? 'फोटोहरू' : 'photos'}
                  </span>
                </div>
              </div>
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {selectedAlbum.images.map((image, index) => (
                <div
                  key={image.id}
                  onClick={() => handleOpenLightbox(selectedAlbum.id, index)}
                  className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer bg-slate-200"
                >
                  <img
                    src={image.thumbnail}
                    alt={isNe ? image.titleNe : image.titleEn}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center"
                    style={{ backgroundColor: colors.primary.DEFAULT }}
                  >
                    <div className="text-white">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightbox.isOpen && currentImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col">
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              <img
                src={currentImage.full}
                alt={isNe ? currentImage.titleNe : currentImage.titleEn}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Navigation & Info */}
            <div className="bg-black/50 backdrop-blur-sm p-4 flex items-center justify-between">
              <button
                onClick={handlePrevImage}
                disabled={lightbox.currentImageIndex === 0}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="text-white text-center">
                <p className="text-sm">
                  {lightbox.currentImageIndex + 1} / {currentAlbum?.images.length}
                </p>
                <p className="text-xs text-gray-300">
                  {isNe ? currentImage.titleNe : currentImage.titleEn}
                </p>
              </div>

              <button
                onClick={handleNextImage}
                disabled={lightbox.currentImageIndex === (currentAlbum?.images.length || 0) - 1}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
