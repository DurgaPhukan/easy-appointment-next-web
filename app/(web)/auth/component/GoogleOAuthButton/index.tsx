"use client";
import React from "react";

const GoogleOAuthButton: React.FC = () => {
  const handleGoogleLogin = () => {
    const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const redirectUri = "http://localhost:3001/auth/google/callback";
    const scope = "openid email profile";
    const responseType = "code";

    if (!GOOGLE_CLIENT_ID) {
      console.error(
        "Google Client ID is not defined in the environment variables."
      );
      return;
    }

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

    // Redirect the user to Google's OAuth consent screen
    window.location.href = authUrl;
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300"
    >
      Login with Google
    </button>
  );
};

export default GoogleOAuthButton;
