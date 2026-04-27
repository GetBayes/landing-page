"use client";

export default function HeroAnimation() {
  const dataRows = [
    "id, age, score, group",
    "1, 24, 87.3, control",
    "2, 31, 92.1, treatment",
    "3, 28, 78.5, control",
    "4, 35, 95.0, treatment",
  ];

  const bars = [
    { height: "40%" },
    { height: "65%" },
    { height: "85%" },
    { height: "55%" },
    { height: "100%" },
  ];

  return (
    <div className="flex-shrink-0 w-full md:w-[420px]" role="img" aria-label="Animated preview showing data flowing through statistical analysis to produce a completed research report">
      <div className="flex items-center gap-4 md:gap-6">
        {/* Data side */}
        <div className="hidden sm:flex flex-col gap-1.5 flex-shrink-0">
          {dataRows.map((row, i) => (
            <div
              key={i}
              className="font-mono text-[11px] text-foreground-muted whitespace-nowrap"
              style={{
                animation: "fadeFlow 3s ease-in-out infinite",
                animationDelay: `${i * 0.3}s`,
              }}
            >
              {row}
            </div>
          ))}
        </div>

        {/* Flow dots */}
        <div className="hidden sm:flex flex-col items-center gap-1.5 flex-shrink-0">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-foreground"
              style={{
                animation: "dotFlow 2s ease-in-out infinite",
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
        </div>

        {/* Report card */}
        <div
          className="bg-background-warm border border-border rounded-xl p-6 shadow-sm flex-1 min-w-0"
          style={{ animation: "reportGlow 3s ease-in-out infinite" }}
        >
          <p className="text-xs font-sans uppercase tracking-[0.15em] text-foreground-muted mb-4">
            Analysis Output
          </p>

          {/* Filling text lines */}
          <div className="space-y-2 mb-4">
            {[80, 60, 90].map((width, i) => (
              <div key={i} className="h-1.5 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-foreground/40 rounded-full"
                  style={{
                    animation: "fillLine 3.5s ease-in-out infinite",
                    animationDelay: `${i * 0.4}s`,
                    maxWidth: `${width}%`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Growing bar chart */}
          <div className="flex items-end gap-2 h-16">
            {bars.map((bar, i) => (
              <div
                key={i}
                className="flex-1 bg-foreground/30 rounded-t"
                style={{
                  animation: "growBar 3.5s ease-out infinite",
                  animationDelay: `${0.8 + i * 0.15}s`,
                  ["--target-height" as string]: bar.height,
                }}
              />
            ))}
          </div>

          <p className="mt-3 text-xs font-sans text-foreground-muted text-center">
            Analysis Complete
          </p>
        </div>
      </div>
    </div>
  );
}
