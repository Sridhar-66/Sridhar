"use client";

type Photo = {
  src: string;
  alt?: string;
};

const PHOTOS: Photo[] = [
  { src: "/photos/1192474e-53fc-40fd-999a-c234060deaea_20250409_102500_0000.jpg" },
  { src: "/photos/20260221_160304.jpg" },
  { src: "/photos/20260221_160329.jpg" },
  { src: "/photos/20260221_160400.jpg" },
  { src: "/photos/20260221_194415.jpg" },
  { src: "/photos/20260221_211038.jpg" },
  { src: "/photos/20260222_204529.jpg" },
  { src: "/photos/20260222_210412.jpg" },
  { src: "/photos/20260301_160107.jpg" },
  { src: "/photos/20260301_160208.jpg" },
];

// seeded random so server/client render match — no hydration errors
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const POSITIONS = [
  { top: "6%", left: "8%" },
  { top: "12%", left: "78%" },
  { top: "58%", left: "4%" },
  { top: "68%", left: "82%" },
  { top: "34%", left: "45%" },
  { top: "80%", left: "50%" },
];

type PolaroidBackgroundProps = {
  photos?: Photo[];
  opacity?: number;
};

export default function PolaroidBackground({
  photos = PHOTOS,
  opacity = 0.9,
}: PolaroidBackgroundProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden -z-10"
      aria-hidden="true"
    >
      {photos.map((photo, i) => {
        const rotate = Math.round(seededRandom(i * 7 + 1) * 30 - 15); // -15 to 15deg
        const scale = 0.85 + seededRandom(i * 13 + 2) * 0.35; // 0.85 - 1.2
        const pos = POSITIONS[i % POSITIONS.length];
        const duration = 6 + seededRandom(i * 17 + 3) * 4; // 6-10s float
        const delay = seededRandom(i * 23 + 4) * 3;

        return (
          <div
            key={photo.src}
            className="absolute animate-polaroid-float"
            style={{
              top: pos.top,
              left: pos.left,
              transform: `rotate(${rotate}deg) scale(${scale})`,
              opacity,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          >
            <div className="bg-[#FFFCF5] border-4 border-[#14121F] rounded-sm p-2 pb-6 shadow-[6px_6px_0_0_rgba(20,18,31,0.25)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt ?? ""}
                className="w-40 h-40 sm:w-48 sm:h-48 object-cover"
                draggable={false}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
