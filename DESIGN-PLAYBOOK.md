# Landing Page Design Playbook

How to build more sites like the Neuctra landing page. The rules apply to any
product. The components live in `app/components/patterns/` and are the same ones
this site runs on.

## The 8 core rules

1. **Show the product working.** If a visitor can watch it happen, cut the paragraph.
2. **Have one big surprise.** Put it in the hero. Everything else supports it.
3. **Motion must explain something.** Every animation shows a process, a connection or a result. If it is only decoration, remove it.
4. **Change the rhythm.** Alternate big pinned moments with calm sections. If everything moves, nothing stands out.
5. **Build from one story.** Pick one flow, such as idea → build → launch, and repeat it across the page.
6. **Use one accent colour.** Keep the page neutral so the accent marks what is active, finished or live.
7. **Never fake proof.** Label demo data as a sample. Do not invent stats, logos or customers.
8. **The page must work without animation.** Text is in the HTML, and the finished state looks complete.

## Page structure

| # | Section | Job | Pattern |
|---|---|---|---|
| 1 | Hero | Surprise them | Self-building product panel |
| 2 | Statement | Slow them down | `ScrollReveal` |
| 3 | Overview | Show how it fits together | `HubDiagram` |
| 4 | Products | Prove it is real | Cards with live mini demos |
| 5 | Proof | Build trust | Count-up numbers and scrolling strip |
| 6 | Process | Reduce doubt | `PinnedSteps` |
| 7 | Close | Convert | FAQ, CTA and contact |

## Starting a new site

1. Write the one-sentence story and its 3–5 stages.
2. Decide what appears on screen at each stage.
3. Pick an accent colour and set the tokens.
4. Build the hero first. It sets the standard for the rest of the page.
5. Add one pinned section and 2–3 calm ones.

### What to copy

1. The whole `app/components/patterns/` folder.
2. The block in `app/globals.css` that starts at `Landing page motion`, down to the end of the file. The components use its `nx-` classes.
3. The `overflow-x: clip` rule on `body`. Pinned sections do not work without it.
4. `framer-motion` and `lucide-react`.
5. Colour tokens as Tailwind colours: `primary`, `primary-foreground`, `background`, `foreground`, `secondary`, `muted`, `muted-foreground`, `card` and `border`. The CSS block also reads `--primary`, `--border` and `--muted` directly.

Then wrap the page in the provider. It also adds the pause button.

```jsx
import { MotionPreferenceProvider } from "@/app/components/patterns/MotionPreference";

export default function Page() {
  return <MotionPreferenceProvider>{/* sections */}</MotionPreferenceProvider>;
}
```

`ScrollReveal` and `PinnedSteps` assume a fixed navbar 4rem tall. If yours is different, change `top-16` and `h-[calc(100vh-4rem)]` in both files.

## Components

### `MotionPreferenceProvider`

Adds the pause button, remembers the visitor's choice and respects reduced motion. Every other pattern needs it.

- `useMotionStill()` returns true when looping motion should hold still. Check it before starting any new timer or loop.
- `useMotionPreference()` returns `{ paused, reduced, toggle }`.

### `useLoopingStages`

The engine for any "story" that moves through stages. Drive everything from the one `stage` number it returns: headline, step list, preview and feed. See `HeroSection/HeroContent.jsx` for the full example.

```jsx
const ref = useRef(null);
const inView = useInView(ref, { amount: 0.25 });
const { stage, select } = useLoopingStages({
  count: STAGES.length,
  durationMs: 3400,
  lastHoldMs: 1800,
  inView,
  reducedStage: STAGES.length - 1,
});
```

| Option | Default | Purpose |
|---|---|---|
| `count` | required | Number of stages |
| `durationMs` | required | Time on each stage |
| `lastHoldMs` | `0` | Extra time on the last stage, so the result lands |
| `inView` | `true` | Pass `useInView` so it stops off screen |
| `reducedStage` | `0` | Stage shown under reduced motion. Use the last stage for a build-up story. |
| `stopOnSelect` | `false` | Stop looping for good once the visitor chooses |

