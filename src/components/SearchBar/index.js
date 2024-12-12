import PropTypes from "prop-types";
import React from "react";
import { PropertyDefault } from "./PropertyDefault";

export const SearchBar = ({
  property1,
  propertyDefaultSearchBarPlaceholderLabelClassName,
  propertyDefaultSearchBarMagnifyingglassMagnifyingglassClassName,
  propertyDefaultSearchBarContentClassName,
}) => {
  return (
    <div className="inline-flex flex-col items-start relative">
      <PropertyDefault
        className="!flex-[0_0_auto]"
        searchBarContentClassName={propertyDefaultSearchBarContentClassName}
        searchBarMagnifyingglassMagnifyingglassClassName={
          propertyDefaultSearchBarMagnifyingglassMagnifyingglassClassName
        }
        searchBarPlaceholderLabelClassName={
          propertyDefaultSearchBarPlaceholderLabelClassName
        }
        searchBarStateDefaultTopbarClassName="!flex-[0_0_auto] !w-[300px]"
      />
    </div>
  );
};

SearchBar.propTypes = {
  property1: PropTypes.oneOf(["search-bar"]),
};