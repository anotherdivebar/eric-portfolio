/** Portfolio copy checked against the ABS Console source at b048d86 (October 28, 2026). */
export const modules = [
  {
    id: "crm",
    title: "CRM & revenue management",
    kicker: "Turn relationships into a repeatable sales process",
    description: "Keep the customer, conversation, next commitment, and commercial opportunity together. Sales teams can see what needs attention, while leaders can inspect the evidence behind a forecast.",
    capabilities: [
      "Configurable pipelines, deal stages, owners, activity history, and follow-up queues.",
      "Scoped sales reports with exact deal drill-downs, custom fields, and arithmetic formulas.",
      "Saved sales dashboards, personal scheduled reports, quotas, and manager commitments.",
      "Immutable forecast submissions compared with subsequently recorded wins.",
      "Researched outreach sequences, approvals, reply triage, and recorded outcomes.",
    ],
    connection: "Qualified accounts carry their research into the relationship; accepted work stays connected to the customer, delivery, and financial records.",
  },
  {
    id: "prospecting",
    title: "Prospect Finding",
    kicker: "Understand the problem before proposing the solution",
    description: "Find relevant businesses, investigate their operating context, and build a reason to start a useful conversation. Research remains traceable to its sources, with clear questions to validate with the buyer.",
    capabilities: [
      "Geographic business discovery using Overture Maps, saved searches, and qualification filters.",
      "Company research, website observations, fit evidence, and source freshness.",
      "Contact dossiers that distinguish identity evidence from email verification.",
      "Offer-specific research for websites, social media, and connected business modules.",
      "Market intelligence, news watches, and reviewed handoffs into CRM and campaigns.",
    ],
    connection: "Research becomes context for discovery and follow-up. A fit score is a conversation hypothesis; the prospect still confirms the need.",
  },
  {
    id: "marketing",
    title: "Marketing & growth",
    kicker: "Give growth work ownership and measurable intent",
    description: "Bring search visibility, content, campaigns, and experiments into one working plan. Connect the work to its sources, deadlines, and commercial results instead of leaving it in disconnected documents.",
    capabilities: [
      "Saved homepage SEO and answer-engine readiness audits with findings and history.",
      "Keyword, content, competitor, local SEO, backlink, and experiment workspaces.",
      "Content briefs and provider-backed AI drafts prepared for editorial review.",
      "Campaign goals, evidence references, UTM links, and measurement-readiness checks.",
      "Reviewed campaign spend and job attribution linked to invoiced contribution.",
    ],
    connection: "Campaign work can connect to customers, jobs, and recorded economics. Audit scores and planning scenarios are kept distinct from measured results.",
  },
  {
    id: "financial",
    title: "Financial visibility",
    kicker: "See whether growth is becoming healthy cash flow",
    description: "Connect revenue activity to receivables, payment timing, and recorded costs. Owners can inspect margin and cash exposure with source coverage and separate currencies visible throughout.",
    capabilities: [
      "Cash, receivables, payables, overdue balances, and operating-health views.",
      "Cash scenarios with collection-delay assumptions and shortfall visibility.",
      "Connected customer, project, and campaign profit reports with duplicate-source checks.",
      "Invoices, deposits, credits, refunds, and payment history connected to the original job.",
      "QuickBooks Online, Xero, and Stripe handoff adapters with reconciliation and recovery controls.",
    ],
    connection: "Sales commitments become delivery records and invoices; recorded costs and collections make the commercial consequences visible. External accounting and payments require provider setup and acceptance testing.",
  },
  {
    id: "projects",
    title: "Project management",
    kicker: "Deliver on the promise made during the sale",
    description: "Move agreed scope into work with clear ownership, dependencies, and commercial context. Teams can see blockers early and keep delivery changes connected to the customer commitment.",
    capabilities: [
      "Tasks, milestones, RFIs, submittals, punch items, and change requests.",
      "Dependencies, timelines, workload views, recurring tasks, and capacity planning previews.",
      "Delivery risk review, progress updates, comments, files, and saved working views.",
      "Time, additional costs, approved changes, and project profitability.",
      "Explicit customer and delivery-job links, with connected financial source records.",
    ],
    connection: "Scope, people, time, and cost stay connected from the sales handoff through delivery and billing.",
  },
  {
    id: "operations",
    title: "Connected Operations & CMMS",
    kicker: "Make the entire job work together",
    description: "Connect estimating, field delivery, inventory, maintenance, and billing around the same customer and job. Supporting business tools extend that workflow into people, purchasing, production, and quality.",
    capabilities: [
      "Itemized estimates, PDF drawing measurement, source-cited AI bid review, and customer acceptance.",
      "Dispatch planning, arrival commitments, field forms, photos, signatures, and offline reports.",
      "Inventory, lots, material demand, supplier pricebooks, purchasing, and production traceability.",
      "Asset maintenance, workforce scheduling, time approval, and quality procedures.",
      "Customer portal access for quotes, appointments, requests, service history, and billing.",
      "Connected invoices, service agreements, customer communications, and payment workflows.",
    ],
    connection: "Accepted scope becomes scheduled work; completion evidence feeds job costs and billing. Customers and the office can follow the same service relationship.",
  },
  {
    id: "automation",
    title: "Automation & agent operations",
    kicker: "Make repeatable work reliable and reviewable",
    description: "Turn recurring business processes into inspectable workflows. Teams can understand why a condition matched, review proposed actions, and recover from failures without losing the history.",
    capabilities: [
      "Native recipe builder with AND/OR conditions, branches, and explained test results.",
      "Scheduled execution, durable waits, bounded retries, and a database-backed worker.",
      "Searchable run history, individual attempt records, and cancellation with a reason.",
      "Agent runs, evidence-readiness checks, approval queues, and audit trails.",
      "Replay protection, current-permission checks, and visible worker health.",
    ],
    connection: "Workflows act on shared records under the same workspace permissions, preserving the connection between the trigger, decision, and result.",
  },
] as const;

export const stackGroups = [
  {
    title: "Application & interface",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "shadcn / Base UI"],
    purpose: "A responsive application with server-rendered routes and focused interactive workspaces.",
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
    purpose: "Native scheduled work, background integration paths, and scoped AI tools backed by shared services. External runners are configuration-dependent.",
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
    description: "Ask questions against accessible records, follow supporting sources, or describe an update in plain language. Editors review proposed changes before saving; ambiguous records and missing evidence remain explicit.",
  },
  {
    title: "Business Simulator",
    description: "Compare proposed jobs over a 13-week planning window against qualified labor, stock, and daily cash. Test deposit, start-date, and staffing alternatives, then preserve a prediction and compare recorded actuals.",
  },
  {
    title: "One connected customer journey",
    description: "Shared customer identity and explicit record links connect research, conversations, estimates, projects, field work, invoices, and profit reporting.",
  },
  {
    title: "Control built into the workflow",
    description: "Workspace permissions, review gates, source evidence, audit history, and recovery controls make actions inspectable. Missing information stays visible instead of becoming a misleading zero.",
  },
] as const;

export const integrationNote = "The console includes adapters for email, calendars, accounting, payments, research, and automation. Availability depends on workspace configuration, provider authorization, and live acceptance checks; an implemented connection is not a claim that every provider is active. Marketing publishing and live ad-platform management remain outside the current supported workflow.";

export const productEvidenceNote = "The showcase describes implemented product workflows. Sample screens illustrate fictional records; forecasts and simulations are planning outputs, not claims of realized customer revenue or savings.";
