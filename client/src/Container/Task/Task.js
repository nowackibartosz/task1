import React, { useEffect, useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import { useGetProductQuery } from "./product";

import List from "./List";
import { Container, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [currentPage, setCurrentPage] = useState(1);
  const [id, setId] = useState("");
  const params = { id: id, currentPage: currentPage };
  const { data, isLoading } = useGetProductQuery(params);

  const nextPage = () => {
    if (!(currentPage === data.total_pages)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const filterFn = (e) => {
    setId(e.target.value);
  };

  return (
    <div
      className="task-container screen-container fade-in"
      id={props.id || ""}
    >
      <ScreenHeading title={"Task"} subHeading={""} />

      <Container>
        {!isLoading ? (
          <List
            data={data}
            nextPage={nextPage}
            previousPage={previousPage}
            currentPage={currentPage}
            filterFn={filterFn}
            id={id}
          />
        ) : (
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        )}
      </Container>
    </div>
  );
}
