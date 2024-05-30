import { DynamicList } from "@/components/DynamicList";

const layoutData = [
  { type: "Profesor", name: "Juan Pérez" },
  { type: "Alumno", name: "Ana Gómez" },
  { type: "Representante", name: "María López" },
  // Añade más datos según sea necesario
];

export function Layout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {/* Aquí puedes incluir cualquier contenido adicional del layout */}
      <DynamicList data={layoutData} />
    </div>
  );
}