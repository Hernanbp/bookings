import { useState } from "react";
import Button from "../ui/Button";
import CabinTable from "../ui/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CreateCabinForm from "../ui/CreateCabinForm";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #e2e2e2;
  padding: 0.5rem;
  border-radius: 10px;
  width: 100%;
`;

const Cabins = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <div>
      <Row type="horizontal">
        <Heading>All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row type="vertical">
        <CabinTable />
        <Wrapper>
          <Button
            style={{
              width: "100%",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05)",
            }}
            onClick={() => setShowForm((show) => !show)}
          >
            Add new cabin
          </Button>
        </Wrapper>
        {showForm && <CreateCabinForm />}
      </Row>
    </div>
  );
};

export default Cabins;
