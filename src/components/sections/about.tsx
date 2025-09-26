'use client';

import { useState } from 'react';
import ImageUploader from '@/components/image-uploader';
import Image from 'next/image';

export default function AboutSection() {
  const [uploadedImages, setUploadedImages] = useState<(string | null)[]>(
    Array(6).fill(null)
  );

  const handleImageUpload = (
    index: number,
    field: string,
    value: string
  ) => {
    const newImages = [...uploadedImages];
    newImages[index] = value;
    setUploadedImages(newImages);
  };

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6 fade-in-up">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About FITNMOVE
              </h2>
              <div className="mx-auto max-w-3xl">
                <p className="text-muted-foreground md:text-lg">
                  At FITNMOVE, we believe fitness is not just about looking
                  good—it’s about living stronger, healthier, and pain-free at
                  every stage of life. Founded by Vivek Prakash, a certified
                  fitness trainer with years of experience, FITNMOVE specializes
                  in senior citizen fitness, women’s health, and special
                  population training.
                </p>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Our mission is to make fitness accessible, safe, and
                  enjoyable for everyone, whether you’re recovering from an
                  injury, managing health conditions, or looking to build
                  strength and confidence.
                </p>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  With personalized training plans, expert guidance, and a
                  supportive community, FITNMOVE helps you achieve your health
                  goals—right from the comfort of your home or at our training
                  center.
                </p>
                <p className="mt-4 text-muted-foreground md:text-lg font-semibold">
                  Let’s move towards a healthier tomorrow, together!
                </p>
              </div>
            </div>
          </div>
          <div className="fade-in-up space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {uploadedImages.map((imageUrl, index) =>
                imageUrl ? (
                  <div key={index} className="relative group">
                    <Image
                      src={imageUrl}
                      alt={`Uploaded image ${index + 1}`}
                      width={600}
                      height={400}
                      className="object-cover rounded-lg w-full aspect-[3/2]"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        onClick={() => handleImageUpload(index, 'imageUrl', '')}
                        className="text-white bg-red-500 rounded-full p-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  <ImageUploader
                    key={index}
                    onImageUpload={(field, value) =>
                      handleImageUpload(index, field, value)
                    }
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
