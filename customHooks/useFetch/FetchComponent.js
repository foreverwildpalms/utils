import useFetch from "./useFetch";

const FetchComponent = () => {
    const BASE_URL = "https://jsonplaceholder.typicode.com/todos/1";
    const { data: todo, loading, error } = useFetch(BASE_URL);
    return (
        <d>
            <h1>To Do</h1>
            {loading && <h3>loading...</h3>}
            {error && <h3>Error: Something went wrong</h3>}
            <div>
                <pre>{JSON.stringify(todo, undefined, 2)}</pre>
            </div>
        </>
    );
}

export default FetchComponent;