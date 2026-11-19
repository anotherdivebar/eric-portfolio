/** Portfolio copy checked against the ABS Console source at b048d86 (October 28, 2026). */
export const modules = [
  {
    id: "crm",
    title: "CRM & revenue management",
    description: "A sales rep can open an account and see its conversations, opportunities, and next follow-up. A manager can open the deals behind a forecast.",
    capabilities: [
      "Configurable pipelines, deal stages, owners, activity history, and follow-up queues.",
      "Filtered sales reports with links to individual deals, custom fields, and arithmetic formulas.",
      "Saved sales dashboards, personal scheduled reports, quotas, and manager commitments.",
      "Saved forecasts that managers can compare with later wins.",
      "Researched outreach sequences, approvals, reply triage, and recorded outcomes.",
    ],
    connection: "Research stays with the account when it enters the CRM. Accepted work links to the customer, project, and invoice.",
  },
  {
    id: "prospecting",
    title: "Prospect Finding",
    description: "Find businesses in a territory, check what they do, and save questions for the first conversation. Each finding links back to its source.",
    capabilities: [
      "Geographic business discovery using Overture Maps, saved searches, and qualification filters.",
      "Company and website research with source dates and reasons the business might be a fit.",
      "Contact records that track identity and email verification separately.",
      "Offer-specific research for websites, social media, and connected business modules.",
      "Market intelligence, news watches, and reviewed handoffs into CRM and campaigns.",
    ],
    connection: "A rep can take the research into a call and ask the prospect whether the need behind a fit score is real.",
  },
  {
    id: "marketing",
    title: "Marketing & growth",
    description: "A marketing team can plan content, track search visibility, and run campaigns in one place. Each campaign can link its spending to the jobs it helped generate.",
    capabilities: [
      "Saved homepage SEO and answer-engine readiness audits with findings and history.",
      "Keyword, content, competitor, local SEO, backlink, and experiment workspaces.",
      "Content briefs and provider-backed AI drafts prepared for editorial review.",
      "Campaign goals, sources, UTM links, and checks that tracking is in place.",
      "Reviewed campaign spend and job attribution linked to invoiced contribution.",
    ],
    connection: "Teams can trace campaign spending to a customer and job, then review invoiced contribution. Reports distinguish audit scores and planning scenarios from measured results.",
  },
  {
    id: "financial",
    title: "Financial visibility",
    description: "Owners can see what they have invoiced, when they expect payment, and which costs have been recorded. Reports keep currencies separate and flag gaps in the source records.",
    capabilities: [
      "Cash, receivables, payables, overdue balances, and operating-health views.",
      "Cash projections that show what happens if customers pay late.",
      "Connected customer, project, and campaign profit reports with duplicate-source checks.",
      "Invoices, deposits, credits, refunds, and payment history connected to the original job.",
      "QuickBooks Online, Xero, and Stripe handoff adapters with reconciliation and recovery controls.",
    ],
    connection: "An owner can trace an invoice back to the job, its costs, and its payments. External accounting and payment providers require setup and live testing.",
  },
  {
    id: "projects",
    title: "Project management",
    description: "Turn the agreed scope into tasks with owners and dependencies. Project teams can see what is holding up the work and how an approved change affects costs.",
    capabilities: [
      "Tasks, milestones, RFIs, submittals, punch items, and change requests.",
      "Dependencies, timelines, workload views, recurring tasks, and capacity planning previews.",
      "Delivery risk review, progress updates, comments, files, and saved working views.",
      "Time, additional costs, approved changes, and project profitability.",
      "Links to the customer, field job, and original financial records.",
    ],
    connection: "Scope, people, time, and cost stay connected from the sales handoff through delivery and billing.",
  },
  {
    id: "operations",
    title: "Connected Operations & CMMS",
    description: "Dispatchers, crews, and the office share the same job record from estimate to invoice. A maintenance team can also track assets, assign technicians, and check which parts are available.",
    capabilities: [
      "Itemized estimates, PDF drawing measurement, source-cited AI bid review, and customer acceptance.",
      "Dispatch planning, arrival commitments, field forms, photos, signatures, and offline reports.",
      "Inventory, lots, material demand, supplier pricebooks, purchasing, and production traceability.",
      "Asset maintenance, workforce scheduling, time approval, and quality procedures.",
      "Customer portal access for quotes, appointments, requests, service history, and billing.",
      "Connected invoices, service agreements, customer communications, and payment workflows.",
    ],
    connection: "An approved estimate becomes a job the office can schedule. Crews record time and materials for billing, and the customer can follow the job through their portal.",
  },
  {
    id: "automation",
    title: "Automation & agent operations",
    description: "Build a recipe for a recurring task, see why its conditions matched, and review the proposed actions. Run history shows which steps succeeded if the task needs another attempt.",
    capabilities: [
      "Native recipe builder with AND/OR conditions, branches, and explained test results.",
      "Scheduled execution, durable waits, bounded retries, and a database-backed worker.",
      "Searchable run history, individual attempt records, and cancellation with a reason.",
      "Agent runs with checks for required evidence, an approval queue, and an audit trail.",
      "Replay protection, current-permission checks, and visible worker health.",
    ],
    connection: "The run history links the triggering record to each decision and action. Each step uses the workspace’s existing permissions.",
  },
] as const;

