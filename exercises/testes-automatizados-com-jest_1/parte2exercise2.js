const techList = (arrayTechnologies, name) => {
  if (arrayTechnologies.length === 0) return 'Vazio!';

  const technologyList = arrayTechnologies
    .sort()
    .map((technology) => ({
    tech: technology,
    name,
    }));
  return technologyList;
};

module.exports = techList;// techList.js
