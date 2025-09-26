'use client';

import { useState, useRef, ChangeEvent, useCallback } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type ImageUploaderProps = {
  onImageUpload: (dataUrl: string | null) => void;
  cardTitle?: string;
  className?: string;
  width?: number;
  height?: number;
  initialPreview?: string | null;
};

export default function ImageUploader({
  onImageUpload,
  cardTitle = 'Upload Your Image',
  className,
  width,
  height,
  initialPreview,
}: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(initialPreview || null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 2 * 1024 * 1024) { // 2MB limit
        toast({
          variant: 'destructive',
          title: 'File too large',
          description: 'Please select an image smaller than 2MB.',
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onImageUpload(result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = useCallback(() => {
    setPreview(null);
    onImageUpload(null);
    if(fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  }, [onImageUpload]);

  if (preview) {
    return (
        <div className={`relative w-full mx-auto group ${className}`}>
            <Image
              src={preview}
              alt="Uploaded preview"
              width={width || 600}
              height={height || 400}
              className="object-contain rounded-lg"
            />
            <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={handleRemoveImage}
            >
                <X />
                <span className="sr-only">Remove image</span>
            </Button>
      </div>
    );
  }

  return (
    <Card className={`w-full max-w-xl mx-auto ${className}`}>
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className="w-full h-64 border-2 border-dashed border-muted-foreground/50 rounded-lg flex items-center justify-center cursor-pointer"
          onClick={handleUploadClick}
        >
            <div className="text-center text-muted-foreground">
              <Upload className="mx-auto h-12 w-12" />
              <p className="mt-2">Click to browse or drag & drop</p>
              <p className="text-xs">PNG, JPG, GIF up to 2MB</p>
            </div>
        </div>
        <Input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/png, image/jpeg, image/gif"
        />
        <Button onClick={handleUploadClick} className="w-full" variant="outline">
          <Upload className="mr-2" />
          Select Image
        </Button>
      </CardContent>
    </Card>
  );
}
