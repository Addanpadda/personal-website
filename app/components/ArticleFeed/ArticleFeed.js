
import Link from "next/link"

export default function Feed(props) {
    var feed = []

    for (var i = 0; i < props.data.length; i++) {
        feed[i] = (
            <div className="mt-3 mx-auto col-12 col-lg-6">
                <Link href={"/articles/" + props.data[i].nr}>
                    <a className="text-decoration-none text-light">
                        <div className="bg-warning rounded-top">
                            <img src={props.data[i].img} className="w-100" />
                        </div>
                        <div className="bg-secondary rounded-bottom p-2">
                            <h2 className="text-center">{props.data[i].title}</h2>
                        </div>
                    </a>
                </Link>
            </div>
        );
    }

    return (
        <div className="feed mt-5">
            {feed}
        </div>
    );
}