"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [teamName, setTeamName] = useState("");
  const [experience, setExperience] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log({ name, email, teamName, experience });
    toast({
      title: "Registration Successful!",
      description:
        "We've received your registration for the 24-Hour Game Development Challenge.",
    });
  };

  return (
    <div
      className={`${jetbrainsMono.className} min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-transparent to-gray-900 animate-gradient-mid"></div>
      <Card className="w-full max-w-2xl bg-gray-800/90 text-gray-100 border-2 border-pink-500 relative z-10">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-pink-500">
            24-Hour Game Development Challenge
          </CardTitle>
          <CardDescription className="text-green-400">
            Join us for an exciting game development marathon in Toronto!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-2 text-pink-400">
              <CalendarDays className="h-5 w-5" />
              <span>July 15-16, 2023</span>
            </div>
            <div className="flex items-center space-x-2 text-pink-400">
              <MapPin className="h-5 w-5" />
              <span>Toronto Tech Hub, 123 Innovation St, Toronto, ON</span>
            </div>
            <div className="flex items-center space-x-2 text-pink-400">
              <Users className="h-5 w-5" />
              <span>Open to individuals and teams of up to 4</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your full name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="team-name">Team Name (Optional)</Label>
              <Input
                id="team-name"
                placeholder="Your team name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Experience Level</Label>
              <Select value={experience} onValueChange={setExperience}>
                <SelectTrigger id="experience">
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white"
            >
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm text-green-400">
          <p>
            By signing up, you agree to our event rules and code of conduct. For
            more information, contact us at info@gamedevchallenge.com
          </p>
        </CardFooter>
      </Card>
      <style jsx global>{`
        @keyframes gradient-mid {
          from,
          to,
          50% {
            background-color: rgb(17 24 39); // gray-900
          }
          25% {
            background-color: rgb(190 24 93); // pink-700
          }
          75% {
            background-color: rgb(34 197 94); // green-500
          }
        }
        .animate-gradient-mid {
          animation: gradient-mid 15s ease infinite;
        }
      `}</style>
      <Toaster />
    </div>
  );
}
