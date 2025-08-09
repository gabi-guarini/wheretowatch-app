import Image from "next/image";

interface Props {
    title: string;
}

export default function ShowCard({ title }: Props) {
    return (
        <div className="flex gap-2 p-4 rounded-2xl bg-neutral-900 ">
            <div className="relative w-40 h-30 sm:w-30 sm:h-35">
                <Image
                    className="object-cover rounded-lg shadow"
                    src="/example_cover.png"
                    alt=""
                    fill
                />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl text-gray-200 font-semibold">Show Card Component</h1>
                <p className="text-sm text-gray-400">This is a placeholder for the Show Card component.</p>
            </div>
        </div>
    );
}