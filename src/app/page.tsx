import InternalLayout from "@/layouts/internalLayout";

export default function Dashboard() {
  return (
    <InternalLayout>
      <div className="py-8">
        <p className="lowercase text-zinc-900 font-bold text-2xl">
          bem vindo ao sistema de gestão de ocorrências criminais
        </p>
      </div>
    </InternalLayout>
  );
}
