'use client';

import { useState } from 'react';
import HeroSection from './hero';
import { HeroImageUploader } from './hero-image-uploader';

type EditableHeroSectionProps = {
  headline: string;
  subHeadline: string;
  imageUrl?: string;
  videoUrl?: string;
};

export function EditableHeroSection({
  headline,
  subHeadline,
  imageUrl: initialImageUrl,
  videoUrl,
}: EditableHeroSectionProps) {
  const [imageUrl, setImageUrl] = useState(initialImageUrl);

  return (
    <HeroSection
      headline={headline}
      subHeadline={subHeadline}
      imageUrl={imageUrl}
      videoUrl={videoUrl}
    >
      <HeroImageUploader onImageUpload={setImageUrl} />
    </HeroSection>
  );
}
