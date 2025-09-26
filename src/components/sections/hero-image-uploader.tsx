'use client';

import ImageUploader from '../image-uploader';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ImagePlus } from 'lucide-react';
import { useState } from 'react';

type HeroImageUploaderProps = {
  onImageUpload: (dataUrl: string | null) => void;
};

export function HeroImageUploader({ onImageUpload }: HeroImageUploaderProps) {
    const [open, setOpen] = useState(false);

    const handleImageUpload = (dataUrl: string | null) => {
        onImageUpload(dataUrl);
        setOpen(false);
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm">
          <ImagePlus className="mr-2 h-4 w-4" />
          Change Background
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Upload Background Image</DialogTitle>
        </DialogHeader>
        <ImageUploader onImageUpload={handleImageUpload} cardTitle="" className='max-w-full border-none shadow-none'/>
      </DialogContent>
    </Dialog>
  );
}
