import { Fragment } from "react";

export default function Article(props) {
    

    return (
        <div class="container bg-white mx-auto rounded my-5">
            <img src={props.data.img} className="bg-warning mx-auto mt-4 w-100 border border-dark rounded" />
            <h1 className="text-center font-weight-bold mt-2 mb-5">{props.data.title}</h1>
            <p>
                <div dangerouslySetInnerHTML={{__html: props.data.body}}/>
            </p>
        </div>
    );
}