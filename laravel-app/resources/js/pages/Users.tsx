export default function Users(props: any) {
    console.log("PROPS:", props);

    return (
        <div>
            <h1>TEST HALAMAN USERS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias explicabo fugiat est distinctio, molestiae sit autem dolorum aliquam facere laborum delectus corrupti, nemo aperiam tempore praesentium, illo vitae reprehenderit ea.</p>
            username: {props.username} <br />
            email: {props.email} <br />
            role: {props.role} <br />
        </div>
    );
}