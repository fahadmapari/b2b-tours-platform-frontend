import { cookies } from "next/headers";
import React from "react";

const page = async () => {
  const cookie = await cookies();

  const token = cookie.get("token");
  return (
    <div className="w-full px-4 border overflow-x-hidden">
      token -
      eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODViZjdkNTZiNjkzMzI3MzJiMGUzYzEiLCJqdGkiOiI3YTgxYjVhZS03NTEyLTRkYmYtOWE5My04YTg0MDEyNmI3YmMiLCJpYXQiOjE3NTEyODA4MzcsImV4cCI6MTc1Mzg3MjgzN30.2__2Q7gIc6paXSjCNK98n-R2Y0uk5Xd_91OhR2yKt0M
    </div>
  );
};

export default page;
