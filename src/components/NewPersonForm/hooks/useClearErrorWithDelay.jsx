import { useState, useEffect } from "react";

export default function useEmptyInputError() {
  const [displayEmptyInputError, setDisplayEmptyInputError] = useState(false);

  // remove error message after 3 seconds
  useEffect(() => {
    if (displayEmptyInputError) {
      setTimeout(() => {
        setDisplayEmptyInputError(false);
      }
      , 3000);
    }
  }, [displayEmptyInputError]);

  return [displayEmptyInputError, setDisplayEmptyInputError];
}