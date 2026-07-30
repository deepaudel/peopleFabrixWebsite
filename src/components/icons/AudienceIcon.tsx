export type AudienceIconName =
  | "employee"
  | "manager"
  | "hrTeam"
  | "leader"
  | "hrTech";

const paths: Record<AudienceIconName, React.ReactNode> = {
  employee: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </>
  ),
  manager: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
      <path d="M16.5 4.6a3.5 3.5 0 0 1 0 6.8" />
      <path d="M18 13.8c2.1.9 3.5 3 3.5 5.4" />
    </>
  ),
  hrTeam: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2.5" y="13.5" width="4" height="6" rx="2" />
      <rect x="17.5" y="13.5" width="4" height="6" rx="2" />
      <path d="M20 19.5v.5a3 3 0 0 1-3 3h-3" />
    </>
  ),
  leader: (
    <>
      <path d="M3 20h18" />
      <path d="M6.5 20v-4" />
      <path d="M11 20v-8" />
      <path d="M15.5 20v-5.5" />
      <path d="M20 20v-11" />
    </>
  ),
  hrTech: (
    <>
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <circle cx="12" cy="5" r="2.5" />
      <path d="M10.4 7.1 6.6 15.9" />
      <path d="M13.6 7.1 17.4 15.9" />
      <path d="M7.5 18h9" />
    </>
  ),
};

export function AudienceIcon({
  name,
  className,
  style,
}: {
  name: AudienceIconName;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
    >
      {paths[name]}
    </svg>
  );
}
