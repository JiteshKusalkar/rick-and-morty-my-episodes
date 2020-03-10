import React from 'react';
import AsyncSelect from 'react-select/async';
import { instance, getParams } from '../../api';

function Searchbox({ defaultOptions, onChange }) {
  const loadOptions = (inputValue, callback) => {
    const params = getParams({ name: inputValue });
    instance
      .get('character', { params })
      .then(response => {
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

  return (
    <AsyncSelect
      value=""
      defaultOptions={defaultOptions}
      onChange={onChange}
      isSearchable={true}
      loadOptions={loadOptions}
    />
  );
}

export default Searchbox;
