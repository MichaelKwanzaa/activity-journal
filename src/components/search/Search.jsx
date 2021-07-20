import './search.css'

export default function Search({formHandler, onChange, query}){
    
    return(
        <div className="search">
            <form onChange={formHandler}>
                        <input type="text"
                                className="searchInput" 
                                name="searchBar" 
                                placeholder="Search..."
                                value={query}
                                onChange={onChange} 
                        />  
                    </form>    
        </div>

    )
}