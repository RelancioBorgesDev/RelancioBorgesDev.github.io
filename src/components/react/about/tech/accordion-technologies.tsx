import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Box,
  BriefcaseBusiness,
  Cloud,
  Code,
  Database,
  Download,
  FileCode,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Palette,
  Server,
  Settings,
  Smartphone,
  Terminal,
  Verified,
  Zap,
} from "lucide-react";

export function AccordionTechnologies() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="frontend" className="border-b border-gray-200 w-full">
        <AccordionTrigger className="block text-left hover:no-underline py-4 w-full">
          <div className="text-gray-900 font-medium">Frontend Development</div>
        </AccordionTrigger>
        <AccordionContent className="pb-4 w-full">
          <div className="space-y-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              I specialize in creating modern, responsive user interfaces with a
              focus on performance and user experience. My expertise spans from
              component-based architectures to state management and styling
              solutions.
            </p>
            <div className="relative overflow-hidden w-full">
              <div className="flex animate-scroll-left space-x-3">
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200 whitespace-nowrap">
                  <FileCode className="h-4 w-4 text-orange-600" />
                  <span className="text-sm font-medium text-gray-900">
                    HTML5
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200 whitespace-nowrap">
                  <Palette className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-900">
                    CSS3
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200 whitespace-nowrap">
                  <Code className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm font-medium text-gray-900">
                    JavaScript
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200 whitespace-nowrap">
                  <Code className="h-4 w-4 text-blue-700" />
                  <span className="text-sm font-medium text-gray-900">
                    TypeScript
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200 whitespace-nowrap">
                  <Code className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-900">
                    React
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200 whitespace-nowrap">
                  <Globe className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-900">
                    Next.js
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200 whitespace-nowrap">
                  <Code className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-900">
                    Vue.js
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200 whitespace-nowrap">
                  <Palette className="h-4 w-4 text-cyan-600" />
                  <span className="text-sm font-medium text-gray-900">
                    Tailwind
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200 whitespace-nowrap">
                  <Palette className="h-4 w-4 text-pink-600" />
                  <span className="text-sm font-medium text-gray-900">
                    Sass
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200 whitespace-nowrap">
                  <Palette className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-900">
                    Bootstrap
                  </span>
                </div>
                {/* Duplicate items for seamless loop */}
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200 whitespace-nowrap">
                  <FileCode className="h-4 w-4 text-orange-600" />
                  <span className="text-sm font-medium text-gray-900">
                    HTML5
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200 whitespace-nowrap">
                  <Palette className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-900">
                    CSS3
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200 whitespace-nowrap">
                  <Code className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm font-medium text-gray-900">
                    JavaScript
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200 whitespace-nowrap">
                  <Code className="h-4 w-4 text-blue-700" />
                  <span className="text-sm font-medium text-gray-900">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
