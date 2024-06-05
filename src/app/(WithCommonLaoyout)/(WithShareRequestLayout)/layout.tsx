"use client";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ShareRequestLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn()) {
      return router.push("/login");
    }else{
        
    }
  }, [router]);

  return <div>{children} </div>;
};

export default ShareRequestLayout;
