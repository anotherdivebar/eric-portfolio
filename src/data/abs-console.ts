/** Portfolio copy checked against ABS Console at c4e5a79 (November 19, 2026). */
export const modules = [
  {
    id: "crm",
    title: "CRM & revenue management",
    capabilities: [
      "Configure deal stages, assign owners, and keep an activity history for each account.",
      "Build sales reports from custom fields and formulas. Open the deals behind a total and save the view to a dashboard.",
      "Set sales quotas and record what managers have committed to. Each rep can submit a forecast and schedule their own reports.",
      "Compare the buyer’s request with the scope and exclusions in the draft quote. Review the passages behind a possible conflict.",
      "Shortlist up to three deals and test what happens to crew availability and cash if you offer a later start or ask for a larger deposit.",
    ],
  },
  {
    id: "prospecting",
    title: "Prospect Finding",
    capabilities: [
      "Search a territory with Overture Maps, filter for relevant businesses, and save the search.",
      "Save the source and date behind each finding. Compare a prospect with customers whose completed jobs earned more than their recorded costs, then check the fit with the buyer.",
      "Record who a contact is and check their email separately with Hunter.",
      "Track company news and send reviewed research to the CRM or a marketing campaign. Research can cover a website, social media, or a specific business workflow.",
    ],
  },
  {
    id: "marketing",
    title: "Marketing & growth",
    capabilities: [
      "Save the results of homepage audits for search engines and AI answer engines. The marketing team enters keyword, AI visibility, and backlink findings by hand.",
      "Plan a campaign experiment around an objection in a buyer’s reply. Follow the link back to the reply to check the wording.",
      "Clear individual excerpts for public use, then draft a customer case study from those passages. Editors can check the citations and fill gaps before publication.",
      "Once campaign costs are reviewed, tie them to the jobs the campaign helped bring in. Reports show the contribution from those invoices separately from audit scores and projections.",
    ],
  },
  {
    id: "financial",
    title: "Financial visibility",
    capabilities: [
      "See how much cash is on hand, what customers owe, which bills need paying, and what’s overdue.",
      "Test how a late payment would affect projected cash and when a shortfall might occur.",
      "Trace a job’s contribution to its invoices, credits and recorded costs. Follow the receipts, deposits and refunds to see how much cash changed hands.",
      "Use the billing recovery desk to review completed work awaiting an invoice, overdue balances and unused deposits. Reopen a review to see what was billed, collected or applied since it began.",
    ],
  },
  {
    id: "projects",
    title: "Project management",
    capabilities: [
      "Set milestones and give each task an owner. The team can also assign RFIs, submittals, punch list items, and change requests.",
      "Check dependencies and recurring tasks on the timeline. A workload preview shows available capacity before a crew is reserved.",
      "Check which deadlines depend on a delayed task. Open the linked jobs and purchases before proposing a new task or RFI.",
      "At closeout, record a baseline and the actual result in the same units. Share a lesson with the estimators or sellers who will quote similar work.",
    ],
  },
  {
    id: "operations",
    title: "Connected Operations & CMMS",
    capabilities: [
      "Measure a scaled drawing. When pricing the job, check suggested changes to labor or material waste against similar completed jobs.",
      "Use Supplier Finder to compare quotes for an outstanding purchase line. Check the cost and expected arrival against the job’s dates before drafting a purchase.",
      "When a supplier or subcontractor changes a date, compare the cost of expediting with moving the visits. Review replacement crews and arrival windows together before saving the schedule.",
      "Record a narrated walkthrough for office review, or call the project manager from the job. The manager can point at equipment on camera and save a marked still with the agreed next step.",
      "Look up an asset’s service history and the parts it needs. Customers can compare replacement quotes against their annual equipment budget and approve the first phase through the portal.",
    ],
  },
  {
    id: "automation",
    title: "Automation & agent operations",
    capabilities: [
      "Test a proposed recipe condition against up to 50 past inputs. See what actually ran and what the current and proposed rules would do in each case.",
      "A scheduled task can wait, resume, and retry a failed step up to a set limit. You can check when the background worker last ran.",
      "See what an agent proposes to do and why. The approval queue keeps a record of the decision.",
    ],
  },
] as const;

export const stackGroups = [
  {
    title: "Application & interface",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "shadcn / Base UI", "WebRTC"],
    purpose: "Next.js renders the workspace. On a job, WebRTC carries the technician’s camera feed and the project manager’s pointer between their devices.",
  },
  {
    title: "Data & access",
    technologies: ["Supabase", "PostgreSQL", "Supabase Auth & Storage", "Row-level security", "SAML / SCIM"],
    purpose: "Each organization controls who can open its records and private documents. To use SAML or SCIM, the customer needs to set up its identity provider.",
  },
  {
    title: "Business logic & interaction",
    technologies: ["Next.js route handlers", "Zod", "React Hook Form", "Zustand", "TanStack Table", "Recharts"],
    purpose: "The server validates a submitted change and checks whether the record has been edited since the form was opened. Sales reports load individual deals a page at a time.",
  },
  {
    title: "AI & research",
    technologies: ["Vercel AI SDK", "AI Gateway", "OpenAI Responses API", "Google Vertex AI", "Overture Maps", "Hunter"],
    purpose: "With a configured video model, a reviewer can trace an observation to the moment it appeared in a walkthrough. A separate reader can extract equipment labels on the reviewer’s device.",
  },
  {
    title: "Scheduled jobs & integrations",
    technologies: ["Vercel", "PostgreSQL pg_cron", "Vercel Cron", "n8n", "Trigger.dev / Inngest adapters", "MCP SDK"],
    purpose: "PostgreSQL’s pg_cron runs scheduled recipes. External runners require configuration, and MCP tools call the existing application services.",
  },
  {
    title: "Documents & tests",
    technologies: ["PDF.js", "pdf-lib", "ExcelJS", "Vitest", "PGlite / PostgreSQL", "Playwright browser checks"],
    purpose: "PDF.js reads drawings, pdf-lib creates estimate and invoice PDFs, and ExcelJS reads spreadsheet imports.",
  },
] as const;

export const integrationNote = "Each customer authorizes the services they use. Testing a payment through to accounting requires a Stripe test account and a designated QuickBooks or Xero test company.";
