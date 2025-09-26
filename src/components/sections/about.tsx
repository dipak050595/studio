import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6 fade-in-up">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About FITNMOVE
              </h2>
              <p className="max-w-xl text-muted-foreground md:text-lg">
                At FITNMOVE, we believe fitness is not just about looking
                good—it’s about living stronger, healthier, and pain-free at
                every stage of life. Founded by Vivek Prakash, a certified
                fitness trainer with years of experience, FITNMOVE specializes
                in senior citizen fitness, women’s health, and special
                population training.
              </p>
              <p className="max-w-xl text-muted-foreground md:text-lg">
                Our mission is to make fitness accessible, safe, and
                enjoyable for everyone, whether you’re recovering from an
                injury, managing health conditions, or looking to build
                strength and confidence.
              </p>
              <p className="max-w-xl text-muted-foreground md:text-lg">
                With personalized training plans, expert guidance, and a
                supportive community, FITNMOVE helps you achieve your health
                goals—right from the comfort of your home or at our training
                center.
              </p>
              <p className="max-w-xl text-muted-foreground md:text-lg font-semibold">
                Let’s move towards a healthier tomorrow, together!
              </p>
            </div>
          </div>
          <div className="fade-in-up flex items-center justify-center">
            <Image
              src="https://picsum.photos/seed/senior-yoga/600/750"
              alt="A candid, warm photograph of a graceful Indian grandmother in her late 70s, with silver hair tied in a bun, wearing a simple cotton sari. She is seated on a yoga mat, smiling gently as a young, supportive female fitness trainer in athletic wear gently guides her into a gentle seated hamstring stretch. The scene is set in a sunlit living room with traditional Indian decor. Soft, natural morning light streams through the window, creating a serene and affectionate atmosphere. Focus on the connection between the two women and the grandmother's expression of quiet determination."
              width={600}
              height={750}
              className="rounded-lg object-cover shadow-lg"
              data-ai-hint="senior fitness"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
