"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import AuthCard from "@/components/AuthCard";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSignup = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const { error } =
      await supabase.auth.signUp({
        email,
        password,
      });

    if (!error) {
      router.push("/dashboard");
    }
  };

  return (
    <AuthCard
      title="Create Account"
      subtitle="Join the global marketplace."
    >
      <form
        onSubmit={handleSignup}
        className="space-y-5"
      >
        <input
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          placeholder="Full Name"
          className="w-full rounded-xl border p-4"
        />

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
          Create Account
        </button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-900"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
