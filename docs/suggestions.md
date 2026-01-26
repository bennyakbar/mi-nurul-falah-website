# Analysis & Suggestions

## Conflict Analysis

| Item | **TASKS.md** Requirement | **SPECS.md** Constraint | Conflict? | Resolution Strategy |
| :--- | :--- | :--- | :--- | :--- |
| **Registration** | "Link Google Form" | "Tombol Pendaftaran", "Form kontak non-persisten" | Ambiguous | Use a styled Button that acts as a link to Google Form. Meets both "Button" UI and "No constraints/persistence" requirements. |
| **Hosting** | "Pilih jenis hosting" | "Tidak ada login", "Tidak menyimpan data" | Compatible | **Static Hosting (Netlify/GitHub Pages)**. Safest, cheapest, zero maintenance. |
| **Assets** | "Seleksi Foto", "Rename file" | UI/UX Spec "Warna Hijau & Kuning" | None | Ensure selected photos match the color theme where possible for visual harmony. |

## Gap Detection

1.  **Missing Content Specifics (Berita/Galeri)**
    -   **Issue**: TASKS list `berita.html` and `galeri.html` but SPECS provides NO design or content guidelines for them.
    -   **Risk**: Developer guessing layout (list vs grid vs cards).
    -   **Suggestion**: Implement a standard **3-column Card Grid** for Berita and a **4-column Image Grid** for Galeri. Simplest, standard patterns.

2.  **Font Availability**
    -   **Issue**: "Gotham" is typically a licensed paid font.
    -   **Risk**: Legal issue or missing font file.
    -   **Suggestion**: Use **Montserrat** or **Raleway** (Google Fonts) as free alternatives if Gotham license is not possessed. **Poppins** is safe (Google Font).

3.  **Form Backend**
    -   **Issue**: TASKS asks for "Validasi form" and "Alert/feedback", SPECS says "Non-persisten".
    -   **Risk**: User expects the form to actually *send* email.
    -   **Suggestion**: Explicitly clarify to the client that the Contact Form on the site will likely use a `mailto:` action or require a service like **Formspree** (Free tier) to function without a backend.

## Recommendations for Simplification

-   **Hero Slider**: TASKS mentions "Hero slider (opsional)", SPECS mentions "Slider".
    -   **Recommendation**: Skip the slider for MVP. Use a high-quality **Static Hero Image** with overlaid text. Sliders hurt performance (LCP score) and mobile UX.
-   **Documentation**: TASKS 1.1 asks for `/docs`.
    -   **Recommendation**: Keep technical MD files (this plan, specs) in `/docs` to avoid cluttering the root directory.

## Deployment Safety

-   **Asset Optimization**: All images in `/assets/images` must be compressed. Large raw photos will kill load time.
-   **Security**: Since there is "No Login", ensure no admin boilerplate or unused login forms are accidentally pasted from templates.
