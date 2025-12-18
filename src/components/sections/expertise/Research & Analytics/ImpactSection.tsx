"use client";
import * as React from "react";
import IconTitle from "@/components/ui/IconTitle";
import Stat from "@/components/ui/Stat";
import { Landmark } from "lucide-react";

export default function ImpactSection() {
    return (
        <section id="impact" className="bg-white py-20">
            <div className="mx-auto w-full max-w-6xl px-6">
                <IconTitle
                    title="Impact"
                    Icon={Landmark}
                    subtitle="Research that moves strategy forward."
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <Stat
                        value="25%+"
                        label="Avg. filing scope refined via prior-art insight"
                    />
                    <Stat
                        value="48–72h"
                        label="Rapid screens for urgent go/no-go*"
                    />
                    <Stat
                        value="90+"
                        label="Jurisdictions covered"
                    />
                    <Stat
                        value="ISO 9001 · 27001"
                        label="Quality & InfoSec"
                    />
                </div>

                <p className="font-ptsans mt-6 text-sm text-gray-600">
                    *Timelines depend on complexity and breadth of technologies/jurisdictions.
                </p>
            </div>
        </section>
    );
}
