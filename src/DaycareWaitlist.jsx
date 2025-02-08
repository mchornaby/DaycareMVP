import { useState } from "react";

export default function DaycareWaitlist() {
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [babyDueDate, setBabyDueDate] = useState("");
  const [premiumFeatures, setPremiumFeatures] = useState(false);
  const [pricingOption, setPricingOption] = useState("monthly");
  const [flexibleDates, setFlexibleDates] = useState(false);

  const citiesInOntario = [
    "Ajax",
    "Barrie",
    "Belleville",
    "Brampton",
    "Brantford",
    "Brockville",
    "Burlington",
    "Cambridge",
    "Cornwall",
    "Guelph",
    "Hamilton",
    "Kingston",
    "Kitchener",
    "London",
    "Markham",
    "Mississauga",
    "Niagara Falls",
    "North Bay",
    "Oakville",
    "Oshawa",
    "Ottawa",
    "Peterborough",
    "Pickering",
    "Richmond Hill",
    "Sarnia",
    "Sault Ste. Marie",
    "Scarborough",
    "St. Catharines",
    "Sudbury",
    "Thunder Bay",
    "Toronto",
    "Vaughan",
    "Waterloo",
    "Whitby",
    "Windsor",
  ];

  const handleRegister = async () => {
    const formData = {
      parentName,
      email,
      city,
      babyDueDate,
      flexibleDates,
      premiumFeatures,
      pricingOption,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyf3z5pXsU8dO8iw0-uGPVbaEVwBQBDhKBvLOk8EvRcg4CxoLR-JQyWPhu9n7YpOcWf/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        }
      );

      // Check if the response is OK and handle success or error
      const result = await response.json();
      if (result.status === "success") {
        alert("We will email you when we are live for your city.");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
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
        DayCareCX
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
      <h3 style={{ textAlign: "left", color: "#333", fontSize: "12px" }}>
        Take the guesswork out of securing childcare. With KidQueue, we maximize
        your chances of getting your child into the daycare you want.
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
        {citiesInOntario.map((city) => (
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
        <input
          type="checkbox"
          checked={flexibleDates}
          onChange={(e) => setFlexibleDates(e.target.checked)}
        />
        <label style={{ marginLeft: "10px" }}>Flexible on Dates</label>
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

      <div
        style={{
          marginTop: "10px",
          fontSize: "9px",
          color: "#666",
          textAlign: "center",
        }}
      >
        <p>This service does not guarantee placement into a daycare.</p>
        <p>A subscription provides access to all Daycare ranking features.</p>
        <p>The free version allows Daycare rankings based on our...</p>
      </div>
    </div>
  );
}
