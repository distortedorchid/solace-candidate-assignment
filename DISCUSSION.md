# Coding Challenge Discussion

## Initial Work

I began by addressing the bugs present in the initial codebase, committing fixes as I went. After a while, I realized that the overall architecture—both frontend and backend—could be more robust. Unfortunately, by then, time was already limited. As a result, I moved quickly to refactor what I could. What you see now is a rapid but thoughtful iteration, which I’ll walk through below.

## Components

I integrated [React Aria Components](https://react-spectrum.adobe.com/react-aria/components.html) to bring strong accessibility primitives to the UI, which is critical in health-related contexts. I implemented a few basic components, such as a search box and a `GridList` to display advocate cards.

While these components provide excellent accessibility out-of-the-box, their capabilities aren’t fully utilized in this iteration. For instance, the `GridList` could link to a detailed view, include better keyboard navigation, and support ARIA attributes more meaningfully. As it stands, the implementation serves as a proof of concept.

## Styling

I chose to use Tailwind CSS (already included in the project) and upgraded it to version 4.1 to ensure compatibility with the component library. I formatted Tailwind class names using `prettier-plugin-tailwindcss`.

Due to time constraints, the styling is not well-organized or optimized. The card layout was chosen simply because it’s more visually appealing than a plain table. I added some icons and a placeholder for an image to improve visual interest. The icons are SVGs wrapped in TSX components, allowing for props like `color` and `size`. This is a bit over-engineered for such a small app, but it offers some flexibility.

## Query / API Changes

I updated the API to support granular field-based queries. While I’m not an expert in Drizzle ORM, the implementation works and allows clients to query specific fields. It integrates with React Query for client-side caching and supports features like pagination, which weren’t implemented due to time limitations.

## Search Box

I considered implementing full-text fuzzy search, inspired by the initial version. However, I opted for a parameter-based approach for better performance and precision.

The search box currently lacks a reset button, and the specialty selection UI is quite underdeveloped. My intention was to implement a tag-based search experience—something the database schema already supports—but I ran out of time. Additionally, not all specialties render correctly due to a bug I didn’t have time to resolve.

The search parameters were moved to a react context just to keep things things and avoid prop-drilling, but could be overkill here.

## Project Structure

I tried to keep the project well-organized, but under the hood it’s still a bit messy. It compiles without errors, passes linting, and is formatted with Prettier, but I would have refactored to keep it clean and DRY with more time.

## Overall

I wish I had a more focused direction in the beginning, as I ran out of time near the end. That said, I believe it demonstrates a solid understanding of full-stack development, accessibility, and modern frontend tooling.

