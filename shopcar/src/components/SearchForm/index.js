import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
        <form className="search">
            <div className = "form-group">
                <label htmlFor="make">Breed Name:</label>
                <input
                  value={props.search}
                  onChange={props.handleInputChange}
                  name="make"
                  list="makes"
                  type="text"
                  className="form-control"
                  placeholder="Type in a car make"
                  id="make"
                />
                <datalist id="makes">
                    {props.makes.map(make => (
                        <option value={make} key={make} />
                    ))}
                </datalist>
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
                </button>
            </div>
        </form>
    );
}

export default SearchForm;