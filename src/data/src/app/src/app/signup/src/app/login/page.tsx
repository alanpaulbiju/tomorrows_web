"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import AuthCard from "@/components/AuthCard";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (!error) {
      router.push("/dashboard");
    }
  };

  return (
    <AuthCard
      title="Welcome Back"
      subtitle="Login to your account."
    >
      <form
        onSubmit={handleLogin}
        className="space-y-5"
      >
        <input
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          type="email"
          placeholder="Email"
          className="w-full rounded-xl border p-4"
        />

        <input
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          type="password"
          placeholder="Password"
          className="w-full rounded-xl border p-4"
        />

        <button className="w-full rounded-xl bg-blue-900 py-4 text-white">
          Login
        </button>

        <p className="text-center text-sm">
          No account?{" "}
          <Link
            href="/signup"
            className="text-blue-900"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
