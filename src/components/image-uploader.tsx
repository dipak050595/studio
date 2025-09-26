'use client';

import { useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ImageUploader() {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
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
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>Upload Your Image</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className="w-full h-64 border-2 border-dashed border-muted-foreground/50 rounded-lg flex items-center justify-center cursor-pointer"
          onClick={handleUploadClick}
        >
          {preview ? (
            <div className="relative w-full h-full">
              <Image
                src={preview}
                alt="Image preview"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              <Upload className="mx-auto h-12 w-12" />
              <p className="mt-2">Click to browse or drag & drop</p>
              <p className="text-xs">PNG, JPG, GIF up to 2MB</p>
            </div>
          )}
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
          {file ? 'Change Image' : 'Select Image'}
        </Button>
      </CardContent>
    </Card>
  );
}
