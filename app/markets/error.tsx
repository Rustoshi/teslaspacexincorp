"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function MarketsError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => { console.error("Markets error boundary caught:", error); }, [error]);

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6">
            <div className="text-center max-w-md">
                <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
                </div>
                <h2 className="text-lg font-bold tracking-[0.15em] uppercase text-white mb-3" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Unable to Load Page</h2>
                <p className="text-sm text-white/40 leading-relaxed mb-8">An unexpected error occurred. Please try again.</p>
                <div className="flex items-center justify-center gap-3">
                    <button onClick={reset} className="px-6 py-3 bg-red-500/15 border border-red-500/30 hover:bg-red-500/25 text-red-500 text-[11px] font-bold tracking-widest uppercase rounded-xl transition-all">Retry</button>
                    <Link href="/invest" className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white/60 hover:text-white text-[11px] font-bold tracking-widest uppercase rounded-xl transition-all">Back to Home</Link>
                </div>
            </div>
        </div>
    );
}
