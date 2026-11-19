/** Portfolio copy checked against the ABS Console source at b048d86 (October 28, 2026). */
export const modules = [
  {
    id: "crm",
    title: "CRM & revenue management",
    capabilities: [
      "Configure deal stages, assign owners, and keep an activity history for each account.",
      "Build sales reports from custom fields and formulas. Open the deals behind a total and save the view to a dashboard.",
      "Set sales quotas and record what managers have committed to. Each rep can submit a forecast and schedule their own reports.",
      "Use the account research to write a series of messages. Review them before sending, then track replies and outcomes.",
    ],
  },
  {
    id: "prospecting",
    title: "Prospect Finding",
    capabilities: [
      "Search a territory with Overture Maps, filter for relevant businesses, and save the search.",
      "Save why the company looks like a fit, where you found that information, and when you checked it. Check the fit score against what the buyer tells you.",
      "Record who a contact is and check their email separately with Hunter.",
      "Track company news and send reviewed research to the CRM or a marketing campaign. Research can cover a website, social media, or a specific business workflow.",
    ],
  },
  {
    id: "marketing",
    title: "Marketing & growth",
    capabilities: [
      "Save the results of homepage audits for search engines and AI answer engines. The marketing team enters keyword, AI visibility, and backlink findings by hand.",
      "Plan keyword and content experiments. Editors can review AI-generated drafts against the brief.",
      "Set campaign goals, attach sources and UTM links, and check that tracking is in place.",
      "Once campaign costs are reviewed, tie them to the jobs the campaign helped bring in. Reports show the contribution from those invoices separately from audit scores and projections.",
    ],
  },
  {
    id: "financial",
    title: "Financial visibility",
    capabilities: [
      "See how much cash is on hand, what customers owe, which bills need paying, and what’s overdue.",
      "Test how a late payment would affect projected cash and when a shortfall might occur.",
      "Compare customer, project, and campaign margins and open the source records behind a figure.",
      "Track deposits, credits, refunds, and payments against invoices. An imported accounting copy can be matched to its original invoice.",
    ],
  },
  {
    id: "projects",
    title: "Project management",
    capabilities: [
      "Set milestones and give each task an owner. The team can also assign RFIs, submittals, punch list items, and change requests.",
      "Check dependencies and recurring tasks on the timeline. A workload preview shows available capacity before a crew is reserved.",
      "Check what might delay the job. Open the team’s comments, files, and progress updates, or save the view for the next project meeting.",
      "Track approved changes, time, and additional costs against the project’s margin.",
    ],
  },
  {
    id: "operations",
    title: "Connected Operations & CMMS",
    capabilities: [
      "Measure distances on a calibrated PDF drawing. AI bid review can extract quantities stated on the drawing and cite where they appear.",
      "Schedule crews and arrival windows. Field reports support photos, signatures, and offline entry.",
      "Check which materials a job needs and what’s in stock by lot. Look up supplier prices, record purchases, and follow materials through production.",
      "Schedule maintenance and check whether the parts are on hand. Supervisors can also approve time and manage quality checks.",
      "Keep the customer’s service agreement, messages, and invoices with the job.",
    ],
  },
  {
    id: "automation",
    title: "Automation & agent operations",
    capabilities: [
      "Build recipes with AND/OR conditions and branches. Test which inputs meet the conditions before enabling the recipe.",
      "A scheduled task can wait, resume, and retry a failed step up to a set limit. You can check when the background worker last ran.",
      "See what an agent proposes to do and why. The approval queue keeps a record of the decision.",
    ],
  },
] as const;

export const stackGroups = [
  {
    title: "Application & interface",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "shadcn / Base UI"],
    purpose: "Next.js renders the page on the server. The Today view works on desktop and on a field crew’s phone.",
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
    purpose: "The bid reviewer links a finding to its source drawing. Prospect research records the web page behind a finding and the date it was checked.",
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


export const integrationNote = "Each customer needs to authorize and test the services they use. The October 2026 review did not verify live accounting or payment connections.";
