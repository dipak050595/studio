export default function VirtualTourSection() {
  return (
    <section id="virtual-tour" className="section-padding bg-card">
      <div className="container fade-in-up">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Take a Virtual Tour
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Explore our state-of-the-art facilities from the comfort of your
            home. See for yourself why Triumph Fitness is the right choice for
            you.
          </p>
        </div>
        <div className="aspect-video w-full overflow-hidden rounded-xl border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1617208115849!6m8!1m7!1sCAoSLEFGMVFpcE5qV0x2X054Z2Q1blpPX2VfN1J2X0xfZ1dFUE1JdF9jT0tLUEk!2m2!1d40.758814!2d-73.98509!3f325.29!4f-5.83!5f0.7820865974627469"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Triumph Fitness Virtual Tour"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
