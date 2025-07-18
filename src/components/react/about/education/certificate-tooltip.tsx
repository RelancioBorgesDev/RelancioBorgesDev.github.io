"use client";

import {
  Tooltip as TooltipShadcn,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useState } from "react";
import { X } from "lucide-react";

interface CertificateTooltipProps {
  label: string;
  images: string[];
  children: React.ReactNode;
}

export function CertificateTooltip({
  label,
  images,
  children,
}: CertificateTooltipProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Tooltip */}
      <TooltipShadcn>
        <TooltipTrigger asChild>
          <span
            onClick={() => setOpen(true)}
            className="cursor-pointer inline-flex"
          >
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </TooltipShadcn>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{/* Controlado pelo estado */}</DialogTrigger>
        <DialogContent className="!w-full !max-w-none !h-full !max-h-none p-0 bg-transparent border-0 shadow-none flex items-center justify-center">
          {images.length === 1 ? (
            <img
              src={images[0]}
              alt="Certificado"
              className="w-[800px] h-[800px] object-contain rounded-lg"
            />
          ) : (
            <Carousel className="w-full h-full">
              <CarouselContent className="h-full">
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="flex justify-center items-center h-full"
                  >
                    <img
                      src={image}
                      alt={`Certificado ${index + 1}`}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
