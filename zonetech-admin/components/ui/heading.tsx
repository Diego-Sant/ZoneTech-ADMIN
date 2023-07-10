"use client"
// Marcado como componente do cliente

interface HeadingProps {
    title: string;
    description: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
    return (
        <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    )
}