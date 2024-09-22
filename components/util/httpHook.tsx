"use client";

import { useCallback, useState } from "react";

export default function useHttp() {
  const [errorValidate, setErrorValidate] = useState(false);
  const [errorPesan, setErrorPesan] = useState("");

  const [pesanVerify, setPesanVerify] = useState(null);
  const sendRequest = useCallback(
    async (url: string, method = "GET", body = null, headers = {}) => {
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
        });
        const responseData = await response.json();
        if (!response.ok || response.status === 500) {
          throw new Error(responseData.error?.pesan);
        }
        return responseData;
      } catch (err: any) {
        setPesanVerify(err.message);
        throw err.message;
      }
    },
    []
  );

  return {
    errorValidate,
    sendRequest,
    setErrorValidate,
    errorPesan,
    setErrorPesan,
    pesanVerify,
  };
}
