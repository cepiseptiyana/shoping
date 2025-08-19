import { useState, useEffect } from "react";

export function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://login-auth0-iota.vercel.app/users", {
      credentials: "include", // penting untuk session
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user");
        return res.json();
      })
      .then((data) => setUser(data.user))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { user, loading, error };
}
