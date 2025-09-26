import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function PageFooter() {
  return (
    <footer className="bg-white dark:bg-card">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FITNMOVE. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-foreground"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
