# 022_about2 - Layout Proportions & Spacing (Measured from Image)


## Overall Container
- **Full width**: 100%
- **Full height**: 1080 px (scrollable content)
- **Background**: Light beige (#F5F1ED)
- **Padding**: No edge padding on width (full bleed), padding on content areas

## Grid Layout (2-Column for desktop, stacks on mobile)
- **Total content width**: ~920-950 px (accounting for padding)
- **Left column width**: ~450-475 px (~45.7-48.3% of total)
- **Right column width**: ~450-475 px (~45.7-48.3% of total)
- **Gap between columns**: ~15-25 px (~1.5-2.5% of total width)
- **Left/right page padding**: ~17-32 px each side

## Alignment Details
- **Container alignment**: Full width, top-to-bottom scroll
- **Text alignment in both columns**: Flush left (left-aligned text)
- **Item alignment**: Items align to left edge of their containers
- **Icon + text pairing**: Flexbox row direction (icon on left, text on right)
- **Icon vertical alignment**: `align-items: flex-start` (top-aligned with text baseline)

## Left Column (Body Text & Context)
- **Left edge**: ~17-32 px from screen left
- **Right edge**: ~492-500 px from screen left
- **Column width**: ~450-475 px
- **Top margin from section start**: ~0-20 px
- **Bottom margin to next section**: ~40-60 px

### Text Blocks (measuring from visual top-to-bottom)

1. **Highlighted Box "Teenagehood is a time when a lot is happening inside."**
   - **Width**: ~100% of column (450-475 px)
   - **Padding**: ~25-30 px all sides (inside border)
   - **Border width**: ~4-5 px
   - **Border color**: Lime green (#d2ff72)
   - **Border radius**: ~20-25 px
   - **Background**: White/transparent
   - **Font size**: ~28-32 px (heading weight)
   - **Color**: Orange (#ff751f)
   - **Line height**: 1.2-1.3
   - **Font weight**: Bold (700)
   - **Bottom margin**: ~35-45 px
   - **Vertical position from top**: ~0-50 px

2. **Body paragraph 1 "Teenagers are trying to understand..."**
   - **Width**: ~100% of column
   - **Font size**: ~14-16 px
   - **Color**: Dark gray (#2B2B2B)
   - **Line height**: 1.5-1.6
   - **Bottom margin**: ~18-24 px
   - **Vertical position**: ~55-95 px from top

3. **Body paragraph 2 "They want to be themselves..."**
   - **Width**: ~100% of column
   - **Font size**: ~14-16 px
   - **Color**: Dark gray
   - **Line height**: 1.5-1.6
   - **Bottom margin**: ~18-24 px
   - **Vertical position**: ~105-155 px from top

4. **Body paragraph 3 "So they move between..."**
   - **Width**: ~100% of column
   - **Font size**: ~14-16 px
   - **Color**: Dark gray
   - **Line height**: 1.5-1.6
   - **Bottom margin**: ~18-24 px
   - **Vertical position**: ~165-210 px from top

5. **Body paragraph 4 "And this creates confusion..."**
   - **Width**: ~100% of column
   - **Font size**: ~14-16 px
   - **Color**: Dark gray
   - **Line height**: 1.5-1.6
   - **Bottom margin**: ~35-45 px (larger gap before divider)
   - **Vertical position**: ~220-260 px from top

6. **Divider Line**
   - **Style**: Dashed horizontal line
   - **Color**: Orange (#ff751f)
   - **Width**: ~100% of column
   - **Height**: ~1-2 px
   - **Margin top**: ~25-35 px
   - **Margin bottom**: ~25-35 px
   - **Vertical position**: ~295-330 px from top

7. **Body paragraph 5 "Many teenagers feel alone..."**
   - **Width**: ~100% of column
   - **Font size**: ~14-16 px
   - **Color**: Dark gray
   - **Line height**: 1.5-1.6
   - **Bottom margin**: ~18-24 px
   - **Vertical position**: ~360-410 px from top

8. **Body paragraph 6 "They carry things inside..."**
   - **Width**: ~100% of column
   - **Font size**: ~14-16 px
   - **Color**: Dark gray
   - **Line height**: 1.5-1.6
   - **Bottom margin**: ~18-24 px
   - **Vertical position**: ~420-480 px from top

9. **Body paragraph 7 "Through real experience..."**
   - **Width**: ~100% of column
   - **Font size**: ~14-16 px
   - **Color**: Dark gray
   - **Line height**: 1.5-1.6
   - **Bottom margin**: ~0
   - **Vertical position**: ~490-550 px from top

## Right Column (Questions & Challenges)
- **Left edge**: ~492-500 px from screen left
- **Right edge**: ~950-967 px from screen left
- **Column width**: ~450-475 px
- **Top margin from section start**: ~0-20 px

### Questions Section

1. **"This is where many questions start to come up:" Heading**
   - **Width**: ~100% of column
   - **Font size**: ~28-32 px (heading)
   - **Color**: Dark green (#427047)
   - **Weight**: Bold (700)
   - **Line height**: 1.1-1.2
   - **Bottom margin**: ~25-30 px
   - **Vertical position**: ~0-70 px from section top

2. **Question List (7 items total)**
   - **Container width**: ~100% of column
   - **Item height per question**: ~35-45 px (including spacing)
   - **Spacing between items**: ~18-22 px (gap property)
   - **Bottom margin after last question**: ~40-50 px

   **Icon (colored circle)**
   - **Size**: ~28-32 px × 28-32 px (square, border-radius 50%)
   - **Flex-shrink**: 0 (doesn't shrink)
   - **Margin right**: ~15-18 px (gap from text)
   - **Vertical alignment**: Top of first text line
   - **Colors per item**:
     1. Lime green (#d2ff72) - "Who am I, really?"
     2. Orange (#ff751f) - "Where do I belong?"
     3. Lime green (#d2ff72) - "Am I interesting to anyone?"
     4. Dark green (#427047) - "Is something wrong with me?"
     5. Red (#e74c3c) - "Can I trust other people?"
     6. Lime green (#d2ff72) - "Why do I feel so different sometimes?"
     7. Lime green (#d2ff72) - "What do I actually want?"

   **Text (question)**
   - **Font size**: ~14-16 px
   - **Color**: Dark gray (#2B2B2B)
   - **Line height**: 1.4-1.5
   - **Flex**: 1 (grows to fill remaining space)
   - **Vertical position**: ~85-460 px from section start

3. **Top border separator (before challenges section)**
   - **Style**: Solid line
   - **Color**: Lime green (#d2ff72)
   - **Width**: ~100% of column
   - **Height**: ~2-3 px
   - **Margin top**: ~30-40 px
   - **Margin bottom**: ~25-30 px

### Challenges Section

1. **"At the same time, we work with what many of them go through:" Heading**
   - **Width**: ~100% of column
   - **Font size**: ~28-32 px (heading)
   - **Color**: Dark green (#427047)
   - **Weight**: Bold (700)
   - **Line height**: 1.1-1.2
   - **Bottom margin**: ~25-30 px
   - **Padding top**: ~20-25 px
   - **Vertical position**: ~470-550 px from section start

2. **Challenges Container Box**
   - **Width**: ~100% of column (450-475 px)
   - **Padding**: ~30-35 px all sides
   - **Border width**: ~3-4 px
   - **Border color**: Lime green (#d2ff72)
   - **Border radius**: ~30-40 px
   - **Background**: Light lime/cream (#f0f5e0)
   - **Margin bottom**: ~0 (ends at document bottom)
   - **Vertical position**: ~575-1080 px from section start

3. **Challenge List Items (7 items, inside box)**
   - **Spacing between items**: ~14-18 px
   - **Item layout**: Text with bullet point
   - **Bullet style**: • (filled circle)
   - **Font size**: ~14-16 px
   - **Color**: Dark gray or dark green (#2B2B2B or #427047)
   - **Line height**: 1.5-1.6
   - **Padding left per item**: ~18-22 px (bullet + gap)
   - **List items order**:
     1. self-doubt
     2. fear of being judged
     3. loneliness
     4. body insecurity
     5. difficulty expressing emotions
     6. conflicts with others
     7. not knowing where they belong

## Spacing & Proportions Summary

### Horizontal Distribution (of 984 px total width)
```
Left padding: 17-32 px (1.7-3.3%)
Left column: 450-475 px (45.7-48.3%)
Gap: 15-25 px (1.5-2.5%)
Right column: 450-475 px (45.7-48.3%)
Right padding: 17-32 px (1.7-3.3%)
Total: 984 px
```

### Vertical Distribution (of 1080 px total scrollable height)
- Highlighted box: ~0-90 px
- Paragraphs 1-4 & divider: ~90-360 px
- Paragraphs 5-7: ~360-560 px
- Questions heading: ~0-70 px (right column)
- Questions list: ~85-460 px (right column)
- Top border: ~470-480 px (right column)
- Challenges heading: ~490-560 px (right column)
- Challenges box: ~575-1080 px (right column, extends to bottom)

### Element Spacing (within columns)
- Between paragraphs: ~18-24 px
- Before divider: ~35-45 px
- After divider: ~35-45 px
- Between question items: ~18-22 px
- Before challenges section: ~40-50 px
- Inside boxes (highlighted, challenges): ~25-35 px padding

## Alignment Rules
- **Page composition**: 2-column layout (equal width columns)
- **Horizontal alignment**: Centered composition with symmetric padding
- **Text alignment**: Left-flush in both columns
- **Icon + text rows**: Icon size ~28-32 px, text follows, 15-18 px gap
- **Box borders**: Rounded (20-40 px radius), inside padding 25-35 px
- **Vertical flow**: Top-to-bottom, consecutive alignment down page
- **Overall balance**: Two columns process information side-by-side with tight, organized spacing

## Responsive Notes
- This appears to be a **desktop/tablet width** design (984 px)
- For mobile: Would likely stack to single column
- For larger screens: Might need proportional scaling
- Font sizes appear optimized for ~15-16 px body text readability
