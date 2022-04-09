import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import List from "./List";
import api from "../api/api.js";
import axios from "axios";

export default function Home() {
  const [candidates, setCandidate] = useState([]);
  const [votes, setVotes] = useState([]);
  const [ip, setIpv4] = useState("");
  const [candidateSelect, setCandidateSelect] = useState({});

  useEffect(() => {
    getCandidate();
    getVote();
    getData();
  }, []);

  const getCandidate = async () => {
    api
      .get("/")
      .then(function (response) {
        console.log(response);
        setCandidate(response.data.candidatos);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getVote = async () => {
    api
      .get("/vote")
      .then(function (response) {
        console.log(response);
        setVotes(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(candidateSelect);
    let ipExists = false;

    votes.map((vote) => {
      if (vote.ip[0].IPv4 === ip.IPv4) {
        ipExists = true;
        return true;
      }
      return 0;
    });

    if (ipExists) {
      setCandidateSelect({
        candidate:
          "Já existe um voto registrado com esse IP! obrigado por votar!",
      });
      return "err";
    }

    api
      .post("/vote", candidateSelect)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    window.location.reload(false);
  }

  const handleChange = (e) => {
    setCandidateSelect({ candidate: e.target.value, ip: ip });
  };

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setIpv4(res.data);
  };

  return (
    <div className='container'>
      <div className='d-flex justify-content-center p-3 '>
        <h1 className='fw-bolder'>Eleições 2022</h1>
      </div>
      <List candidates={candidates} votes={votes} handleChange={handleChange} />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='d-flex justify-content-between m-4'>
          <p>Total de votos: {votes.length}</p>
          <button
            type='button'
            className='btn btn-primary w-25'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            Votar
          </button>
        </div>
        <Modal candidateSelect={candidateSelect} />
      </form>
    </div>
  );
}
