"use client";

import {
  Tooltip as TooltipShadcn,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface CertificateTooltipProps {
  label?: string;
  images: string[];
  children: React.ReactNode;
  certType?: string;
}

export function CertificateTooltip({
  label,
  images,
  children,
  certType,
}: CertificateTooltipProps) {
  const [open, setOpen] = useState(false);
  const descriptionId = "certificate-dialog-description";

  return (
    <>
      <TooltipShadcn>
        <TooltipTrigger asChild>
          <span
            onClick={() => setOpen(true)}
            className="cursor-pointer inline-flex"
          >
            {children}
          </span>
        </TooltipTrigger>
        {label && (
          <TooltipContent>
            <p>{certType ? `${label} ${certType}` : label}</p>
          </TooltipContent>
        )}
      </TooltipShadcn>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="!w-full !max-w-none !h-full !max-h-none p-0 bg-transparent border-0 shadow-none flex items-center justify-center"
          aria-describedby={descriptionId}
        >
          <VisuallyHidden>
            <DialogTitle>{label}</DialogTitle>
            <DialogDescription id={descriptionId}>
              Visualização de certificado
            </DialogDescription>
          </VisuallyHidden>

          {images.length === 1 ? (
            <img
              src={images[0]}
              alt="Certificado"
              className="w-[800px] h-[800px] object-contain rounded-lg"
            />
          ) : (
            <Carousel className="w-[800px] h-[800px] relative">
              <CarouselContent className="h-full">
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="flex justify-center items-center h-full"
                  >
                    <img
                      src={image}
                      alt={`Certificado ${index + 1}`}
                      className="w-[800px] h-[800px] object-contain rounded-xl shadow"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 z-10 rounded-full transition" />
              <CarouselNext className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-10 rounded-full  transition" />
            </Carousel>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
