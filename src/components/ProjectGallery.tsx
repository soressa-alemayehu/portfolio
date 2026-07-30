import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Image as ImageIcon } from 'lucide-react';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Filter out empty strings
  const validImages = (images || []).filter(Boolean);

  if (validImages.length === 0) {
    return (
      <div className="w-full aspect-video rounded-2xl bg-brand-bg-card border border-brand-border/60 flex items-center justify-center font-mono text-brand-text-secondary/40 text-xs">
        <ImageIcon className="w-6 h-6 mr-2" /> No Case Study Media Available
      </div>
    );
  }

  const mainImage = validImages[0];
  const subImages = validImages.slice(1);

  return (
    <>
      <div className="w-full flex flex-col gap-4 my-6">
        {/* If 1 Image: Full Width Banner */}
        {validImages.length === 1 && (
          <div
            onClick={() => setSelectedImage(mainImage)}
            className="group relative aspect-video w-full rounded-2xl overflow-hidden bg-brand-bg-card border border-brand-border/70 cursor-pointer shadow-lg hover:border-brand-cyan/60 transition-all duration-300"
          >
            <img
              src={mainImage}
              alt={`${title} Screenshot`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-bg/40 group-hover:bg-transparent transition-all duration-300" />
            <div className="absolute top-4 right-4 p-2 rounded-lg bg-brand-bg-card/80 border border-brand-border text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 size={16} />
            </div>
          </div>
        )}

        {/* If 2 Images: Side-by-Side 2 Columns */}
        {validImages.length === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {validImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(img)}
                className="group relative aspect-video w-full rounded-2xl overflow-hidden bg-brand-bg-card border border-brand-border/70 cursor-pointer shadow-lg hover:border-brand-cyan/60 transition-all duration-300"
              >
                <img
                  src={img}
                  alt={`${title} Screenshot ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-bg/40 group-hover:bg-transparent transition-all duration-300" />
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-brand-bg-card/80 border border-brand-border text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={16} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* If 3 or more Images: Big Main Image Top + Grid Below */}
        {validImages.length >= 3 && (
          <div className="flex flex-col gap-4">
            {/* Top Main Image */}
            <div
              onClick={() => setSelectedImage(mainImage)}
              className="group relative aspect-video w-full rounded-2xl overflow-hidden bg-brand-bg-card border border-brand-border/70 cursor-pointer shadow-lg hover:border-brand-cyan/60 transition-all duration-300"
            >
              <img
                src={mainImage}
                alt={`${title} Main Screenshot`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-bg/40 group-hover:bg-transparent transition-all duration-300" />
              <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-brand-bg-card/80 border border-brand-border text-white font-mono text-xs">
                Main Dashboard View
              </span>
              <div className="absolute top-4 right-4 p-2 rounded-lg bg-brand-bg-card/80 border border-brand-border text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={16} />
              </div>
            </div>

            {/* Sub-Images Grid */}
            <div
              className={`grid gap-4 ${
                subImages.length === 2
                  ? 'grid-cols-1 sm:grid-cols-2'
                  : subImages.length === 3
                  ? 'grid-cols-1 sm:grid-cols-3'
                  : 'grid-cols-2 sm:grid-cols-4'
              }`}
            >
              {subImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className="group relative aspect-video w-full rounded-xl overflow-hidden bg-brand-bg-card border border-brand-border/60 cursor-pointer shadow-md hover:border-brand-cyan/60 transition-all duration-300"
                >
                  <img
                    src={img}
                    alt={`${title} Screen ${idx + 2}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-bg/50 group-hover:bg-transparent transition-all duration-300" />
                  <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-brand-bg-card/80 border border-brand-border text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-pointer"
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Enlarged Case Study View"
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-brand-border/40"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-brand-bg-card border border-brand-border text-white hover:text-brand-cyan transition-colors"
                aria-label="Close Preview"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
