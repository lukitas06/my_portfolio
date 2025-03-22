import BackBtn from "../ui/backBtn"
import ScrollBtn from '@/app/ui/scrollBtn';


export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <section>
            <ScrollBtn />
            <BackBtn />
            {children}
        </section>
    )
}