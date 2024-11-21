

const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`http://localhost:5500/api/v1/user/${userId}`); 
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }    
    const userData = await response.json();
    return userData; 
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null; 
  }
};

export { fetchUserData };
