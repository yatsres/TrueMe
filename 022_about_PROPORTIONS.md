# 022_about2 - Layout Proportions & Spacing

## Overall Container
- **Full width**: 100% of screen
- **Background**: Light beige (#F5F1ED)
- **Padding**: 60-100px from edges (desktop), 30-40px (mobile)
- **Top padding**: 60-80px
- **Bottom padding**: 60-80px

## Grid Layout
- **Grid type**: 2-column
- **Left column width**: 50% of container
- **Right column width**: 50% of container
- **Gap between columns**: 60-100px (substantial spacing)
- **Vertical alignment**: Top aligned (both columns start at top)
- **Horizontal alignment**: Center within viewport (equal margins left/right)

## Alignment Details
- **Container alignment**: `display: grid`
- **Grid template columns**: `1fr gap 1fr` (equal 50% columns with 60-100px gap)
- **Align items**: `start` (vertical top alignment)
- **Justify items**: `start` (horizontal left within columns)
- **Left column content alignment**: 
  - `text-align: left` (all text elements left-aligned)
  - `align-self: start` (starts at top)
- **Right column content alignment**:
  - `text-align: left` (all text elements left-aligned)
  - `align-self: start` (starts at top)
- **Box borders**: `border-box` (padding included in width)
- **Icon alignment within question items**: `align-items: flex-start` (icons align to text baseline, top)
- **List items**: `flex-direction: row` (icon before text, left to right)

## Left Column (Body Text & Context)
- **Width**: 50% of container
- **Padding left**: 60-100px from left edge
- **Padding right**: 20-30px (to gap)
- **Max width**: ~500-600px

### Text Blocks (Top to Bottom)

1. **Highlighted Box "Teenagehood is a time..."**
   - **Width**: 100% of column
   - **Padding**: 30-40px inside
   - **Border**: 4-5px solid lime green (#d2ff72)
   - **Border radius**: 20-30px
   - **Background**: Transparent/white
   - **Font size**: 32-40px (heading weight)
   - **Color**: Orange (#ff751f)
   - **Bottom margin**: 40-50px
   - **Font weight**: Bold (700)

2. **Body paragraph 1 "Teenagers are trying..."**
   - **Font size**: 16px
   - **Line height**: 1.6
   - **Color**: Dark gray (#2B2B2B)
   - **Bottom margin**: 20-30px

3. **Body paragraph 2 "They want to be themselves..."**
   - **Font size**: 16px
   - **Line height**: 1.6
   - **Color**: Dark gray
   - **Bottom margin**: 20-30px

4. **Body paragraph 3 "So they move between..."**
   - **Font size**: 16px
   - **Line height**: 1.6
   - **Color**: Dark gray
   - **Bottom margin**: 20-30px

5. **Body paragraph 4 "And this creates confusion..."**
   - **Font size**: 16px
   - **Line height**: 1.6
   - **Color**: Dark gray
   - **Bottom margin**: 40-50px (larger gap before divider)

6. **Divider Line**
   - **Style**: Dashed horizontal line
   - **Color**: Orange (#ff751f)
   - **Width**: 100% of column
   - **Margin top**: 30-40px
   - **Margin bottom**: 30-40px
   - **Height**: 1-2px

7. **Body paragraph 5 "Many teenagers feel alone..."**
   - **Font size**: 16px
   - **Line height**: 1.6
   - **Color**: Dark gray
   - **Bottom margin**: 20-30px

8. **Body paragraph 6 "They carry things inside..."**
   - **Font size**: 16px
   - **Line height**: 1.6
   - **Color**: Dark gray
   - **Bottom margin**: 20-30px

9. **Body paragraph 7 "Through real experience..."**
   - **Font size**: 16px
   - **Line height**: 1.6
   - **Color**: Dark gray
   - **Bottom margin**: 0

## Right Column (Questions & Challenges)
- **Width**: 50% of container
- **Padding left**: 20-30px (from gap)
- **Padding right**: 60-100px (to right edge)
- **Max width**: ~500-600px

### Questions Section

1. **"This is where many questions..." Heading**
   - **Font size**: 44px (heading)
   - **Color**: Dark green (#427047)
   - **Weight**: Bold (700)
   - **Bottom margin**: 30-40px
   - **Line height**: 1.1

2. **Question List Items (7 items total)**
   - **Container spacing**: 20-30px between items vertically
   - **Item layout**: Flexbox - icon + text
   
   **Icon (colored circle)**
   - **Size**: 30-35px × 30-35px
   - **Border radius**: 50% (perfect circle)
   - **Flex shrink**: 0 (doesn't shrink)
   - **Colors per item**:
     1. Lime green (#d2ff72) - "Who am I, really?"
     2. Orange (#ff751f) - "Where do I belong?"
     3. Lime green (#d2ff72) - "Am I interesting to anyone?"
     4. Dark green (#427047) - "Is something wrong with me?"
     5. Red (#e74c3c) - "Can I trust other people?"
     6. Lime green (#d2ff72) - "Why do I feel so different sometimes?"
     7. Lime green (#d2ff72) - "What do I actually want?"
   
   **Text (question)**
   - **Font size**: 16px
   - **Color**: Dark gray (#2B2B2B)
   - **Gap between icon and text**: 15-20px
   - **Line height**: 1.6

3. **Bottom Margin after questions**: 50-60px

### Challenges Section

1. **"At the same time, we work..." Heading**
   - **Font size**: 44px (heading)
   - **Color**: Dark green (#427047)
   - **Weight**: Bold (700)
   - **Top border**: 2-3px solid lime green (#d2ff72)
   - **Padding top**: 30-40px
   - **Bottom margin**: 30-40px
   - **Line height**: 1.1

2. **Challenges Container Box**
   - **Width**: 100% of right column
   - **Padding**: 40-50px (inside)
   - **Border**: 3-4px solid lime green (#d2ff72)
   - **Border radius**: 30-40px
   - **Background**: Light lime/cream (#f0f5e0)
   - **Margin bottom**: 0

3. **Challenge List Items (7 items)**
   - **Spacing**: 12-15px between items
   - **Item layout**: Text with bullet point
   - **Bullet style**: • (filled circle)
   - **Font size**: 16px
   - **Color**: Dark gray or dark green
   - **Line height**: 1.6
   - **Padding left per item**: 20px (bullet + gap)

## Spacing Summary
- **Screen edge to content**: 60-100px (desktop), 30-40px (mobile)
- **Between columns**: 60-100px
- **Between text blocks in left**: 20-30px (20-40px before divider)
- **Between questions**: 20-30px
- **Padding inside highlighted boxes**: 30-50px
- **Box border thickness**: 3-5px

## Responsive Behavior
- Desktop (lg): Full 2-column as described
- Tablet (md): Columns stack or reduce gap to 40-60px
- Mobile (sm): Single column stack, 30-40px padding sides

## Color Palette in Section
- Lime green: #d2ff72
- Orange: #ff751f
- Dark green: #427047
- Red: #e74c3c
- Dark gray text: #2B2B2B
- Light background box: #f0f5e0
- Section background: #F5F1ED
