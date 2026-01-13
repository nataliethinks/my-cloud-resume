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
  },{
    slug: "3-post",
    title: "Cloud Resume Challenge – Final",
    date: "2026-01-13",
    tags: ["iac", "DevOps", "cloudflare", "cicd"],
    content: `
I’ve officially completed the Cloud Resume Challenge.
What started as a “simple online resume” gradually became a full end-to-end cloud and DevOps project. 
Along the way, I focused on building something that behaves like a real production system instead of just following a tutorial.

Architecture Overview:

The project is split into two independent repositories:

- Frontend
A React-based resume and blog site deployed to GitHub Pages using GitHub Actions.

- Backend
A Cloudflare Worker that provides a visitor counter API, backed by a D1 database.
All infrastructure and database schema are defined as code using Wrangler and SQL migrations.
This separation keeps frontend and backend deployments isolated, which closely mirrors real-world systems.

CI/CD Pipeline

Both frontend and backend use automated CI/CD pipelines:

- Continuous Integration
Build and dependency installation
Cypress API smoke tests
CodeQL security scanning

- Continuous Deployment
Frontend automatically deploys to GitHub Pages on every push to main
Backend automatically deploys the Cloudflare Worker using Wrangler
I also added post-deploy smoke tests to verify the live API after deployment.

Testing and Production Safety

One challenge I ran into was test reliability in a live environment.
To avoid automated tests affecting real visitor data, I separated traffic by design:
- Production requests update the visits counter
- CI and Cypress tests use a dedicated test_visits counter

This keeps tests deterministic and prevents production metrics from being polluted a small detail, but an important real-world consideration.

Infrastructure as Code

All backend resources are fully reproducible from code:
- Worker configuration via wrangler.toml
- Database schema managed through migrations
- No manual setup required in the Cloudflare dashboard

This ensures the system can be recreated or deployed consistently at any time

What I Learned

- CI/CD is more than just “auto deploy” — quality gates and post-deploy checks matter
- Test isolation is essential once you’re dealing with real traffic
- Splitting repositories improves clarity and deployment safety
- Small design decisions make a big difference in production behavior
`,
  },
];
