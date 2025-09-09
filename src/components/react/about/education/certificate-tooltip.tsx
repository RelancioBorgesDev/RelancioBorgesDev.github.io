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
  DialogClose,
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
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";

interface CertificateTooltipProps {
  label?: string;
  images: string[];
  children: React.ReactNode;
  certType?: string;
  pdfUrl?: string;
}

export function CertificateTooltip({
  label,
  images,
  children,
  certType,
  pdfUrl,
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
          className="!w-full !max-w-5xl !h-auto p-6 bg-transparent dark:bg-transparent border-0 rounded-2xl flex flex-col items-center gap-4"
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
              className="w-full max-w-[800px] max-h-[600px] object-contain rounded-lg shadow"
            />
          ) : (
            <Carousel className="w-full max-w-[800px] h-[600px] relative">
              <CarouselContent className="h-full">
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="flex justify-center items-center h-full"
                  >
                    <img
                      src={image}
                      alt={`Certificado ${index + 1}`}
                      className="w-full max-h-[600px] object-contain rounded-xl shadow"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 dark:bg-neutral-800/80 hover:bg-white dark:hover:bg-neutral-700 transition" />
              <CarouselNext className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 dark:bg-neutral-800/80 hover:bg-white dark:hover:bg-neutral-700 transition" />
            </Carousel>
          )}

          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button
                size="sm"
                variant="secondary"
                className="flex items-center gap-2"
              >
                <ExternalLink size={16} />
                Ver PDF completo
              </Button>
            </a>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
