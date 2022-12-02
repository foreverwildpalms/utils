import useLocalStorage from "./useStorage";

const StorageComponent = () => {
    const [age, setAge, removeAge] = useLocalStorage("age", 26);

    return (
        <div>
            <div>
                Kyle - {age}
            </div>
            <button onClick={() => setAge(40)}>Set Age</button>
            <button onClick={removeAge}>Remove Age</button>
        </div>
    )
}

export default StorageComponent;