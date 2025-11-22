export default function Button({ text }: { text: string }) {
    return(
        <button 
            className="
                h-10 w-48
                bg-custom-gray hover:bg-vvm-pink 
                hover:cursor-pointer hover:pr-5
                rounded-full
                content-center text-center
                ease-in-out duration-300
            "
            aria-hidden={false}
            aria-label="button"
        >
            <span className="
                font-medium
                text-sm
                md:text-base
                lg:text-lg
                inline-block
                relative
                after:content-['\00BB']
                after:text-vvm-lightblue
                after:absolute
                after:-right-5
                after:opacity-0
                after:group-hover:opacity-100
                after:ease-in-out
                after:duration-300
            ">
                { text }
            </span>
        </button>
    );
}
