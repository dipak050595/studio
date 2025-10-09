import { Mail, MapPin as MapPinIcon, Phone } from 'lucide-react';
import { ContactForm } from '../contact-form';
import Link from 'next/link';
import { WhatsAppIcon } from '../icons/whatsapp-icon';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container fade-in-up space-y-12">
        <div id="contact-form">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Start Your Journey Today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
              Book your free trial or get in touch with us. We're here to help
              you take the first step towards a healthier you.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
              <h3 className="mb-6 text-2xl font-bold text-center">Book Free Trial</h3>
              <ContactForm />
          </div>
        </div>

        <div className="mx-auto max-w-md" id="contact-details">
          <div className="grid gap-8 sm:grid-cols-1">
            <div className="space-y-2">
              <h4 className="font-semibold text-center text-2xl mb-4">Contact Details</h4>
              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-muted-foreground">
                  2nd floor A-236, Sector 47, Noida U.P. 201301
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href="tel:+919664476878" className="text-muted-foreground hover:text-primary">
                  +91-9664476878
                </a>
              </div>
              <div className="flex items-center gap-3">
                <WhatsAppIcon className="h-5 w-5 flex-shrink-0 text-primary" />
                <Link
                  href="https://wa.me/919664476878"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary"
                >
                  Chat with us on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
