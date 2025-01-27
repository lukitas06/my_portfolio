

export function OrderedList({ title, text }: { title: string, text: string }) {

    if (text === "") {
        return (
            <li className="flex flex-col items-center justify-around h-12 ">
                <h3 className="flex flex-row  items-center text-black text-xl font-semibold">{title}</h3>
            </li>
        )
    }
    else {
        return (
            <li className=" flex flex-col items-start justify-around h-fit min-h-60">
                <h3 className="flex flex-row  items-center">{title}</h3>
                <p className="text-center text-base">{text}</p>
            </li>

        )
    }
}

export function UnorderedList({ title, text }: { title: string, text: string }) {

    return (
        <div></div>
    )

}