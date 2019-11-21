import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

class CommentList extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.comments}>
          <TableHeaderColumn isKey dataField='id'> ID </TableHeaderColumn>
          <TableHeaderColumn dataField='author'> Name </TableHeaderColumn>
          <TableHeaderColumn dataField='text'> Comment </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default CommentList