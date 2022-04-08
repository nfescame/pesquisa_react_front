import React from "react";
import CalcVote from "../Utils/CalcularVotos";

export default function List({ candidates, votes, handleChange }) {
  return (
    <ul className='p-0'>
      {candidates.map((candidate) => (
        <li
          key={candidate.id}
          className='list-group-item justify-content-between align-items-start'
        >
          <div className='form-check' onChange={(e) => handleChange(e)}>
            <input
              required
              className='form-check-input'
              type='radio'
              name='flexRadioDefault'
              id={candidate.id}
              value={candidate.name}
            ></input>
            <label className='form-check-label' htmlFor={candidate.id}>
              {candidate.name}
            </label>
          </div>

          <div className='progress w-100'>
            <div
              className='progress-bar'
              role='progressbar'
              style={{ width: `${CalcVote(candidate.name, votes)}%` }}
              aria-valuenow='0'
              aria-valuemin='0'
              aria-valuemax='100'
            >
              {CalcVote(candidate.name, votes)}%
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
