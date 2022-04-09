import React from "react";

export default function ModalConfirmation({ candidateSelect }) {
  return (
    <div
      className='modal fade'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Candidato selecionado
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <p className='text-success fs-3'>
              {candidateSelect.candidate ? (
                candidateSelect.candidate
              ) : (
                <span className='text-danger'>
                  Nenhum candidato selecionado!
                </span>
              )}
            </p>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
            >
              Voltar
            </button>
            <button type='submit' className='btn btn-primary'>
              Registrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
