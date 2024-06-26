import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const SearchInputWithIcon = ({placeholderText}) => {
  return (
    <div className="search-input-wrapper">
      <InputGroup>
        <InputGroup.Text>
          <i class="bi bi-search"></i>
        </InputGroup.Text>
        <FormControl
          placeholder={
            placeholderText ? placeholderText : "Search by Product Name..."
          }
        />
      </InputGroup>
    </div>
  );
};

export default SearchInputWithIcon;
