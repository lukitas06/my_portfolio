"use client";
import { useRouter } from "next/navigation";

export default function Modal({
  title,
  codeLink,
  detailsLink,
}: {
  title: string | undefined;
  codeLink: string | undefined;
  detailsLink: string | undefined;
}) {
  const router = useRouter();

  const closeModal = () => {
    router.push("?modal=false");
  };

  return (
    <div className="modal-container flex items-center justify-center top-0 left-0 fixed w-full h-full bg-black bg-opacity-50 z-50">
      <div className="modal-content flex flex-col w-1/3 h-1/3 bg-white rounded-lg p-5 ">
        <button
          className="text-black self-end hover:font-bold"
          onClick={closeModal}
        >
          Close
        </button>
        <div className="flex flex-col gap-5 items-center mt-4 justify-center ">
          <h1 className="text-2xl text-black mb-5">{title}</h1>
          <div className="flex flex-row gap-5">
            <a
              href={codeLink}
              className="text-2xl text-black border rounded-xl p-3 hover:shadow-lg cursor-pointer"
            >
              View Code
            </a>
            <a
              href={detailsLink}
              className="text-2xl text-black border rounded-xl p-3 hover:shadow-lg cursor-pointer"
            >
              View details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
