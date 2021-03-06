import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_THOUGHT } from '../../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';

const ThoughtForm = () => {
  const [thoughtText, setText] = useState('');
  // const [characterCount, setCharacterCount] = useState(0);

  const [addThought] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        // update thought array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });
        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] }
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, thoughts: [...me.thoughts, addThought] } }
      });
    }
  });

  // update state based on form input changes
  const handleChange = event => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      // setCharacterCount(event.target.value.length);
    }
  };

      // refresh page onclick function
      function refreshPage() {
        window.location.reload(false);
      };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      await addThought({
        variables: { thoughtText }
      });

      // clear form value
      setText('');
      // setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {/* <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p> */}
      <form
        className="flex-row justify-center justify-space-between-md align-stretch cursive"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Enter Family Name"
          value={thoughtText}
          className="form-input col-5 col-md-5 cursive"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3 cursive" type="submit">
          Add Family
        </button>
        <button className="btn col-12 col-md-3 cursive" type="submit" onClick={refreshPage}>
          Remove Family
        </button>
      </form>
    </div>
  );
};

export default ThoughtForm;
