import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Medal } from "lucide-react";
import { FcDiploma1 } from "react-icons/fc";

export function Achievements() {
  return (
    <section>
      <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
        <Medal size={16} /> Conquistas
      </h2>
      <ul className="space-y-2">
        <li className="text-gray-900">🏅 Prêmio Desenvolvedor do Ano - 2024</li>
        <li className="text-gray-900">🥇 Hackathon Nacional - 1º Lugar</li>
      </ul>

      {/* Botão com modal */}
      <Dialog>
        <DialogTrigger asChild className="cursor-pointer">
          <Button variant="default" className="mt-3 gap-2 text-sm">
            <FcDiploma1 size={16} className="text-blue-500" />
            Ver Certificados
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Certificados</DialogTitle>
            <DialogDescription>
              Veja abaixo os certificados conquistados.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <p>📜 Certificado Desenvolvedor do Ano - 2024</p>
            <p>📜 Certificado Hackathon Nacional - 1º Lugar</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
