import { Mail, MapPin as MapPinIcon, Phone } from 'lucide-react';
import { ContactForm } from '../contact-form';
import { Map } from '../map';
import Link from 'next/link';
import { WhatsAppIcon } from '../icons/whatsapp-icon';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container fade-in-up">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Start Your Journey Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Book your free trial or get in touch with us. We're here to help you
            take the first step towards a healthier you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-2xl font-bold">Book a Free Trial</h3>
            <ContactForm />
          </div>
          <div className="lg:col-span-3">
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-2xl font-bold">Our Location</h3>
                <Map />
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-semibold">Contact Details</h4>
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="text-muted-foreground">
                      123 Fitness Ave, FITNMOVE City, 10001
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="text-muted-foreground">
                      hello@fitnmove.fitness
                    </p>
                  </div>
                   <div className="flex items-center gap-3">
                    <WhatsAppIcon className="h-5 w-5 flex-shrink-0 text-primary" />
                    <Link href="https://wa.me/11234567890" target="_blank" className="text-muted-foreground hover:text-primary">
                      Chat with us on WhatsApp
                    </Link>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Opening Hours</h4>
                  <p className="text-muted-foreground">
                    <strong>Mon - Fri:</strong> 5:00 AM - 11:00 PM
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Sat - Sun:</strong> 7:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
