const allToys = (state) => {
    let out = [];
    state.toys.forEach( (toy) => {out[toy.id] = toy;});
    return out;
};

export default allToys;
