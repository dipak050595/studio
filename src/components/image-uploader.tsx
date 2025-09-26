'use client';

import { Upload, X } from 'lucide-react';
import Image from 'next/image';
import { useState, ChangeEvent } from 'react';

type ImageUploaderProps = {
  onImageUpload: (field: string, value: string) => void;
};

export default function ImageUploader({ onImageUpload }: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onImageUpload('imageUrl', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    onImageUpload('imageUrl', '');
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full aspect-[3/2] border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors">
      <label
        htmlFor="image-upload"
        className="cursor-pointer flex flex-col items-center"
      >
        <Upload className="h-8 w-8 text-muted-foreground mb-2" />
        <span className="text-sm font-semibold text-muted-foreground">
          Upload Image
        </span>
        <span className="text-xs text-muted-foreground mt-1">
          Drag and drop or click to upload
        </span>
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
}
