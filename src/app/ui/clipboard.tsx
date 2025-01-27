'use client'
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";


export default function Clipboard({ text }: { text: string }) {
    return (
        <button className="cursor-pointer bg-inherit text-white" onClick={async () => {
            // const copyText = document.getElementById(id);
            // console.log(copyText)
            // console.log(copyText?.firstElementChild)
            await navigator.clipboard.writeText(text);
        }}><ClipboardDocumentIcon className="h-7 w-7 hover:scale-110 text-black"></ClipboardDocumentIcon></button>
    )


}