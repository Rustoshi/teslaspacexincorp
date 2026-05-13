"use client";

import { useEffect } from "react";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Global error boundary caught:", error);
    }, [error]);

    return (
        <html lang="en" className="dark">
            <body
                style={{
                    margin: 0,
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#000",
                    color: "#fff",
                    fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                }}
            >
                <div style={{ textAlign: "center", padding: "2rem", maxWidth: "480px" }}>
                    {/* Icon */}
                    <div
                        style={{
                            width: 64,
                            height: 64,
                            margin: "0 auto 24px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(239, 68, 68, 0.1)",
                            border: "1px solid rgba(239, 68, 68, 0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="rgb(239, 68, 68)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                    </div>

                    <h1
                        style={{
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase" as const,
                            marginBottom: "0.75rem",
                        }}
                    >
                        Something Went Wrong
                    </h1>
                    <p
                        style={{
                            fontSize: "0.8rem",
                            color: "rgba(255,255,255,0.4)",
                            lineHeight: 1.6,
                            marginBottom: "2rem",
                        }}
                    >
                        An unexpected error occurred. Our team has been notified and is working on a fix. Please try again.
                    </p>

                    <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                        <button
                            onClick={reset}
                            style={{
                                padding: "12px 32px",
                                backgroundColor: "rgba(239, 68, 68, 0.15)",
                                border: "1px solid rgba(239, 68, 68, 0.3)",
                                borderRadius: "12px",
                                color: "rgb(239, 68, 68)",
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase" as const,
                                cursor: "pointer",
                            }}
                        >
                            Try Again
                        </button>
                        <a
                            href="/"
                            style={{
                                padding: "12px 32px",
                                backgroundColor: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "12px",
                                color: "rgba(255,255,255,0.6)",
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase" as const,
                                textDecoration: "none",
                                cursor: "pointer",
                            }}
                        >
                            Go Home
                        </a>
                    </div>
                </div>
            </body>
        </html>
    );
}
