import Image from "next/image";

type BackgroundTextureProps = {
  src: string;
  className?: string;
  opacity?: string;
};

export function BackgroundTexture({
  src,
  className = "",
  opacity = "opacity-20",
}: BackgroundTextureProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className={`object-cover ${opacity}`}
      />
    </div>
  );
}
