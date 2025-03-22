import BackBtn from "../ui/backBtn"
import ScrollBtn from '@/app/ui/scrollBtn';


export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <section>
            <BackBtn />
            <ScrollBtn />
            <h1 className="text-white text-2xl">NOT IMPLEMENTED YET</h1>
            {children}
        </section>
    )
}