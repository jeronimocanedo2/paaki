interface PaakiLogoProps {
  className?: string;
  color?: string;
}

export default function PaakiLogo({
  className = "h-7 w-auto",
  color = "#1e8040",
}: PaakiLogoProps) {
  return (
    <svg
      viewBox="0 0 152 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="paaki"
      role="img"
    >
      {/* p */}
      <path
        d="M5 13.5C5 13.5 5 37 5 39L11 39L11 31C12.4 32.1 14.3 32.7 17 32.7C24 32.7 28.8 27.8 28.8 22.5C28.8 17.2 24.2 12.5 17 12.5C14 12.5 11.8 13.6 11 14.3L11 13.5ZM11 19C12.1 17.9 14 16.8 17 16.8C21.3 16.8 23 20 23 22.5C23 25.5 21 29 17 29C14.3 29 12 27.5 11 26Z"
        fill={color}
      />
      {/* a */}
      <path
        d="M51 13.5L51 15.3C49.5 14.1 47.5 13.3 45 13.3C38.5 13.3 34 17.8 34 22.5C34 27.5 38.5 32.5 45 32.5C47.5 32.5 49.5 31.7 51 30.5L51 32L57 32L57 13.5ZM45 17C49 17 51 20 51 22.5C51 25.5 49 28.7 45 28.7C41.6 28.7 39.8 25.8 39.8 22.5C39.8 19.2 41.6 17 45 17Z"
        fill={color}
      />
      {/* a */}
      <path
        d="M80 13.5L80 15.3C78.5 14.1 76.5 13.3 74 13.3C67.5 13.3 63 17.8 63 22.5C63 27.5 67.5 32.5 74 32.5C76.5 32.5 78.5 31.7 80 30.5L80 32L86 32L86 13.5ZM74 17C78 17 80 20 80 22.5C80 25.5 78 28.7 74 28.7C70.6 28.7 68.8 25.8 68.8 22.5C68.8 19.2 70.6 17 74 17Z"
        fill={color}
      />
      {/* k */}
      <path
        d="M91 6L91 32L97 32L97 24.5L101 21L108.5 32L115.5 32L106 18L114.5 6L108 6L97 19L97 6Z"
        fill={color}
      />
      {/* i stem */}
      <path d="M120 13.5L120 32L126 32L126 13.5Z" fill={color} />
      {/* i leaf dot */}
      <path
        d="M123 3.5C123 3.5 118 4.8 118 9C118 9 122.5 9.5 125 6.8C126.5 5.2 123 3.5 123 3.5Z"
        fill={color}
      />
      {/* accent on i */}
      <path
        d="M131 15.5L134.5 11L138 15.5"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
