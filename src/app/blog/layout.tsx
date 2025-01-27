import BackBtn from "../ui/backBtn"

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <section>
            <BackBtn />
            {children}
        </section>
    )
}