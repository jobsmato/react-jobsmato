import React from "react";
import { PropertyDefault } from "./PropertyDefault";

export const SearchBar = ({
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

