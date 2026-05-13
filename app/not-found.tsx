import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6">
            <div className="text-center max-w-md">
                {/* 404 Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/[0.03] border border-white/[0.08] rounded-full mb-8">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">Error 404</span>
                </div>

                <h1
                    className="text-3xl sm:text-4xl font-bold tracking-[0.1em] uppercase text-white mb-4"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                    Page Not Found
                </h1>
                <p className="text-sm text-white/40 leading-relaxed mb-10">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
                </p>

                <div className="flex items-center justify-center gap-3">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-white/10 border border-white/20 hover:bg-white/15 text-white text-[11px] font-bold tracking-widest uppercase rounded-xl transition-all"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/invest"
                        className="px-6 py-3 bg-red-500/15 border border-red-500/30 hover:bg-red-500/25 text-red-500 text-[11px] font-bold tracking-widest uppercase rounded-xl transition-all"
                    >
                        Browse Investments
                    </Link>
                </div>
            </div>
        </div>
    );
}
