'use client';
import { useState } from "react";

export default function LandingPage() {
    const [showQuiz, setShowQuiz] = useState(false);
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState([]);

    const questions = [
        {
            question: "What is your main focus right now?",
            options: ["Mindfulness & Meditation", "Yoga & Flexibility", "Personal Growth & Psychology"],
        },
        {
            question: "How do you usually start your day?",
            options: ["Morning meditation or breathing exercises", "Gentle yoga or stretching", "Planning & reflection for productivity"],
        },
        {
            question: "Which area do you want to improve the most?",
            options: ["Calmness & Stress Relief", "Physical Balance & Energy", "Mental Clarity & Focus"],
        },
        {
            question: "How much time can you dedicate daily?",
            options: ["10–20 minutes", "30–45 minutes", "1 hour or more"],
        },
        {
            question: "What motivates you the most?",
            options: ["Inner peace and well-being", "Strength and vitality", "Learning and self-awareness"],
        },
    ];

    const handleStartQuiz = () => setShowQuiz(true);
    const handleClose = () => {
        setShowQuiz(false);
        setStep(0);
        setAnswers([]);
    };

    const handleAnswer = (option: string) => {
        // @ts-ignore
        setAnswers([...answers, option]);
        setStep(step + 1);
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif" }}>
            {/* Hero section */}
            <section
                style={{
                    padding: "6rem 2rem",
                    backgroundColor: "#fd7e14",
                    color: "#fff",
                    textAlign: "center",
                }}
            >
                <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉 Get 10% off your first course!</h1>
                <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
                    Take our quick quiz and find your perfect course!
                </p>
                <button
                    onClick={handleStartQuiz}
                    style={{
                        padding: "1rem 2rem",
                        backgroundColor: "#0d6efd",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "1.25rem",
                    }}
                >
                    Start Quiz
                </button>
            </section>

            {/* Features / Преимущества */}
            <section style={{ padding: "4rem 2rem", backgroundColor: "#f8f9fa" }}>
                <h2 style={{ textAlign: "center", marginBottom: "3rem", color: "#fd7e14" }}>
                    Why choose our courses?
                </h2>
                <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <div style={{ flex: "1 1 200px", textAlign: "center", padding: "1rem", backgroundColor: "#fff", borderRadius: "10px" }}>
                        <h3>Expert Instructors</h3>
                        <p>Learn from top professionals with real-world experience.</p>
                    </div>
                    <div style={{ flex: "1 1 200px", textAlign: "center", padding: "1rem", backgroundColor: "#fff", borderRadius: "10px" }}>
                        <h3>Flexible Schedule</h3>
                        <p>Train at your own pace, anytime, anywhere.</p>
                    </div>
                    <div style={{ flex: "1 1 200px", textAlign: "center", padding: "1rem", backgroundColor: "#fff", borderRadius: "10px" }}>
                        <h3>Personalized Plan</h3>
                        <p>Courses tailored to your goals and preferences.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
                <h2 style={{ marginBottom: "3rem", color: "#fd7e14" }}>What our students say</h2>
                <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <div style={{ flex: "1 1 250px", backgroundColor: "#f5f5f5", padding: "1.5rem", borderRadius: "10px" }}>
                        <p>"This course changed my life! Highly recommended."</p>
                        <strong>- Jane D.</strong>
                    </div>
                    <div style={{ flex: "1 1 250px", backgroundColor: "#f5f5f5", padding: "1.5rem", borderRadius: "10px" }}>
                        <p>"Great instructors and super easy to follow."</p>
                        <strong>- Mark S.</strong>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "4rem 2rem", backgroundColor: "#fd7e14", color: "#fff", textAlign: "center" }}>
                <h2 style={{ marginBottom: "2rem" }}>Ready to start?</h2>
                <button
                    onClick={handleStartQuiz}
                    style={{
                        padding: "1rem 2rem",
                        backgroundColor: "#0d6efd",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "1.25rem",
                    }}
                >
                    Start Quiz
                </button>
            </section>

            {/* Footer */}
            <footer style={{ padding: "2rem", backgroundColor: "#1e1e1e", color: "#fff", textAlign: "center" }}>
                <p>© 2026 NewMindStart. All rights reserved.</p>
            </footer>

            {/* Модальное окно квиза */}
            {showQuiz && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            padding: "2rem",
                            width: "90%",
                            maxWidth: "500px",
                            textAlign: "center",
                            position: "relative",
                        }}
                    >
                        {/* Кнопка закрытия */}
                        <button
                            onClick={handleClose}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                border: "none",
                                background: "none",
                                fontSize: "1.5rem",
                                cursor: "pointer",
                            }}
                        >
                            &times;
                        </button>

                        {showQuiz && (
                            <div
                                style={{
                                    position: "fixed",
                                    top: 0,
                                    left: 0,
                                    width: "100vw",
                                    height: "100vh",
                                    backgroundColor: "rgba(0,0,0,0.5)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    zIndex: 1000,
                                    padding: "1rem",
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: "#fff",
                                        borderRadius: "16px",
                                        padding: "2rem",
                                        width: "100%",
                                        maxWidth: "500px",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                                        textAlign: "center",
                                        position: "relative",
                                        fontFamily: "'Inter', sans-serif",
                                    }}
                                >
                                    {/* Кнопка закрытия */}
                                    <button
                                        onClick={handleClose}
                                        style={{
                                            position: "absolute",
                                            top: "15px",
                                            right: "15px",
                                            border: "none",
                                            background: "none",
                                            fontSize: "1.5rem",
                                            cursor: "pointer",
                                            color: "#999",
                                        }}
                                    >
                                        &times;
                                    </button>

                                    {/* Прогресс-бар */}
                                    <div
                                        style={{
                                            height: "6px",
                                            width: "100%",
                                            backgroundColor: "#eee",
                                            borderRadius: "3px",
                                            marginBottom: "1.5rem",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: `${(step / questions.length) * 100}%`,
                                                height: "100%",
                                                backgroundColor: "#fd7e14",
                                                transition: "width 0.3s ease",
                                            }}
                                        ></div>
                                    </div>

                                    {step < questions.length ? (
                                        <>
                                            <h2 style={{ color: "#333", marginBottom: "1rem", fontWeight: 600, fontSize: "1.5rem" }}>
                                                {questions[step].question}
                                            </h2>
                                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                                {questions[step].options.map((opt) => (
                                                    <button
                                                        key={opt}
                                                        onClick={() => handleAnswer(opt)}
                                                        style={{
                                                            padding: "1rem",
                                                            backgroundColor: "#0d6efd",
                                                            color: "#fff",
                                                            border: "none",
                                                            borderRadius: "12px",
                                                            cursor: "pointer",
                                                            fontWeight: 500,
                                                            fontSize: "1rem",
                                                            transition: "background-color 0.3s",
                                                        }}
                                                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#074bb5")}
                                                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0d6efd")}
                                                    >
                                                        {opt}
                                                    </button>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <h2 style={{ color: "#fd7e14", marginBottom: "1rem", fontWeight: 600 }}>Congratulations! 🎉</h2>
                                            <p style={{ marginBottom: "1.5rem", color: "#555" }}>
                                                Based on your answers, we recommend this course for you:
                                            </p>

                                            <div
                                                style={{
                                                    padding: "1.5rem",
                                                    border: "2px solid #0d6efd",
                                                    borderRadius: "12px",
                                                    backgroundColor: "#f9f9f9",
                                                }}
                                            >
                                                <h3 style={{ color: "#0d6efd", marginBottom: "0.5rem" }}>Yoga & Mindfulness</h3>
                                                <p style={{ color: "#555", marginBottom: "1rem" }}>
                                                    Learn to meditate, practice yoga, and improve your focus and calmness.
                                                </p>
                                                <a href={'/register'}>
                                                <button
                                                    style={{
                                                        padding: "1rem 2rem",
                                                        backgroundColor: "#fd7e14",
                                                        color: "#fff",
                                                        border: "none",
                                                        borderRadius: "12px",
                                                        cursor: "pointer",
                                                        fontWeight: 600,
                                                        fontSize: "1rem",
                                                        transition: "background-color 0.3s",
                                                    }}
                                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e0650e")}
                                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fd7e14")}

                                                >
                                                    Claim Your Discounted Course
                                                </button>
                                                </a>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            )}
        </div>
    );
}
