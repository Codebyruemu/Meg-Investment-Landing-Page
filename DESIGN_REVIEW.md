# Public website design update — 8 October 2026

Implemented manually from the user-authorized Figma browser inspection because the Figma connector account cannot retrieve this file. Browser screenshots are reference evidence, not full-page backgrounds in the implementation. Text remains semantic HTML and controls remain interactive.

Reference: Mesag Capital Investment, file `2rM6EKZHjyNh8HpBNsPleI`.

Observed frames:
- Homepage `23:347`, 1440 × 3632.
- Investment Opportunities `367:1396`, 1440 × 3408.
- Contact Us `302:1458`, 1440 × 3053.

The browser Properties panel confirms Manrope, 700 weight, 64px display headings with 72px line height and -2% tracking. Hero body copy uses 20px/28px, 700 weight.

Investment Opportunities now follows the current operations and future projects design rather than the older detailed-services reference retained in `investment-handoff`. Five current-operation cards and four planned/development cards preserve the visible copy and statuses. The fifth current-operation card is clipped in Figma's frame; the implementation fits all five cards within the desktop container. Its business portrait uses the visible crop.

The nine new operation/project images and icons in `public/images/investment` are cropped from the browser canvas at 100% zoom. They have screenshot-level resolution, not original image export resolution. Existing matching local hero/CTA images were reused. Source captures and rendered review screenshots are saved in the workspace's parent `design-review` directory.

Homepage features and shared footer were aligned to the reference, contact hero and form geometry were corrected, and the five user-supplied executive portraits and biographies were retained. The copyright year uses the current year. Tablet and mobile layouts are responsive adaptations; Figma supplies desktop frames.
