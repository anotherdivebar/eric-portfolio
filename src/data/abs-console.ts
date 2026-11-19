/** Portfolio copy checked against the ABS Console source at b048d86 (October 28, 2026). */
export const modules = [
  {
    id: "crm",
    title: "CRM & revenue management",
    capabilities: [
      "Configure deal stages, assign owners, and keep an activity history for each account.",
      "Build sales reports from custom fields and formulas. Open the deals behind a total and save the view to a dashboard.",
      "Set quotas and manager commitments, submit forecasts, and schedule personal reports.",
      "Research an outreach sequence, review it before sending, and track replies and outcomes.",
    ],
  },
  {
    id: "prospecting",
    title: "Prospect Finding",
    capabilities: [
      "Search a territory with Overture Maps, filter for relevant businesses, and save the search.",
      "Record what suggests a company might need your offer, which source supports that judgment, and when the source was last checked. A fit score still needs confirmation from the prospect.",
      "Record who a contact is and check their email separately with Hunter.",
      "Track company news and send reviewed research to the CRM or a marketing campaign. Research can cover a website, social media, or a specific business workflow.",
    ],
  },
  {
    id: "marketing",
    title: "Marketing & growth",
    capabilities: [
      "Save homepage SEO and answer-engine readiness audits. Staff record keyword, AI visibility, and backlink evidence by hand.",
      "Plan keyword and content experiments. Editors can review AI-generated drafts against the brief.",
      "Set campaign goals, attach sources and UTM links, and check that tracking is in place.",
      "Link reviewed campaign spending to a job’s invoiced contribution. Reports distinguish measured results from audit scores and projections.",
    ],
  },
  {
    id: "financial",
    title: "Financial visibility",
    capabilities: [
      "Review cash, receivables, payables, and overdue balances.",
      "Test how a late payment would affect projected cash and when a shortfall might occur.",
      "Compare customer, project, and campaign margins and open the source records behind a figure.",
      "Track deposits, credits, refunds, and payments against invoices. An imported accounting copy can be matched to its original invoice.",
    ],
  },
  {
    id: "projects",
    title: "Project management",
    capabilities: [
      "Assign tasks, milestones, RFIs, submittals, punch items, and change requests.",
      "Check dependencies and recurring tasks on the timeline. A workload preview shows available capacity before a crew is reserved.",
      "Review delivery risks with comments, files, progress updates, and saved views.",
      "Track approved changes, time, and additional costs against the project’s margin.",
    ],
  },
  {
    id: "operations",
    title: "Connected Operations & CMMS",
    capabilities: [
      "Measure distances on a calibrated PDF drawing. AI bid review can extract quantities stated on the drawing and cite where they appear.",
      "Schedule crews and arrival windows. Field reports support photos, signatures, and offline entry.",
      "Track inventory and lots, material demand, supplier pricebooks, purchasing, and production records.",
      "Plan asset maintenance, check parts availability, approve time, and manage quality procedures.",
      "Keep the customer’s service agreement, messages, and invoices with the job.",
    ],
  },
  {
    id: "automation",
    title: "Automation & agent operations",
    capabilities: [
      "Build recipes with AND/OR conditions and branches. Test which inputs meet the conditions before enabling the recipe.",
      "Schedule jobs with durable waits and bounded retries. Monitor the background worker’s health.",
      "Review the evidence for a proposed agent action in the approval queue. An audit trail records the decision.",
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
    purpose: "Workspace data and private documents stay within the organization’s access rules. SAML and SCIM require the customer to configure its identity provider.",
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
    title: "Execution & extensibility",
    technologies: ["Vercel", "PostgreSQL pg_cron", "Vercel Cron", "n8n", "Trigger.dev / Inngest adapters", "MCP SDK"],
    purpose: "PostgreSQL’s pg_cron runs scheduled recipes. External runners require configuration, and MCP tools call the existing application services.",
  },
  {
    title: "Documents & verification",
    technologies: ["PDF.js", "pdf-lib", "ExcelJS", "Vitest", "PGlite / PostgreSQL", "Playwright browser checks"],
    purpose: "PDF.js reads drawings, pdf-lib creates estimate and invoice PDFs, and ExcelJS reads spreadsheet imports.",
  },
] as const;


export const integrationNote = "Each workspace needs provider authorization and a live test. As of the October 2026 review, live accounting and payment connections were unverified.";
