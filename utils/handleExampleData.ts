const organizationsData = [
  { name: "Organización A", status: 1 },
  { name: "Organización B", status: 2 },
  { name: "Organización C", status: 3 },
  { name: "Organización D", status: 1 },
  { name: "Organización E", status: 2 },
];

const tribesData = [
  { id_organization: 1, name: "Tribu A", status: 1 },
  { id_organization: 1, name: "Tribu B", status: 2 },
  { id_organization: 2, name: "Tribu C", status: 3 },
  { id_organization: 2, name: "Tribu D", status: 1 },
  { id_organization: 3, name: "Tribu E", status: 2 },
  { id_organization: 3, name: "Tribu F", status: 3 },
];

const repositoryData = [
  {
    id_tribe: 1,
    name: "Repositorio A",
    create_time: new Date(),
    status: "A",
    state: "E",
  },
  {
    id_tribe: 1,
    name: "Repositorio B",
    create_time: new Date(),
    status: "I",
    state: "D",
  },
  {
    id_tribe: 2,
    name: "Repositorio C",
    create_time: new Date(),
    status: "A",
    state: "A",
  },
  {
    id_tribe: 2,
    name: "Repositorio D",
    create_time: new Date(),
    status: "I",
    state: "E",
  },
  {
    id_tribe: 3,
    name: "Repositorio E",
    create_time: new Date(),
    status: "A",
    state: "D",
  },
  {
    id_tribe: 3,
    name: "Repositorio F",
    create_time: new Date(),
    status: "I",
    state: "A",
  },
];

const metricsData = [
  {
    coverage: 100,
    bugs: 10,
    vulnerabilities: 11,
    hotspot: 12,
    code_smells: 13,
  },
  {
    coverage: 90,
    bugs: 10,
    vulnerabilities: 11,
    hotspot: 12,
    code_smells: 13,
  },
  {
    coverage: 80,
    bugs: 10,
    vulnerabilities: 11,
    hotspot: 12,
    code_smells: 13,
  },
  {
    coverage: 70,
    bugs: 10,
    vulnerabilities: 11,
    hotspot: 12,
    code_smells: 13,
  },
  {
    coverage: 60,
    bugs: 10,
    vulnerabilities: 11,
    hotspot: 12,
    code_smells: 13,
  },
  {
    coverage: 50,
    bugs: 10,
    vulnerabilities: 11,
    hotspot: 12,
    code_smells: 13,
  },
];
export { organizationsData, tribesData, repositoryData, metricsData };
