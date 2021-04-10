
export default function Post(props) {


    return (
        <div className="row">
            <div className="bg-white rounded p-3">
                <p className="my-0 mx-3"><strong>{props.data.date} &nbsp;➡</strong>&nbsp; &nbsp; {props.data.body}</p>
            </div>
        </div>
    );
}
// <p className="my-0 mx-3"><strong>2021-05-15 14:12 &nbsp;➡</strong>&nbsp; &nbsp; In tempor aliquet ex in vehicula. Etiam luctus bibendum tempus. Fusce vitae aliquam leo. Mauris eget eros imperdiet, suscipit dui ut, porta nulla. Integer ac scelerisque ante. </p>