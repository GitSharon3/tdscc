import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';
import type { Language, LocalizedText } from './aboutContent';
import { text } from './aboutContent';

interface ProfilePhotoProps {
  language: Language;
  name: LocalizedText;
  role: LocalizedText;
  photoSrc?: string;
  featured?: boolean;
  className?: string;
}

const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
  language,
  name,
  role,
  photoSrc,
  featured = false,
  className = '',
}) => {
  const [hasImageError, setHasImageError] = useState(false);
  const displayName = text(language, name);
  const canShowImage = Boolean(photoSrc && !hasImageError);

  return (
    <div
      className={`relative aspect-square shrink-0 overflow-hidden rounded-md border ${
        featured ? 'border-amber-200 bg-amber-50' : 'border-emerald-100 bg-emerald-50'
      } ${className}`}
    >
      {canShowImage ? (
        <img
          src={photoSrc}
          alt={`${displayName} - ${text(language, role)}`}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={() => setHasImageError(true)}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center bg-slate-50 p-2 text-center sm:p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white text-xs font-bold text-emerald-800 shadow-sm sm:h-12 sm:w-12 sm:text-sm">
            {getInitials(name.en)}
          </div>
          <p className="mt-2 line-clamp-2 text-[11px] font-bold leading-4 text-slate-950 sm:mt-3 sm:text-xs">
            {displayName}
          </p>
          <p className="mt-1 line-clamp-1 text-[11px] font-semibold text-emerald-700">{text(language, role)}</p>
          <div className="mt-2 inline-flex max-w-full items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1 text-[10px] font-semibold text-slate-500">
            <ImageOff className="h-3.5 w-3.5" />
            <span className="truncate">{language === 'ne' ? 'फोटो अद्यावधिक हुँदै' : 'Photo pending'}</span>
          </div>
        </div>
      )}
    </div>
  );
};
