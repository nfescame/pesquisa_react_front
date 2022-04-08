import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import List from "./List";
import api from "../api/api";
import axios from "axios";

export default function Home() {
  const [candidates, setCandidate] = useState([]);
  const [votes, setVotes] = useState([]);
  const [ip, setIpv4] = useState("");
  const [candidateSelect, setCandidateSelect] = useState({});

  useEffect(() => {
    const start = async () => {
      try {
        const response = await api.get("/");
        const responseVote = await api.get("/vote");

        setCandidate(response.data.candidatos);
        setVotes(responseVote.data);
      } catch (err) {
        console.error(err);
      }
    };

    start();
    getData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
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
      .post(`/vote`, candidateSelect)
      .then(() => {})
      .catch((err) => {
        console.error(err);
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
      <div className='d-flex justify-content-center pt-5 '>
        <h1 className='fw-bolder'>Eleições 2022</h1>
      </div>
      <List candidates={candidates} votes={votes} handleChange={handleChange} />
      <form className='py-5' onSubmit={(e) => handleSubmit(e)}>
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
