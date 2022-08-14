const Search = (props) => {

    const handleSearch = (value) => {
        props.search(value)
    }

    return (
        <div className="App" align="center">
            <h1>Google</h1>
            <input type="text" name="Google" id="" className="form-control" onBlur={(e)=>{
                handleSearch(e.target.value)                
            }}/>
        </div>
    );
}


export default Search;