### `ScrollReveal`

```jsx
<ScrollReveal
  text="We build useful software and solve real-world problems."
  highlight={["useful", "software", "real-world"]}
/>
```

`highlight` matches whole words including attached punctuation, so a word followed by a comma must be written as `"software,"`. `height` sets the scroll distance and defaults to `"220vh"`. Keep the text to about 15–25 words.

### `HubDiagram`

```jsx
<HubDiagram
  items={[{ icon: Boxes, title: "Products", subtitle: "Software", description: "…" }]}
  intro="Pick one to see how it fits."
  center={<img src="/logo.png" alt="" className="h-full w-full rounded-full object-cover" />}
/>
```

Takes 3–6 items and calculates the layout itself. It cycles every 4.2 seconds by default (`cycleMs`) and stops once the visitor picks an item. Descriptions stay in the DOM when collapsed, so they remain readable by search engines. Use `h-full w-full` on the centre element, because it fills the hub.

### `PinnedSteps`

```jsx
const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand the problem",
    desc: "…",
    icon: Search,
    Visual: DiscoverVisual,
  },
];

<PinnedSteps steps={steps} heading={<Heading />} />;
```

`Visual` is a component, not an element. It fills a frame 26rem tall on desktop and 18rem on mobile. Pins from the `lg` breakpoint up and stacks normally below it. `vhPerStep` defaults to `93`. Use 3–4 steps, and keep the heading short so it fits on a laptop screen.

### Patterns to copy from this site

These are too specific to be components, so copy and adapt them:

- **Tilted hero panel:** `LandingPage/HeroSection/HeroContent.jsx`
- **Live product card demos:** `LandingPage/ProductDemo.jsx`
- **Count-up numbers and scrolling strip:** `LandingPage/BrandMetricsSection.jsx`

## Recipes

- **Self-building hero:** 3–5 stages, about 3.4 seconds each, with a longer hold on the last one. Make the steps clickable.
- **Tilted panel:** tilt about 18° and scale to 0.95, then flatten over the first 40% of the hero's scroll. Add a few degrees of mouse tilt on desktop only.
- **Live cards:** one small loop per product, 4–7 seconds long, in CSS only.

## Motion values

| Type | Value |
|---|---|
| Hover or quick state change | 0.2–0.3s |
| Content entering | 0.4–0.6s |
| Elements dropping into place | Spring, stiffness about 200, damping about 20 |
| Delay between list items | 0.08–0.12s |
| Move distance on entry | 16–28px |

Only animate `transform` and `opacity`, plus SVG dash offset for moving light. Move things in from one direction per section.

## Technical rules

- **CSS for loops:** use React only for story state. CSS loops cost no re-renders, and the pause button stops them from one attribute.
- **Finished state first:** make the base CSS style the end result. Reduced motion removes the animation and leaves that state.
- **Comets on SVG paths:** set `pathLength={1}` and use the `nx-comet` class. Do not combine it with `vectorEffect="non-scaling-stroke"`, which breaks the dash.
- **Pinned sections:** avoid `overflow: hidden` on any parent, because it breaks `position: sticky`.
- **Stable layout:** reserve space for changing text with a hidden copy of the longest phrase.
- **Off screen:** stop timers when a section is out of view.
- **SEO:** keep the H1 and key text server-rendered. Do not load the hero with `ssr: false`.
- **Theming:** use colour tokens only, so light and dark mode work automatically.

## Accessibility rules

- Respect `prefers-reduced-motion`, and show the finished state rather than an empty one.
- Provide a pause button for anything that loops.
- Mark decorative scenes `aria-hidden`.
- Make every interactive part a real `<button>`.

## Check before launch

- [ ] It makes sense with no scrolling in the first 5 seconds.
- [ ] The headline and CTA are visible, with part of the panel above the fold.
- [ ] Light mode, dark mode and 390px mobile are all checked.
- [ ] There is no sideways scroll and no console errors.
- [ ] Reduced motion shows a complete page.
- [ ] Tested in Safari and Firefox, not only Chrome.
- [ ] Sample data is labelled.
