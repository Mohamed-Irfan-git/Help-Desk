import React, { useEffect, useState } from 'react';

function Test() {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/auth/userinfo')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setUserInfo(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading user info...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>User Info:</h2>
      <pre>{JSON.stringify(userInfo, null, 2)}</pre>
    </div>
  );
}

export default Test;
