export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#2B1A14] text-[#F6EFE7]">
      <div className="flex flex-col items-center gap-6 text-center">
        
        <p className="text-xs tracking-[0.35em] uppercase text-[#9DB37C]">
          Dubai Chocolate
        </p>

        <h2 className="text-3xl md:text-4xl font-[Playfair_Display]">
          Preparing
          <br />
          Pistachio Bars
        </h2>

        {/* Elegant loading line */}
        <div className="w-44 h-[2px] bg-[#9DB37C]/30 overflow-hidden rounded-full">
          <div className="h-full w-1/3 bg-[#9DB37C] animate-[loader_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
