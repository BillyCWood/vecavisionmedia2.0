export default function LoadServiceIndex(props: any) {
    const iter = (props.count === undefined) ? Array(5).fill(0) : Array(props.count).fill(0);
    console.log(iter);
    return ( 
        iter.map(() => (
            <span className="loader w-full min-h-48 rounded-xl"></span>
        ))
    )
    
}
