import Image from 'next/image';

const imageUrl = "https://images.unsplash.com/photo-1710038930918-94ea478af092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxzZW5pb3IlMjBtZWRpdGF0aW9ufGVufDB8fHx8MTc1ODg4NTg3N3ww&ixlib=rb-4.1.0&q=80&w=1080";
const imageDescription = "A fit senior man meditating outdoors.";
const imageHint = "senior meditation";

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
