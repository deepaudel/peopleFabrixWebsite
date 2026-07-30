import type { AudienceIconName } from "@/components/icons/AudienceIcon";

export type Audience = {
  id: string;
  title: string;
  summary: string;
  detail?: string;
  examples: string[];
  icon: AudienceIconName;
};

export const audiences: Audience[] = [
  {
    id: "for-employees",
    title: "For Employees",
    summary:
      "Find trusted HR information quickly with personalized guidance, making policies, procedures, and internal resources easy to locate and understand—without searching across multiple systems and documents.",
    detail: "Things employees ask on a normal Tuesday:",
    examples: [
      "How many PTO or vacation hours do I have?",
      "What company policies apply to this situation (remote work, travel, expenses, etc.)?",
      "I need an employment verification letter for my apartment application.",
      "Is the day after Thanksgiving a paid holiday?",
      "I need to update my home address.",
    ],
    icon: "employee",
  },
  {
    id: "for-managers",
    title: "For Managers",
    summary:
      "Receive timely, personalized support for people-management challenges, employee situations, and HR processes, with seamless access to HR guidance, organizational information, and relevant resources.",
    detail: "What managers stop chasing HR for:",
    examples: [
      "Who on my team is on leave or PTO this month?",
      "Which employees have overdue training or compliance requirements?",
      "When are performance reviews due, and what's the status?",
      "What open positions do I have, and what's their hiring status?",
    ],
    icon: "manager",
  },
  {
    id: "for-hr-teams",
    title: "For HR Teams",
    summary:
      "Streamline HR operations by intelligently receiving, categorizing, routing, and resolving employee requests. Reduce repetitive inquiries and empower HR professionals to focus on strategic, high-value work.",
    examples: [
      "Guide new employees through policies, benefits, required activities, and important resources.",
      "What's the policy for this employee situation?",
      "Which employees are approaching eligibility milestones (benefits, promotions, probation)?",
      "How do I process an employee lifecycle event (hire, transfer, termination, leave)?",
    ],
    icon: "hrTeam",
  },
  {
    id: "for-leaders",
    title: "For Leaders",
    summary:
      "Access connected workforce information and insights to support better organizational decisions.",
    detail: "Workforce questions, asked in plain English instead of filed as a report request:",
    examples: [
      "What's our headcount and tenure by department, location, and business unit?",
      "What's our employee turnover and retention trend?",
      "What workforce metrics need my attention today?",
      "Bring together people data to identify trends, risks, and opportunities.",
    ],
    icon: "leader",
  },
  {
    id: "for-hr-technology-teams",
    title: "For HR Technology Teams",
    summary:
      "Build an AI-enabled experience across existing HR systems without requiring employees to navigate every platform individually.",
    detail: "Questions HR technology teams ask before they'll trust an AI layer:",
    examples: [
      "Who has access to which HR systems?",
      "What recent changes were made to employee records?",
      "How do I configure or troubleshoot this workflow or business process?",
      "Nothing writes to an HR record without an explicit human confirmation step.",
    ],
    icon: "hrTech",
  },
];
