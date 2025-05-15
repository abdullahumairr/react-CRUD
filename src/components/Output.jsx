import { StickyNote } from "lucide-react";
import { Archive } from "lucide-react";
import { Trash2 } from "lucide-react";

const data = [
  {
    title: "English Camp",
    date: "~Selasa, 13 Mei 2025",
    desc: "Tips belajar React untuk pemula.",
  },
  {
    title: "Qur'an Camp",
    date: "~Selasa, 13 Mei 2025",
    desc: "Tips belajar React untuk pemula.",
  },
  {
    title: "Incubator",
    date: "~Selasa, 13 Mei 2025",
    desc: "Tips belajar React untuk pemula.",
  },
];

const Output = () => {
  return (
    <section className="container mx-auto flex flex-col gap-16 mt-16">
    {/* active */}
      <div className="flex flex-col gap-8">
        <div className="flex gap-2 items-center">
          <StickyNote className="rotate-180 rotate-y-180" />
          <h2 className="font-medium text-lg">Active</h2>
        </div>
        <div className="flex gap-6">
          {data.map((item, index) => (
            <div key={index} className="rounded-lg shadow mb-2 w-72">
              <div className="bg-[#0F7ECD] h-3 rounded-t-lg"></div>
              <div className="flex justify-between p-4">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.date}</p>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="bg-[#D1021F]/20 border border-[#D1021F] rounded-lg px-1  flex justify-center items-center">
                    <Trash2 className="text-[#D1021F] w-5" />
                  </div>
                  <div className="bg-[#FF7E2B]/20 border border-[#FF7E2B] rounded-lg px-1  flex justify-center items-center">
                    <Archive className="text-[#FF7E2B] w-5" />
                  </div>
                </div>
              </div>
              <p className="px-4 pb-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

       {/* archive */}
      <div className="flex flex-col gap-8">
        <div className="flex gap-2 items-center">
          <StickyNote className="rotate-180 rotate-y-180" />
          <h2 className="font-medium text-lg">Archive</h2>
        </div>
        <div className="flex gap-6">
          {data.map((item, index) => (
            <div key={index} className="rounded-lg shadow mb-2 w-72">
              <div className="bg-[#D9D9D9] h-3 rounded-t-lg"></div>
              <div className="flex justify-between p-4">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.date}</p>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="bg-[#D1021F]/20 border border-[#D1021F] rounded-lg px-1  flex justify-center items-center">
                    <Trash2 className="text-[#D1021F] w-5" />
                  </div>
                  <div className="bg-[#FF7E2B]/20 border border-[#FF7E2B] rounded-lg px-1  flex justify-center items-center">
                    <Archive className="text-[#FF7E2B] w-5" />
                  </div>
                </div>
              </div>
              <p className="px-4 pb-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Output;
