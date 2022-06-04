import * as actions from "./actions";

const pcs = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Guled Ali Ibrahim",
    Id: "1336/10",
    dept: "Software",
    pc_type: "HP",
    serial: "5CD488BDJDK3O"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Fereja Ahmed Yimar",
    Id: "0509/09",
    dept: "IS",
    pc_type: "Toshiba",
    serial: "5CD488BDJDK3O"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Mariya Seid",
    Id: "1010/10",
    dept: "IT",
    pc_type: "Lennovo",
    serial: "5CD488BDJDK3O"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Solomon Siyum",
    Id: "0808/08",
    dept: "CS",
    pc_type: "Toshiba",
    serial: "5CD488BDJDK3O"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "Abubaker Sufiyan",
    Id: "8888/09",
    dept: "Civil",
    pc_type: "Deal",
    serial: "5CD488BDJDK3O"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191b",
    name: "Habtamu Kenaw",
    Id: "0909/09",
    dept: "Water",
    pc_type: "Apple",
    serial: "5FH988WER13DO"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181c",
    name: "Bawket Daraje",
    Id: "0900/09",
    dept: "Water",
    pc_type: "Apple",
    serial: "9MHK0OBDJWHSB"
  },
  {
    _id: "5b21ca3eeb7f6fabbd47181b",
    name: "Mubarak Ahmed",
    Id: "0901/09",
    dept: "Water",
    pc_type: "Apple",
    serial: "G3G9KMBDJDK3O"
  },
  {
    _id: "5b21ca3ddc6f6fbccd47181b",
    name: "Arabu Tadesse Yimar",
    Id: "0902/09",
    dept: "Mecha",
    pc_type: "Asser",
    serial: "9FGB788BDJDK3O"
  },
  {
    _id: "5b21ca3ddb7f6fbccd57181b",
    name: "Kalid Badlu",
    Id: "0902/09",
    dept: "Arch",
    pc_type: "Asser",
    serial: "7DE488BDJDK3O"
  }
];

export function getPcs() {
  return pcs;
}

export function getPc(id) {
  return pcs.find(m => m._id === id);
}

export function savePc(pc) {
  let pcInDb = pcs.find(m => m._id === pc._id) || {};
  pcInDb.name = pc.name;
  pcInDb.Id = pc.Id;
  pcInDb.dept = pc.dept;
  pcInDb.pc_type = pc.pc_type;
  pcInDb.serial = pc.serial;

  if (!pcInDb._id) {
    pcInDb._id = Date.now().toString();
    pcs.push(pcInDb);
  }

  return pcInDb;
}

export function deletePc(id) {
  let pcInDb = pcs.find(m => m._id === id);
  pcs.splice(pcs.indexOf(pcInDb), 1);
  return pcInDb;
}
