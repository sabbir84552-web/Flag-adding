import { useState } from "react";
// import { CountryType } from "../../types/Country";
import "./Country.css";
import type { CountryType } from "../types/Country";

export interface CountryProps {
  country: CountryType;
  handleVisitedCountries: (country: CountryType) => void;
  handleVisitedFlags: (flag: string) => void;
}

export default function Country({
  country,
  handleVisitedFlags,
  handleVisitedCountries,
}: CountryProps) {
  const currencyList = country.currencies?.currencies
    ? Object.values(country.currencies.currencies)
    : [];
  const firstCurrencyName = currencyList[0]?.name;

  const languageList = country.languages?.languages
    ? Object.values(country.languages.languages).join(", ")
    : "N/A";

  // দুটি আলাদা স্টেট: একটি দেশের জন্য, একটি পতাকার জন্য
  const [visited, setVisited] = useState<boolean>(false);
  const [isFlagAdded, setIsFlagAdded] = useState<boolean>(false);

  const handleVisited = () => {
    handleVisitedCountries(country);
    setVisited((prev) => !prev);
  };

  const handleFlagClick = () => {
    if (country.flags?.flags?.png) {
      handleVisitedFlags(country.flags.flags.png);
    }
    // ফ্লাগ বাটনের ব্যাকগ্রাউন্ড চেঞ্জ করার জন্য স্টেট আপডেট
    setIsFlagAdded((prev) => !prev);
  };

  // কার্ডের ব্যাকগ্রাউন্ড কালার লজিক (ডায়নামিক)
  let cardBg = "white";
  let cardBorder = "gray";

  if (visited && isFlagAdded) {
    cardBg = "linear-gradient(135deg, #dcfce7 0%, #dbeafe 100%)"; // দুটিই ক্লিক করলে সুন্দর একটি মিক্সড কালার
    cardBorder = "purple";
  } else if (visited) {
    cardBg = "#dcfce7"; // শুধু 'Mark as visited' ক্লিক করলে হালকা সবুজ
    cardBorder = "green";
  } else if (isFlagAdded) {
    cardBg = "#dbeafe"; // শুধু 'Add Flag' ক্লিক করলে হালকা নীল
    cardBorder = "blue";
  }

  return (
    <div
      className="country-card"
      style={{
        background: cardBg,
        border: `2px solid ${cardBorder}`, // স্মুথ অ্যানিমেশনের জন্য
      }}
    >
      <h3>{country.name?.common}</h3>
      <img
        src={country.flags?.flags?.png}
        alt={country.flags?.flags?.alt}
        width="100%"
        style={{ borderRadius: "5px" }}
      />

      <p>
        <b>Currency:</b> {firstCurrencyName}
      </p>
      <p>
        <b>Languages:</b> {languageList}
      </p>
      <p>
        <b>Capital:</b> {country.capital?.capital?.[0]}
      </p>

      {/* বাটনগুলোকে পাশাপাশি সুন্দরভাবে দেখানোর জন্য flex ব্যবহার করা হয়েছে */}
      <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
        <button
          onClick={handleVisited}
          style={{
            flex: 1, // সমান জায়গা নেওয়ার জন্য
            backgroundColor: visited ? "green" : "white",
            color: visited ? "white" : "black",
            border: "2px solid green",
            padding: "8px",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {visited ? "Visited" : "Mark as visited"}
        </button>

        <button
          onClick={handleFlagClick}
          style={{
            flex: 1,
            backgroundColor: isFlagAdded ? "blue" : "white",
            color: isFlagAdded ? "white" : "black",
            border: "2px solid blue",
            padding: "8px",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {isFlagAdded ? "Flag Added" : "Add Flag"}
        </button>
      </div>
    </div>
  );
}
