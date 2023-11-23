export default function UserInput({children}){
    return (
        <div id="user-input">
            <label>{children}</label>
            <input type="number"></input>
        </div>
    );
}