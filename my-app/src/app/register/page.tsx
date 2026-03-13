'use client';

export default function Register() {
    return (
        <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "'Inter', sans-serif" }}>

            {/* Блок информации о курсе */}
            <div style={{ marginBottom: "2rem", padding: "1.5rem", borderRadius: "12px", backgroundColor: "#fef6f0" }}>
                <h2 style={{ marginBottom: "1rem", color: "#fd7e14" }}>Yoga & Mindfulness</h2>
                <p style={{ marginBottom: "1rem" }}>
                    Transform your mind and body with our comprehensive online course. Perfect for beginners and experienced practitioners alike.
                </p>
                <ul style={{ marginLeft: "1.2rem", listStyleType: "disc", color: "#333" }}>
                    <li>Boost mental clarity and focus</li>
                    <li>Increase flexibility and balance</li>
                    <li>Learn mindfulness techniques to reduce stress</li>
                    <li>Access guided sessions anytime, anywhere</li>
                </ul>
                <p style={{ marginTop: "1rem", fontWeight: 600, color: "#0d6efd" }}>Claim your course today and start your journey!</p>
            </div>

            {/* Форма регистрации и оплаты */}
            <form
                action="/payment" // серверная обработка платежа
                method="POST"
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
                {/* Регистрация */}
                <input type="text" name="name" placeholder="Full Name" required style={inputStyle} />
                <input type="email" name="email" placeholder="Email" required style={inputStyle} />
                <input type="password" name="password" placeholder="Password" required style={inputStyle} />

                {/* Информация об оплате */}
                <input type="text" name="cardNumber" placeholder="Card Number" required style={inputStyle} />
                <input type="text" name="expiry" placeholder="MM/YY" required style={inputStyle} />
                <input type="text" name="cvc" placeholder="CVC" required style={inputStyle} />

                <button type="submit" style={submitStyle}>Register & Pay</button>
            </form>
        </div>
    );
}

// Стили для полей и кнопки
const inputStyle = {
    padding: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
};

const submitStyle = {
    padding: "1rem",
    backgroundColor: "#fd7e14",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
};
