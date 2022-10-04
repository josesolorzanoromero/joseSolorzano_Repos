const organizationsData = [
  { name: "Organización A", status: 1 },
  { name: "Organización B", status: 2 },
  { name: "Organización C", status: 3 },
  { name: "Organización D", status: 1 },
  { name: "Organización E", status: 2 },
];

const tribesData = [
  { id_organization: 101, name: "Tribu A", status: 1 },
  { id_organization: 101, name: "Tribu B", status: 2 },
  { id_organization: 102, name: "Tribu C", status: 3 },
  { id_organization: 102, name: "Tribu D", status: 1 },
  { id_organization: 103, name: "Tribu E", status: 2 },
  { id_organization: 103, name: "Tribu F", status: 3 },
];

const repositoryData = [
  {
    id_tribe: 101,
    name: "Repositorio A",
    create_time: new Date(),
    status: "1",
    state: "1",
  },
  {
    id_tribe: 101,
    name: "Repositorio B",
    create_time: new Date(),
    status: "2",
    state: "2",
  },
  {
    id_tribe: 102,
    name: "Repositorio C",
    create_time: new Date(),
    status: "3",
    state: "3",
  },
  {
    id_tribe: 102,
    name: "Repositorio D",
    create_time: new Date(),
    status: "1",
    state: "1",
  },
  {
    id_tribe: 103,
    name: "Repositorio E",
    create_time: new Date(),
    status: "2",
    state: "2",
  },
  {
    id_tribe: 103,
    name: "Repositorio F",
    create_time: new Date(),
    status: "3",
    state: "3",
  },
];

const metricsData = [
  {
    bugs: 10,
    vulnerabilities: 11,
    hotspot: 12,
    code_smells: 13,
  },
  {
    bugs: 10,
    vulnerabilities: 11,
    hotspot: 12,
    code_smells: 13,
  },
  {
    bugs: 10,
    vulnerabilities: 11,
    hotspot: 12,
    code_smells: 13,
  },
  {
    bugs: 10,
    vulnerabilities: 11,
    hotspot: 12,
    code_smells: 13,
  },
  {
    bugs: 10,
    vulnerabilities: 11,
    hotspot: 12,
    code_smells: 13,
  },
  {
    id_repository: 6,
    bugs: 10,
    vulnerabilities: 11,
    hotspot: 12,
    code_smells: 13,
  },
];
export { organizationsData, tribesData, repositoryData, metricsData };
