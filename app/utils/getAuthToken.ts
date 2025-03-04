export const getAuthToken = () => {
  try {
    const token = localStorage.getItem("authToken");
    return token ? token : null;
  } catch (error) {
    console.error("Error retrieving auth token:", error);
    return null;
  }
};
