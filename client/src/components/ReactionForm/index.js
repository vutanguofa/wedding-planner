import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_REACTION } from '../../utils/mutations';

const ReactionForm = ({ thoughtId }) => {
  const [reactionBody, setBody] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addReaction, { error }] = useMutation(ADD_REACTION);

  // update state based on form input changes
  const handleChange = event => {
    if (event.target.value.length <= 280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
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
      await addReaction({
        variables: { reactionBody, thoughtId }
      });

      // clear form value
      setBody('');
      setCharacterCount(0);
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
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >

        <textarea
          placeholder="Enter Guest Name"
          value={reactionBody}
          className="form-input col-12 col-md-6"
          onChange={handleChange}
        ></textarea>

        <button className="btn col-12 col-md-3" type="submit" onClick={refreshPage}>
          Add Guest
        </button>
        <button className="btn col-12 col-md-3" type="submit" onClick={refreshPage}>
          Remove Guest
        </button>
      </form>
      <span class="m-5"></span>
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default ReactionForm;
