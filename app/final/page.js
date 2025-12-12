"use client";

import { useProfile } from "../profiles/ProfileProvider";
import Link from "next/link";

export default function FinalPage() {
  const { profile, clearProfile } = useProfile();

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
          <div className="text-white font-serif text-2xl justify-center text-center">Profile Page !!</div>
    
      <div className="text-white text-4xl font-serif p-5">3. Final Profile</div>
      <p style={{ color: "#ffffffff", marginTop: 0 }}>This is your finalized profile. You can go back and edit or clear it.</p>

      <div style={{ marginTop: 18, padding: 16, border: "1px solid #eef2f7", borderRadius: 10, background: "#fab5d9ff" }}>
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontWeight: 800, fontSize: 18 }}>{profile.name || "—"}</div>
          <div style={{ color: "#6b7280" }}>{profile.email || "—"}</div>
        </div>

        <div style={{ marginTop: 8, color: "#374151" }}>{profile.bio || "No bio provided."}</div>
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
        <Link href="/review"><button style={{ padding: "10px 14px", borderRadius: 8, border: "1px solid #e6e9ef", color: "white" }}>Edit</button></Link>
        <button onClick={clearProfile} style={{ padding: "10px 14px", background: "#ef4444", color: "white", borderRadius: 8, border: "none" }}>Clear Profile</button>
      </div>
    </main>
    </div>
  );
}