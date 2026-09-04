import { socialLinks } from "@/lib/portfolio";

export function SiteFooter() {
  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__invitation">
        <p className="eyebrow">Contact</p>
        <h2>Have something worth building?</h2>
        <a className="contact-link" href="mailto:mosesajila@gmail.com">
          mosesajila@gmail.com <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="site-footer__base">
        <p>© {new Date().getFullYear()} Moses Ajila</p>
        <nav aria-label="Social links">
          <ul>
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
