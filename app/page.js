"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProfile } from "./profiles/ProfileProvider";
import Link from "next/link";

export default function Page() {
  const { createProfile } = useProfile();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    createProfile({ name: name.trim(), email: email.trim(), bio: bio.trim() });
    router.push("/review");
  }

  return (
 	<div
  className="min-h-screen w-full flex flex-col items-center justify-center p-4"
  style={{
    backgroundImage: "url('https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
    <main style={{ maxWidth: 820, margin: "48px auto", padding: 20 }}>
      <div className="text-white font-serif text-2xl justify-center text-center">Welcome To Our Home Page !!</div>
      <div className="text-white text-4xl font-serif p-5">1. Create Profile</div>
      <p style={{ color: "#ccdbf9ff", marginTop: 0 }}>Enter basic information to create your profile.</p>

      <form onSubmit={handleSubmit} style={{ marginTop: 18, display: "grid", gap: 12 }}>
        <input placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: 10, borderRadius: 8, color: "white", border: "1px solid #e6e9ef" }} />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: 10, borderRadius: 8, color: "white", border: "1px solid #e6e9ef" }} />
        <textarea placeholder="Short bio" value={bio} onChange={(e) => setBio(e.target.value)} style={{ padding: 10, borderRadius: 8, color: "white", border: "1px solid #e6e9ef", minHeight: 100 }} />

        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit" style={{ padding: "10px 14px", background: "#4f46e5", color: "white", borderRadius: 8, border: "none" }}>Save & Review</button>
          <Link href="/review"><button type="button" style={{ padding: "10px 14px", borderRadius: 8, color: "white", border: "1px solid #e6e9ef" }}>Skip to Review</button></Link>
        </div>
      </form>
    </main>
    </div>
  );
}