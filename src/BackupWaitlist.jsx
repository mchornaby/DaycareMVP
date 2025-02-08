import { useState } from "react";

export default function DaycareWaitlist() {
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [babyDueDate, setBabyDueDate] = useState("");
  const [premiumFeatures, setPremiumFeatures] = useState(false);
  const [pricingOption, setPricingOption] = useState("monthly");

  const citiesInDurham = [
    "Ajax",
    "Barrie",
    "Brooklin",
    "Bowmanville",
    "Clarington",
    "New Castle",
    "Oshawa",
    "Pickering",
    "Scarborough",
    "Scugog",
    "Toronto",
    "Uxbridge",
    "Whitby",
  ];

  const handleRegister = async () => {
    const formData = {
      parentName,
      email,
      city,
      babyDueDate,
      premiumFeatures,
      pricingOption,
    };

    try {
      const response = await fetch(
        "Yhttps://script.google.com/macros/s/AKfycbxvCyKrDe2C73JdST3eGr7N6YQLHjjMc-3pCAwCsJ7VVQ6M0P7Ks8x4lll7dokZfstq/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        alert("We will email you when we are live for your city.");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit. Check console for details.");
    }
  };
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        backgroundColor: "#f9f9f9",
        paddingBottom: "20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          background: "linear-gradient(10deg, red, orange, blue, violet)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        KidQueue
      </h2>
      <h3
        style={{
          textAlign: "center",
          color: "#333",
          fontStyle: "italic",
          fontSize: "14px",
        }}
      >
        get on the list the smart way
      </h3>
      <h3
        style={{
          textAlign: "left",
          color: "#333",
          fontSize: "12px",
        }}
      >
        Take the guess work out of securing childcare. With KidQueue we maximize
        your chances of getting your child into the Daycare you want.
      </h3>
      <input
        placeholder="Parent Name"
        value={parentName}
        onChange={(e) => setParentName(e.target.value)}
        style={{
          display: "block",
          marginBottom: "10px",
          width: "90%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <input
        placeholder="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          display: "block",
          marginBottom: "10px",
          width: "90%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          display: "block",
          marginBottom: "10px",
          width: "95%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      >
        <option value="">Select Your City</option>
        {citiesInDurham.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <label style={{ fontWeight: "bold" }}>Daycare Enrollment Date</label>
      <input
        type="date"
        value={babyDueDate}
        onChange={(e) => setBabyDueDate(e.target.value)}
        style={{
          display: "block",
          marginBottom: "10px",
          width: "90%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <input type="checkbox" />
        <label style={{ marginLeft: "10px" }}>Flexible Dates</label>
      </div>

      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <input
          type="checkbox"
          checked={premiumFeatures}
          onChange={(e) => setPremiumFeatures(e.target.checked)}
        />
        <label style={{ marginLeft: "10px" }}>Enable Premium Features</label>
      </div>
      {premiumFeatures && (
        <select
          value={pricingOption}
          onChange={(e) => setPricingOption(e.target.value)}
          style={{
            display: "block",
            marginBottom: "10px",
            width: "95%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="monthly">$9.99 Monthly</option>
          <option value="annual">$50 Annual</option>
        </select>
      )}
      <button
        onClick={handleRegister}
        style={{
          padding: "10px",
          width: "95%",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        Join Waitlist
      </button>
      <img
        rc="public\kidsplaying.jpg"
        alt="Children playing together"
        style={{
          maxWidth: "95%", // Ensures it doesn't overflow the screen
          height: "auto", // Maintains aspect ratio
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      />
      <div
        style={{
          marginTop: "10px",
          fontSize: "9px",
          color: "#666",
          textAlign: "center",
        }}
      >
        <p>This service does not guarantee placement into a daycare.</p>
        <p>
          A $9.99 monthly subscription provides access to all ranking features.
        </p>
        <p>
          The freemium version allows rankings based on our proprietary
          algorithm.
        </p>
      </div>
    </div>
  );
}
