# Strict Execution Plan

## Phase 0: Foundation & Config
*Mapping to TASKS Phase 0 & 1 | Constraints: Static Hosting, No Backend*

1.  **Repository Setup**
    - [ ] Initialize Git repository.
    - [ ] Create folder structure: `/public`, `/assets/css`, `/assets/js`, `/assets/images`, `/docs`.
    - [ ] Add `.gitignore` (node_modules, .DS_Store).

2.  **Asset Preparation**
    - [ ] Download/Link "Poppins" and "Gotham" (or closest Google Reg Google Font alternative if Gotham is unavailable/paid).
    - [ ] Define Color Palette in CSS Variables (`:root`):
        -   Primary: Green (Code TBD)
        -   Secondary: Yellow (Code TBD)
    - [ ] Create `reset.css` or `normalize.css`.

## Phase 1: Core Layout (Skeleton)
*Mapping to TASKS 1.3 & 2.2 | Constraints: Semantic HTML, Responsive*

3.  **Global Components**
    - [ ] Build `nav` (Header): Logo + Links (Berita, Galeri included).
    - [ ] Build `footer`: Copyright + Short Contact.
    - [ ] Implement Mobile Toggling (JS Class toggle).

4.  **Page Stubs**
    - [ ] Create `index.html`, `profile.html`, `akademik.html`, `ppdb.html`, `berita.html`, `galeri.html`, `kontak.html`.
    - [ ] Ensure all pages reference `style.css` and `script.js`.
    - [ ] Set unique `<title>` for each page.

## Phase 2: Page Implementation (Content)
*Mapping to TASKS Phase 2 & PPDB Extension | Constraints: Easy reading, "Islami/Formal" tone*

5.  **Homepage (`index.html`)**
    - [ ] Hero Section: Image slider structure (Static image MVP first).
    - [ ] Welcome Text Section.

6.  **Profile & Akademik**
    - [ ] `profile.html`: Visi Misi list, Sejarah text block.
    - [ ] `akademik.html`: List of programs.

7.  **PPDB (`ppdb.html`) - CRITICAL**
    - [ ] Hero: "Penerimaan Peserta Didik Baru".
    - [ ] Checklist: Persyaratan (Use Icons).
    - [ ] Timeline: Alur Pendaftaran (Visual vertical/horizontal flow).
    - [ ] **Action**: "Daftar Sekarang" button linking to **Google Form** (Resolves Task/Spec conflict).

8.  **Secondary Pages (Berita, Galeri)**
    - [ ] `berita.html`: Simple Grid Layout (Placeholder content).
    - [ ] `galeri.html`: Simple Masonry or Grid Layout (Placeholder images).

9.  **Contact (`kontak.html`)**
    - [ ] Address Info & Google Maps Embed.
    - [ ] Form Structure (Name, Message, Submit). *Note: No backend configured yet, prevent default submit.*

## Phase 3: Interaction & Polish
*Mapping to TASKS Phase 3 & SPECS 7 | Constraints: No login, lightweight*

10. **JavaScript Logic**
    - [ ] Navbar Toggle (Hamburger menu).
    - [ ] Smooth Scroll for Anchor links (CSS `scroll-behavior: smooth` favored).
    - [ ] Contact Form Validation: Prevent empty submit, Show alert "Message specific function not connected" or Mailto.

11. **Responsive Verification**
    - [ ] Check Mobile (<768px): Stacked layout, readable fonts.
    - [ ] Check Tablet (768-1024px): Padding adjustments.
    - [ ] Check Desktop (>1024px): Container max-width.

## Phase 4: Deployment
*Mapping to TASKS Phase 5 | Constraints: Static/Shared Hosting*

12. **Final Checks**
    - [ ] Validate HTML Semantics (W3C Validator).
    - [ ] Check Console for errors.
    - [ ] Deploy to Netlify/GitHub Pages.
