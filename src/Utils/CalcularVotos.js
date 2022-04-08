const calcVote = (name, dataVote) => {
  let n = 0;
  let nv = 0;

  dataVote.map((vote) => {
    nv += 1;
    if (name === vote.candidate) {
      n += 1;
    }

    return 1;
  });

  let value = (n * 100) / nv;
  return n === 0 ? n : value.toFixed(0);
};

export default calcVote;
