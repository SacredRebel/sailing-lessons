"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Rocket, Zap, Shield } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-48 flex items-center justify-center text-center bg-gradient-to-r from-primary to-blue-600 text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Launch Your Ideas with Dyad
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              The fastest way to build and deploy your web applications. Focus on your product, we handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-gray-100">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Powerful Features for Modern Development
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              Everything you need to build, test, and deploy your applications with ease.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="flex flex-col items-center text-center p-6">
              <CardHeader>
                <Rocket className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl font-semibold">Rapid Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Accelerate your development workflow with intuitive tools and a streamlined process.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center text-center p-6">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl font-semibold">High Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Build blazing-fast applications that deliver an exceptional user experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center text-center p-6">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl font-semibold">Secure & Scalable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ensure your applications are secure and can scale effortlessly as your user base grows.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Join thousands of developers building amazing things with Dyad.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Sign Up Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;