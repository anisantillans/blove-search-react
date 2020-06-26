import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [donors, setDonors] = useState({
    mylist: [],
    trends: [],
  });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setDonors(data));
  }, []);
  return donors;
};

export default useInitialState;
