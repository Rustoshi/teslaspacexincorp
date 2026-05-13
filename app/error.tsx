"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function RootError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Root error boundary caught:", error);
    }, [error]);

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6">
            <div className="text-center max-w-md">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                </div>

                <h1
                    className="text-xl font-bold tracking-[0.15em] uppercase text-white mb-3"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                    Something Went Wrong
                </h1>
                <p className="text-sm text-white/40 leading-relaxed mb-8">
                    An unexpected error occurred. Please try again or return to the homepage.
                </p>

                <div className="flex items-center justify-center gap-3">
                    <button
                        onClick={reset}
                        className="px-6 py-3 bg-red-500/15 border border-red-500/30 hover:bg-red-500/25 text-red-500 text-[11px] font-bold tracking-widest uppercase rounded-xl transition-all"
                    >
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white/60 hover:text-white text-[11px] font-bold tracking-widest uppercase rounded-xl transition-all"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
