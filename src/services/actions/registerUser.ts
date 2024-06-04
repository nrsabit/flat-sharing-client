"use server";

import { FieldValues } from "react-hook-form";

export const registerUser = async (payload: FieldValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    }
  );

  const userInfo = await res.json();
  return userInfo;
};
