 const customStyle={                                       //INLINE STYLE
        marginBottom:"10px"
 }

const Login = () => {
    return (
        <form>
            <label>
                Username:
            <input type="text" name="name" style={customStyle}/>
            </label>
            <label>
            <br/>
                Password : 
            <input type="password" name="password" />
            <br/>
            </label>
            <br/>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Login;