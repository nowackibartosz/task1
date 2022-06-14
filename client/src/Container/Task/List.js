import ListItem from "./ListItem";
import React from "react";
import { Form, Pagination, Table } from "react-bootstrap";

const List = ({ data, previousPage, nextPage, currentPage, id, filterFn }) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>
              ID
              <Form.Control
                type="number"
                style={{ width: "150px", padding: "5px" }}
                onChange={(e) => filterFn(e)}
              />
            </th>
            <th>Name</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {!id ? (
            data.data.map((item) => (
              <ListItem
                key={item.id}
                id={item.id}
                name={item.name}
                year={item.year}
                color={item.color}
              />
            ))
          ) : (
            <ListItem
              key={data.data.id}
              id={data.data.id}
              name={data.data.name}
              year={data.data.year}
              color={data.data.color}
            />
          )}
        </tbody>
      </Table>
      {!id ? (
        <Pagination>
          <Pagination.Prev onClick={() => previousPage()} />
          <Pagination.Item active>{currentPage}</Pagination.Item>
          <Pagination.Next onClick={() => nextPage()} />
        </Pagination>
      ) : null}
    </>
  );
};

export default List;
