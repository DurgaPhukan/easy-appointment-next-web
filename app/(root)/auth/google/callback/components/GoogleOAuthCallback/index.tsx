"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const GoogleOAuthCallback: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    if (code) {
      // Send the code to the backend for token exchange
      fetch("http://localhost:4000/auth/google/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            // Store the token in localStorage and redirect to the dashboard
            localStorage.setItem("authToken", data.token);
            window.location.href = "/";
          } else {
            console.error("Failed to login:", data.message);
          }
        })
        .catch((err) => {
          console.error("Error during login:", err);
        });
    } else {
      console.error("Authorization code not found in the URL.");
      router.push("/"); // Redirect back to home or login page
    }
  }, [router]);

  return <div>Processing login... Please wait.</div>;
};

export default GoogleOAuthCallback;
