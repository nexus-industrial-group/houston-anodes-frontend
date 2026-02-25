/** Simplified world map silhouette with connection dots and lines. */
export default function WorldMapSvg() {
  return (
    <svg
      viewBox="0 0 1000 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
      aria-label="World map showing global presence"
    >
      {/* Simplified continent shapes */}
      {/* North America */}
      <path
        d="M150,80 L200,60 L260,70 L280,100 L300,120 L280,160 L260,200 L240,220 L200,240 L180,220 L160,180 L140,140 L130,110 Z"
        fill="currentColor"
        className="text-charcoal"
        opacity="0.8"
      />
      {/* Central America */}
      <path
        d="M200,240 L220,250 L230,270 L220,290 L200,280 L190,260 Z"
        fill="currentColor"
        className="text-charcoal"
        opacity="0.8"
      />
      {/* South America */}
      <path
        d="M230,290 L260,280 L290,310 L300,350 L290,400 L270,430 L250,440 L230,420 L220,380 L210,340 L220,310 Z"
        fill="currentColor"
        className="text-charcoal"
        opacity="0.8"
      />
      {/* Europe */}
      <path
        d="M440,80 L480,60 L520,70 L540,90 L530,120 L510,140 L480,130 L460,110 L440,100 Z"
        fill="currentColor"
        className="text-charcoal"
        opacity="0.8"
      />
      {/* Africa */}
      <path
        d="M460,180 L500,160 L540,180 L550,220 L540,280 L520,340 L500,370 L480,360 L460,320 L450,260 L450,220 Z"
        fill="currentColor"
        className="text-charcoal"
        opacity="0.8"
      />
      {/* Middle East */}
      <path
        d="M560,140 L600,120 L630,140 L620,180 L590,200 L560,180 Z"
        fill="currentColor"
        className="text-charcoal"
        opacity="0.8"
      />
      {/* Asia */}
      <path
        d="M580,60 L650,50 L720,60 L780,80 L820,100 L840,140 L820,180 L780,200 L720,210 L680,190 L640,160 L600,130 L580,100 Z"
        fill="currentColor"
        className="text-charcoal"
        opacity="0.8"
      />
      {/* Southeast Asia */}
      <path
        d="M760,220 L800,210 L830,230 L820,260 L790,270 L760,250 Z"
        fill="currentColor"
        className="text-charcoal"
        opacity="0.8"
      />
      {/* Australia */}
      <path
        d="M800,340 L850,320 L890,340 L900,380 L880,410 L840,420 L810,400 L800,370 Z"
        fill="currentColor"
        className="text-charcoal"
        opacity="0.8"
      />

      {/* Connection lines */}
      <g stroke="#0070f3" strokeWidth="1" opacity="0.4">
        <line x1="200" y1="180" x2="480" y2="100" />
        <line x1="200" y1="180" x2="260" y2="350" />
        <line x1="480" y1="100" x2="600" y2="150" />
        <line x1="600" y1="150" x2="780" y2="130" />
        <line x1="480" y1="100" x2="500" y2="260" />
        <line x1="600" y1="150" x2="850" y2="370" />
        <line x1="200" y1="180" x2="600" y2="150" />
        <line x1="780" y1="130" x2="800" y2="250" />
      </g>

      {/* Location dots */}
      {[
        { cx: 200, cy: 180, label: "Houston, TX" },
        { cx: 260, cy: 350, label: "Rio de Janeiro" },
        { cx: 480, cy: 100, label: "London" },
        { cx: 500, cy: 260, label: "Lagos" },
        { cx: 600, cy: 150, label: "Dubai" },
        { cx: 780, cy: 130, label: "Singapore" },
        { cx: 800, cy: 250, label: "Jakarta" },
        { cx: 850, cy: 370, label: "Perth" },
      ].map(({ cx, cy, label }, i) => (
        <g key={label}>
          {/* Outer glow */}
          <circle
            cx={cx}
            cy={cy}
            r="8"
            fill="#0070f3"
            opacity="0.2"
            className="animate-pulse-dot"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
          {/* Core dot */}
          <circle cx={cx} cy={cy} r="4" fill="#0070f3" />
          <circle cx={cx} cy={cy} r="2" fill="#ffffff" />
        </g>
      ))}
    </svg>
  );
}
