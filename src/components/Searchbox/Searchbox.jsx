import React from 'react';
import AsyncSelect from 'react-select/async';
import { instance, getParams } from '../../api';

export const loadOptions = (inputValue, callback) => {
  const params = getParams({ name: inputValue });
  instance.get('character', { params }).then(response => {
    const options = response.data.results.map(character => ({
      ...character,
      value: character.id,
      label: character.name
    }));

    if (callback) {
      callback(options);
    }
  });
};

function Searchbox({ defaultOptions, onChange }) {
  return (
    <AsyncSelect
      className="react_select"
      classNamePrefix="react_select"
      value=""
      placeholder="Select character or type a name"
      defaultOptions={defaultOptions}
      onChange={onChange}
      isSearchable={true}
      loadOptions={loadOptions}
    />
  );
}

export default Searchbox;