export const stackGroups = [
  {
    title: "Application & interface",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "shadcn / Base UI"],
    purpose: "Server-rendered pages and interactive workspaces for desktop and mobile.",
  },
  {
    title: "Data & access",
    technologies: ["Supabase", "PostgreSQL", "Supabase Auth & Storage", "Row-level security", "SAML / SCIM"],
    purpose: "Tenant-scoped data, private documents, workspace capabilities, and enterprise identity support. SAML and SCIM require customer identity-provider configuration.",
  },
  {
    title: "Business logic & interaction",
    technologies: ["Next.js route handlers", "Zod", "React Hook Form", "Zustand", "TanStack Table", "Recharts"],
    purpose: "Validated commands, revision-aware updates, paged reports, forms, and business dashboards.",
  },
  {
    title: "AI & research",
    technologies: ["Vercel AI SDK", "AI Gateway", "OpenAI Responses API", "Google Vertex AI", "Overture Maps", "Hunter"],
    purpose: "Source-grounded workspace answers, reviewed update proposals, bid analysis, public-company research, and contact verification through configured providers.",
  },
  {
    title: "Execution & extensibility",
    technologies: ["Vercel", "PostgreSQL pg_cron", "Vercel Cron", "n8n", "Trigger.dev / Inngest adapters", "MCP SDK"],
    purpose: "Scheduled jobs run in the background. AI tools use the same application services and permissions as the rest of the console. External runners require configuration.",
  },
  {
    title: "Documents & verification",
    technologies: ["PDF.js", "pdf-lib", "ExcelJS", "Vitest", "PGlite / PostgreSQL", "Playwright browser checks"],
    purpose: "Drawing review, estimate and invoice PDFs, spreadsheet imports, and verification of calculations, permissions, persistence, and complete workflows.",
  },
] as const;

export const platformCapabilities = [
  {
    title: "Ask AI across the workspace",
    description: "Ask about a project, open the records behind the answer, or describe a change in plain language. An editor reviews the proposed change and can see where a customer match or supporting document is missing.",
  },
  {
    title: "Business Simulator",
    description: "Test what happens to staffing, stock, and daily cash if a job starts later or the customer pays a larger deposit. Save the 13-week projection and compare it with actual results.",
  },
  {
    title: "Customer and job history",
    description: "A customer ID ties each conversation, estimate, project, field job, and invoice back to the same account.",
  },
  {
    title: "Permissions and audit history",
    description: "Teams can see who approved a change and which records supported it. When a figure is missing, reports flag the gap.",
  },
] as const;

export const integrationNote = "A customer enables each connection for their workspace, authorizes the provider, and tests it before using live records.";

export const productEvidenceNote = "Screenshots use fictional records. Forecasts and simulations show planning estimates.";
