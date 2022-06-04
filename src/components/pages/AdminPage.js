import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { getPcs, savePc } from "../../StudentData/studentInfo";
import { getActions} from "../../StudentData/actions"
import Pagination from '../pagination';
import ListActions from '../ListAction'
import { paginate } from "../../utils/paginate";
import SearchBox from "../Searchbox";
import _ from "lodash"
import './AdminPage.css';

class Admin extends Component {
  state = {
    pcs: [],
    actions: [],
    pageSize: 4,
    searchQuery: "",
    selectedAction: null
  };

  componentDidMount() {
    this.setState({pcs: getPcs(), actions: getActions()});
  }
  

  handleDelete = pc => {
    const pcs = this.state.pcs.filter(m => m._id !== pc._id);
    toast.error("Deleted!")
    this.setState({ pcs });
  };

  handleUpdate = pc => {
    const pcs = this.state.pcs.filter(m => m._id !== pc._id);
    toast.info("Updated!")
    this.setState({ pcs });
  };

  handlePageChange = page =>{
      console.log(page);
  };

  handleSelectActions = action => {
    this.setState({selectedAction:action, searchQuery: "",currentPage: 1})
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedAction: null, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedAction,
      searchQuery,
      pcs: allpcs
    } = this.state;

    let filtered = allpcs;
    if (searchQuery)
      filtered = allpcs.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedAction && selectedAction._id)
      filtered = allpcs.filter(m => m.genre._id === selectedAction._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const pcs = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: pcs };
  };

  render() {
    const { length: count } = this.state.pcs;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>There are no any PCs in the database.</p>;

    return (

      <div className="row">
        <div className="col-2">
          <ListActions 
          items={this.state.actions}
          onItemSelect={this.handleSelectActions}
          textProperty="name"
          valueProperty="_id"
          />
        </div>
        <div className="col">
        <Link
            to="./studentform"
            className="btn btn-primary"
            style={{ marginBottom: 20,marginTop: 10}}
          >
            New Student
          </Link>
        <p style={{ color:'GrayText' }}>Showing {count} PCs in the database.</p>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        <table className="table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>ID</th>
              <th>Department</th>
              <th>PC Type</th>
              <th>Serila Number</th>
              <th>Actions</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.pcs.map(pc => (
              <tr key={pc._id}>
                <td>{pc.name}</td>
                <td>{pc.Id}</td>
                <td>{pc.dept}</td>
                <td>{pc.pc_type}</td>
                <td>{pc.serial}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(pc)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
                <td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination 
        itemCount = {count}
        pageSize = {pageSize}
        currentPage={currentPage}
        onPageChange = {this.handlePageChange}
        />
        </div>
      </div>
    );
  }
}

export default Admin;
