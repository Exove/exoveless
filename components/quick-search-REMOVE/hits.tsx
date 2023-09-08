import Link from "next/link";
import { useHits } from "react-instantsearch-hooks-web";

export default function Hits(props) {
  const { hits } = useHits(props);

  return (
    <>
      {hits.map((hit: any, index) => {
        return (
          <div className="py-2" key={index}>
            <Link href={hit.url} className="text-lg">
              {hit.title}
            </Link>
          </div>
        );
      })}
    </>
  );
}
