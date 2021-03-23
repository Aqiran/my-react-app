
const Login = () => {
    return (
        <form>
            <label>
                Username:
            <input type="text" name="name" />
            </label>
            <label>
            <br/>
                Password : 
            <input type="password" name="password" />
            </label>
            <br/>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Login;