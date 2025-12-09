export default function LoadServiceHeader() {
    return (
        <div className="flex flex-col gap-y-3 w-full mt-10">
            <h1 className="loader w-1/3 h-10 rounded-sm"></h1>
            <p className="loader w-full h-6 rounded-sm"></p>
            <p className="loader w-full h-6 rounded-sm"></p>
            <p className="loader w-4/4 h-5 rounded-sm"></p>
        </div>
    )
}
