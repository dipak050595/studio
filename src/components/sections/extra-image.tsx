import Image from 'next/image';

const imageUrl = "https://storage.googleapis.com/project-spark-348308/studio-app-images/studio-image-8vTjH1qA-original.jpeg";
const imageDescription = "A woman being assisted by a personal trainer in a gym.";
const imageHint = "personal training";

export default function ExtraImageSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="fade-in-up">
          <Image
            src={imageUrl}
            alt={imageDescription}
            data-ai-hint={imageHint}
            width={1200}
            height={600}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
