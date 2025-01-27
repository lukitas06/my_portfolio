import BackBtn from "../ui/backBtn"

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <section>
            <BackBtn />
            <h1 className="text-white text-2xl">NOT IMPLEMENTED YET</h1>
            {children}
        </section>
    )
}