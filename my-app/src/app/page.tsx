'use client';

import Image from "next/image";

export default function FacebookAd() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "#e9ebee", // фон Facebook
                fontFamily: "Arial, sans-serif",
            }}
        >
            {/* Card */}
            <div
                style={{
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    width: "350px",
                    overflow: "hidden",
                    textAlign: "left",
                }}
            >
                {/* Top bar: Page / Profile */}
                <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
                    <div
                        style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            backgroundColor: "#1877f2",
                            marginRight: "10px",
                        }}
                    ></div>
                    <div>
                        <strong>NewMindStart</strong>
                        <div style={{ fontSize: "12px", color: "#606770" }}>Sponsored</div>
                    </div>
                </div>

                {/* Image Banner */}
                <div style={{ width: "100%", height: "300px", position: "relative" }}>
                    <Image
                        src="/1.JPG"
                        alt="Course Banner"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>

                {/* Text content */}
                <div style={{ padding: "10px" }}>
                    <h2 style={{ margin: "5px 0", color: "#fd7e14" }}>Transform Your Mind & Body Today ✨</h2>
                    <p style={{ fontSize: "14px", color: "#1c1e21" }}>
                        Take our short quiz and receive a <strong>personalized plan</strong> of yoga, mindfulness, and mental clarity practices tailored to your goals.
                    </p>
                    <p style={{ fontSize: "14px", color: "#1c1e21", marginTop: "8px" }}>
                        Discover which practices suit you best and start your journey to a calmer, stronger, and more focused self.
                    </p>
                </div>

                {/* CTA Button */}
                <div style={{ padding: "10px" }}>
                    <a href="/quiz">
                        <button
                            style={{
                                width: "100%",
                                padding: "12px",
                                backgroundColor: "#1877f2",
                                color: "#fff",
                                fontWeight: "bold",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontSize: "16px",
                                transition: "background-color 0.3s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0f5fc1")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1877f2")}
                        >
                            Discover Your Personalized Path
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
