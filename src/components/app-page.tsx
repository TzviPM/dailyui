"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface Project {
  name: string;
  number: string;
  prompt: string;
  url: string;
}

export interface HomePageProps {
  projects: Project[];
}

export function HomePage({ projects }: HomePageProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-primary">Daily UI Projects</h1>
        </div>
      </header>
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.number} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-2">
                    Challenge #{project.number}
                  </p>
                  <p className="text-sm">{project.prompt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={project.url}>View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
