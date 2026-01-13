export const posts = [
  {
    slug: "first-post",
    title: "Building My Resume Website with Cloud (On a $0 Budget)",
    date: "2026-01-11",
    tags: ["GitHub", "cloudflare", "cicd"],
    content: `
This is my first blog post.

Today I worked on turning my resume into an actual website instead of just a PDF or a static page.
The goal was simple: make something real, deploy it, and learn how cloud tools actually work.

By the end of the day, I was honestly surprised by how much I built.

I created a resume website using React and deployed it on GitHub Pages.
Instead of stopping there, I added a real backend using Cloudflare Workers and a database.

Along the way, I ran into many small but real issues:
CI build failures, caching problems, API errors, and differences between local and production.

Fixing these problems taught me a lot about how real systems work together.

This blog is where I’ll keep writing about what I build and learn.
    `,
  },
  {
    slug: "sec-post",
    title: "From Manual Deploy to Infrastructure as Code (IaC)",
    date: "2026-01-13",
    tags: ["crc", "iac", "cloudflare", "cicd"],
    content: `
Today I finished one of the most important parts of my Cloud Resume Challenge:
turning my backend into Infrastructure as Code.
Before this, my visitor counter API worked, but parts of the setup still depended on manual steps in the Cloudflare dashboard. That meant it wasn’t fully reproducible.
So I fixed that.

I introduced Wrangler and moved my Cloudflare Worker and D1 database setup into code:

- wrangler.toml now defines how the Worker is deployed
- Database schema lives in SQL migrations
- The entire backend can be recreated from the repository

After that, I added automatic deployment using GitHub Actions.
Now when I push changes to main, my Worker is deployed automatically — no manual steps needed.
Combined with the Cypress smoke tests I added earlier, this means:

- Tests run in CI
- Infrastructure is defined as code
- Deployment is automated and repeatable

    `,
  },
];
